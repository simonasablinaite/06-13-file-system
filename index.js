import { file } from './lib/file.js';
import { skaitomTest } from './lib/test.js';

const testas = await skaitomTest()
console.log(testas);

// testas Nr.1: kai viskas nurodyta teisingai

const readStatus = await file.read('users', 'petras.json');
console.log('readStatus:', readStatus);

// test Nr.2: nurodytas neteisingas failo pavadinimas

// const readStatus2 = await file.read('users', 'maryte.json');
// console.log('readStatus:', readStatus2);

// const user = {
//    name: 'Petras',
//    age: 99,
//    isLoggedIn: false,
// }

// const status = file.create('users', 'petras.json', user);
// console.log('File status:', status);



