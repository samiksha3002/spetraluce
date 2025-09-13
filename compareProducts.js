const admin = require("firebase-admin");
const fs = require("fs");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function compareProducts() {
  try {
    // Load JSON products
    const products = JSON.parse(fs.readFileSync("./products.json", "utf-8"));
    const jsonIds = products.map(p => p.id);

    // Load Firestore products
    const snapshot = await db.collection("products").get();
    const firestoreIds = snapshot.docs.map(doc => doc.id);

    console.log(`🟢 JSON file products: ${jsonIds.length}`);
    console.log(`🟡 Firestore products: ${firestoreIds.length}`);

    // Find missing IDs
    const missing = jsonIds.filter(id => !firestoreIds.includes(id));
    console.log(`\n❌ Missing in Firestore (${missing.length}):`);
    console.log(missing.join(", "));
  } catch (err) {
    console.error("Error comparing products:", err);
  }
}

compareProducts();
