FROM golang:1.22.0-alpine3.19 as builder

WORKDIR /app

COPY . .

RUN go build -o /main main.go

FROM scratch 

WORKDIR /

COPY --from=builder /main /main

ENTRYPOINT [ "/main" ]