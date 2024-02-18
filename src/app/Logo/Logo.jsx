
import Link from 'next/link'
import style from '@/app/components/Navbar/Navbar.module.css'
import { Montserrat } from 'next/font/google'
  const logoFont = Montserrat({
    subsets:['latin'],
    weight:['900']
})
export default function Logo({children}) {
  return (
    <Link href='/' className={`${style.logo} ${logoFont}`}>
      {children}
      </Link>
    
  )
}
