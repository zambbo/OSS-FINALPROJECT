
let news_url_ww = news_urls['wsj']['world'];



getNewsList_ww = async () => {
    let newsList = [];
    getNewsSrc(news_url_ww)
    .then(html => {
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#top-news").children("div").children("div:first").children();

        top_topic_list.each((idx,elem) => {
            let news_link = $(elem).children("article").children(".WSJTheme--headline--7VCzo7Ay").children().children("a").attr("href");
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
                    entire_news_lists['wsj']['world'].push($2('title').text());
                    console.log($2('title').text());
             });
        });
    });
}

getNewsList_ww();