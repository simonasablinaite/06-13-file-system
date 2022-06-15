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

file.create = (dir, fileName, content) => {
    console.log('kuriamas failas...');

    console.log(dir);
    console.log(fileName);
    console.log(content);
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
        console.log(filePath);
        const fileContent = await fs.readFile(filePath, 'utf-8');
        return fileContent
    } catch (error) {
        return 'ivyko klaida...'
    }
}




file.update = () => {
    console.log('atnaujinamas failas...');
}

file.delete = () => {
    console.log('istrinamas failas...');
}


export { file }
