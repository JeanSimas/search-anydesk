import fs from 'fs'
import path from 'path'
interface ParseJsonToObjectDTO {
  filename: string;
}

export interface AnydeskDataItem {
  host: string;
  user: string;
  anydesk: string;
}
export class ParseJsonToObject {
  execute({ filename }: ParseJsonToObjectDTO): Array<AnydeskDataItem> {
    const filePath = path.join(__dirname, '..', '..', 'data', filename + '.json')

    const rawData = fs.readFileSync(filePath).toString()
    const parsedData: AnydeskDataItem[] = JSON.parse(rawData);
    console.log(parsedData[0].user);
    return parsedData;
  }
}
