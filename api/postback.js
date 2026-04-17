export default function handler(req, res) {
  const { user_id, amount, txid } = req.query;

  if (!user_id || !amount || !txid) {
    return res.status(400).send("Missing parameters");
  }

  console.log("User:", user_id);
  console.log("Amount:", amount);
  console.log("TXID:", txid);

  return res.status(200).send("OK");
}
