import { file } from './lib/file.js';
import { skaitomTest } from './lib/test.js';

const testas = await skaitomTest()
//console.log(testas);

// testas Nr.1: kai viskas nurodyta teisingai

// const readStatus = await file.read('users', 'petras.json');
//console.log('readStatus:', readStatus);

// test Nr.2: nurodytas neteisingas failo pavadinimas

// const readStatus2 = await file.read('users', 'maryte.json');
// console.log('readStatus:', readStatus2);

const userMaryte = {
   name: 'Maryte',
   age: 56,
   isMarried: false,
}

const createStatus = await file.create('asd', 'betkas.txt', userMaryte);
// console.log('File status:', createStatus);



