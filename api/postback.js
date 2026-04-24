export default function handler(req, res) {
  const user_id =
    req.query.user_id ||
    req.query.userId ||
    req.query.aff_sub;

  const amount =
    req.query.amount ||
    req.query.reward ||
    req.query.payout;

  const txid =
    req.query.txid ||
    req.query.transaction_id ||
    req.query.click_id;

  if (!user_id || !amount || !txid) {
    return res.send("0");
  }

  // redirect to dashboard with coins
  res.redirect(`https://earnflow123.rf.gd/dashboard.html?coins=${amount}`);
}


