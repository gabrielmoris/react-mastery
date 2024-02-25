const googleSearch = require("./script");

const dbMock = ["dogs.com", "cheesepuff.com", "disney.com", "dogpictures.com"];

describe("GogleSearch", () => {
  it("silly test", () => {
    expect("hello").toBe("hello");
  });
  it("is running", () => {
    expect(googleSearch("dog", dbMock)).toExist;
  });

  it("it is searching google", () => {
    expect(googleSearch("whatever", dbMock)).toEqual([]);
    expect(googleSearch("dog", dbMock)).toEqual(["dogs.com", "dogpictures.com"]);
  });

  it("works with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 3 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
