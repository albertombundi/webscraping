const axios = require('axios'); // importa a biblioteca axios
const cheerio = require('cheerio'); // importa a biblioteca cheerio 

axios('https://professorguanabara.github.io/projeto-android/') // faz uma requisição para a URL com axios
    .then(response => { // espera a resposta
        if (response.status === 200) { // verifica se a resposta foi bem sucedida
            const $ = cheerio.load(response.data); // carrega o HTML da resposta com cheerio
            
            const siteHeading = $('h1');  // seleciona o elemento h1

            //console.log(siteHeading.html()); // imprime o HTML do elemento h1
            //console.log(siteHeading.text());  // imprime o texto do elemento h1
            
            //const output = siteHeading  //
            // .children('h1') // seleciona o elemento h1
            // .text(); // imprime o texto do elemento h1

            //  const output = siteHeading
            //   .children('h2')
            //   .parent()
            //   .text();


            $('article a').each((_, el) => { // seleciona todos os links dentro do menu 
                const link = $(el).attr('href');  // pega o atributo href de cada link
                console.log(link); // imprime o link
            });
        }
    })
    .catch(error => { // trata erros
        console.error('Error fetching the URL:', error); // imprime um erro caso ocorra
    });