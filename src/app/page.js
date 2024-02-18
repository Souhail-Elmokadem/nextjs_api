import Image from "next/image";
import style from '@/app/style.module.css'
import img from '/public/img/image.png'
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
export default function Home() {
  return (
    <>
    <Navbar />
    <div className={style.container}>
      
     
      <div className={style.cover}>
        <h1>Welcom to Nextjs</h1>
      </div>
    
    </div>
    <div className={style.container}>
      
      <div className={style.col}>
          <h1 className={style.title}>Lorem Ipsum</h1>
          <p className={style.desc}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500</p>
      </div>
      <div className={style.col}>
         <Image src={img} width={'320'} alt="" />
      </div>
    
    </div>
    <div className={style.container}>

       <div className={style.col}>
         <Image src={'https://media.gettyimages.com/id/84288050/fr/photo/place-mohammed-v-and-city-skyline-dusk.jpg?s=1024x1024&w=gi&k=20&c=J8Jp9e2-F5cfraHSy2Wh5m6gxnMyYRIMAQ85zjMsQ5s='} width={'612'} height={'380'} alt="" />
      </div>
      <div className={style.col}>
          <h1 className={style.title}>Lorem Ipsum</h1>
          <p className={style.desc}>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l imprimerie depuis les années 1500</p>
      </div>
     
    
    </div>
    <Footer />
    </>
  );
}
