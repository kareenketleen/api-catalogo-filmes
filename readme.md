## Catálogo de filmes

```
API Heroku : https://api-catalogo-filmes.herokuapp.com/
```

#
Para executar o projeto, utilizar o script start.
```
Na raíz: yarn start
```

### Recursos disponíveis para acesso via API:

- cadastro de filme
- lista com filmes cadastrados
- descrição de um único filme selecionado

### Métodos da API:

- GET: lista de filmes cadastrados - https://api-catalogo-filmes.herokuapp.com/movies
- GET: sinopse dos filmes cadastrados - https://api-catalogo-filmes.herokuapp.com/movies/id
- POST: cadastro de novas informações de um filme - https://api-catalogo-filmes.herokuapp.com

### Modelo de requisição (Multipart FormData):

**Obs: Compor requisição com imagem no formato File no cabeçalho da requisição HTTP.**

```
{
    "author": string,
    "title": string,
    "description": string,
    "image": string,
}
```

### Pessoas Desenvolvedoras do Projeto: Kareen K. R. S. Castro
