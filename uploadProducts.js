// uploadProducts.js
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");
const products = require("./products.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadProducts() {
  const BATCH_SIZE = 400; // Firestore max batch limit is 500
  let totalUploaded = 0;

  for (let i = 0; i < products.length; i += BATCH_SIZE) {
    const batch = db.batch();
    const chunk = products.slice(i, i + BATCH_SIZE);

    chunk.forEach((product) => {
      if (!product.id) {
        console.warn("⚠️ Skipping product without ID:", product);
        return;
      }

      const docRef = db.collection("products").doc(product.id);

      // ✅ merge:true → agar product already hai to update hoga
      // ✅ agar new product hai to create hoga
      batch.set(docRef, product, { merge: true });

      console.log("📦 Queued:", product.id);
    });

    try {
      await batch.commit();
      totalUploaded += chunk.length;
      console.log(`✅ Batch uploaded: ${chunk.length} (Total: ${totalUploaded})`);
    } catch (err) {
      console.error("❌ Error committing batch:", err);
    }
  }

  console.log("🎉 All products uploaded/updated successfully!");
}

uploadProducts().catch((err) => {
  console.error("❌ Fatal error uploading products:", err);
});
