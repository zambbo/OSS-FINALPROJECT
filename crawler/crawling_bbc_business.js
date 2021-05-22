
// business corner
let news_url_bb = news_urls['bbc']['business'];



// 위의 news_url에 따라서 hot topic 뉴스들의 정보를 모두 모아 list에 저장.
async function getNewsList_bb(){
    let newsList = [];
    
    const html = await getNewsSrc(news_url_bb)
        const $ = cheerio.load(html.data);
        
        let topStories = $('#top-stories').parent().children("div").children().children(".advert-page").children().children();
        
        topStories.each((idx,elem) =>{
            const url_back = $(elem).find("div > div:nth-child(2) > div:first-child > a").attr("href");
            if(!url_back)
                return;
            newsList.push("https://www.bbc.com"+ url_back);
        })
        //각각의 news_list에 대해서 타이틀을 출력. (just exercise)
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