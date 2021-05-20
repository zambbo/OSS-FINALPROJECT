

let news_url_wb = news_urls['wsj']['business'];


getNewsList_wb = async () => {
    let newsList = [];
    getNewsSrc(news_url_wb)
    .then(html => {
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#top-news").children("div").children().children("div:first").children();

        top_topic_list.each((idx,elem) => {
            let news_link = $(elem).children(".WSJTheme--headline--7VCzo7Ay").children().children("a").attr("href");
            if(!news_link)
                return;
            newsList[idx] = news_link;
        });
        
        newsList
        .forEach(elem => {
            getNewsSrc(elem)
            .then(
                html2 => {
                    const $2 = cheerio.load(html2.data);
                    entire_news_lists['wsj']['business'].push($2('title').text());
                    console.log($2('title').text());
             });
        });
    });
}

getNewsList_wb();