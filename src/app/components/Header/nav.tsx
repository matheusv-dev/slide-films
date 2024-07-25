import Link from 'next/link'

import { Logo } from '../Logo'

export const Nav = () => {
  return (
    <nav className="relative mx-auto flex h-14 w-full max-w-screen-xl flex-row items-center md:sticky ">
      <Link href="/" prefetch={false} className="relative ml-4 h-10 w-10">
        <Logo />
      </Link>
    </nav>
  )
}
