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


async function postRetweet (id_reetweet) {
    const retweet = client.v2.retweet(
        "<isi Twitter ID>",
        `${id_reetweet}`
        
    )
    return retweet
};

(async () => {

    console.log('=====> Bot Automation Manifest Twitter <=====');
    console.log('');
    console.log(`Created Code BY`, chalk.red(`HR Code ID`));
    console.log(chalk.yellow(`[+] Risk / Resiko ditanggung tiap masing-masing pengguna [+]`));
    console.log('');

    const pertanyaan = readlineSync.question('how many accounts do you want retweet ? ')
    const dataAccount = fs.readFileSync('dataAkunRetweet.txt', 'utf-8').split('\n');
    
 //    console.log(dataAccount);
      for (let i = 0; i < parseInt(pertanyaan); i++) {
         const targetUserID = dataAccount[i].split('|');
         // console.log(targetUserID);
          const targetUserIDRetweetnya = targetUserID[0].toString().trim();
          await delay(5000);
          console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Get Target Username ID`, chalk.red(':'), chalk.green(`${targetUserIDRetweetnya}`)));
        await delay(5000);

        try {
          await delay(5000);
          const userIDtargetnya = await postRetweet(targetUserIDRetweetnya)
          console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Success Retweet POST ID`, chalk.red(':'), chalk.green(`${targetUserIDRetweetnya}`)));
          console.log('');
      await delay(5000);
 
         } catch (error) {
          console.log(error);
            }
 
           
         }
})
()
        


