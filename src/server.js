import http, { METHODS } from 'node:http'
import { url } from 'node:inspector'
import { json } from './middlewares/json.js'

// - criar usuarios
// - listar usuarios
// - editar usuarios
// - remover usuarios

// HTTP Status Code

const users = []


const server = http.createServer( async (req,res) =>{

    const {method, url} = req

     await json(req, res)

    if(method === 'GET' && url === "/users"){
        return res
        .end(JSON.stringify(users))
    }

    if(method === 'POST' && url === "/users"){
        const { nome, email} = req.body
        users.push({
            id: 0,
            nome,
            email
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)