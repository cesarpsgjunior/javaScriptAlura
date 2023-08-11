import autores from "../models/autor.js";

class autorController {

    static listarAutores = async (req, res) => {
        try {
                const TodosLivros = await autores.find();
                res.status(200).json(autores)
            } catch (err) {
                res.status(500).json(err);
        }
            
    }

    static listarAutorPorId = (req, res) => {
        const id = req.params.id

        livros.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - Id não encontrado`})
            } else {
                res.status(200).send(autores);
            }
        })
    }

    static cadastrarAutor = (req, res) => {
        let livro = new autor(req.body);

        livro.save((err) => {
            if(err) {
                res.status(500).send({message: `${err.message} - falha a cadastrar autor`})
            } else {
                res.status(201).send(autores.toJSON());
            }
        });
    }

    static atualizarAutor = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso'})
            } else {
                exports.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: `Autor removido com sucesso`})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}


export default autorController;
