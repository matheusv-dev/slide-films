'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { getData } from '@/app/api'

import Card, { CardProps } from '../Card'
import Carousel from '../Carousel'
import { Pagination } from '../Pagination'

export default async function CardList() {
  const dados = await getData(15)

  const slides = dados.data.slice(0, 3)
  const cards: CardProps[] = dados.data.slice(3)

  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 10 // Defina o número total de páginas

  useEffect(() => {
    const { page } = router.query
    if (page) {
      setCurrentPage(parseInt(page, 10))
    } else {
      router.push(`?page=1`, undefined, { shallow: true })
    }
  }, [router.query.page])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <div className="  via-primary z-10  h-full bg-[#FCFCFC] bg-gradient-to-tr text-gray-300">
      <div className="relative z-10 flex h-full w-full flex-col ">
        <Carousel slides={slides} />

        <div className="relative mx-auto my-8 flex w-full max-w-screen-xl flex-col items-center">
          <div className="grid grid-cols-4 gap-8">
            {cards.map(e => (
              <Card
                key={e.title}
                crew={e.crew}
                image_url={e.image_url}
                rating={e.rating}
                title={e.title}
                year={e.year}
              />
            ))}
          </div>

          <Pagination
            currentPage={dados.pagination.page}
            totalPages={dados.pagination.maxPage}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  )
}
