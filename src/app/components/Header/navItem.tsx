'use client'
import { usePathname, useRouter } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children: ReactNode
  link: string
}

export const NavItem = ({ children, link }: Props) => {
  const router = useRouter()
  const pathname = usePathname()

  const active = pathname === link

  const activeClass =
    'rounded-3xl bg-purple-700  font-medium leading-[150%] text-white'

  const className = active ? activeClass : ''

  function onClick() {
    router.push(link)
  }
  return (
    <button
      className={`${className} cursor-pointer rounded-3xl px-2 py-1 transition-all duration-300 ease-in-out hover:bg-purple-600 hover:text-white  hover:opacity-90 sm:px-3`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
