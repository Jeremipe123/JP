import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/projects', label: 'Proyectos' }
]

const Navbar = () => {
  const router = useRouter()

  return (
    <nav className="bg-primary-100 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-around lg:justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="flex items-center justify-center md:justify-start">
            <Link href={ links[0].href }>
              <img src="/assets/img/logo.png" alt="JP Logo" className="w-12 h-12 ml-4 hidden md:block" />
            </Link>
          </div>
        </div>
        <div className="text-lg text-center flex flex-col md:flex-row md:space-x-10">
          { links.map(({ href, label }, index) => (
            <Link href={ href } key={ index }>
              <p className={ `hover:text-primary-300 ${router.pathname === href ? 'underline underline-offset-4 text-white mb-0.5' : ''}` }>
                { label }
              </p>
            </Link>
          )) }
        </div>
      </div>
    </nav>
  )
}

export default Navbar
