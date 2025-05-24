
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black text-white p-6 flex flex-col items-center justify-center">
      <motion.h1 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-6xl font-extrabold text-center bg-gradient-to-r from-indigo-400 via-pink-500 to-purple-500 bg-clip-text text-transparent"
      >
        Futa Base
      </motion.h1>
      <p className="text-xl mt-4 mb-6 text-center text-gray-300 max-w-xl">
        Kodlama, terminal ve proje yönetimi için gelişmiş, modern ve Glitch alternatifi platform.
      </p>
      <div className="flex gap-4">
        <Link href="/login" className="bg-white text-black px-6 py-2 rounded-xl hover:bg-gray-200 font-medium transition">Giriş Yap</Link>
        <Link href="/register" className="border border-white px-6 py-2 rounded-xl hover:bg-white hover:text-black font-medium transition">Kayıt Ol</Link>
      </div>
    </main>
  )
}
