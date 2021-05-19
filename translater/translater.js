const axios_tran = require("axios");


const client_id = "C3HkKdyc_Jh_AGg2B9dJ";
const client_secret = "tVSPi6Wgm1";

let query = 'I like an apple';

let api_url = "https://openapi.naver.com/v1/papago/n2mt";

axios_tran({
    url: api_url,
    method:'post',
    headers:{'X-Naver-Client-Id':client_id,'X-Naver-Client-Secret':client_secret},

    data: {
        'source':'en',
        'target':'ko',
        'text':query
    }
})
.then(function (response){
    let translated_text = response.data.message.result.translatedText;
    console.log(translated_text);
    let elec_node_text_div = document.querySelector("#elec_node_text");
    elec_node_text_div.textContent += translated_text;
})
.catch(error => {console.log(error)});
