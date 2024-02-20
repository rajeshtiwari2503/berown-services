
import Banner from '@/components/Banner'
import HomePage from '@/components/HomePage'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import Services from './services'
import Testimonial from '@/components/Testomonials'
import Clients from '@/components/Clients'
import WhatsApp from '@/components/Whatsapp'
import AchivementSection from '@/components/Achivement'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Berown Services - Your Trusted Installation &amp; Repair Experts</title>
        <meta name="description" content="Discover top-quality installation, and repair services at Berown Services. With years of industry experience, we&#039;re your go-to choice Experts." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Inter&family=Poppins&display=swap" rel="stylesheet"></link>
      </Head>
      <main
        className="flex flex-col   " style={{ marginTop: "70px" }}
      >
        <div >
          <HomePage />
          <AchivementSection />
          <Banner />
          <Services home={true} />
        
          {/* <Clients /> */}
          <Testimonial />
        
        </div>
        <div className='whatsAppCss'><WhatsApp />
          </div>
      </main>
    </>
  )
}
