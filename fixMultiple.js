const fs = require('fs');

// File path (backup file jisme replace karna hai)
const filePath = 'products_backup.json';

// Replace mapping (jitne words chahiye add kar le)
const replacements = {
  '"electrical":': '"electricalData":',
  '"construction":': '"constructionData":',
  '"general":': '"generalDataData":'
};

try {
  let data = fs.readFileSync(filePath, 'utf8');

  // Har key ko replace karo
  for (const [oldWord, newWord] of Object.entries(replacements)) {
    const regex = new RegExp(oldWord, 'g');
    data = data.replace(regex, newWord);
  }

  // Overwrite file
  fs.writeFileSync(filePath, data, 'utf8');

  console.log("✅ Done! All specified keys replaced in products_backup.json");
} catch (err) {
  console.error("❌ Error:", err);
}
