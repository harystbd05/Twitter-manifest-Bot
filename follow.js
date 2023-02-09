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

async function submitFollow (id_target) {
    const testFollss = await client.v2.follow(
        "<isi follow id>",
        `${id_target}`
    );
    return testFollss;
  }


  (async () => {

    console.log('=====> Bot Automation Manifest Twitter <=====');
    console.log('');
    console.log(`Created Code BY`, chalk.red(`HR Code ID`));
    console.log(chalk.yellow(`[+] Risk / Resiko ditanggung tiap masing-masing pengguna [+]`));
    console.log('');

    const question = readlineSync.question('how many accounts do you want follow ? ')
    const dataAccount = fs.readFileSync('dataAkunFollow.txt', 'utf-8').split('\n');
    
 //    console.log(dataAccount);
      for (let i = 0; i < parseInt(question); i++) {
         const targetUserID = dataAccount[i].split('|');
         // console.log(targetUserID);
          const targetUserIDnya = targetUserID[0].toString().trim();
         await delay(2500);
         console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Get Target Username ID`, chalk.red(':'), chalk.green(`${targetUserIDnya}`)));
         await delay(2500);


         try {
          await delay(2500);
          const userIDtargetnya = await submitFollow(targetUserIDnya)
          await delay(2500);
          console.log(`[ ${moment().format("HH:mm:ss")} ]`, chalk.yellow(`Success Follow Account ID`, chalk.red(':'), chalk.green(`${targetUserIDnya}`)));
        // console.log(userIDtargetnya);
          console.log('');

          
         } catch (error) {
          console.log(error);
         }
          
        }
    })

  ();


