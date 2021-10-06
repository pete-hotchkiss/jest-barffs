import "jest-chain";

describe("TEST FOR: messages not barfing", (): void => {
  it("EXPECTS: to get  fail messages", ()=> {
    let calc = (a, b) => a + b;

    expect(calc(1,2)).toEqual(4);
  })
})
