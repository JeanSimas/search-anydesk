import fs from 'fs'
import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

export class GetDataFromJsonFile {
  execute(filename: string): string | null {
    const dataPath: string | undefined = process.env.JSONDATAPATH
    if(!fs.existsSync(dataPath)
    const dataRead = fs.readFileSync(path.join(process.env.JSONDATAPATH!, filename + '.json'))
    return `null`
  }
}