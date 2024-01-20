const dotenv = require('dotenv');
dotenv.config({ path: '../.env.local' });
dotenv.config({ path: '../.env' });
// Rest of your application code
export * from './classes/RAPIDAPI_API';