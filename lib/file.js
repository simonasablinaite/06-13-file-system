import fs from "fs";

console.log(fs);

const file = {};

/**
 * Sukuriamas failas, jei tokio dar nera nurodytoje direktorijoje
 * @param {string} dir Kelias iki direktorijos, kur laikomi norimi failai 
 * @param {string} fileName Norimo failo pavadinimas + pletinys
 * @param {*} content Objektas (pvz.: {...}), kuri norime irasyti i kuriama faila
 * @returns {boolean|string} Sekmes atveju - `true`; klaidos atveju - klaidos pranesimas
 */

file.create = (dir, fileName, content) => {
    console.log('kuriamas failas...');
    console.log(dir);
    console.log(fileName);
    console.log(content);
}

file.read = () => {
    console.log('skaitomas failas...');
}

file.update = () => {
    console.log('atnaujinamas failas...');
}

file.delete = () => {
    console.log('istrinamas failas...');
}

export { file };
