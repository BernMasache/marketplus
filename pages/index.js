import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductsComponent from '@/components/pages/products'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col`}
    >
      <ProductsComponent/>
    </main>
  )
}
