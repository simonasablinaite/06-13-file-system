import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const file = {};

/**
 * Sugeneruojamas absoliutus kelias iki nurodyto failo
 * @param {string} dir Realiatyvus kelias iki direktorijos, kur laikomi norimi failai, pvz.: `/data/users`
 * @param {string} fileName Norimo failo pavadinimas su jo pletiniu
 * @returns {string} Absoliutus kelias iki failo
 */

file.fullPath = (dir, fileName) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);                     // su dirname gaunu kelia, kur yra padetas file.js kietajame diske

    return path.join(__dirname, '../data', dir, fileName);         // grazinamas realus galutinis kelias
}

/**
 * Sukuriamas failas, jei tokio dar nera nurodytoje direktorijoje
 * @param {string} dir Kelias iki direktorijos, kur laikomi norimi failai 
 * @param {string} fileName Norimo failo pavadinimas + pletinys
 * @param {*} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; klaidos atveju - klaidos pranesimas
 import fs from "fs/promises";
 */

file.create = async (dir, fileName, content) => {
    let fileHandle = null;
    try {
        const filePath = file.fullPath(dir, fileName);

        // 1. sukurti faila ir ji atidaryti
        fileHandle = await fs.open(filePath, 'wx');

        // 2. irasyti turini i failo vidu
        await fs.writeFile(fileHandle, JSON.stringify(content));

        // 3. issaugoti ir uzdaryti
        return true
    } catch (error) {
        return false;
    } finally {
        if (fileHandle) {
            fileHandle.close();
        }
    }

}

/**
 * Perskaitomas failo turinys (tekstinis failas)
 * @param {string} dir Reliatyvus kelias iki direktorijos, kur laikomi norimi failai 
 * @param {string} fileName Norimo failo pavadinimas + pletinys
 * @returns {Promise<string|boolean} Sekmes atveju - failo turinys; Klaidos atveju - `false`
 */

file.read = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent;
    } catch (error) {
        return false
    }
}

/**
 * JSON failo turinio atnaujinimas .data folder'yje.
 * @param {string} dir Sub-folder'is esantis .data folderyje.
 * @param {string} fileName Kuriamo failo pavadinimas be failo pletinio. 
 * @param {object} content JavaScript objektas, pvz.: `{name: "Kava"}`.
 * @returns {boolean} Pozymis ar f-ja sekmingai atnaujina nurodyta faila.
 */
file.update = async (dir, fileName, content) => {
    let fileHandle = null;
    try {
        const filePath = file.fullPath(dir, fileName)
        fileHandle = await fs.open(filePath, 'r+');
        await fileHandle.truncate();
        await fs.writeFile(fileHandle, JSON.stringify(content));
        return true;
    } catch (error) {
        return false;
    } finally {
        if (fileHandle) {
            await fileHandle.close()
        }
    }
}

/**
 * JSON failo istrinimas .data foler'yje.
 * @param {string} dir Sub-folder'is, esantis .data folder'yje.
 * @param {string} fileName Trinamo failo pavadinimas.
 * @returns {boolean} Pozymis ar f-ja: sekmingai istrintas nurodytas fail'as.
 */

file.delete = async (dir, fileName) => {
    try {
        const filePath = file.fullPath(dir, fileName);
        await fs.unlink(filePath);
        return true;
    } catch (error) {
        return false;
    }

}

export { file }
