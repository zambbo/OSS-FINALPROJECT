
module.exports = {
    HTML:function(url){
        return `<!DOCTYPE html>
     <html>
        <head>
            <!-- Required meta tags always come first-->
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

            <!-- include bootstrap css-->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-wEmeIV1mKuiNpC+IOBjI7aAzPcEZeedi5yW5f2yOq55WWLwNGmvvx4Um1vskeMj0" crossorigin="anonymous">

            <title>News Crawling WebPage template</title>
        </head>
        <body>
            <header class="jumbotron">
                <div class= "container">
                </div>
            </header>
            <div class="container">
                <div>
                    <ol>
                        <li>${url[0].url}</li>
                        <li>${url[1].url}</li>
                        <li>${url[2].url}</li>
                        <li>${url[3].url}</li>
                        <li>${url[4].url}</li>
                        <li>${url[5].url}</li>
                    </ol>
                </div>
            </div>
            <footer>
                <div class= "container">
                </div>
            </footer>
        </body>
     </html>`;}
}






