import {exec} from 'child_process';
import fs from "fs";

export type CutAudioResult = {errors: string[], success: string[]};

export const cutAudio = async (files: File[], ffmpegPath: string): Promise<CutAudioResult> => {
    const errors: string[] = [];
    const success: string[] = [];

    for (const file of files) {
        try {
            const fileResult = await cutFile(file, ffmpegPath);
            success.push(fileResult);
        }
        catch (e) {
            errors.push(e);
        }
    }

    return {errors, success};
}

const cutFile = (file: File, ffmpegPath: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        console.log(`************************************************************`);
        console.log(`******************** Begin ${file.name} ********************`);
        console.log(`************************************************************`);
        const outPath = file.path.replace(file.name, "output");
        const mp3FileName = file.name.replace(/\.mp3$|\.aiff$|\.wav$|\.wave$/, ".mp3");
        const mp3FilePath = `${outPath}/${mp3FileName}`;

        if (!fs.existsSync(outPath)) {
            fs.mkdirSync(outPath);
        }
        if (fs.existsSync(mp3FilePath)) {
            fs.unlinkSync(mp3FilePath);
        }

        const command = `${ffmpegPath} -ss 0.9864 -i "${file.path}" "${mp3FilePath}"`;
        console.log(command);
        exec(command, (error, stdout, stderr) => {
            if (error) {
                console.error(`error: ${error}`);
                reject(`${file.name}: ${error}`);
            }
            if (!fs.existsSync(mp3FilePath)) {
                const error = `${file.name} was not cut (unknown reason)`;
                console.error(error)
                reject(error);
            }
            console.log(`stderr: ${stderr}`);
            console.log(`stdout: ${stdout}`)
            console.log(`************************************************************`);
            console.log(`******************** End ${file.name} ********************`);
            console.log(`************************************************************`);
            resolve(mp3FileName);
        });
    });
}