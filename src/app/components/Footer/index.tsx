import Image from 'next/image'
import Link from 'next/link'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

export const Footer = () => {
  return (
    <footer className="bg-[#726BEA] text-xs text-gray-400 backdrop-blur-sm">
      <div className="relative mx-auto flex h-[293px] w-full max-w-screen-xl flex-col items-start justify-center gap-10 p-4 sm:p-4 md:p-0">
        <Link href="/" prefetch={false} className="relative">
          <Image
            src={'/images/logos/logo-footer.png'}
            alt="Logo"
            width={176}
            height={33}
            className="bg-transparent text-transparent"
            priority
          />
        </Link>

        <hr className="w-full bg-white" />

        <nav className="flex w-full items-center justify-between text-white">
          <div className="flex gap-2">
            <a href="/">Terms & Conditions</a>
            <a href="/">Privacy Policy</a>
          </div>
          <div className="flex gap-2">
            <FaFacebook size={24} />
            <FaTwitter size={24} />
            <FaInstagram size={24} />
          </div>
        </nav>
      </div>
    </footer>
  )
}
