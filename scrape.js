const request = require('request');
const cheerio = require('cheerio');

request('https://fakestoreapi.com', (error, response, html) => {
    if(!error && response.statusCode == 200) {
        const $  = cheerio.load(html);
        
        const siteHeading = $('.jumbotron');

        //console.log(siteHeading.html());
        //console.log(siteHeading.text());
        //const output = siteHeading
        // .children('h1')
        // .text();

        //  const output = siteHeading
        //   .children('h2')
        //   .parent()
        //   .text();

        $('#menu a').each((i, el) => {
            const item = $(el).text();
            const link = $(el).attr('href')

            console.log(link);
        });


    }
});