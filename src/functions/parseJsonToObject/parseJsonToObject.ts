interface ParseJsonToObjectDTO {
  rawData: string;
}

export interface AnydeskDataItem {
  host: string;
  user: string;
  anydesk: string;
}
export class ParseJsonToObject {
  execute({ rawData }: ParseJsonToObjectDTO): Array<AnydeskDataItem> {
    const parsedData = JSON.parse(rawData);
    console.log(parsedData[0].user);
    return parsedData;
  }
}
