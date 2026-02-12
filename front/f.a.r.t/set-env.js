const fs = require('fs');
const targetPath = '/src/app/environments/environment.prod.ts';
const colors = require('colors');
require('dotenv').config();

const envConfigFile = `export const environment = {
  production: true,
  pusherKey: '${process.env.PUSHER_KEY}',
};
`;

fs.writeFile(targetPath, envConfigFile, function (err) {
   if (err) {
       throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.prod.ts file generated correctly at ${targetPath} \n`));
   }
});
