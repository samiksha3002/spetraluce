const fs = require("fs");

const products = JSON.parse(fs.readFileSync("products.json", "utf8"));

products.forEach((product, index) => {
  const pid = product.id || `index_${index}`;

  // ✅ Specs -> generalData
  if (product.specs) {
    product.generalData = product.specs;
    delete product.specs;
    console.log(`🔧 Fixed specs -> generalData for: ${pid}`);
  }

  // ✅ Construction -> constructionData
  if (product.construction) {
    product.constructionData = product.construction;
    delete product.construction;
    console.log(`🔧 Fixed construction -> constructionData for: ${pid}`);
  }

  // ✅ Electrical -> electricalData
  if (product.electrical) {
    product.electricalData = product.electrical;
    delete product.electrical;
    console.log(`🔧 Fixed electrical -> electricalData for: ${pid}`);
  }
});

fs.writeFileSync("products_fixed.json", JSON.stringify(products, null, 2));
console.log("🎉 All products fixed and saved to products_fixed.json");
