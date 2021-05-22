
let news_url_wt = news_urls['wsj']['tech'];

getNewsList_wt = async () => {
    let newsList = [];
    const html = await getNewsSrc(news_url_wt)
    const $ = cheerio.load(html.data);
    let top_topic_list = $("#top-news").children().children().children("div:first").children("article");

    top_topic_list.each((idx,elem) => {
        let news_link = $(elem).children(".WSJTheme--headline--7VCzo7Ay").children().children("a").attr("href");
        if(!news_link)
            return;
        newsList[idx] = news_link;
    });
    
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