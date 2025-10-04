import { useState } from 'react'
import { useRouter } from 'next/router'

interface PaginationProps {
    totalItems: number
    itemsPerPage: number
    currentPage: number
    onPageChange?: (page: number) => void
    showFirstLast?: boolean
    showPrevNext?: boolean
    maxVisiblePages?: number
}

export default function Pagination({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
    showFirstLast = true,
    showPrevNext = true,
    maxVisiblePages = 5
}: PaginationProps) {
    const router = useRouter()
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    // Calculate visible page range
    const getVisiblePages = () => {
        const pages: (number | string)[] = []
        const halfVisible = Math.floor(maxVisiblePages / 2)

        let startPage = Math.max(1, currentPage - halfVisible)
        let endPage = Math.min(totalPages, currentPage + halfVisible)

        // Adjust if we're near the beginning or end
        if (endPage - startPage + 1 < maxVisiblePages) {
            if (startPage === 1) {
                endPage = Math.min(totalPages, startPage + maxVisiblePages - 1)
            } else {
                startPage = Math.max(1, endPage - maxVisiblePages + 1)
            }
        }

        // Add first page and ellipsis if needed
        if (startPage > 1) {
            pages.push(1)
            if (startPage > 2) {
                pages.push('...')
            }
        }

        // Add visible pages
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i)
        }

        // Add ellipsis and last page if needed
        if (endPage < totalPages) {
            if (endPage < totalPages - 1) {
                pages.push('...')
            }
            pages.push(totalPages)
        }

        return pages
    }

    const handlePageChange = (page: number) => {
        if (onPageChange) {
            onPageChange(page)
        } else {
            // SPA navigation using Next.js router
            router.push({
                pathname: router.pathname,
                query: { ...router.query, page }
            }, undefined, { shallow: true })
        }
    }

    if (totalPages <= 1) return null

    const visiblePages = getVisiblePages()

    return (
        <div className="flex justify-center items-center space-x-1 mt-8">
            <div className="join">
                {/* First Page */}
                {showFirstLast && currentPage > 1 && (
                    <button
                        className="join-item btn btn-sm"
                        onClick={() => handlePageChange(1)}
                        aria-label="Go to first page"
                    >
                        ««
                    </button>
                )}

                {/* Previous Page */}
                {showPrevNext && currentPage > 1 && (
                    <button
                        className="join-item btn btn-sm"
                        onClick={() => handlePageChange(currentPage - 1)}
                        aria-label="Go to previous page"
                    >
                        ‹
                    </button>
                )}

                {/* Page Numbers */}
                {visiblePages.map((page, index) => (
                    <button
                        key={index}
                        className={`join-item btn btn-sm ${page === currentPage ? 'btn-active' : ''
                            }`}
                        onClick={() => typeof page === 'number' && handlePageChange(page)}
                        disabled={page === '...'}
                        aria-label={`Go to page ${page}`}
                        aria-current={page === currentPage ? 'page' : undefined}
                    >
                        {page}
                    </button>
                ))}

                {/* Next Page */}
                {showPrevNext && currentPage < totalPages && (
                    <button
                        className="join-item btn btn-sm"
                        onClick={() => handlePageChange(currentPage + 1)}
                        aria-label="Go to next page"
                    >
                        ›
                    </button>
                )}

                {/* Last Page */}
                {showFirstLast && currentPage < totalPages && (
                    <button
                        className="join-item btn btn-sm"
                        onClick={() => handlePageChange(totalPages)}
                        aria-label="Go to last page"
                    >
                        »»
                    </button>
                )}
            </div>

            {/* Page Info */}
            <div className="ml-4 text-sm text-base-content/70">
                Page {currentPage} of {totalPages}
            </div>
        </div>
    )
}

// Hook for pagination logic
export function usePagination(totalItems: number, itemsPerPage: number, initialPage: number = 1) {
    const [currentPage, setCurrentPage] = useState(initialPage)
    const totalPages = Math.ceil(totalItems / itemsPerPage)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = Math.min(startIndex + itemsPerPage, totalItems)

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page)
        }
    }

    const nextPage = () => goToPage(currentPage + 1)
    const prevPage = () => goToPage(currentPage - 1)
    const firstPage = () => goToPage(1)
    const lastPage = () => goToPage(totalPages)

    return {
        currentPage,
        totalPages,
        startIndex,
        endIndex,
        goToPage,
        nextPage,
        prevPage,
        firstPage,
        lastPage,
        hasNext: currentPage < totalPages,
        hasPrev: currentPage > 1
    }
}
