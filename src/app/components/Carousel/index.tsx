'use client'

import { useState } from 'react'
import { FaStar } from 'react-icons/fa'
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from 'react-icons/md'

interface SlideProps {
  title: string
  image_url: string
  rating: string
  year: string
  crew: string
}

interface CarouselProps {
  slides: SlideProps[]
}

export default function Carousel({ slides }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const previousSlide = () => {
    setCurrent(prev => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent(prev => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full overflow-hidden md:h-[577.2px]">
      <div
        className="flex w-full transition-transform duration-300 ease-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((s, i) => (
          <div key={i} className="relative w-full shrink-0">
            <div className="absolute left-[50%] top-[50%] z-10 flex w-full translate-x-[-50%] translate-y-[-50%] flex-col gap-4 p-4 text-white md:left-[216px] md:top-[375px] md:w-[559px] md:translate-x-0 md:translate-y-0">
              <h5 className="text-base font-bold">Destaque do Mês</h5>
              <h1 className="text-4xl font-bold">{s.title}</h1>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-2 rounded-2xl bg-[#726BEACC] px-4 py-2">
                  <FaStar /> {s.rating}
                </span>
                <h3 className="text-center text-base font-semibold">
                  {s.crew}
                </h3>
              </div>
            </div>
            <img
              src={s.image_url}
              alt={s.title}
              className="w-full brightness-50"
            />
          </div>
        ))}
      </div>

      <div className="absolute top-0 flex h-full w-full items-center justify-between px-10 text-3xl text-white">
        <button onClick={previousSlide}>
          <MdOutlineKeyboardArrowLeft />
        </button>
        <button onClick={nextSlide}>
          <MdOutlineKeyboardArrowRight />
        </button>
      </div>

      <div className="absolute bottom-0 flex w-full justify-center gap-3 py-4">
        {slides.map((_, i) => (
          <div
            onClick={() => setCurrent(i)}
            key={'circle' + i}
            className={`h-5 w-5 cursor-pointer rounded-full ${i === current ? 'bg-white' : 'bg-gray-500'
              }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
