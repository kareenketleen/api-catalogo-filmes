## Catálogo de filmes

#

### Recursos disponíveis para acesso via API:

- cadastro de filme
- lista com filmes cadastrados
- descrição de um único filme selecionado

### Métodos da API:

- GET: lista de filmes cadastrados
- GET: sinopse dos filmes cadastrados
- POST: cadastro de novas informações de um filme

### Modelo de requisição (Multipart FormData):

```
{
    "author": string,
    "title": string,
    "description": string,
    "image": string,
}
```
