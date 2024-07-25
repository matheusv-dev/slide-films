import { Footer } from '../components/Footer'
import { Header } from '../components/Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="grid h-full min-h-screen grid-rows-[auto_1fr_auto]">
      <Header />
      <main className="relative  flex h-full w-full  flex-col gap-16  ">
        {children}
      </main>
      <Footer />
    </div>
  )
}
