import Image from 'next/image'

export default function Home() {
  return (
  <div>
    <div>Weclcome to my web HR app, where anything is possible!</div>
    <div className='flex justify-center items-center'>
      <Image 
        alt='Polar H10' 
        src='https://support.polar.com/sites/default/files/support_files/images/h10-heart-rate-sensor-orange.png'
        width='500'
        height='250'
        className='' />
    </div>
  </div>
  )
}
