import Image from 'next/image'

export default function Home() {
  return (
    <main className="maintenance-cadre"> 
      <div className='logo'>
        <Image priority src='/logo-big-light.svg' width='400' height='400' alt='Chargera' />
        <br />... Bient&ocirc;t disponible ...
      </div>
    </main>
  )
}