"use client"
import Buttonup from '@/app/components/Buttonup/Buttonup'
import style from '../about.module.css'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'


export default function about({ params }) {
  const [idv, setidv] = useState(parseInt(params.slug));
  const [product, setproduct] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(`https://dummyjson.com/products/${idv}`);
        if (!data.ok) {
          redirect('/404');
        }
        const productData = await data.json();
        setproduct(productData);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle error, maybe redirect to an error page
      }
    };

    fetchData();
  }, [idv]);

  return (
    <div className={style.section}>
      <h1>{idv}</h1>
      <input type="button" onClick={() => setidv(prev => prev + 1)} value={'Next >'} />

      <div className={style.product}>
        {product && (
          <>
            <Image src={product.thumbnail} width={350} height={450} alt='' className={style.MainImage} />
            <div className={style.details}>
              <h1>{product.title}</h1>
              <p>{product.description}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
export async function getStaticProbs(){

}