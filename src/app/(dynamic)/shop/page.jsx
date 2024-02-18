import Link from 'next/link';
import style from './about.module.css'
import img from '/public/img/image.png'
import Image from "next/image";

export async function getdata(){
  const res = await fetch('https://dummyjson.com/products');
  if(!res){
    console.log('erreur')
  }
  return res.json()
}

export default async function page() {
  const data = await getdata();
  const products = await data.products
  
  return (
    <div className={style.container}> 
      {
        products.map(prd => 
          <Link 
            key={prd.id}
            href={`/shop/${prd.id}`}
            className={style.link}
          >
          <div className={style.card}>
            <div className={style.badge}><p>{prd.price} DH</p></div>
          <Image 
          className={style.image}
          src={prd.thumbnail}
          width={260}
          height={200}
          alt=''
          
          />
          <h5 className={style.title}>{prd.title}</h5>
          <p className={style.desc}>{prd.description}</p>
        </div>
          </Link>
          )
      }
        
       
       
    </div>
  )
}
