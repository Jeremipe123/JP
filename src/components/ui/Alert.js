import React, { useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

const [isModalOpen, setModalOpen] = useState(false)

const openModal = () => {
  setModalOpen(true)
}

const closeModal = () => {
  setModalOpen(false)
}

const Alert = () => {
  return (
    <section className="bg-primary-500 h-[86vh] py-12 text-white text-center relative">
      <button
        data-modal-target="popup-modal"
        data-modal-toggle="popup-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
        onClick={ openModal }
      >
        Toggle modal
      </button>

      { isModalOpen && (
        <div
          id="popup-modal"
          tabIndex="-1"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center h-screen"
        >
          <div className="relative p-10 w-full max-w-md">
            <div className="border border-white border-2 relative shadow bg-primary-500">
              <button
                type="button"
                className="absolute top-3 end-2.5 bg-transparent hover:bg-gray-600 hover:text-white text-2xl w-8 h-8 ms-auto inline-flex justify-center items-center"
                onClick={ closeModal }
              >
                <AiOutlineClose />
                <span className="sr-only">Cerrar</span>
              </button>

              <div className="p-4 md:p-5 text-center">
                <br />
                <h3 className="mb-5 text-lg font-normal text-white">
                  Se ha enviado un correo satisfactoriamente a{/* { text } */ }
                </h3>
              </div>
            </div>
          </div>
        </div>
      )
      }
    </section >
  )
}

export default Alert
