const axios = require('axios');
const cheerio = require('cheerio');


news_url = "https://www.wsj.com/news/technology?mod=nav_top_section"; // Technology

async function getNewsSrc(){
    try{
        const response = await axios.get(news_url);
        return response;
    }catch(error){
        console.log(error);
    }
}

getNewsList = () => {
    let newsList = [];
    getNewsSrc()
    .then(html => {
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#top-news").children().children().children("div:first").children("article");

        top_topic_list.each((idx,elem) => {
            let news_link = $(elem).children(".WSJTheme--headline--7VCzo7Ay").children().children("a").attr("href");
            newsList[idx] = news_link;
        });
        
        console.log(newsList);
    });
}

getNewsList();