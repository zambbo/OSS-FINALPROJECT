async function test_async(f1, f2, f3, f4, f5, f6, f7, f8, f9, f10) {
    return Promise.all([
        f1(),
        f2(),
        f3(),
        f4(),
        f5(),
        f6(),
        f7(),
        f8(),
        f9(),
        f10(),
    ]);
}
function storing(){
    return new Promise((resolve,reject) => {
        test_async(
            getNewsList_bb,
            getNewsList_bs,
            getNewsList_bt,
            getNewsList_bw,
            getNewsList_nb,
            getNewsList_nt,
            getNewsList_nw,
            getNewsList_wb,
            getNewsList_wt,
            getNewsList_ww
        ).then((x) => {
            x.forEach((elem, idx) => {
                switch (idx) {
                    case 0:
                        entire_news_lists["bbc"]["business"] = elem;
                        break;
                    case 1:
                        entire_news_lists["bbc"]["sci"] = elem;
                        break;
                    case 2:
                        entire_news_lists["bbc"]["tech"] = elem;
                        break;
                    case 3:
                        entire_news_lists["bbc"]["world"] = elem;
                        break;
                    case 4:
                        entire_news_lists["naver"]["business"] = elem;
                        break;
                    case 5:
                        entire_news_lists["naver"]["tech"] = elem;
                        break;
                    case 6:
                        entire_news_lists["naver"]["world"] = elem;
                        break;
                    case 7:
                        entire_news_lists["wsj"]["business"] = elem;
                        break;
                    case 8:
                        entire_news_lists["wsj"]["tech"] = elem;
                        break;
                    case 9:
                        entire_news_lists["wsj"]["world"] = elem;
                        break;
                    default:
                        console.log("wrong argument!");
                        break;
                }
            });
            console.log(entire_news_lists);
            resolve(entire_news_lists);
        });
    });
}