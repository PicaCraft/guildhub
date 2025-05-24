
import Head from 'next/head'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Head>
        <title>Futa Base v5</title>
      </Head>
      <motion.div
        className="text-center space-y-6 p-8 bg-gray-900 rounded-2xl shadow-xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-blue-400">Futa Base v5</h1>
        <p className="text-lg text-gray-300">En gelişmiş Glitch alternatifi platforma hoş geldin!</p>
      </motion.div>
    </div>
  )
}
