import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'

import Scrollspy from 'react-scrollspy'
import { FiMenu, FiX } from 'react-icons/fi'

import Socials from '@components/Basics/Socials'

import Logo from './Logo'

export default function Header() {
  const menu = {
    links: [
      {
        id: 'home',
        label: 'Accueil',
      },
      {
        id: 'about',
        label: 'A Propos',
      },
      {
        id: 'features',
        label: 'Features',
      },
    ],
  }

  const header = useRef()

  const items = menu
    ? menu.links.map((link) => {
        return link.id
      })
    : []

  const onScroll = (e) => {
    let value = window.scrollY
    if (value > 50) {
      header.current.classList.add('sticky')
    } else if (value < 1) {
      header.current.classList.remove('sticky')
    }
  }

  const openMenu = (bool) => {
    bool
      ? header.current.classList.add('menu-open')
      : header.current.classList.remove('menu-open')
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header ref={header} className={`Header backdrop:px-2`}>
      <div className="container px-4 gap-4 flex flex-wrap justify-between items-center mx-auto">
        <div className="header-left flex items-center gap-4">
          <Logo />
        </div>
        <div className="header-menu flex-grow lg:flex justify-between items-center">
          <nav className="menu">
            <Scrollspy
              className="mainmenu flex flex-col lg:flex-row gap-4"
              items={items}
              currentClassName="is-current"
              offset={-200}
            >
              {menu.links.map((link, key) => (
                <li key={key} className="p-2">
                  <Link href={`#${link.id}`}>
                    <a className="menu-item font-inter text-white font-medium hover:text-primary">
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </Scrollspy>
          </nav>
          <ul className="flex gap-4 h-fit">
            <Socials />
          </ul>
          <div className="close-menu d-block d-lg-none hidden">
            <span onClick={() => openMenu(false)} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
        <div className="header-right lg:hidden">
          <div className="humberger-menu cursor-pointer hover:text-primary">
            <span
              onClick={() => openMenu(true)}
              className="menutrigger text-white"
            >
              <FiMenu size={'2em'} />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
