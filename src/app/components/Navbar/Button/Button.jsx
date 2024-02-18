"use client"
import style from '@/app/components/Navbar/Navbar.module.css'
import {  useRouter } from 'next/navigation'
export default function Button() {
    const router = useRouter()
  return (
<button type='button' className={style.btn} onClick={() => router.push('/login')} >Login</button>  )
}
