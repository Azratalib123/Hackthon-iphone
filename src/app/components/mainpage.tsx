import Image from 'next/image'
import myImage from '/iphone.png';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Pro.Beyond.</h2>
        <h1>iPhone 14 Pro</h1>
        <p>Created to change everything for the better. For everyone.</p>
        <button>Shop Now</button>
      </div>
        <div className='hero-image'>
      <Image src={myImage} alt="My Image" width={300} height={420} /></div>
      
    </section>
  )
}