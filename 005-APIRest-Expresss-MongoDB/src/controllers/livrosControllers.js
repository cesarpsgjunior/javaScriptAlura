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

    static listarLivroPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não encontrado`})
            } else {
                res.status(200).send(livros);
            }
        })
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

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso'})
            } else {
                exports.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Livro removido com sucesso`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default LivroController;
