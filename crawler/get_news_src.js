// news_url을 받아서 해당 url에 request를 보내고 response를 받아오는 함수
async function getNewsSrc(_news_url){
    try{
        const response = await axios.get(_news_url);
        return response;   //Promise
    } catch(error){
        console.error(error);
    }
}
