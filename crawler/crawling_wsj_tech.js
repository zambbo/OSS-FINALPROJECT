
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
        let body_lst = [];
        const html2 = await getNewsSrc(elem)
        const $2 = cheerio.load(html2.data);
        const title = $2('.wsj-article-headline').text();
        let body_list = $2('#main').children('div').children('div:first').children('div').children('div').children('.wsj-snippet-body')
        body_list.each((idx,val) => body_lst.push($2(val).find("p").text()));
        let body = body_lst.join('');
        let link = elem;
        ret_news_lists.push({title,body,link});
    }
    return ret_news_lists;
}