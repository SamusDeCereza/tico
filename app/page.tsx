  "use client";

  import Image from "next/image";
  import SimpleParallax from "simple-parallax-js";
  import { useEffect, useRef, useState } from "react";
  import gsap from "gsap";
  import { ScrollTrigger } from "gsap/ScrollTrigger";
  import LoadingScreen from "./LoadingScreen";

  gsap.registerPlugin(ScrollTrigger);

  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors
  } from "chart.js";

  import { Bar } from "react-chartjs-2";

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Colors
  );

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
    const [loading, setLoading] = useState(true);
    
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

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
      // document.body.style.overflow = "hidden";

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
                tico.current?.setAttribute("src", route + "tico_sitting_right" + type);
                break;
                
              case "tdo":
                tico.current?.setAttribute("src", route + "tico_reading" + type);
                break;

              case "tico":
                tico.current?.setAttribute("src", route + "tico_looking" + type);
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

        if (isPaused) return;

        const drawerCheckbox = document.getElementById(
                  "my-drawer-2",
              ) as HTMLInputElement;
              const closeMenuLinks = document.querySelectorAll(".closeMenu");
              const drawerOverlay = document.querySelector(".drawer-overlay");


              // Close drawer when clicking on navigation links
              if (closeMenuLinks.length > 0) {
                  closeMenuLinks.forEach((element) => {
                      element.addEventListener("click", function () {
                          if (drawerCheckbox) {
                              drawerCheckbox.checked = false;
                          }
                      });
                  });
              }

        const interval = setInterval(() => {
          setActive(prev =>
            prev === images.length - 1 ? 0 : prev + 1
          );
        }, 4000);


        return () => clearInterval(interval);
    }, [isPaused]);

    const loaderRef = useRef<HTMLDivElement>(null);
    const logoRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {

      window.scrollTo(0, 0);

      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "auto"
      });

      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }

      if (!loaderRef.current) return;

      const ctx = gsap.context(() => {

        const tl = gsap.timeline({
          delay: 1,
        });

        tl.to(".loader-bg", {
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15
        })

        .to("#logo", {
          rotationY: "+=720",
          duration: 0.8,
          ease: "ease.in.out"
        }, "0.15")

        .to(".loader-bg", {
          y: "-100%",
          duration: 0.8,
          ease: "power3.in",
        })

        .to("#logo", {
          top: "-50%",
          duration: 0.8,
          ease: "power3.in",          
          onStart: () => {
            window.scrollTo(0, 0);

            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "auto"
            });
          },
          onComplete: () => {
            setLoading(false)
            document.body.style.overflow = "auto";
          }

        }, "<")



      }, loaderRef);

      return () => ctx.revert();

    }, []);

    useEffect(() => {

      gsap.utils.toArray<HTMLElement>(".reveal").forEach((element) => {

        gsap.from(element, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          }
        });

      });

      gsap.utils.toArray<HTMLElement>(".reveal-3d").forEach((element) => {

        gsap.from(element, {
          y: 80,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          onComplete: function () {
            this.targets()[0].classList.add("lg:hover-3d");
          }
        });

      });

    }, []);
      
    const data1 = {
      labels: [
        ["Prevalencia", "mínima 2%"], 
        ["Prevalencia", "máxima 16%"], 
        ["Población", "en riesgo 20%"]
      ],
      datasets: [
        {
          data: [20, 1600, 2000],
        }
      ]
    };


    const options1 = {
      type: 'bar',
      maintainAspectRatio: false,
      aspectRatio: 1,
      responsive: true,
      options: {
        plugins: {
          customCanvasBackgroundColor: {
            color: 'lightGreen',
          }
        }
      },
      scales:{
        y: {
          ticks: {
            stepSize: 2000
          },
        },
        x: {
          grid:{
            display: false
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          position: "top" as const
        },
      }
    };

    const [open, setOpen] = useState(false);

    const textRef = useRef<HTMLDivElement>(null);

    let indices = [0, 0, 0, 0, 0];

    const dialogos = [
      [
        "¡Hola!, soy Tico, bienvenido, estoy aquí para acompañarte mientras exploras la página.",
        "Puedes empezar aquí y bajar poco a poco, hay cosas interesantes más adelante.",
        "Aquí empieza algo genial.", 
      ],
      [
        "Esta sección te ayudará a entender mejor el problema que abordamos.", 
        "Entender el contexto es el primer paso para generar soluciones.", 
        "Tómate un momento, esta información es clave para todo lo demás."
      ],
      [
        "Esta es la parte donde la tecnología cobra vida.", 
        "Soy pequeño, pero útil.", 
        "¡Ey!, ¡pero si soy yo!."
      ],
      [
        "¡Caray!, ellos son mis creadores", 
        "Conocer quiénes somos también es entender por qué hacemos esto.", 
        "Nuestro objetivo es aportar herramientas reales para mejorar la atención."
      ],
      [
        "Escríbenos, nos encantará leerte y conectar contigo.", 
        "Una conversación puede ser el inicio de algo grande.", 
        "Si tienes dudas o quieres colaborar, este es el lugar indicado."
      ],
    ];

    function selectText(section : string){
      let text = "";

      const secciones = [
        "inicio",
        "tdo",
        "tico",
        "quienesSomos",
        "contactanos"
      ];

      const index = secciones.indexOf(section);

      if(indices[index] == 2)
        indices[index] = 0;
      else
        indices[index]++;

      text = dialogos[index][indices[index]];

        const textos = 
        [
          {
            seccion: "inicio",
            texto: "Hola!, soy Tico, "
          },
          {
            seccion: "tdo",
            texto: "Nuestros servicios",
          },
          {
            seccion: "tico",
            texto: "Contáctanos"
          },
          {
            seccion: "quienesSomos",
            texto: "Contáctanos"
          },
          {
            seccion: "contactanos",
            texto: "Contáctanos"
          }
        ];

      return text;
    }

    useEffect(() => {

      const sections = document.querySelectorAll("section");

      

      sections.forEach((section) => {

        const title = section.getAttribute("id");
        

        if(!title)
          return;

        ScrollTrigger.create({
          trigger: section,
          start: "top center",
          end: "bottom center",
          onEnter: () => changeText(selectText(title)),
          onEnterBack: () => changeText(selectText(title))
        });

      });

    }, []);

    const typingRef = useRef<NodeJS.Timeout | null>(null);
    const eraseRef = useRef<NodeJS.Timeout | null>(null);

    const clearAnimations = () => {
      if (typingRef.current) {
        clearInterval(typingRef.current);
        typingRef.current = null;
      }

      if (eraseRef.current) {
        clearInterval(eraseRef.current);
        eraseRef.current = null;
      }
    };

    const changeText = (newText: string) => {

      clearAnimations(); // 🔴 detener animaciones anteriores
      gsap.killTweensOf(textRef.current);

      if (!textRef.current) return;

      textRef.current.textContent = ""; // 🔴 borrar texto inmediatamente

      typeText(newText);
    };

    const typeText = (text: string) => {
      if (!textRef.current) return;

      let i = 0;
      textRef.current.textContent = "";

      typingRef.current = setInterval(() => {
        if (!textRef.current) return;

        textRef.current.textContent += text[i];
        i++;

        if (i >= text.length && typingRef.current) {
          clearInterval(typingRef.current);
        }
      }, 40);
    };

    const boxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

      if (!boxRef.current) return;

      if (open) {
        gsap.to(boxRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.2,
          ease: "power2.out"
        });
      } else {
        gsap.to(boxRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.2,
          ease: "power2.in"
        });
      }

    }, [open]);

    useEffect(() => {
      if (!open) {

      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3
      });

      tl.to(tico.current, {
        y: 10,
        duration: 0.2,
        ease: "linear"
      });

      tl.to(tico.current, {
        y: -10,
        duration: 0.4,
        ease: "linear"
      });
      tl.to(tico.current, {
        y: 10,
        duration: 0.4,
        ease: "linear"
      });

      tl.to(tico.current, {
        y: -10,
        duration: 0.4,
        ease: "linear"
      });
      tl.to(tico.current, {
        y: 10,
        duration: 0.4,
        ease: "linea"
      });

      tl.to(tico.current, {
        y: -10,
        duration: 0.4,
        ease: "linear"
      });

      tl.to(tico.current, {
        y: 0,
        duration: 0.2,
        ease: "linear"
      });

      } else {
        gsap.killTweensOf(tico.current);
        gsap.set(tico.current, { y: 0 });
      }
    }, [open]);

    return (

      <main className="w-full h-full max-w-screen! bg-white! overflow-hidden relative">

        <div className="drawer z-3! ">
          <input  id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col ">
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
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay bg-transparent! "></label>
            <ul className="linkList menu bg-grey/5 backdrop-blur-xl min-h-full w-full p-4 text-lg font-semibold">
              {/* Sidebar content here */}
              <li><a href="#inicio" className="closeMenu active:bg-primary flex!"><p className="w-full px-4 py-2">Inicio</p></a></li>
              <li><a href="#tdo" className="closeMenu active:bg-primary flex!"><p className="w-full px-4 py-2">TDO</p></a></li>
              <li><a href="#tico" className="closeMenu active:bg-primary flex!"><p className="w-full px-4 py-2">Tico</p></a></li>
              <li><a href="#quienesSomos" className="closeMenu active:bg-primary flex!"><p className="w-full px-4 py-2">¿Quiénes somos?</p></a></li>
              <li><a href="#contactanos" className="closeMenu active:bg-primary flex!"><p className="w-full px-4 py-2">Contáctanos</p></a></li>

            </ul>
          </div>
        </div>

        <div className="absolute top-0 left-0 w-full h-screen p-0! **:p-0! m-0!">
          <div className="w-full lg:h-full h-dvh">
            <div className="absolute right-1/2 top-8">
              <div className="*:overflow-visible! ">
                <SimpleParallax>
                  <Image src="/svg/form_1.svg" alt="" width={0} height={0} className="size-24 lg:size-36 "></Image>
                </SimpleParallax>
              </div>
            </div>

            <div className="absolute top-5/12 -right-8">
              <div className="*:overflow-visible! ">
                <SimpleParallax>
                  <Image src="/svg/triangle_1.svg" alt="" width={0} height={0} className="size-24 lg:size-36"></Image>
                </SimpleParallax>
              </div>
            </div>

            <div className="absolute -left-58 top-36 rotate-45">
              <div className="*:overflow-visible! ">
                <SimpleParallax>
                  <Image src="/svg/star_1.svg" alt="" width={0} height={0} className="size-60 lg:size-74"></Image>
                </SimpleParallax>
              </div>
            </div>

            <div className="absolute -bottom-24 right-1/2">
              <div className="*:overflow-visible! ">
                <SimpleParallax>
                  <Image src="/svg/star_1.svg" alt="" width={0} height={0} className="size-40 lg:size-60"></Image>
                </SimpleParallax>
              </div>
            </div>          
          </div>
        </div>

        <section ref={hero} id="inicio" className="relative w-full h-screen max-h-screen pt-24 lg:p-0 m-0! overflow-x-hidden">

          <div className="relative grid grid-cols-12 h-full w-full">
            <div className="col-span-12 lg:col-span-8 text-grey flex flex-wrap items-center">
              <div className="px-4 lg:px-16 flex flex-wrap justify-center w-full">
                  <h1 className="text-3xl lg:text-5xl text-center font-semibold h-fit w-full ">Software de apoyo para el estudio y seguimiento del TDO</h1>
                  
                  <p className="mt-8 lg:mt-16 text-xl h-fit w-sm lg:min-w-[500] text-center">Una herramienta tecnológica diseñada para fortalecer el análisis psicológico y la toma de decisiones clínicas.</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-4 flex justify-center items-center overflow-hidden">
              <div className="lg:hover-3d">
                <figure className=" rounded-2xl">
                  <Image src="/svg/heroImage.svg" alt="Imagen Hero" width={0} height={0} className="w-lg h-lg lg:scale-125 -translate-x-1/12 "></Image>
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
          <div className=" relative py-0 lg:py-8 ">
            <img src="/png/container_1.png" alt="" className="invisible lg:visible w-full h-full absolute top-0 left-0"/>
            <img src="/png/container_1_3.png" alt="" className="lg:invisible w-full h-full absolute top-0 left-0"/>

            {/* <Image src="/png/container_1.png" alt="" width={0} height={0} className=" w-full"></Image> */}
            <div className=" py-18 lg:py-0 flex flex-wrap flex-col-reverse lg:grid grid-cols-12 px-8 relative">
              <div className="px-2 lg:px-0 col-span-12 lg:col-span-4 relative flex justify-center items-center pt-8 lg:pt-15 w-full">
                <div className="reveal-3d">
                  <figure className="bg-none! rounded-full relative flex justify-center items-center w-full">
                    <img src="/png/angryKid.png" alt="" width={0} height={0} className="relative w-full lg:w-84"/>
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

              <div className="col-span-12 lg:col-span-8 flex items-center justify-center ">
                <div className="lg:px-12 grid gap-2 lg:gap-12 text-grey">
                  <h2 className="reveal text-3xl lg:text-5xl font-semibold text-center opacity-90">¿Qué es el TDO?</h2>

                  <p className="reveal text-center text-lg lg:text-xl opacity/80">Es el Trastorno Desafiante de Oposición, teniendo un patrón recurrente o persistente de conducta negativa, desafiante o incluso hostil dirigida a figuras de autoridad.</p>
                </div>
              </div>
            </div>

          </div>
        </section> 

        <div className="w-full h-fit relative">
          <div className="absolute -top-15 lg:-top-70 right-1/2">
            <div className="*:overflow-visible! ">
              <SimpleParallax>
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-40 lg:size-80 "></Image>
              </SimpleParallax>
            </div>
          </div>
        </div>

        <div className="w-full h-fit relative">     

          <div className="absolute -left-55 lg:-left-60 top-40 rotate-45">
            <div className="*:p-24 size-120 *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-30 lg:size-80 "></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute top-86 -right-20 lg:-right-40">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-33 lg:size-66"></Image>
              </SimpleParallax>
            </div>
          </div>
        </div>

        <section className="mt-8 lg:mt-0 text-grey z-1 relative">
          <article className="grid gap-6 lg:gap-0 grid-cols-12 relative">
            <div className=" absolute -bottom-1/12 right-1/4">
              <div className="*:overflow-visible! *:w-full *:h-full">
                <SimpleParallax >
                  <Image src="/svg/circlePink.svg" alt="" width={0} height={0} className="size-24 lg:size-44 rotate-15"></Image>        
                </SimpleParallax>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 flex items-center relative">
              <div className="px-8 lg:px-16 w-full flex flex-wrap justify-end gap-8">
                <h3 className="reveal text-center lg:text-right font-bold text-3xl lg:text-4xl w-full">Impacto del TDO en niños y adolescentes en Mexico</h3>

                <p className="reveal text-center lg:text-right text-lg lg:text-xl lg:w-100">En Mexico, el <b>TDO</b> esta presente en 1600 niños de cada 10 000. Una prevalencia del 16%</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 relative flex justify-center items-center">
              <div className="reveal-3d">
                <figure className="relative flex justify-center items-center rounded-full border-dashed border-grey/30 border-8 lg:border-11 p-1">
                  {/* <img src="/png/greenCircleBorder.png" alt="" width={0} height={0} className="relative w-106 h-106"/> */}
                  {/* <img src="/png/grafica1.png" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 h-11/12 rounded-full"/> */}
                  <div className="relative w-[80vw] h-[80vw] lg:w-106 lg:h-106 bg-linear-to-r from-aqua to-aqua-gradient rounded-full p-2.5">
                    <div className="bg-white relative w-full h-full rounded-full flex justify-center items-center overflow-hidden">
                      <div className="w-9/12 h-9/12 relative -left-5">
                        <Bar data={data1} options={options1} className="h-full" height={"100%"}/>
                      </div>
                    </div>           
                  </div>
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

          <article className="flex flex-wrap flex-col-reverse lg:grid grid-cols-12 relative mt-6 lg:mt-0 gap-6 lg:gap-0">
            
            <div className="col-span-12 lg:col-span-6 relative flex justify-center items-center w-full">
              <div className="reveal-3d">
                <figure className="relative flex justify-center items-center rounded-full border-dashed border-grey/30 border-8 lg:border-11 p-1">
                  {/* <img src="/png/greenCircleBorder.png" alt="" width={0} height={0} className="relative w-106 h-106"/> */}
                  {/* <img src="/png/grafica1.png" alt="" width={0} height={0} className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-11/12 h-11/12 rounded-full"/> */}
                  <div className="relative w-[80vw] h-[80vw] lg:w-106 lg:h-106 bg-linear-to-r from-aqua to-aqua-gradient rounded-full p-2.5">
                    <div className="bg-white relative w-full h-full rounded-full flex justify-center items-center overflow-hidden">
                        <div className="w-3/4 h-3/4">
                          <Bar data={data1} options={options1} />
                        </div>
                    </div>           
                  </div>
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
            
            <div className="col-span-6 flex items-center relative w-full">
              <div className="px-8 lg:px-16 flex flex-wrap justify-start gap-8">
                <h3 className="reveal text-center lg:text-left font-bold text-3xl lg:text-4xl w-full">Edad vulnerable</h3>

                <p className="reveal text-center lg:text-left text-lg lg:text-xl lg:w-100">
                  La etapa entre 5 y 9 años es crucial para el correcto 
                  diagnostico y tratamiento. No obstante, tambien
                  puede presentarse en otras edades.
                </p>
              </div>
            </div>
            
          </article>        
        </section>

        <div className="w-full h-2 relative ">
          <div className="absolute bottom-70 lg:-bottom-66 -left-28 lg:-left-36 rotate-90">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-48 lg:size-96"></Image>
              </SimpleParallax>
            </div>
          </div>
          
          

          <div className="absolute bottom-32 lg:bottom-0 -right-12 lg:right-0">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax >
                <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-44 lg:size-54"></Image>        
              </SimpleParallax>
            </div>
          </div> 
        </div>

        <section id="tico" className="relative w-full z-1">
          
          <img src="/png/container_2.png" alt="" className="invisible lg:visible h-full w-full h-auto absolute top-1/2 -translate-y-1/2 left-0"/>
          <img src="/png/container_2_2.png" alt="" className="lg:invisible h-full absolute top-1/2 -translate-y-1/2 left-0"/>

          {/* <Image src="/svg/container_2.svg" alt="" fill className="h-auto w-auto"></Image> */}
          
          
          <article className="w-full py-8 lg:py-24 relative">
            
            <img src="/png/tico_gis1.png" alt=""  className="absolute right-0 top-1/12 lg:top-1/12 w-7/8 lg:w-3/8 opacity-70"/>

            <img src="/png/star1.png" alt=""  className="absolute left-1/8 bottom-2/8 lg:bottom-3/8 w-7/8 lg:w-3/8 opacity-70"/>

            <img src="/png/triangle.png" alt=""  className="absolute -right-1/12 bottom-12 w-7/8 lg:w-3/8 opacity-70 rotate-135"/>

            <div className="grid inline-flex w-full items-center justify-center my-4 lg:my-8">
              <div className="w-4/12">
                <img src="/png/line1.png" alt=""  className="w-full"/>
              </div>

              <div>
                <img src="/png/rombo.png" alt="" />
              </div>

              <div className="w-4/12 ">
                <img src="/png/line1.png" alt=""  className="w-full"/>
              </div>

            </div>

            <div className="py-0 relative w-full">

              <div className="bg-grey/30 blur-sm absolute top-0 left-0 w-full h-full  ">

              </div>

              <div className="relative grid gap-0 w-full">
                <h2 className="reveal text-3xl lg:text-5xl font-bold text-center text-grey mt-10 opacity-95">Conoce a TICO</h2>

                <div className="w-full pt-4 pb-10 lg:py-10! flex flex-col items-center">

                  <div className="relative w-full max-w-6xl overflow-hidden">
            
                    <div className="reveal w-full relative flex lg:hidden items-center justify-center h-[60vh]">
                      {images.map((src, index) => {
                        const offset = index - active;
                        const absOffset = Math.abs(offset);

                        return (
                          <div
                            key={index}
                            className="w-full flex justify-center absolute transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)]"
                            style={{
                              transform: `
                                translateX(${offset * 260}px)
                                scale(${1 - absOffset * 0.2})
                              `,
                              opacity: absOffset > 2 ? 0 : 1 - absOffset * 0.3,
                              zIndex: 1 - absOffset
                            }}
                          >
                            <img
                              src={"/png/" + src}
                              className="w-11/12 h-[60vh] object-cover rounded-2xl shadow-xl cursor-pointer"
                              onClick={() => {
                                setActive(index);
                                setIsPaused(true);
                              }}
                            />
                          </div>
                        );
                      })}
                    </div>

                    <div className="reveal hidden lg:flex items-center justify-center gap-6 transition-all duration-500">

                      {images.map((src, index) => {
                        const isActive = index === active;

                        return (
                          <div
                            key={index}
                            className={`
                              overflow-hidden rounded-xl transition-all duration-500 ease-in-out drop-shadow-lg 
                              ${isActive
                                ? "visible lg:w-6xl lg:h-[406px] w-10/12 h-[350px] "
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

                    <button
                      onClick={prev}
                      className="z-1 absolute left-2 top-1/2 -translate-y-1/2 bg-grey/50 text-white px-3 py-4 rounded-full text-xl"
                    >
                      ◀
                    </button>

                    <button
                      onClick={next}
                      className="z-1 absolute right-2 top-1/2 -translate-y-1/2 bg-grey/50 text-white px-3 py-4 rounded-full text-xl"
                    >
                      ▶
                    </button>
                  </div>

                  <div className="flex gap-3 mt-8">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActive(index)}
                        className={`
                          size-4 lg:size-6 rounded-full transition-all duration-300
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

            <div className="w-full flex justify-center py-10 mt-20 mb-12 lg:mt-35 lg:mb-30 relative">
              <div className="absolute bg-grey/30 blur-sm w-full h-full scale-y-135 bottom-1/2 translate-y-1/2"></div>
              <div className="reveal w-9/12 lg:w-7/12 relative">
                <img src="/png/sideBarLeft.png" alt=""  className=" z-1 h-full left-0 -translate-x-full absolute scale-y-145 "/>

                <img src="/png/sideBarLeft.png" alt=""  className=" z-1 h-full right-0 translate-x-full absolute scale-y-145"/>

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

            <div className="grid inline-flex w-full items-center justify-center my-4 lg:my-8 rotate-180">
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

          </article>

        </section>
        

        <div className="w-full h-2 relative">
          <div className="absolute -bottom-20 lg:-bottom-24 -left-12">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.8}>
                <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-40 lg:size-100 "></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute -bottom-30 -right-12 lg:right-36">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.8}>
                <Image src="/svg/starGreen.svg" alt="" width={0} height={0} className="size-25 lg:size-50 "></Image>        
              </SimpleParallax>
            </div>
          </div>    
        </div>

        <section id="quienesSomos" className="text-grey relative z-1 pt-6 pb-12 w-full px-8 lg:px-0">
          <h2 className="reveal text-3xl lg:text-5xl font-bold text-center mb-4 lg:mb-16">¿Quiénes somos?</h2>

          <article className="grid grid-cols-12 *:flex *:items-start *:justify-center lg:px-12 gap-6 lg:gap-0">

            <div className="col-span-12 lg:col-span-7 lg:px-30 w-full">
              <div className="z-1 flex items-center w-full h-full">
                  <p className="reveal text-center text-lg lg:text-xl w-full h-fit">Somos una iniciativa que une tecnología y psicología para atender el Trastorno Desafiante por Oposición.
                    Diseñamos un videojuego terapéutico capaz de medir y registrar métricas de conducta en tiempo real mientras el paciente interactúa con la plataforma.
                  </p>
              </div>
            </div>

            <div className="z-1 col-span-12 lg:col-span-5">
              <div className="reveal-3d">
                <figure className="border-grey/30 border-8 p-1 lg:p-4 border-dashed">
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

          <article className="relative flex wrap flex-col-reverse lg:grid grid-cols-12 *:flex *:justify-center lg:px-12 mt-6 lg:mt-12 gap-6 lg:gap-0">

            <div className="absolute -top-1/2 lg:-top-3/4 right-1/4">
              <div className="*:overflow-visible! *:w-full *:h-full">
                <SimpleParallax scale={1.8}>
                  <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-30 lg:size-60"></Image>
                </SimpleParallax>
              </div>
            </div>    

            <div className="z-1 relative col-span-12 lg:col-span-5">
              <div className="reveal-3d">
                <figure className="border-grey/30 border-8 p-1 lg:p-4 border-dashed">
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

            <div className="z-1 relative col-span-12 lg:col-span-7 lg:px-30 text-grey flex items-center! h-full">
              <p className="reveal text-lg lg:text-xl text-center">
                Buscamos proporcionar información clave al especialista para su análisis. Al recibir estos datos, el terapeuta puede evaluar los resultados y detectar con precisión los puntos fuertes del niño, facilitando un tratamiento basado en evidencia concreta.
              </p>
            </div>

          </article>        

        </section>

        <div className="w-full relative">
          <div className="absolute lg:-bottom-80 bottom-20 -right-20 lg:-right-40">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.8}>
                <Image src="/svg/spiralGreen.svg" alt="" width={0} height={0} className="size-40 lg:size-80"></Image>
              </SimpleParallax>
            </div>
          </div>    


          <div className="absolute bottom-80 lg:bottom-0 -left-8 lg:-left-36">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.8}>
                <Image src="/svg/starGreen.svg" alt="" width={0} height={0} className="size-24 lg:size-46 "></Image>        
              </SimpleParallax>
            </div>
          </div>            
        </div>

        <section id="contactanos" className="relative w-full z-1">
          {/* <img src="/svg/container_3.svg" alt="" className="w-full h-auto shadow-xl"/> */}
          <img src="/png/container_3.png" alt="" className="w-full h-full absolute top-0 left-0 rotate-180"/>

          <article className="w-full h-full flex items-center text-grey relative py-10 px-4">
            <div className="align-middle items-center grid grid-cols-12 w-full">
              <div className="col-span-12 lg:col-span-5 flex justify-center lg:pr-12 items-center">
                <div className="w-full flex flex-wrap justify-center lg:justify-end items-center ">
                  <div className="lg:w-6/8">
                    <h2 className="reveal font-bold text-3xl lg:text-5xl text-center lg:text-right w-full">Alianzas que transforman</h2>
                  </div>
                  <p className="reveal my-4 lg:mt-12 lg:w-6/8 text-center lg:text-right text-lg lg:text-xl">
                    Buscamos conectar con mentes y organizaciones que compartan nuestro deseo de mejorar la salud mental infantil. 
                    <br /> <br />
                    Si nuestra visión resuena contigo, exploremos cómo podemos colaborar.
                  </p>
                </div>
              </div>

              <div className="reveal col-span-12 lg:col-span-7  flex justify-center">
                <div className="bg-white shadow-lg overflow-hidden relative rounded-l-xl w-full max-w-2xl h-full lg:p-6 flex flex-wrap gap-8 lg:pr-22">
                  {/* <div className="w-full border-2 border-red-400/30 absolute top-[4rem] left-0"></div> */}
                  <img src="jpg/notebook.jpg" alt="" className="opacity-40 absolute left-0 top-0 h-full lg:h-auto"/>
                  <div className="hidden lg:block h-full border-2 border-red-400/30 absolute top-0 right-8 lg:right-16"></div>
                  <div className="size-5 lg:size-6 bg-yellow inset-shadow-xs rounded-full absolute right-4 lg:right-8 translate-x-1/2 top-1/12"></div>
                  <div className="size-5 lg:size-6 bg-yellow inset-shadow-xs rounded-full absolute right-4 lg:right-8 translate-x-1/2 top-4/12"></div>
                  <div className="size-5 lg:size-6 bg-yellow inset-shadow-xs rounded-full absolute right-4 lg:right-8 translate-x-1/2 top-7/12"></div>
                  <div className="size-5 lg:size-6 bg-yellow inset-shadow-xs rounded-full absolute right-4 lg:right-8 translate-x-1/2 top-10/12"></div>
                
                  <form action="" className="z-1 relative lg:px-12 *:w-full flex flex-wrap items-center gap-8 w-full h-full text-lg p-4 lg:p-0 mr-8 lg:mr-0 border-r-4 lg:border-r-0 border-red-400/30">
                    
                    <h3 className="text-4xl font-bold text-center w-full h-fit relative">Formulario</h3>

                    <input type="text" placeholder="Nombre completo:" className="bg-white border-aqua border-2 p-2 rounded-md text-sm" />
                  
                    <input type="text" placeholder="Correo de contacto:" className="bg-white border-aqua border-2 p-2 rounded-md text-sm" />

                    <input type="text" placeholder="Area de interes:" className="bg-white border-aqua border-2 p-2 rounded-md text-sm" />

                    <textarea name="" id="" className="bg-white border-aqua border-2 p-2 rounded-md min-h-32 text-sm" placeholder="Mensaje:"></textarea>

                    <div className="flex justify-center">
                      <input type="submit" className="btn bg-aqua border border-none text-grey/80 px-8" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </article>

        </section>

        <div className="w-full relative  mt-12">
          <div className="absolute -bottom-10 lg:-bottom-46 right-1/2 translate-x-1/2 rotate-90">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.2}>
                <Image src="/svg/spiralPink.svg" alt="" width={0} height={0} className="size-35 lg:size-86"></Image>
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute -bottom-8 lg:-bottom-24 -left-4 lg:left-12">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.2}>
                <Image src="/svg/starPink.svg" alt="" width={0} height={0} className="size-20 lg:size-40 "></Image>        
              </SimpleParallax>
            </div>
          </div>

          <div className="absolute -top-8 lg:-top-36 -right-4 lg:right-12 ">
            <div className="*:overflow-visible! *:w-full *:h-full">
              <SimpleParallax scale={1.2}>
                <Image src="/svg/circlePink.svg" alt="" width={0} height={0} className="size-20 lg:size-40 "></Image>        
              </SimpleParallax>
            </div>
          </div>                
        </div>

        <footer className="relative w-full min-h-24 mt-12 inset-shadow-sm  backdrop-blur-md shadow-md bg-grey/15 grid justify-center gap-4 lg:inline-flex items-center lg:justify-between py-4 px-4">
                <div className="inline-flex items-center gap-6">
                  <img src="/svg/ticoHead.svg" alt="" />
                  <p>tico.support@gmail.com</p>
                </div>
                
                <div>
                  <ul className="h-full grid lg:grid-cols-2 gap-2 items-center">
                    <li className="col-span-2 w-full text-center font-semibold">Rutas</li>
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
                    
        <div className="fixed left-0 lg:left-0 bottom-0 lg:bottom-0 z-2 inline-flex justify-start items-end-safe">

          <div className="relative -left-4 rounded-2xl px-6 pt-6 ">
            <div className="size-60 absolute lg:-left-20 -left-33 blur-md lg:-bottom-74 -bottom-43  bg-grey"></div>
            <img src="/png/caja_norma.png" alt="" className="size-60 absolute lg:-left-10 -left-8 lg:-bottom-32 -bottom-40"/>

            <img
              ref={tico}
              src="/png/tico_sitting_right.png"
              alt=""
              className="peer relative z-10 w-25 lg:w-38 lg:max-h-40 cursor-pointer
              transition-rotate duration-300 hover:-rotate-15 -left-3
              hover:opacity-85 
              "
              onClick={() => setOpen(!open)}
            />

            {/* <div className="w-full h-full scale-x-110 scale-y-200 
              absolute -left-1 top-14
              opacity-0
              peer-hover:opacity-60
              transition-opacity 
              transition-rotate peer-hover:-rotate-5
              duration-300
              radial-gradient
            "
            ></div> */}
          </div>

          <div ref={boxRef} className={`duration-300 transition-all relative bottom-2 lg:bottom-4 -left-12 max-w-1/2 bg-none rounded-xl `}>
            <img src="/png/dialogue.png" alt="" className="absolute w-full h-full bottom-1/2 right-1/2 translate-1/2 border-aqua border-2 rounded-lg shadow-2xl"/>

            <p ref={textRef} className="p-2 text-xs lg:text-lg text-white min-w-50 lg:min-h-18 tracking-widest mix-blend-difference relative ">
              Hola
            </p>

            {/* <button
              onClick={() => setOpen(false)}
              className="text-sm px-3 py-1 bg-red-500 text-white rounded"
            >
              Cerrar
            </button> */}

          </div>
        </div>
        

        {loading && (
          // <div
          //   ref={loaderRef}
          //   className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden perspective-[1000px] *:overflow-hidden"
          // >
          //   <div className="loader-bg bg-teal absolute inset-0">
          //     <img src="/png/tico_gis1.png" alt=""  className="absolute -right-3/12 -top-2/12 lg:-right-1/12 lg:-top-2/12 w-xl lg:w-2xl opacity-50"/>

          //     <img src="/png/star1.png" alt=""  className="absolute -left-3/12 lg:-left-1/12 lg:-top-1/12 top-3/12 lg:bottom-3/8 w-7/8 lg:w-md opacity-60 rotate-30"/>

          //     <img src="/png/triangle.png" alt=""  className="absolute left-3/12 lg:left-2/12 -bottom-1/12 w-7/8 lg:w-sm opacity-90 -rotate-20 lg:-rotate-10"/>
          //   </div>
          //   <div className="loader-bg bg-yellow absolute inset-0 translate-y-full">
          //     <img src="/png/tico_gis1.png" alt=""  className="absolute -right-3/12 -top-2/12 lg:-right-1/12 lg:-top-2/12 w-xl lg:w-2xl opacity-50"/>

          //     <img src="/png/star1.png" alt=""  className="absolute -left-3/12 lg:-left-1/12 lg:-top-1/12 top-3/12 lg:bottom-3/8 w-7/8 lg:w-md opacity-60 rotate-30"/>

          //     <img src="/png/triangle.png" alt=""  className="absolute left-3/12 lg:left-2/12 -bottom-1/12 w-7/8 lg:w-sm opacity-90 -rotate-20 lg:-rotate-10"/>
          //   </div>
          //   <div className="loader-bg bg-pink absolute inset-0 translate-y-full">
          //     <img src="/png/tico_gis1.png" alt=""  className="absolute -right-3/12 -top-2/12 lg:-right-1/12 lg:-top-2/12 w-xl lg:w-2xl opacity-50"/>

          //     <img src="/png/star1.png" alt=""  className="absolute -left-3/12 lg:-left-1/12 lg:-top-1/12 top-3/12 lg:bottom-3/8 w-7/8 lg:w-md opacity-60 rotate-30"/>

          //     <img src="/png/triangle.png" alt=""  className="absolute left-3/12 lg:left-2/12 -bottom-1/12 w-7/8 lg:w-sm opacity-90 -rotate-20 lg:-rotate-10"/>
          //   </div>
          //   <div className="loader-bg bg-green absolute inset-0 translate-y-full">
          //     <img src="/png/tico_gis1.png" alt=""  className="absolute -right-3/12 -top-2/12 lg:-right-1/12 lg:-top-2/12 w-xl lg:w-2xl opacity-50"/>

          //     <img src="/png/star1.png" alt=""  className="absolute -left-3/12 lg:-left-1/12 lg:-top-1/12 top-3/12 lg:bottom-3/8 w-7/8 lg:w-md opacity-60 rotate-30"/>

          //     <img src="/png/triangle.png" alt=""  className="absolute left-3/12 lg:left-2/12 -bottom-1/12 w-7/8 lg:w-sm opacity-90 -rotate-20 lg:-rotate-10"/>
          //   </div>
          //   <div className="loader-bg bg-grey/05 absolute inset-0 translate-y-full">
          //   </div>

          //   <div id="logo" ref={logoRef} className="flex items-center gap-2 lg:gap-6 z-10 absolute top-1/2 left-1/2 -translate-1/2">
          //     <img src="/svg/ticoHead.svg" className="size-20 lg:size-28" />
          //     <p className="text-3xl lg:text-5xl font-bold text-grey">TICO</p>
          //   </div>


          // </div>

          <LoadingScreen onDone={undefined}></LoadingScreen>
        )}


      </main>


    );
  }
