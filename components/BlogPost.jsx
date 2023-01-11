import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightCircle } from 'react-icons/bs'

export default ({ attributes }) => {
  const { title, thumbnail, excerpt, slug } = attributes
  const { url, width, height } = thumbnail?.data?.attributes?.formats?.medium

  return (
    <div className="max-w-sm">
      <div className="rounded-lg aspect-video relative overflow-clip">
        <Image
          layout="fill"
          className="object-cover"
          src={url}
          width={width}
          height={height}
          alt=""
        />
      </div>
      <div className="py-5">
        <a href="#">
          <h4 className="mb-2 text-2xl font-caviar font-bold tracking-tight text-gray-900 text-primary">
            {title}
          </h4>
        </a>
        <p className="mb-3 font-inter text-gray-700 dark:text-gray-400">
          {excerpt}
        </p>
        <Link href={`/blog/${slug}`}>
          <a className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center uppercase text-white float-right hover:text-primary">
            Lire plus
            <BsArrowRightCircle size={'1rem'} />
          </a>
        </Link>
      </div>
    </div>
  )
}
