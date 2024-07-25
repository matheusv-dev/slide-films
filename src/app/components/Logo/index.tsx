import Image from 'next/image'

export const Logo = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 top-0 flex w-fit flex-row items-center">
      <Image
        src={'/images/logos/logo.png'}
        alt="Logo"
        width={30}
        height={30}
        style={{ width: 'auto', height: 'auto' }}
        className="bg-transparent text-transparent"
        priority
      />
    </div>
  )
}
