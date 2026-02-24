"use client";

import Image from "next/image";
import SimpleParallax from "simple-parallax-js";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const navRef = useRef<HTMLDivElement>(null);
  const hero = useRef<HTMLDivElement>(null);
  
  const barTop1 = useRef<HTMLImageElement>(null);
  const barTop2 = useRef<HTMLImageElement>(null);
  const barBottom1 = useRef<HTMLImageElement>(null);
  const barBottom2 = useRef<HTMLImageElement>(null);

  const videoRef = useRef<HTMLVideoElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  const tico = useRef<HTMLImageElement>(null);

  const [active, setActive] = useState(2);
  
  const images = [
    "galery1.png",
    "galery2.png",
    "galery3.png",
    "galery4.jpg",
    "galery5.png",
  ];

  const prev = () => {
    setActive((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const next = () => {
    setActive((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {

    gsap.registerPlugin(ScrollTrigger);

    if (!barTop1.current || !barTop2.current || !barBottom1.current || !barTop2.current) return

    const animations: gsap.core.Tween[] = [];


    animations.push(gsap.to(barTop1.current, {
      xPercent: -100,
      duration: 1.5,
      opacity: 0.5,
      repeat: -1,
      ease: "linear",
      paused: true
    }));

    animations.push(gsap.to(barTop2.current, {
      xPercent: -100,
      duration: 1.5,
      opacity: 0.5,
      repeat: -1,
      ease: "linear",
      paused: true
    }));

    animations.push(gsap.to(barBottom1.current, {
      xPercent: 100,
      duration: 1.5,
      opacity: 0.5,
      repeat: -1,
      ease: "linear",
      paused: true
    }));

    animations.push(gsap.to(barBottom2.current, {
      xPercent: 100,
      duration: 1.5,
      opacity: 0.5,
      repeat: -1,
      ease: "linear",
      paused: true
    }));

    const video = videoRef.current;

    const handlePlay = () => {
      animations.forEach(animation => {
        animation.play();
      });
    };

    const handlePause = () => {
      animations.forEach(animation => {
        animation.pause();        
      });
    };

    const handleEnded = () => {
      tweenRef.current?.pause(0); // vuelve al inicio
    };

    if(!video)
      return;

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);

    

    if (!navRef.current || !hero.current) return;

    // ScrollTrigger.create({
    //   trigger: hero.current,
    //   start: "bottom top",

    //   onEnter: () => {
    //     navRef.current?.classList.add(
    //       "bg-grey/70",
    //       "backdrop-blur-md",
    //       "shadow-lg"
    //     );
        
    //   },

    //   onLeaveBack: () => {
    //     navRef.current?.classList.remove(
    //       "bg-grey/70",
    //       "backdrop-blur-md",
    //       "shadow-lg"
    //     );
    //   }
    //   });

      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const id = section.getAttribute("id");

        if (!id) return;

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",

          onEnter: () => activateLinks(id),
          onEnterBack: () => activateLinks(id),
        });
      });

      function activateLinks(id: string) {
        // quitar clase activa a todos
        document
          .querySelectorAll(".linkList a p")
          .forEach((link) =>
            link.classList.remove(
              "text-white",
              "bg-aqua",
              "rounded-2xl",
              "border-none"
            )
          );

        // activar TODOS los que apunten a ese id
        document
          .querySelectorAll(`.linkList a[href="#${id}"] p`)
          .forEach((link) =>
            link.classList.add(
              "text-white",
              "bg-aqua",
              "rounded-2xl",
              "border-none"
            )
          );

          const route = "/png/tico/";
          const type = ".png";

          switch (id) {
            case "inicio":
              tico.current?.setAttribute("src", route + "tico_good" + type);
              break;
              
            case "tdo":
              tico.current?.setAttribute("src", route + "tico_reading" + type);
              break;

            case "tico":
              tico.current?.setAttribute("src", route + "tico_sitting" + type);
              break;

            case "quienesSomos":
              tico.current?.setAttribute("src", route + "tico_thinking" + type);
              break;

            case "contactanos":
              tico.current?.setAttribute("src", route + "tico_calling" + type);
              break;              

            default:

              break;
          }
      }

  }, []);


  return (

    <main className="w-full h-full max-w-screen! overflow-hidden relative">

      <div className="drawer z-3!">
        <input  id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div ref={navRef} id="navbarLg" className="navbar p-0! shadow-md bg-grey/5 w-full 
          backdrop-blur-md fixed z-1 transition-[background-color,backdrop-filter,box-shadow]
          duration-300
          ease-in-out">
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
            <div className="hidden flex-none lg:block text-grey/80">
              <ul className="linkList menu-horizontal gap-5 mr-3 *:p-0! p-0! text-lg **:border-green ">

                <li><a href="#inicio" className="p-0!"><p className="
                hover:bg-aqua hover:rounded-2xl transition-all
                duration-300 ease-in-out border-b-2 px-4! p-1">Inicio</p></a></li>
                
                <li><a href="#tdo" className="p-0!"><p className="hover:bg-aqua hover:rounded-2xl transition-all
                duration-300 ease-in-out border-b-2 px-4! p-1 ">TDO</p></a></li>

                <li><a href="#tico" className="p-0!"><p className="hover:bg-aqua hover:rounded-2xl transition-all 
                duration-300 ease-in-out border-b-2 px-4! p-1 ">Tico</p></a></li>

                <li><a href="#quienesSomos" className="p-0!"><p className="hover:bg-aqua hover:rounded-2xl border-b-2 px-4! p-1 ">¿Quiénes somos?</p></a></li>

                <li><a href="#contactanos" className="p-0!"><p className="hover:bg-aqua hover:rounded-2xl 
                transition-all duration-300 ease-in-out border-b-2 px-4! p-1 ">Contáctanos</p></a></li>
                
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
                <Image src="/svg/form_1.svg" alt="" width={0} height={0} className="w-36 h-36 "></Image>
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

      <section ref={hero} id="inicio" className="relative w-full h-screen max-h-screen p-0! m-0! overflow-x-hidden">

        <div className="relative grid grid-cols-12 h-full w-full">
          <div className="col-span-8 text-grey flex flex-wrap items-center">
            <div className=" px-16 flex flex-wrap justify-center">
                <h1 className="text-5xl text-center font-semibold h-fit w-full ">Software de apoyo para el estudio y seguimiento del TDO</h1>
                
                <p className="mt-16 text-xl h-fit w-sm min-w-[500] text-center">Una herramienta tecnológica diseñada para fortalecer el análisis psicológico y la toma de decisiones clínicas.</p>
            </div>
          </div>

          <div className="col-span-4 flex items-center overflow-hidden">
            <div className="hover-3d">
              <figure className=" rounded-2xl">
                <Image src="/svg/heroImage.svg" alt="Imagen Hero" width={0} height={0} className="w-lg h-lg scale-125 -translate-x-1/12 "></Image>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>

        </div>
      </section>

      <section id="tdo" className="relative z-1">
        <div className="relative py-0 ">
          <img src="/png/container_1.png" alt="" className="w-full"/>
          {/* <Image src="/png/container_1.png" alt="" width={0} height={0} className=" w-full"></Image> */}
          <div className="grid grid-cols-12 absolute top-1/2 left-0 -translate-y-1/2 px-12">
            <div className="col-span-4 relative flex justify-center items-center ">
              <div className="hover-3d">
                <figure className="bg-none! rounded-full relative flex justify-center items-center w-112 h-112">
                  <Image src="/svg/angryKidBg.svg" alt="" width={0} height={0} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-100"></Image>
                  <Image src="/svg/angryKid.svg" alt="" width={0} height={0} className="relative w-84 h-128"></Image>
                </figure>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
        

            </div>

            <div className="col-span-8 flex items-center justify-center ">
              <div className="px-12 grid gap-12 text-grey">
                <h2 className="text-5xl font-semibold text-center opacity-90">¿Qué es el TDO?</h2>

                <p className="text-center text-xl opacity/80">Es el Trastorno Desafiante de Oposición, teniendo un patrón recurrente o persistente de conducta negativa, desafiante o incluso hostil dirigida a figuras de autoridad.</p>
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

              <p className="text-right text-xl w-100">En Mexico, el <b>TDO</b> esta presente en 1600 niños de cada 10 000. Una prevalencia del 16%</p>
            </div>
          </div>

          <div className="col-span-6 relative flex justify-center items-center">
            <div className="hover-3d">
              <figure className="relative flex justify-center items-center w-112 h-112">
                <Image src="/svg/greenCircle.svg" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-106 h-106"></Image>
                <img src="/png/grafica1.png" alt="" width={0} height={0} className="relative w-100 h-100 rounded-full"/>
                <Image src="/svg/dottedCircleGrey.svg" alt="" width={0} height={0} className="absolute w-112 h-112"></Image>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </article>

        <article className="grid grid-cols-12 mt-24">
          
          <div className="col-span-6 flex justify-center items-center">
            <div className="hover-3d">
              <figure className="relative flex justify-center items-center w-112 h-112">
                <Image src="/svg/greenCircle.svg" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-106 h-106"></Image>
                <img src="/png/grafica2.png" alt="" width={0} height={0} className="relative w-100 h-100 rounded-full"/>
                <Image src="/svg/dottedCircleGrey.svg" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-112 h-112"></Image>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>          
          
          <div className="col-span-6 flex items-center">
            <div className="px-16 flex flex-wrap justify-start gap-8">
              <h3 className="text-left font-bold text-4xl">Edad vulnerable</h3>

              <p className="text-left text-xl w-100">
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

      <section id="tico" className="relative w-full z-1">
        
        <img src="/png/container_2.png" alt="" className=" w-full h-auto"/>
        {/* <Image src="/svg/container_2.svg" alt="" fill className="h-auto w-auto"></Image> */}
        
        
        <article className="py-24 absolute top-1/2 -translate-y-1/2 left-0 w-full">
          
          <div className="grid inline-flex w-full items-center justify-center mb-8 absolute top-0">
            <div className="w-4/12">
              <img src="/png/line1.png" alt=""  className="w-full"/>
            </div>

            <div>
              <img src="/png/rombo.png" alt="" />
            </div>

            <div className="w-4/12">
              <img src="/png/line1.png" alt=""  className="w-full"/>
            </div>

          </div>
      
          <div className="grid inline-flex w-full items-center justify-center absolute -bottom-18">
            <div className="w-4/12">
              <img src="/png/line1.png" alt=""  className="w-full"/>
            </div>

            <div>
              <img src="/png/rombo.png" alt="" />
            </div>

            <div className="w-4/12">
              <img src="/png/line1.png" alt=""  className="w-full"/>
            </div>

          </div>

          <img src="/png/tico_gis1.png" alt=""  className="absolute right-0 top-0 w-3/8 opacity-70"/>

          <img src="/png/star1.png" alt=""  className="absolute left-1/8 bottom-3/8 w-3/8 opacity-70"/>

          <img src="/png/triangle.png" alt=""  className="absolute -right-1/12 -bottom-1/12 w-3/8 opacity-70 rotate-135"/>

          <div className="py-0 relative">

            <div className="bg-grey/30 blur-sm absolute top-0 left-0 w-full h-full  ">

            </div>

            <div className="relative grid gap-0">
              <h2 className="text-5xl font-bold text-center text-grey mt-10 opacity-95">Conoce a TICO</h2>

              <div className="w-full py-10 flex flex-col items-center">

                <div className="relative w-full max-w-6xl overflow-hidden">
          
                  {/* Galería */}
                  <div className="flex items-center justify-center gap-6 transition-all duration-500">

                    {images.map((src, index) => {
                      const isActive = index === active;

                      return (
                        <div
                          key={index}
                          className={`
                            overflow-hidden rounded-xl transition-all duration-500 ease-in-out drop-shadow-lg
                            ${isActive
                              ? "visible lg:w-3xl lg:h-[406px] w-[600px] h-[350px] "
                              : "hidden lg:block lg:h-[406px] w-[120px] h-[350] opacity-60"}
                          `}
                        >
                          <img
                            src={"/png/" + src}
                            alt=""
                            className="w-full h-full object-cover "
                            onClick={() => setActive(index)}
                          />
                        </div>
                      );
                    })}

                  </div>

                  {/* Botones */}
                  <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full"
                  >
                    ←
                  </button>

                  <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/40 text-white px-4 py-2 rounded-full"
                  >
                    →
                  </button>
                </div>

                <div className="flex gap-3 mt-8">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActive(index)}
                      className={`
                        w-6 h-6 rounded-full transition-all duration-300
                        ${index === active
                          ? "bg-white scale-125"
                          : "bg-white/50"}
                      `}
                    />
                  ))}
                </div>

                
              </div>
            </div>

          </div>

          <div className="w-full flex justify-center py-10 mt-35 relative">
            <div className="absolute bg-grey/30 blur-sm w-full h-full scale-y-135 bottom-1/2 translate-y-1/2"></div>
            <div className="w-8/12 relative">
              <img src="/png/sideBarLeft.png" alt=""  className=" z-1 h-full left-0 -translate-x-8/12 absolute scale-125 scale-y-145 "/>

              <img src="/png/sideBarRight.png" alt=""  className=" z-1 h-full right-0 translate-x-8/12 absolute  scale-125 scale-y-145"/>

              <div className="z-1 -translate-y-full absolute overflow-hidden scale-125">
                <img src="/png/greyBarNoShadow.png" alt=""  className="shadow-xl w-full h-auto"/>
                <img ref={barTop1} src="/png/boxBar.png" alt="" className="w-full absolute top-1/2 -translate-y-1/2 left-0"/>
                <img ref={barTop2} src="/png/boxBar.png" alt="" className="w-full absolute top-1/2 -translate-y-1/2 left-full"/>

              </div>

              <div className="z-1 bottom-0 translate-y-full absolute overflow-hidden scale-125 drop-shadow-2xl">
                <img src="/png/greyBarNoShadow.png" alt=""  className=" w-full h-auto"/>
                <img ref={barBottom1} src="/png/boxBar.png" alt="" className="w-full absolute top-1/2 -translate-y-1/2 right-0"/>
                <img ref={barBottom2} src="/png/boxBar.png" alt="" className="w-full absolute top-1/2 -translate-y-1/2 right-full"/>
              </div>




              <video ref={videoRef} className="w-full h-auto" controls>
                <source src="./vid/Tico.mp4" type="video/mp4"></source>
                Your browser does not support the video tag.
              </video>
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

      <section id="quienesSomos" className="text-grey relative z-1 mt-24">
        <h2 className=" text-5xl font-bold text-center mb-16">¿Quiénes somos?</h2>

        <article className="grid grid-cols-12 *:flex *:items-start *:justify-center px-12">

          <div className="col-span-7 px-30  ">
            <div className="z-1 grid grid-rows-12 grid-cols-1 h-full">
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

          <div className="z-1 col-span-5">
            <div className="hover-3d">
              <figure className="border-grey/30 border-8 p-4 border-dashed">
                <img src="/png/ab1.png" alt="" className="w-100 bg-linear-to-l from-aqua to-aqua-gradient p-2"/>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </article>

        <article className="relative grid grid-cols-12 *:flex *:justify-center px-12 mt-24">

          <div className="absolute -top-3/4 right-1/4">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.8}>
                <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-60"></Image>
              </SimpleParallax>
            </div>
          </div>    

          <div className="z-1 relative col-span-5">
            <div className="hover-3d">
              <figure className="border-grey/30 border-8 p-4 border-dashed">
                <img src="/png/ab2.png" alt="" className="w-100 bg-linear-to-l from-aqua to-aqua-gradient p-2"/>
              </figure>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
           
          </div>

          <div className="z-1 relative col-span-7 px-30 text-grey flex items-center! h-full">
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

      <section id="contactanos" className="relative w-full z-1 mt-28">
        <img src="/svg/container_3.svg" alt="" className="w-full h-auto shadow-xl"/>
        <img src="/svg/container_3.svg" alt="" className="w-full h-auto shadow-xl absolute top-0 left-0 rotate-180"/>

        <article className="absolute top-0 left-0 w-full h-full flex items-center text-grey">
          <div className="align-middle items-center grid grid-cols-12 w-full">
            <div className="col-span-5 flex justify-center pr-12 items-center">
              <div className="flex flex-wrap justify-end items-center">
                <div className="w-6/8">
                  <h2 className="font-bold text-5xl text-right w-full">Alianzas que transforman</h2>
                </div>
                <p className="mt-12 w-6/8 text-right text-xl">
                  Buscamos conectar con mentes y organizaciones que compartan nuestro deseo de mejorar la salud mental infantil. Si nuestra visión resuena contigo, exploremos cómo podemos colaborar.
                </p>
              </div>
            </div>

            <div className="col-span-7  flex justify-center">
              <div className="bg-white shadow-lg overflow-hidden relative rounded-l-xl w-full max-w-2xl h-full p-6 flex flex-wrap gap-8 pr-22">
                {/* <div className="w-full border-2 border-red-400/30 absolute top-[4rem] left-0"></div> */}
                <img src="jpg/notebook.jpg" alt="" className="opacity-40 absolute left-0 top-0"/>
                <div className="h-full border-2 border-red-400/30 absolute top-0 right-16"></div>
                <div className="size-6 bg-yellow rounded-full absolute right-8 translate-x-1/2 top-1/12"></div>
                <div className="size-6 bg-yellow rounded-full absolute right-8 translate-x-1/2 top-4/12"></div>
                <div className="size-6 bg-yellow rounded-full absolute right-8 translate-x-1/2 top-7/12"></div>
                <div className="size-6 bg-yellow rounded-full absolute right-8 translate-x-1/2 top-10/12"></div>
              
                <form action="" className="z-1 relative *:w-full flex flex-wrap items-center gap-8 w-full text-lg">
                  
                  <h3 className="text-4xl font-bold text-center w-full h-fit relative">Formulario</h3>

                  <input type="text" placeholder="Nombre completo:" className="bg-white border-aqua border-2 p-2 rounded-md" />
                
                  <input type="text" placeholder="Correo de contacto:" className="bg-white border-aqua border-2 p-2 rounded-md" />

                  <input type="text" placeholder="Area de interes:" className="bg-white border-aqua border-2 p-2 rounded-md" />

                  <textarea name="" id="" className="bg-white border-aqua border-2 p-2 rounded-md min-h-32" placeholder="Mensaje:"></textarea>

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

      <footer className="relative w-full min-h-24 mt-12 bg-teal inline-flex items-center justify-between px-4">
              <div className="inline-flex items-center gap-6">
                <img src="/svg/ticoHead.svg" alt="" />
                <p>tico.support@gmail.com</p>
              </div>
              
              <div>
                <ul className="h-full flex gap-6 items-center">
                  <li>
                    <a href="#inicio">Inicio</a>
                  </li>
                  <li>
                    <a href="#tdo">TDO</a>
                  </li>
                  <li>
                    <a href="#tico">Tico</a>
                  </li>
                  <li>
                    <a href="#contactanos">Contactanos</a>
                  </li>
                </ul>
              </div>


              <small>
                Tecnología y psicología unidas para mejorar la conducta infantil.
              </small>
      </footer>

      <div className="fixed right-0 bottom-1 z-2">
        <img ref={tico} src="/png/tico_good.png" alt="" />
      </div>

    </main>

  );
}
