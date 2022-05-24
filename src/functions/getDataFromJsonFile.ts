import fs from "fs";
import path from "path";
import dotenv from "dotenv";
dotenv.config();
interface GetDataFromJsonFileDTO {
  filename: string;
}
export class GetDataFromJsonFile {
  constructor() {}
  execute({ filename }: GetDataFromJsonFileDTO): String | null {
    const filePath = path.join(__dirname, "..", "data", filename + ".json");
    //   if (!fs.existsSync(filePath)) throw new Error("Directory not found");
    const dataRead = fs.readFileSync(filePath).toString();
    return dataRead;
  }
}
