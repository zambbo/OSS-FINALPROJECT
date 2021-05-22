
let news_url_ww = news_urls['wsj']['world'];



getNewsList_ww = async () => {
    let newsList = [];
    const html = await getNewsSrc(news_url_ww)
        const $ = cheerio.load(html.data);
        let top_topic_list = $("#top-news").children("div").children("div:first").children();

        top_topic_list.each((idx,elem) => {
            let news_link = $(elem).children("article").children(".WSJTheme--headline--7VCzo7Ay").children().children("a").attr("href");
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