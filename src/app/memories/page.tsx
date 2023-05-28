'use client'
import React from 'react'
import carga from '../../assets/carga.svg'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Page = () => {
  const router = useRouter()

  return (
    <div className="w-screen h-screen bg-cover bg-center bg-white">
      <div className="bg-gradient-to-t from-[#ffcdcdbb] to-[#ffffffe1] w-screen h-screen flex flex-col gap-5 justify-center items-center">
        {/* <img className="w-80" src={carga} alt="" /> */}
        <h3 className="text-4xl text-center font-bold text-red-500 mb-4">
          Pagina en construcción
        </h3>
        <Image
          src={carga}
          alt="Vercel Logo"
          // className="dark:invert"
          width={200}
          // height={24}
          priority
        />
        <h3 className="text-xl text-center font-medium text-red-500 mb-4">
          Gracias por su interés el siguiente mes tendremos mejoras
        </h3>
        <button
          onClick={() => router.push('/')}
          className="bg-red-500 border-2 border-red-500 text-white text-lg py-1 px-3 rounded-full"
        >
          Volver al inicio
        </button>
      </div>
    </div>
  )
}

export default Page
