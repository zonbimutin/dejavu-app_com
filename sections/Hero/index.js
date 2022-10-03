import Image from 'next/image'
import { FaApple } from 'react-icons/fa'
import { DiAndroid } from 'react-icons/di'
import { motion } from 'framer-motion'
import HeroMedia from '@components/Media/HeroMedia'

export default function Hero() {
  return (
    <div id="home" className="Hero min-h-screen bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid lg:grid-cols-12 items-center gap-4 relative">
          <div className="lg:col-span-6 h-fit">
            <div className="Text flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-3xl text-white uppercase lg:text-7xl leading-relaxed lg:leading-snug">
                Quand la fiction devient réalité
              </h2>
              <h1 className="text-sm uppercase font-inter font-meduim text-primary">
                L’application mobile des lieux de tournage de films, séries et
                fictions favoris.
              </h1>
              <p className="hidden">
                Imaginez-vous vous plonger dans l’univers de vos héros et
                héroïnes de fiction favoris et redécouvrir les lieux cultes qui
                ont bouleversé votre quotidien…
              </p>
              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">
                <a href="#" className="btn btn-prim download">
                  <FaApple size={'3em'} />
                  <span>Download for iOS</span>
                </a>
                <a href="#" className="btn btn-alt download">
                  <DiAndroid size={'3em'} />
                  <span>Download for Android</span>
                </a>
              </div>
            </div>
          </div>
          <HeroMedia />
        </div>
      </div>
    </div>
  )
}
