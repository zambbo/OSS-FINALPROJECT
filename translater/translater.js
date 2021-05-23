
const client_id = "C3HkKdyc_Jh_AGg2B9dJ";
const client_secret = "tVSPi6Wgm1";

let api_url = "https://openapi.naver.com/v1/papago/n2mt";

async function translateEn2Ko(article_str){
        try{

            axios({
                url: api_url,
                method:'post',
                headers:{'X-Naver-Client-Id':client_id,'X-Naver-Client-Secret':client_secret},
            
                data: {
                    'source':'en',
                    'target':'ko',
                    'text':article_str
                }
            })
            .then(function (response){
                console.log(response.data.message.result.translatedText);
                return response['data']['message']['result']['translatedText'];
            })
            .catch(error => {console.log(error)});            
        }catch(error){
            console.log(error);
        }
}

function translate(article_str){
    setTimeout(translateEn2Ko(article_str),1000);
}