
let news_url_wt = news_urls['wsj']['tech'];

getNewsList_wt = async () => {
    let newsList = [];
    getNewsSrc(news_url_wt)
    .then(html => {
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#top-news").children().children().children("div:first").children("article");

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
                    entire_news_lists['wsj']['tech'].push($2('title').text());
                    console.log($2('title').text());
             });
        });
    });
}

getNewsList_wt();