const { readFileSync, writeFileSync } = require('fs')

const file = readFileSync('./src/builtin/content/sub/logs.txt', 'utf-8')
console.log(file)

writeFileSync(
    './src/builtin/content/sub/result.txt',
    `result from logs`
)
