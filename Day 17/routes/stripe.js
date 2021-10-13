const router = require("express").Router();
const path = require("path");

const stripe = require("stripe")("secretkeyFromStripeDashboardGoesHere");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/html/payment.html"));
});

router.post("/payment", async (req, res) => {
  try {
    // Creating a Checkout Session from body params.
    const session = await stripe.checkout.sessions.create({
      //line_items is predetermined in stripe. Mandatory to write everytime
      line_items: [
        {
          amount: req.body.price * 100,
          name: "Shopping",
          currency: "usd",
          quantity: 1,
        },
      ],
      payment_method_types: ["card"],
      success_url: `${req.headers.origin}?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}?cancelled=true`,
    });
    res.redirect(303, session.url);
  } catch (error) {
    res.status(500).send({ message: error });
  }
});

module.exports = router;
