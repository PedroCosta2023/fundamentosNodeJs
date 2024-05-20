import http, { METHODS } from 'node:http'
import { url } from 'node:inspector'

// - criar usuarios
// - listar usuarios
// - editar usuarios
// - remover usuarios

// HTTP Status Code

const users = []


const server = http.createServer( async (req,res) =>{

    const {method, url} = req

    const buffers = []

    for await (const chunk of req) {
      buffers.push(chunk)
    }
  
    try{
        req.body = JSON.parse(Buffer.concat(buffers).toString())
    } catch{
        req.body = null
    }

    if(method === 'GET' && url === "/users"){
        return res
        .setHeader("Content-type", "application/json")
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