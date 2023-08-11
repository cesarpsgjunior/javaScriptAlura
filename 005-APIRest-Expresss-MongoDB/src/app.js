import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js";

db.on("error", console.log.bind(console, 'Erro de conexão'));
db.once("open", () => {
    console.log('Conexao realizada com sucesso');
})

//Uma vez instalada a biblioteca express, não utilizamos mais o método 
//HTTP direto e sim os recursos do express

const app = express();
app.use(express.json());
routes(app);

// const livros = [
//     {id: 1, "titulo": "Senhor dos aneis"},
//     {id: 2, "titulo": "O Hobbit"}
// ]
export default app;