
export default function handler(req, res) {
  const auth = req.headers.authorization
  if (auth && auth.includes("Nz") && auth.includes("G")) {
    return res.status(403).json({ error: "Discord tokenları engellenmiştir." })
  }
  res.status(200).json({ ok: true })
}
