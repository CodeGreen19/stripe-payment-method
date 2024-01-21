const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const stripe = require("stripe")(
  "sk_test_51OaVZZGzBXo3SlmBfVE4lb5YSfBhGvmcgb4k9XFkGe9zYahZ9armvAxesImE3XehLVUDcFxHdqnglfs0WvVLBvSh00dCRw5xdz"
);

app.use(cors());

// checkout the payment
app.post("/api/checkout", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "USD",
          product_data: { name: "first product" },
          unit_amount: 12500,
        },
        quantity: 1,
      },
    ],

    mode: "payment",
    success_url: `https://stripe-payment-method.onrender.com/api/success`,
    cancel_url: `https://stripe-payment-method.onrender.com/fail`,
  });

  res.json({ url: session.url });
});
// payment ------------------

app.get("/api/success", (req, res) => {
  res.redirect("https://stripe-payment-method.onrender.com/");
});
// ..............deployment...................
const __dirname1 = path.resolve();

app.use(express.static(path.join(__dirname1, "/frontend/dist")));

app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))
);
// ..............deployment...................

app.listen(5000, () => {
  console.log("server listening on port 5000");
});
