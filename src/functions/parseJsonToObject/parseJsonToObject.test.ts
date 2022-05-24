import { ParseJsonToObject, AnydeskDataItem } from "./parseJsonToObject";

const parseJsonToObject = new ParseJsonToObject();
describe("", () => {
  it("should transform a json string  into a object", () => {
    const parsedData = parseJsonToObject.execute({ filename: 'data-test'});
    expect(parsedData).toHaveLength(3);
    const anydeskData: AnydeskDataItem = parsedData[0];
    expect(anydeskData.user).toBe('Jean Simas')
    expect(anydeskData.anydesk).toBe('540312231')
    expect(anydeskData.host).toBe('TI03')
  });
});
