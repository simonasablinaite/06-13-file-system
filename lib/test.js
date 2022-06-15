import { file } from './file.js';

async function skaitomTest() {
   const readStatus = await file.read('users', 'petras.json');
   return readStatus;
}

export { skaitomTest };

