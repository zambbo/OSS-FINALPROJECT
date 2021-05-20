
// business corner
let news_url_bb = news_urls['bbc']['business'];



// 위의 news_url에 따라서 hot topic 뉴스들의 정보를 모두 모아 list에 저장.
async function getNewsList_bb(){
    let newsList = [];
    
    getNewsSrc(news_url_bb)
    .then(html =>{
        const $ = cheerio.load(html.data);
        
        let topStories = $('#top-stories').parent().children("div").children().children(".advert-page").children().children();
        
        topStories.each((idx,elem) =>{
            const url_back = $(elem).find("div > div:nth-child(2) > div:first-child > a").attr("href");
            if(!url_back)
                return;
            newsList[idx] = "https://www.bbc.com"+ url_back;
        })

        //각각의 news_list에 대해서 타이틀을 출력. (just exercise)
        let elec_node_text_div = document.querySelector("#elec_node_text");
        newsList
        .forEach((elem) => {
            getNewsSrc(elem)
            .then(html2 => {
                const $2 = cheerio.load(html2.data);
                entire_news_lists['bbc']['business'].push($2('title').text());
                console.log($2('title').text());
            });
        });
    });
}