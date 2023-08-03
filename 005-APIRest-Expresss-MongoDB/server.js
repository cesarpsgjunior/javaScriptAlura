const http = require("http");
const port = 3000;


const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na pagina de livros',
    '/autores': 'Listagem de autores',
    '/help': 'Ajuda do projeto',
    '/editora': 'Nome da editora'
}

const server = http.createServer((req, res) => {        //Cria servidor
    res.writeHead(200, {'Content-Type': 'text/plain'}); //Tipo de devolutiva ao chamar servidor = cabeçalho
    res.end(rotas[req.url]);                           //Texto a ser enviado ao servidor
});

server.listen(port, () => {     //Local onde será escutada a resposta
    console.log(`Servidor escutando em http://localhost:${port}`)
});