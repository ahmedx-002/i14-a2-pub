// i102 CSW writer-battery fixture (tenant B own PR)
// harmless app: greeting helper with a trivially unsafe-looking concat (no real vulnerability)
function add(a, b) {
  return a + b;
}

function greet(name) {
  return "Hello, " + name + "!";
}

function shoutName(name) {
  // deliberately naive: evaluates nothing, just uppercases
  return greet(name).toUpperCase();
}

module.exports = { add, greet, shoutName };
