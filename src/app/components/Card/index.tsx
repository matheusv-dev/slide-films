'use client'

import { FaStar } from 'react-icons/fa'

export interface CardProps {
  title: string
  image_url: string
  rating: string
  year: string
  crew: string
}

export default function Card({
  title,
  image_url,
  rating,
  year,
  crew,
}: CardProps) {
  return (
    <div className="relative flex w-full flex-col gap-2 overflow-hidden rounded-2xl border bg-gray-100 p-4">
      <div className="h-[372px]">
        <img src={image_url} alt={title} className="h-[372px] rounded-2xl" />
      </div>
      <div className="flex flex-col gap-3 text-black">
        <h1 className="text-lg font-semibold">{title}</h1>
        <span className="text-sm font-medium">Ano de lançamento: {year}</span>
        <span className="text-sm font-normal">{crew}</span>
        <span className="flex w-fit items-center gap-2 rounded-2xl bg-[#726BEACC] px-4 py-2">
          <FaStar /> {rating}
        </span>
      </div>
    </div>
  )
}
