const fetch = require ('node-fetch');
const fs = require ('fs');
const readlineSync = require ('readline-sync');
const delay = require ('delay');
const {TwitterApi} = require ('twitter-api-v2');
const { TIMEOUT } = require('dns');
const { setTimeout } = require('timers/promises');
const chalk = require ('chalk');
const moment = require ('moment');


    const client = new TwitterApi ({
        appKey: "",
        appSecret: "",
        accessToken: "",
        accessSecret: ""
     })

async function postLike (id_like) {
    const like = client.v2.like ("<isi post ID like>",
    `${id_like}`
    )
    return like;
}


(async () => {

    console.log('=====> Bot Automation Manifest Twitter <=====');
    console.log('');
    console.log(`Created Code BY`, chalk.red(`HR Code ID`));
    console.log(chalk.yellow(`[+] Risk / Resiko ditanggung tiap masing-masing pengguna [+]`));
    console.log('');

    const question = readlineSync.question('how many accounts do you want like ? ')
    const dataAccountLike = fs.readFileSync('dataAkunLike.txt', 'utf-8').split('\n');
    
 //    console.log(dataAccount);
      for (let i = 0; i < parseInt(question); i++) {
         const targetUserID = dataAccountLike[i].split('|');
        //    console.log(targetUserID);
         
           const targetUserIDnya = targetUserID[0].toString().trim();
        await delay(2500);
        console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Get Target Username ID`, chalk.red(':'), chalk.green(`${targetUserIDnya}`)));
        await delay(2500);

        try {
         await delay(2500);
         const userIDtargetnya = await postLike(targetUserIDnya)
         console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Success Like POST ID`, chalk.red(':'), chalk.green(`${targetUserIDnya}`)));
         console.log('');
         await delay(2500);

        } catch (error) {
         console.log(error);
        }

          
      }

})
();

