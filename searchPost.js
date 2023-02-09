const fetch = require ('node-fetch');
const fs = require ('fs');
const readlineSync = require ('readline-sync');
const delay = require ('delay');
const {TwitterApi} = require ('twitter-api-v2');
const { TIMEOUT } = require('dns');
const { setTimeout } = require('timers/promises');
const chalk = require ('chalk');
const moment = require ('moment');
const { url } = require('inspector');
const { type } = require('os');


// async function searchPost() {
//     client.v2.search(
//        let = {
//         query: '#tester',
//         max_results: '100'
//         },
//         let
//     )
// }
//     return let

    const client = new TwitterApi ({
        appKey: "",
        appSecret: "",
        accessToken: "",
        accessSecret: ""
     })

async function search () {
    const cekData = client.v2.search (
        'Sol giveaway',
       1
    )
    console.log(cekData);
    return cekData
    
}

    


(async () => {


    console.log('=====> Bot Automation Manifest Twitter <=====');
    console.log('');
    console.log(`Created Code BY`, chalk.red(`HR Code ID`));
    console.log(chalk.yellow(`[+] Risk / Resiko ditanggung tiap masing-masing pengguna [+]`));
    console.log('');
 
 let berulang;
 while(!berulang) {
	 
await delay(2000);
const getSearch = await search();
await delay(2000);

const hasilSearchText = getSearch.data.data[0].text;
// console.log(hasilSearchText);
const hasilSearch = getSearch.data;
// console.log(hasilSearch);
const hasilSearchID = getSearch.data.meta.newest_id;
//  console.log(hasilSearchID);
 const hasil = JSON.stringify(hasilSearch).split(',');
 const hasilSplit1 = hasil[0]
 const hasilSplit2 = hasil[1]
 const hasilSplit3 = hasil[2]

 const hasilData = `${hasilSplit1}\n${hasilSplit2}\n${hasilSplit3}\n\n`
 const hasilDataID = `${hasilSearchID}|\n`
 const hasilDataText = `${hasilSearchText}\n\n============================================\n\n`

 if (hasilData) {
     const pindah = fs.appendFileSync('resultGetSearchnya.txt', hasilData)
 }

 if (hasilDataID) {
    const pindahDataID = fs.appendFileSync('resultGetSearchIDnya.txt', hasilDataID)
 }

 if (hasilDataText) {
    const pindahDataText = fs.appendFileSync('resultGetSearchText.txt', hasilDataText)
 } else {
    
 }

}

})();