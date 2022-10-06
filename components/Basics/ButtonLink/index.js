import Link from 'next/link'

const ButtonLink = ({ link }) => {
  return (
    <Link href={link.href}>
      <a className="btn btn-prim basic">
        <span>{link.label}</span>
      </a>
    </Link>
  )
}

export default ButtonLink
