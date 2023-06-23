'use client' // Error components must be Client Components
 
import { ServerError } from '@components/errors'
import { useEffect } from 'react'
 
export default function Error({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.log(error)
  }, [error])
 
  return (
    <ServerError reload={reset}/>
  )
}