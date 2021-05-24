
let news_url_nb = news_urls['naver']['business'];


getNewsList_nb = async () => {
    let newsList = [];
    const html = await getNewsSrc(news_url_nb)
    const $ = cheerio.load(html.data);
    let top_topic_list = $("#main_content").children("div").children("div._persist").children("div:first").find(".cluster_group > .cluster_body > ul > li");

    top_topic_list.each((idx,elem) => {
        let news_link = $(elem).children(".cluster_text").children("a").attr("href");
        if(!news_link)
            return;
        newsList.push(news_link);
    });
    
    // 10개까지만 짜르기.
    newsList = newsList.slice(0,10);

    let ret_news_lists = [];
    for ( const elem of newsList){
        let body_lst = [];
        const html2 = await getNewsSrc(elem)
        const $2 = cheerio.load(html2.data);
        const title = $2('#articleTitle').text();
        let body_list = $2('#articleBodyContents')
        body_list.each((idx,val) => body_lst.push($2(val).text()));
        let body = body_lst.join('');
        let link = elem;
        ret_news_lists.push({title,body,link});
    }
    return ret_news_lists;
}