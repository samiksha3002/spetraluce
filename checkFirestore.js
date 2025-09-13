// checkFirestore.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function checkProducts() {
  try {
    const snapshot = await db.collection("products").get();
    console.log(`✅ Total products in Firestore: ${snapshot.size}`);

    // Sample: first 10 product IDs print kar do
    snapshot.docs.slice(0, 10).forEach((doc, index) => {
      console.log(`${index + 1}. ${doc.id}`);
    });

    // Aur last 5 product IDs bhi
    console.log("\n🔚 Last 5 products:");
    snapshot.docs.slice(-5).forEach((doc, index) => {
      console.log(`${snapshot.size - 5 + index + 1}. ${doc.id}`);
    });
  } catch (err) {
    console.error("❌ Error fetching products:", err);
  }
}

checkProducts();
