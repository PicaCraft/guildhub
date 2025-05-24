'use client'
import { motion } from 'framer-motion'
import { Code2, Bot, FolderKanban } from 'lucide-react'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-12 bg-gradient-to-br from-gray-900 to-black text-white">
      <motion.h1 initial={{ y: -50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-5xl font-bold mb-8">
        Deneme Botu | Geliştirici Portfolyo
      </motion.h1>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }} className="mb-12 text-lg text-center max-w-2xl">
        Merhaba! Ben gelişmiş Discord botları geliştiren bir yazılım geliştiricisiyim. Aşağıda bazı projelerimi ve yeteneklerimi inceleyebilirsiniz.
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-2xl shadow-xl p-6">
          <Code2 className="w-12 h-12 mb-4 text-indigo-400" />
          <h2 className="text-2xl font-semibold mb-2">Projeler</h2>
          <p>Geliştirdiğim çeşitli Discord bot projeleri ve diğer yazılım çalışmalarım.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-2xl shadow-xl p-6">
          <Bot className="w-12 h-12 mb-4 text-pink-400" />
          <h2 className="text-2xl font-semibold mb-2">Yetenekler</h2>
          <p>Node.js, Discord.js, Next.js, veritabanı yönetimi ve daha fazlası.</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-800 rounded-2xl shadow-xl p-6">
          <FolderKanban className="w-12 h-12 mb-4 text-green-400" />
          <h2 className="text-2xl font-semibold mb-2">İletişim</h2>
          <p>Benimle iletişime geçmek için sosyal medya bağlantılarım ve e-posta adresim.</p>
        </motion.div>
      </div>
    </main>
  )
}