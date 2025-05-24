
import Link from 'next/link'
export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-950 text-white">
      <form className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Giriş Yap</h2>
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
        <input type="password" placeholder="Şifre" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white font-semibold">Giriş</button>
        <p className="text-center text-gray-400">Hesabın yok mu? <Link href="/register" className="text-indigo-400 hover:underline">Kayıt Ol</Link></p>
      </form>
    </div>
  )
}
