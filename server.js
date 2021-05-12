const axios = require('axios');
const cheerio = require('cheerio');
const express = require('express');

const app = express();

app.get("/",(req,res) => {
    
    let url = "https://www.bbc.com/news/science_and_environment";

    axios.get(url).then(html =>{
        let news_list = [];
        const $ = cheerio.load(html.data);

        let topStories = $('#top-stories').parent().children("div").children().children(".advert-page").find(".gel-layout__item");
        
        topStories.each((idx,elem) =>{
            news_list[idx] = {url : 'https://www.bbc.com' + $(elem).find("div > div:nth-child(2) > div:first-child > a").attr("href")};
        })
        
        return res.json(news_list);
    });
})

app.listen(3000);

