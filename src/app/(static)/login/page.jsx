import Link from 'next/link'
import style from './login.module.css'

export default function page() {
  return (
    <div className='section'>
<div className={style.container}>
  <div className={style.top}></div>
  <div className={style.bottom}></div>
  <div className={style.center}>
    <h2>Please Sign In</h2>
    <input type="email" placeholder="email"/>
    <input type="password" placeholder="password"/>
    <input type='button' value={'Login'} />
    <Link href={'/'} className={style.link}>Retour</Link> 
    <h2>&nbsp;</h2>
  </div>
</div>
</div>
  )
}
