// i14 bootstrap fixture
function add(a, b) {
  return a + b;
}

// i133: payment amount helper (organization payments contract)
function amountMinor(amount) {
  return Math.round(amount * 100);
}
module.exports = { add, amountMinor };
