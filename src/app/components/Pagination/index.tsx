import { useRouter } from 'next/navigation'
import React from 'react'

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const router = useRouter()

  const getPageNumbers = () => {
    const maxPages = 5
    const halfMaxPages = Math.floor(maxPages / 2)
    let startPage = Math.max(1, currentPage - halfMaxPages)
    let endPage = Math.min(totalPages, currentPage + halfMaxPages)

    if (currentPage <= halfMaxPages) {
      endPage = Math.min(totalPages, maxPages)
    } else if (currentPage + halfMaxPages >= totalPages) {
      startPage = Math.max(1, totalPages - maxPages + 1)
    }

    const pageNumbers = []
    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i)
    }
    return pageNumbers
  }

  const pageNumbers = getPageNumbers()

  const handlePageChange = page => {
    if (page >= 1 && page <= totalPages) {
      router.push(`?page=${page}`, undefined)
      onPageChange(page) // Atualiza o estado no componente pai
    }
  }

  return (
    <nav aria-label="Page navigation" className="mt-8 flex justify-center">
      <ul className="inline-flex items-center -space-x-px">
        <li>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            disabled={currentPage === 1}
          >
            Anterior
          </button>
        </li>
        {pageNumbers.map(number => (
          <li key={number}>
            <button
              onClick={() => handlePageChange(number)}
              className={`border px-3 py-2 leading-tight ${currentPage === number ? 'border-blue-300 bg-blue-50 text-blue-600' : 'border-gray-300 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'}`}
            >
              {number}
            </button>
          </li>
        ))}
        <li>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            disabled={currentPage === totalPages}
          >
            Próximo
          </button>
        </li>
      </ul>
    </nav>
  )
}
