
import Link from 'next/link'
export default function Register() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-950 text-white">
      <form className="bg-gray-900 p-8 rounded-2xl shadow-xl w-full max-w-md space-y-4">
        <h2 className="text-2xl font-bold text-center">Kayıt Ol</h2>
        <input type="text" placeholder="Kullanıcı Adı" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
        <input type="email" placeholder="Email" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
        <input type="password" placeholder="Şifre" className="w-full p-3 rounded bg-gray-800 border border-gray-700" />
        <button type="submit" className="w-full bg-indigo-500 hover:bg-indigo-600 p-3 rounded text-white font-semibold">Kayıt Ol</button>
        <p className="text-center text-gray-400">Zaten hesabın var mı? <Link href="/login" className="text-indigo-400 hover:underline">Giriş Yap</Link></p>
      </form>
    </div>
  )
}
