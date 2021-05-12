// console.log('run...')
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.write('welcome')
        res.end()
        return
    } else if (req.url == '/about') {
        res.write('about')
        res.end()
        return
    }
    res.statusCode = 404
    res.write('404 not found')
    res.end()
})

server.listen(5000, () => console.log('server is run'))
