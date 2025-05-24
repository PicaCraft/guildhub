
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-black via-indigo-900 to-black text-white p-4">
      <h1 className="text-6xl font-bold mb-4 animate-pulse">Futa Base</h1>
      <p className="text-xl mb-6 text-center">En gelişmiş ücretsiz kodlama platformu.</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-white text-black px-4 py-2 rounded-xl font-semibold hover:bg-gray-300 transition">Giriş Yap</Link>
        <Link href="/register" className="border border-white px-4 py-2 rounded-xl hover:bg-white hover:text-black transition">Kayıt Ol</Link>
      </div>
    </main>
  )
}
