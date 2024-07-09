const express = require('express');
const app = express();

app.use(express.json());

let livros = [];

app.get('/', (req, res) => {
    res.send('Bem vindo à API de livros!');
});


// Create
app.post('/livros', (req, res) => {
    const livro = req.body;
    livros.push(livro);
    res.status(201).send(livro);
});

// Read all
app.get('/livros', (req, res) => {
    res.send(livros);
});

// Read one
app.get(`/livros/:id`, (req, res) => {
    const id = req.params.id;
    const livro = livros.find((livro) => livro.id === id);
    res.send(livro);
});

//Update
app.put('/livros/:id', (req, res) => {
    const id = req.params.id;
    const novoLivro = req.body;
    let livroExistente = livros.find((livro) => livro.id == id);
    livroExistente.titulo = novoLivro.titulo;
    res.send(livroExistente);
});

// Delete
app.delete('/livros/:id', (req, res) => {
    const id = req.params.id;
    livros = livros.filter((livro) => livro.id !== id);
    res.status(204).send({mensagem: 'Livro excluído com sucesso!'});
});

app.listen(3000 , () => console.log('API iniciada na porta 3000'));