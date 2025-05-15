const axios = require('axios'); // importa a biblioteca axios
const cheerio = require('cheerio'); // importa a biblioteca cheerio
const fs  = require('fs'); // importa a biblioteca do Node.js para manipulação de arquivos dos sistemas de arquivos
const writeStream = fs.createWriteStream('articles.csv'); // cria um stream de escrita para o arquivo articles.csv

// escreve o cabeçalho no arquivo CSV
writeStream.write('Title, Link \n');

axios('https://professorguanabara.github.io/projeto-android/') // faz uma requisição para a URL com axios
    .then(response => { // espera a resposta
        if (response.status === 200) { // verifica se a resposta foi bem sucedida
            const $ = cheerio.load(response.data); // carrega o HTML da resposta com cheerio
            
            $('article').each((i, el) => {
                const title = $(el)
                    .find('h2') // seleciona todos os h2 dentro do menu
                    .text() // pega o texto de cada h2
                    .replace(/\s\s+/g, ' ') // remove espaços em branco extras;

                const link = $(el) 
                    .find('a') // seleciona todos os links dentro do menu
                    .attr('href'); // pega o atributo href de cada link

                // const date = $(el)
                //     .find('')
                //     .text()
                //     .replace(/,/, ' '); // substitui a vírgula por espaço

                // escreve o cabeçalho no arquivo CSV(Exel)(sem formatação)
                writeStream.write(`${title}, ${link} \n`);
            });

            console.log('Scraping Done...'); // imprime uma mensagem de sucesso
            
        }
    })
    .catch(error => { // trata erros
        console.error('Error fetching the URL:', error); // imprime um erro caso ocorra
    });