'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-white font-sans flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-[#0F172A] mb-4">Something went wrong!</h2>
        <p className="text-[#64748B] mb-6">{error.message}</p>
        <button
          onClick={reset}
          className="bg-[#0F172A] text-white px-4 py-2 rounded hover:bg-[#1E293B] transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
