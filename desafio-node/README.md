# Desafio Docker Full Cycle 3.0 - Node/Nginx

A proposta do desafio é que quando um usuário acesse o nginx através do `localhost:8080`, o mesmo fará uma chamada para a aplicação node.js. Essa aplicação por sua vez adicionará um registro no banco de dados mysql, cadastrando um nome na tabela people.

O retorno da aplicação node.js para o nginx deverá ser:

**Full Cycle Rocks!** e logo abaixo uma lista de nomes cadastrada no banco de dados.

### Execução

Para executar realize o comando:

```
docker-compose up -d
```

e acesse a aplicação pelo navegador através de `localhost:8080`
