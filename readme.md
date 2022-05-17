## Catálogo de filmes

```
API Heroku : https://api-catalogo-filmes.herokuapp.com/
```

#

Para executar o projeto localmente:

```
Arquivo: /src/controllers/MovieController.ts ->
    Modificar a linha 5 (const upload_url):
    const upload_url = "https://localhost:3333/uploads";

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
