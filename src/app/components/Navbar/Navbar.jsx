
import { links } from './data'
import Link from 'next/link'
import style from './Navbar.module.css'

import Button from './Button/Button'
import Logo from '@/app/Logo/Logo'

export default function Navbar() {
    
  return (
    <>
    <nav className='container'>
        <Logo >Logo</Logo> 
        <Button />
        <ul className={style.ul}>
            {
                links.map(link => 
                <Link key={link.id} className={`${style.menu}`} href={link.url}  >
                    {link.title} 
                 </Link> 
                 )
            }
           
        </ul>
        
    </nav>
    </>
  )
}
