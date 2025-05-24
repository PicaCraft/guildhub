
import { verify } from 'jsonwebtoken'
export default function handler(req, res) {
  const { token, projectOwner } = req.body
  try {
    const decoded = verify(token, "SECRET")
    if (decoded.user !== projectOwner) return res.status(403).json({ error: "Giriş gerekli" })
    res.status(200).json({ access: true })
  } catch {
    res.status(401).json({ error: "Token geçersiz" })
  }
}
