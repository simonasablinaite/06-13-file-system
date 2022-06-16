import { file } from './lib/file.js';


// IIFE - ifis
(async () => {


   // testas Nr.1: kai viskas nurodyta teisingai

   const readStatus = await file.read('users', 'petras.json');
   console.log('Read:', readStatus);

   const user = {
      name: 'Petras',
      age: 99,
      isMarried: false,
   }

   const createStatus = await file.create('users', 'petras.json', user);
   console.log('Create:', createStatus);

   const readStatus2 = await file.read('users', 'petras.json');
   console.log('Read:', readStatus2);

   user.isMarried = true;
   const updateStatus = await file.update('users', 'petras.json', user);
   console.log('Update:', updateStatus);

   const readStatus3 = await file.read('users', 'petras.json');
   console.log('Read:', readStatus3);

   const deleteStatus = await file.delete('users', 'petras.json');
   console.log('Delete:', deleteStatus);

   const readStatus4 = await file.read('users', 'petras.json');
   console.log('Read:', readStatus4);

})();


// test Nr.2: nurodytas neteisingas failo pavadinimas

   // const readStatus2 = await file.read('users', 'petras.json');
   // console.log('readStatus:', readStatus2);
