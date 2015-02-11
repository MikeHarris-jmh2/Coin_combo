describe("coinCounter", function() {
  it("returns one penny", function() {
    expect(coinCounter(1)).to.eql(["1 penny"]);
  });

  it("returns two pennies", function() {
    expect(coinCounter(2)).to.eql(["2 pennies"]);
  });

  it("returns one nickel and one penny", function (){
    expect(coinCounter(6)).to.eql(["1 nickel", "1 penny"]);
  });

  it("returns one dime, one nickel, and one penny", function() {
    expect(coinCounter(16)).to.eql(["1 dime", "1 nickel", "1 penny"]);
  });

  it("returns two dimes and one penny", function() {
    expect(coinCounter(21)).to.eql(["2 dimes", "1 penny"])
  });

  it("returns one quarter and one dime", function(){
    expect(coinCounter(35)).to.eql(["1 quarter", "1 dime"])
  });

  it("returns two quarters, one dime, one nickel, and  two pennies", function(){
    expect(coinCounter(67)).to.eql(["2 quarters", "1 dime", "1 nickel", "2 pennies"]);
  });

  it("returns three quarters, two dimes, and  four pennies", function(){
    expect(coinCounter(99)).to.eql(["3 quarters", "2 dimes", "4 pennies"]);
  });
});
