import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        try {
                const TodosLivros = await livros.find();
                res.status(200).json(livros)
            } catch (err) {
                res.status(500).json(err);
        }
            
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha a cadastrar libro`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        });
    }
}


export default LivroController;
