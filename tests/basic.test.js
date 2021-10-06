describe("TEST FOR: messages not barfing", () => {
  it("EXPECTS: to get  fail messages", ()=> {
    let calc = (a, b) => a + b;

    expect(calc(1,2)).toEqual(4);
  })
})
