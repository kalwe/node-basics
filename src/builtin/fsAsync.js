const { readFile, writeFile } = require('fs')

console.log('start log task')
readFile('./src/builtin/content/sub/logs.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }

    const logs = result
    readFile('./src/builtin/content/sub/result.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }

        const logsResult = result
        writeFile(
            './src/builtin/content/sub/resultAsync.txt',
            `${logs}\n${logsResult}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done this log task')
            }
        )
    })
})
console.log('free to new task')
