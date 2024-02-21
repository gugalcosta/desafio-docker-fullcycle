# Desafio Docker Full Cycle 3.0 - Golang

A proposta do desafio é criar uma imagem de "Hello World" em Golang, onde ao ser executada é exibida a mensagem **"Full Cycle Rocks!!"**

A imagem deve ser publicada no Dockerhub e conter menos de 2MB.

### Pull da imagem

Para realizar o pull da imagem execute o comando:

```
docker pull gustavolcosta/golang-fullcycle
```

### Build da imagem

Para realizar o build, acesse a pasta onde se encontra o Dockerfile e execute:

```
docker build -t gustavolcosta/golang-fullcycle .
```

### Execução

Para executar realize o comando:

```
docker run -rm gustavolcosta/golang-fullcycle
```
