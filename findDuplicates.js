// findDuplicates.js
const fs = require("fs");

const products = require("./products.json");

const seen = new Map();
const duplicates = [];

products.forEach((p, index) => {
  if (seen.has(p.id)) {
    duplicates.push({
      id: p.id,
      firstIndex: seen.get(p.id),
      duplicateIndex: index,
    });
  } else {
    seen.set(p.id, index);
  }
});

console.log(`🔍 Total products: ${products.length}`);
console.log(`📌 Duplicate IDs found: ${duplicates.length}`);

if (duplicates.length > 0) {
  console.log("👉 Duplicates detail:");
  duplicates.forEach((d) => {
    console.log(
      `ID: ${d.id} | First at index ${d.firstIndex} | Duplicate at index ${d.duplicateIndex}`
    );
  });

  // Save to file
  fs.writeFileSync("duplicates.json", JSON.stringify(duplicates, null, 2));
  console.log("\n✅ Saved duplicate details to duplicates.json");
} else {
  console.log("🎉 No duplicates found!");
}
