

let news_url_nt = news_urls['naver']['tech'];


getNewsList_nt = async () => {
    let newsList = [];
    getNewsSrc(news_url_nt)
    .then(html => {
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#main_content").children("div").children("div._persist").children("div:first").find(".cluster_group > .cluster_body > ul > li");

        top_topic_list.each((idx,elem) => {
            let news_link = $(elem).children(".cluster_text").children("a").attr("href");
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
                    entire_news_lists['naver']['tech'].push($2('title').text());
                    //console.log($2('title').text());
             });
        });
    });
}

getNewsList_nt();