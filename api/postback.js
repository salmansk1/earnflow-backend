export default function handler(req, res) {
  console.log("FULL QUERY:", req.query);

  const user_id =
    req.query.user_id ||
    req.query.userId ||
    req.query.uid;

  const amount =
    req.query.amount ||
    req.query.reward ||
    req.query.payout;

  const txid =
    req.query.txid ||
    req.query.transaction_id ||
    req.query.txId;

  if (!user_id || !amount || !txid) {
    return res.send("0");
  }

  return res.send("1");
}
