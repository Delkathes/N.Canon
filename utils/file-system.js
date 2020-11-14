import fs from 'fs'

export const fileToJson = target => JSON.parse(fs.readFileSync(target, 'utf8'))

export const dirToJson = target =>
    fs
        .readdirSync(target)
        .map(filename => JSON.parse(fs.readFileSync(target + '/' + filename, 'utf8')))
