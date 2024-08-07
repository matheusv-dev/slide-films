import Image from 'next/image'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className=" flex h-[104px] items-center bg-[#FCFCFC] text-xs text-gray-400 backdrop-blur-sm">
      <nav className="relative mx-auto flex h-14 w-full max-w-screen-xl flex-row items-center md:sticky ">
        <Link href="/" prefetch={false} className="relative ml-4">
          <Image
            src={'/images/logos/logo.png'}
            alt="Logo"
            width={176}
            height={33}
            className="bg-transparent text-transparent"
            priority
          />
        </Link>
      </nav>
    </header>
  )
}
