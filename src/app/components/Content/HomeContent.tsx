'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import { getData } from '@/app/api'

import Card from '../Card'
import Carousel from '../Carousel'
import { Pagination } from '../Pagination'

export default function HomeContent() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [slides, setSlides] = useState([])
  const [cards, setCards] = useState([])
  const [records, setRecords] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  async function fetchRecords() {
    try {
      const response = await getData(15, currentPage)
      setRecords(response)
      setSlides(response.data.slice(0, 3))
      setCards(response.data.slice(3))
    } catch (err) {
      console.error('error to get ', err)
    }
  }

  console.log(router)

  useEffect(() => {
    fetchRecords()

    const page = searchParams.get('page')
    if (page) {
      setCurrentPage(parseInt(page, 10))
    } else {
      router.push(`?page=1`, undefined)
    }
  }, [searchParams])

  const handlePageChange = page => {
    setCurrentPage(page)
  }

  return (
    <>
      {records.pagination && (
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
              currentPage={records.pagination.page}
              totalPages={records.pagination.maxPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      )}
    </>
  )
}
