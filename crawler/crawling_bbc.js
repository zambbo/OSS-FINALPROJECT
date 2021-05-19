const axios = require('axios');
const cheerio = require('cheerio');

// science_and_environment corner
news_url = "https://www.bbc.com/news/science_and_environment";

// news_url을 받아서 해당 url에 request를 보내고 response를 받아오는 함수
async function getNewsSrc(_news_url){
    try{
        const response = await axios.get(_news_url);
        return response;   
    } catch(error){
        console.error(error);
    }
}

// 위의 news_url에 따라서 hot topic 뉴스들의 정보를 모두 모아 list에 저장.
getNewsList = () => {
    let newsList = [];
    
    getNewsSrc(news_url)
    .then(html =>{
        const $ = cheerio.load(html.data);
        
        let topStories = $('#top-stories').parent().children("div").children().children(".advert-page").children().children();
        
        topStories.each((idx,elem) =>{
            newsList[idx] = "https://www.bbc.com"+$(elem).find("div > div:nth-child(2) > div:first-child > a").attr("href");
        })

        //각각의 news_list에 대해서 타이틀을 출력. (just exercise)
        let elec_node_text_div = document.querySelector("#elec_node_text");
        newsList.forEach((elem) => {
            getNewsSrc(elem)
            .then(html2 => {
                const $2 = cheerio.load(html2.data);
                elec_node_text_div.textContent += $2('title').text();
                console.log($2('title').text());
            });
        });
        //elec_node_text_div.textContent = newsList.toString();
    });
}

getNewsList();