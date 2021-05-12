const { readFileSync, writeFileSync, readFile } = require('fs')

const file = readFileSync('./src/builtin/content/sub/logs.txt', 'utf-8')
console.log(file)

readFile('./src/builtin/content/sub/logs.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
})

writeFileSync(
    './src/builtin/content/sub/result.txt',
    `result from logs`,
    { flag: 'a'}
)
