const fs = require("fs");

// Read original file
const products = JSON.parse(fs.readFileSync("products.json", "utf8"));

// Map function to fix each product
const fixedProducts = products.map((p) => {
  const newProduct = { ...p };

  // 1. specs -> generalData
  if (p.specs) {
    newProduct.generalData = {
      "Item No": p.id || "/",
      "Power": p.specs.power || "/",
      "LED Type": p.specs.ledType || "/",
      "Luminous flux": p.specs.luminousFlux || "/",
      "CCT": p.specs.cct || "/",
      "CRI": p.specs.cri || "/",
      "Beam angle": p.specs.beamAngle || "/",
      "Dimension (mm)": p.specs.dimension || "/",
      "Cut out (mm)": p.specs.cutOut || "/",
      "Life Time": p.specs.lifeTime || "/",
      "Adjustable": p.specs.adjustable || "/",
      "Working Temp": p.specs.workingTemp || "/",
      "Surge protection": p.specs.surgeProtection || "/"
    };
    delete newProduct.specs;
  }

  // 2. construction -> constructionData
  if (p.construction) {
    newProduct.constructionData = {
      "IP rating": p.construction.ipRating || "/",
      "Finishing": p.construction.finishing || "/",
      "Housing": p.construction.housing || "/",
      "Diffuser": p.construction.diffuser || "/"
    };
    delete newProduct.construction;
  }

  // 3. electrical -> electricalData
  if (p.electrical) {
    newProduct.electricalData = {
      "Input voltage": p.electrical.inputVoltage || "/",
      "Insulation Class": p.electrical.insulationClass || "/",
      "Cable": p.electrical.cable || "/",
      "Driver": p.electrical.driver || "/"
    };
    delete newProduct.electrical;
  }

  // 4. accessories always array
  if (p.accessories && !Array.isArray(p.accessories)) {
    newProduct.accessories = [p.accessories];
  }
  if (!p.accessories) {
    newProduct.accessories = [];
  }

  return newProduct;
});

// Save to new file
fs.writeFileSync("products_fixed.json", JSON.stringify(fixedProducts, null, 2));
console.log("✅ All products converted and saved to products_fixed.json");
