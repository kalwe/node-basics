const { readFileSync, writeFileSync } = require('fs')

const file = readFileSync('./builtin/content/sub/logs.txt', 'utf-8')
console.log(file)

writeFileSync(
    './builtin/content/sub/result.txt',
    `result from logs`
)
