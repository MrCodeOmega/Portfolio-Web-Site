import Typical from 'react-typical'
import Link from 'next/link';
import React from 'react'
import Layout from "../../components/Layout";
import GithubIcon from '../../components/icons/Github';
import LinkedinIcon from '../../components/icons/Linkedin';
import InstagramIcon from '../..//components/icons/Instagram';
import PlaystoreIcon from '../../components/icons/Playstore';

const TypingAnimation = React.memo (()=>{
  return (
    <Typical
    steps={['Flutter Developer',2000, "Game Designer", 2000,'Game Developer',2000, 'Script Writer',2000,'Senior Html-CSS',2000,
    'Medium Writer',2000,"Video Game Writer",2000,"Quality assurance",2000,"Test Engineer",2000]}
        loop={10}
        wrapper="p"
    />
      
      )
},
(props,prevProps)=>true
);

export default function Home() {
  return (
    <Layout title={"Portfolio Section"} description={"My Portfolio"}>

      <img id="matrixIMG" 
      src="/images/matrix.gif"
      alt="ball-1" 
      className="hidden md:block h-1/5 absolute top-48 right-10 z-[1] opacity-0"/>
      {/* Bottom Section */}
       <img 
      src="/images/omega-logo.png"
      alt="ball-2" 
      className="hidden md:block h-8 absolute bottom-10 left-10 z-[1] "/>

      <p className="hidden md:block absolute bottom-0 right-10 z-[1]  text-transparent text-amber-600"> ...copyright © 2022  / byhsynakar@gmail.com</p>
      <main className="w-full h-full">
       
       <section className="h-full max-w-5xl mx-auto pt-16 md:pt-8">
         <div className="flex flex-col items-center justify-center md:items-start">
           <h4 id="baslik" className = "text-lg ">
             <span className="text-xl font-normal">Hello, </span>I'm 
           </h4>
           <h1 id="isim" className="mt-5 text-xl font-extrabold tracking-normal uppercase md:text-4xl md:mt-3">Hsyn AKAR</h1>
         </div>

        <div id="typicalSlide" className="mt-5 text-2xl font-normal md:mt-3">
          <TypingAnimation/>
        </div>
        {/* Social Accounts */}
        <div className=' flex items-center mt-8 space-x-6 md:mt-4'>

          <a id="socialButton" href="https://github.com/MrCodeOmega" target={"_blank"} rel="noopener noreferrer
          " className='flex items-center justify-center'><GithubIcon className={"w-12 h-12 fill-current "}/>   </a>
          {/* Linkedin */}
           <a id="socialButton" href="https://www.linkedin.com/in/hüseyin-akar-10836a1b6/" target={"_blank"} rel="noopener noreferrer
          " className='flex items-center justify-center'><LinkedinIcon className={"w-12 h-12 fill-current "}/>   </a>
           {/* PlayStore */}
<a id="socialButton" href="https://play.google.com/store/apps/developer?id=TeaPose+Games" target={"_blank"} rel="noopener noreferrer
          " className='flex items-center justify-center'><PlaystoreIcon className={"w-12 h-12 fill-current "}/>   </a>
           {/* Instagram */}
<a id="socialButton" href="https://www.instagram.com/code0mega/" target={"_blank"} rel="noopener noreferrer
          " className='flex items-center justify-center'><InstagramIcon className={"w-12 h-12 fill-current "}/>   </a>


        </div>
       
        {/* Code Area */}
        <article id="article" className="mt-3 md:mt-4 md:prose-lg ">
            <div>
              <pre>
                <code className="language-js">
                  <div className="flex items-center py-0 my-0 space-x-4 text-gray-500">
                    <span>// Portfolio.js /* CV */ </span>
                  </div>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-300">Todo:</span> Do your best today...
                  </p>
                  <p>
                    <span className="text-gray-500">//</span>{" "}
                    <span className="text-purple-700">code</span> anywhere!
                  </p>

                  <div className="flex items-center space-x-4">
                    <img
                      src="https://avatars.githubusercontent.com/u/67191835?v=4"
                      alt="Me"
                      className="w-10 h-10 rounded-full"
                    />

                    <div className="">
                      <p className="text-sm">
                        <span className="text-orange-300"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-orange-300"></span> =
                        ["Reactjs", "Nextjs", "Graphql", "Nodejs"];{" "}
                      </p>

                      <p className="text-sm">
                        <span className="text-red-500"> {">"} </span> const
                        techWeb
                        <span className="font-bold text-red-500">2</span> =
                        ["Php", "Asp.Net", "SQL", "BootStrap"];{" "}
                      </p>
                      <p className="text-sm">
                        <span className="text-lime-300"> {">"} </span> const
                        techGame
                        <span className="font-bold text-lime-600">3</span> =
                        ["Unity", "C#", "Collabrate", "Google Adsense"];{" "}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-8">
                    <Link href="/projects">
                      <a id="portButton" className="transition duration-300">Projects</a>
                    </Link>

                    <a id="portButton"
                      href="/portfolio"
                      target={"_blank"}
                      rel="noopener noreferrer"
                      className="transition duration-300"
                    >
                      Youtube
                    </a>
                  </div>
                </code>
              </pre>
            </div>
          </article>
       </section>

      </main>


     
    </Layout>
  
  )
}
