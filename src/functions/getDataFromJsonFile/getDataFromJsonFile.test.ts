import { GetDataFromJsonFile } from "./getDataFromJsonFile";
const getDataFromJsonFile = new GetDataFromJsonFile();

describe("Get Data From Json File", () => {
  it("should return a object with correct data", () => {
    expect(getDataFromJsonFile.execute({ filename: "data-test" })).toBe(`[
  {
    "user": "Jean Simas",
    "host": "TI03",
    "anydesk": "54031223"
  },
  {
    "user": "Valmir",
    "host": "TI02",
    "anydesk": "40312231"
  },
  {
    "user": "Fabricio Teixeira",
    "host": "TI01",
    "anydesk": "121231431"
  }
]`);
  });
});

