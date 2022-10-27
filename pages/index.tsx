import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Experience from '../components/Experience'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0'>
      <Head>
        <title>Ian's Portfolio</title>
      </Head>

      <Header />
      
      {/*  Hero */}
      {/* snap-center -> to let the content keep in the center when scroll */}
      <section id="hero" className='snap-start'> 
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-start'>
        <About />
      </section>
      {/* Experience */}
      <section id="experience" className='snap-center'>
        <Experience />
      </section>
      {/* Skills */}

      {/*  Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home
