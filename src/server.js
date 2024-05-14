import http, { METHODS } from 'node:http'
import { url } from 'node:inspector'

// - criar usuarios
// - listar usuarios
// - editar usuarios
// - remover usuarios

// HTTP Status Code

const users = []


const server = http.createServer((req,res) =>{

    const {method, url} = req

    if(method === 'GET' && url === "/users"){
        return res
        .setHeader("Content-type", "application/json")
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === "/users"){

        users.push({
            id: 0,
            nome: 'Pedro',
            email: 'pedro@mail.com'
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)