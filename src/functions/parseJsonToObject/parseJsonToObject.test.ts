import { ParseJsonToObject, AnydeskDataItem } from "./parseJsonToObject";

const parseJsonToObject = new ParseJsonToObject();
describe("", () => {
  it("should transform a json string  into a object", () => {
    const parsedData = parseJsonToObject.execute({
      rawData: `[
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
]`,
    });
    expect(parsedData).toHaveLength(3);
    const anydeskData: AnydeskDataItem = parsedData[0];
    expect(anydeskData).toBe({
      user: "Jean Simas",
      host: "TI03",
      anydesk: "54031223",
    });
  });
});
