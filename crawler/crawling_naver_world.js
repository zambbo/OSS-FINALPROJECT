

let news_url_nw = news_urls['naver']['world'];


getNewsList_nw = async () => {
    let newsList = [];
    const html = await getNewsSrc(news_url_nw)
    const $ = cheerio.load(html.data);
    let top_topic_list = $("#main_content").children("div").children("div._persist").children("div:first").find(".cluster_group > .cluster_body > ul > li");

    top_topic_list.each((idx,elem) => {
        let news_link = $(elem).children(".cluster_text").children("a").attr("href");
        if(!news_link)
            return;
        newsList[idx] = news_link;
    });
    
    // 10개까지만 짜르기.
    newsList = newsList.slice(0,10);

    let ret_news_lists = [];
    for ( const elem of newsList){
        const html2 = await getNewsSrc(elem)
        const $2 = cheerio.load(html2.data);
        let title = $2('title').text();
        ret_news_lists.push(title);
        //entire_news_lists['bbc']['business'].push($2('title').text());
        //console.log(title);
    }
    return ret_news_lists;
}