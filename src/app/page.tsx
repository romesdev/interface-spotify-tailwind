import { ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'
import { Sidebar } from './components/Sidebar'
import { Footer } from './components/Footer'

export default function Home() {
  return (

    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <Sidebar />
        <main className='flex-1 p-6'>
          <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronLeft />
            </button>
            <button className='rounded-full bg-black/40 p-1'>
              <ChevronRight />
            </button>

          </div>

          <h1 className='font-semibold text-3xl mt-10'>Good Morning</h1>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/lecrae.jpg" width={104} height={104} alt="Your Power single"></Image>
              <strong>Your Power</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/jessie.png" width={104} height={104} alt="What's Your Pleasure album"></Image>
              <strong>What&apos;s Your Pleasure</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/cassiano.jpg" width={104} height={104} alt="Cuban Soul: 18 Kilates album"></Image>
              <strong>Cuban Soul: 18 Kilates</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/oterno.jpg" width={104} height={104} alt="<atrás/além>"></Image>
              <strong>{"<atrás/além>"}</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/5aseco.jpg" width={104} height={104} alt="Ao Vivo no Auditório Ibirapuera"></Image>
              <strong>Ao Vivo no Auditório Ibirapuera</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
            <a href='#' className='bg-white/5 rounded group flex items-center overflow-hidden gap-4 hover:bg-white/10 transition-colors'>
              <Image src="/albums/bowie.jpg" width={104} height={104} alt="The Rise and Fall of Ziggy Stardust and the Spiders from Mars"></Image>
              <strong>The Rise and Fall of Ziggy Stardust and the Spiders from Mars</strong>
              <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible'>
                <Play></Play>
              </button>
            </a>
          </div>

          <h2 className='font-semibold text-2xl mt-10'>Made for Romes Filho</h2>

          <div className='grid grid-cols-8 gap-4 mt-4'>
            <a className='bg-white/5 p-3 rounded-md flex flex-col hover:bg-white/10'>
              <Image src="/albums/radiohead.png" className='w-full' width={120} height={120} alt="OK Computer"></Image>
              <strong className='font-semibold'>Radiohead</strong>
              <span className='text-sm text-zinc-500'>No Surprises and more</span>
            </a>

          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}
