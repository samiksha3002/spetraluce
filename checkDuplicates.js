const fs = require("fs");

const products = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
const seen = new Set();
const duplicates = [];

for (const p of products) {
  if (seen.has(p.id)) {
    duplicates.push(p.id);
  }
  seen.add(p.id);
}

console.log(`Total products: ${products.length}`);
console.log(`Unique IDs: ${seen.size}`);
console.log(`Duplicate IDs found: ${duplicates.length}`);
if (duplicates.length) {
  console.log("👉 Duplicate IDs:", duplicates.join(", "));
}
