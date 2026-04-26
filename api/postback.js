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

  // success response for Wannads
  return res.send("1");
}


