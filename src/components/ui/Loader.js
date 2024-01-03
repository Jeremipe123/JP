import React, { useEffect } from 'react'

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const handleLoad = () => {
      // Simula un tiempo de carga del loader (puedes eliminar esto en producción)
      setTimeout(() => {
        setLoading(false)
      }, 3000)
    }

    document.addEventListener('DOMContentLoaded', handleLoad)

    return () => {
      document.removeEventListener('DOMContentLoaded', handleLoad)
    }
  }, [setLoading])

  return (
    <div className='fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black'>
      <div className="w-12 h-12 border-2 border-white rounded-full inline-block relative animate-rotation">
        <div className="absolute left-1/2 top-0 bg-primary-500 w-1.5 h-8 transform -translate-x-1/2"></div>
      </div>
    </div>
  )
}

export default Loader
