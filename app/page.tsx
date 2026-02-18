"use client";

import Image from "next/image";
import SimpleParallax from "simple-parallax-js";

export default function Home() {
  return (

    <main className="w-full h-full max-w-screen! overflow-x-hidden relative">

      <div className="drawer z-3!">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar p-0! bg-grey/5 w-full backdrop-blur-md fixed z-1">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 size-fit">
              <Image src="./svg/ticoHead.svg" alt="Cabeza de Tico" width={80} height={80} className="w-14 h-14"></Image>
            </div>
            <div className="hidden flex-none lg:block text-grey">
              <ul className="menu menu-horizontal p-0! text-lg **:border-green ">
                {/* Navbar menu content here */}
                <li><a><p className="border-b-2 px-2! p-0! rounded-none m">Inicio</p></a></li>
                <li><a><p className="border-b-2 px-2! p-0! rounded-none m">TDO</p></a></li>
                <li><a><p className="border-b-2 px-2! p-0! rounded-none m">Videojuego</p></a></li>
                <li><a><p className="border-b-2 px-2! p-0! rounded-none m">Contáctanos</p></a></li>
                <li><a><p className="border-b-2 px-2! p-0! rounded-none m">¿Quiénes somos?</p></a></li>
              </ul>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <li><a>Sidebar Item 1</a></li>
            <li><a>Sidebar Item 2</a></li>
          </ul>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-screen p-0! **:p-0! m-0!">
        <div className="w-full h-full ">
          <div className="absolute right-1/2 top-8">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/form_1.svg" alt="" width={0} height={0} className="w-36 h-36"></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute bottom-8 -right-0">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/triangle_1.svg" alt="" width={0} height={0} className="w-36 h-36"></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute -left-58 top-36 rotate-45">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/star_1.svg" alt="" width={0} height={0} className="w-74 h-74"></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute -bottom-24 right-1/2">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/star_1.svg" alt="" width={0} height={0} className="w-60 h-60"></Image>
              </SimpleParallax>
            </div>
          </div>          
        </div>
      </div>

      <section className="relative w-full h-screen max-h-screen p-0! m-0! overflow-x-hidden">

        <div className="relative grid grid-cols-12 h-full w-full">
          <div className="col-span-8 text-grey flex flex-wrap items-center">
            <div className=" px-16 flex flex-wrap justify-center">
                <h1 className="text-5xl text-center font-semibold h-fit w-full ">Software de apoyo para el estudio y seguimiento del TDO</h1>
                
                <p className="mt-16 text-lg h-fit w-sm min-w-[500] text-center">Una herramienta tecnológica diseñada para fortalecer el análisis psicológico y la toma de decisiones clínicas.</p>
            </div>
          </div>

          <div className="col-span-4 flex items-center overflow-hidden">
            <Image src="/svg/heroImage.svg" alt="Imagen Hero" width={0} height={0} className="w-lg h-lg scale-125 -translate-x-1/12 "></Image>
          </div>

        </div>
      </section>

      <section className="relative z-1">
        <div className="relative py-0 ">
          <img src="/png/container_1.png" alt="" className="w-full"/>
          {/* <Image src="/png/container_1.png" alt="" width={0} height={0} className=" w-full"></Image> */}
          <div className="grid grid-cols-12 absolute top-1/2 left-0 -translate-y-1/2 px-12">
            <div className="col-span-4 relative flex justify-center items-center">
              <Image src="/svg/angryKidBg.svg" alt="" width={0} height={0} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-100"></Image>
              <Image src="/svg/angryKid.svg" alt="" width={0} height={0} className="relative w-84 h-128"></Image>
            </div>

            <div className="col-span-8 flex items-center justify-center ">
              <div className="px-12 grid gap-12 text-grey">
                <h2 className="text-5xl font-semibold text-center opacity-80">¿Qué es el TDO?</h2>

                <p className="text-center text-xl font-semibold opacity/80">Es el Trastorno Desafiante de Oposición, teniendo un patrón recurrente o persistente de conducta negativa, desafiante o incluso hostil dirigida a figuras de autoridad.</p>
              </div>
            </div>
          </div>

        </div>
      </section> 

        <div className="w-full h-fit relative">
          <div className="absolute -top-70 right-1/2">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-80 "></Image>
              </SimpleParallax>
            </div>
          </div>
        </div>

        <div className="w-full h-fit relative">     

          <div className="absolute -left-60 top-40 rotate-45">
            <div className="*:p-24 size-120 *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-80 "></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute top-86 -right-40">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-66"></Image>
              </SimpleParallax>
            </div>
          </div>
        </div>




      <section className="text-grey z-1 relative">
        <article className="grid grid-cols-12">
          <div className="col-span-6 flex items-center">
            <div className="px-16 flex flex-wrap justify-end gap-8">
              <h3 className="text-right font-bold text-4xl">Impacto del TDO en niños y adolescentes en Mexico</h3>

              <p className="text-right text-2xl w-100">En Mexico, el <b>TDO</b> esta presente en 1600 niños de cada 10 000. Una prevalencia del 16%</p>
            </div>
          </div>

          <div className="col-span-6 relative flex justify-center items-center">
            <Image src="/svg/dottedCircleGrey.svg" alt="" width={0} height={0} className="absolute w-122 h-122"></Image>
            <Image src="/svg/greenCircle.svg" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-114 h-114"></Image>
            <Image src="/png/grafica1.png" alt="" width={0} height={0} className="relative w-108 h-108 rounded-full"></Image>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-24">
          
          <div className="col-span-6 relative flex justify-center items-center">
            <Image src="/svg/dottedCircleGrey.svg" alt="" width={0} height={0} className="absolute w-122 h-122"></Image>
            <Image src="/svg/greenCircle.svg" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-114 h-114"></Image>
            <Image src="/png/grafica2.png" alt="" width={0} height={0} className="relative w-108 h-108 rounded-full"></Image>
          </div>          
          
          <div className="col-span-6 flex items-center">
            <div className="px-16 flex flex-wrap justify-start gap-8">
              <h3 className="text-left font-bold text-4xl">Edad vulnerable</h3>

              <p className="text-left text-2xl w-100">
                La etapa entre 5 y 9 años es crucial para el correcto 
                diagnostico y tratamiento. No obstante, tambien
                puede presentarse en otras edades.
              </p>
            </div>
          </div>
          
        </article>        
      </section>

      <div className="w-full h-2 relative mt-42">
        <div className="absolute -bottom-66 -left-36 rotate-90">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax >
              <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-96"></Image>
            </SimpleParallax>
          </div>
        </div>
        
        

        <div className="absolute bottom-12 right-8">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax >
              <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-54"></Image>        
            </SimpleParallax>
          </div>
        </div>        
      </div>

      <section className="relative w-full z-1">
        <img src="/png/container_2.png" alt="" className="w-full h-auto"/>
        {/* <Image src="/svg/container_2.svg" alt="" fill className="h-auto w-auto"></Image> */}
        
        <article className="py-46 absolute top-0 left-0 w-full">
          
          <div className="py-12 relative">

            <div className="bg-grey/30 absolute top-0 left-0 w-full h-full blur-sm ">

            </div>

            <div className="relative grid gap-12">
              <h2 className="text-5xl font-bold text-center">Conoce a TICO</h2>

              <div className="w-full flex flex-wrap justify-center">
                <div className="w-200 h-100 bg-blue-400"></div>
              </div>
            </div>

          </div>

        </article>
      </section>

      <div className="w-full h-2 relative">
        <div className="absolute -bottom-24 -left-12">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.8}>
              <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-100 "></Image>
            </SimpleParallax>
          </div>
        </div>

        <div className="absolute -bottom-30 right-36">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.8}>
              <Image src="/svg/starGreen.svg" alt="" width={0} height={0} className="size-50 "></Image>        
            </SimpleParallax>
          </div>
        </div>    
      </div>

      <section className="text-grey relative z-1 mt-24">
        <h2 className=" text-5xl font-bold text-center mb-16">¿Quiénes somos?</h2>

        <article className="grid grid-cols-12 *:flex *:items-start *:justify-center px-12">

          <div className="col-span-7 px-30  ">
            <div className="grid grid-rows-12 grid-cols-1 h-full">
                <div className="row-span-5 items-start">
                  <p className="text-center text-xl">Somos una iniciativa que une tecnología y psicología para atender el Trastorno Desafiante por Oposición.
                  </p>
                </div>

                <div className="row-span-1"></div>

                <div className="row-span-6 items-end flex">
                  <p className="text-center text-xl">
                    Diseñamos un videojuego terapéutico capaz de medir y registrar métricas de conducta en tiempo real mientras el paciente interactúa con la plataforma.
                  </p>
                </div>
            </div>
          </div>

          <div className="col-span-5">
            <Image src="/svg/dottedRectangleGrey.svg" alt="" width={0} height={0} className="w-100 "></Image>
          </div>

        </article>

        <article className="grid grid-cols-12 *:flex *:justify-center px-12 mt-24">

          <div className="col-span-5">
            <Image src="/svg/dottedRectangleGrey.svg" alt="" width={0} height={0} className="w-100 "></Image>
          </div>

          <div className="col-span-7 px-30 text-grey flex items-center! h-full">
            <p className="text-xl text-center">
              Buscamos proporcionar información clave al especialista para su análisis. Al recibir estos datos, el terapeuta puede evaluar los resultados y detectar con precisión los puntos fuertes del niño, facilitando un tratamiento basado en evidencia concreta.
            </p>
          </div>

        </article>        

      </section>

      <div className="w-full relative">
        <div className="absolute -bottom-80 -right-40">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.8}>
              <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-80"></Image>
            </SimpleParallax>
          </div>
        </div>    

        <div className="absolute bottom-0 -left-36">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.8}>
              <Image src="/svg/starGreen.svg" alt="" width={0} height={0} className="size-46 "></Image>        
            </SimpleParallax>
          </div>
        </div>            
      </div>

      <section className="relative w-full z-1 mt-28">
        <img src="/svg/container_3.svg" alt="" className="w-full h-auto shadow-xl"/>
        <img src="/svg/container_3.svg" alt="" className="w-full h-auto shadow-xl absolute top-0 left-0 rotate-180"/>

        <article className="absolute top-0 left-0 w-full h-full flex items-center text-grey">
          <div className="align-middle items-center grid grid-cols-12 w-full">
            <div className="col-span-5 flex justify-center pr-12 items-center">
              <div className="flex flex-wrap justify-end items-center">
                <div className="w-6/8">
                  <h2 className="font-bold text-6xl text-right w-full">Alianzas que transforman</h2>
                </div>
                <p className="mt-12 w-6/8 text-right text-2xl">
                  Buscamos conectar con mentes y organizaciones que compartan nuestro deseo de mejorar la salud mental infantil. Si nuestra visión resuena contigo, exploremos cómo podemos colaborar.
                </p>
              </div>
            </div>

            <div className="col-span-7  flex justify-center">
              <div className="bg-white rounded-xl w-full max-w-2xl h-full p-6 flex flex-wrap gap-8 ">

                <form action="" className="*:w-full flex flex-wrap items-center gap-8 w-full text-lg">

                  <h3 className="text-4xl font-bold text-center w-full h-fit">Formulario</h3>

                  <input type="text" placeholder="Nombre completo:" className="border-aqua border-2 p-2 rounded-md" />
                
                  <input type="text" placeholder="Correo de contacto:" className="border-aqua border-2 p-2 rounded-md" />

                  <input type="text" placeholder="Area de interes:" className="border-aqua border-2 p-2 rounded-md" />

                  <textarea name="" id="" className="border-aqua border-2 p-2 rounded-md min-h-32" placeholder="Mensaje:"></textarea>

                </form>
              </div>
            </div>
          </div>
        </article>

      </section>

      <div className="w-full relative  mt-12">
        <div className="absolute -bottom-46 right-1/2 translate-x-1/2 rotate-90">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.2}>
              <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-86"></Image>
            </SimpleParallax>
          </div>
        </div>

        <div className="absolute -bottom-24 left-12">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.2}>
              <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-40 "></Image>        
            </SimpleParallax>
          </div>
        </div>

        <div className="absolute -top-36 right-12 ">
          <div className="*:overflow-visible! *:w-full *:h-full">
            <SimpleParallax scale={1.2}>
              <Image src="/svg/circlePink.svg" alt="" width={0} height={0} className="size-40 "></Image>        
            </SimpleParallax>
          </div>
        </div>                
      </div>

      <footer className="relative w-full min-h-48 mt-24 bg-teal">

      </footer>

    </main>

  );
}
