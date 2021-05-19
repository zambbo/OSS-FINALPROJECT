const axios = require('axios');
const cheerio = require('cheerio');


news_url = "https://www.bbc.com/news/science_and_environment";

async function getNewsSrc(){
    try{
        const response = await axios.get(news_url);
        return response;   
    } catch(error){
        console.error(error);
    }
}

getNewsList = () => {
    let newsList = [];
    getNewsSrc()
    .then(html =>{
        const $ = cheerio.load(html.data);
        
        let topStories = $('#top-stories').parent().children("div").children().children(".advert-page").find(".gel-layout__item");
        
        topStories.each((idx,elem) =>{
            newsList[idx] = $(elem).find("div > div:nth-child(2) > div:first-child > a").attr("href");
        })
        console.log(newsList);
        let elec_node_text_div = document.querySelector("#elec_node_text");
        elec_node_text_div.textContent = newsList.toString();
    });
}

getNewsList();