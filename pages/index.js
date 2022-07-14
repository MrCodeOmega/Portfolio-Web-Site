import Link from "next/link";
import Layout from "../components/Layout";
import { getAllProjects } from "../functions/getAllProjects";
import ProjectCard from "../components/ProjectCard";


export default function ProjectsPage({projects}){
    console.log(projects)
    return (
        <Layout title={"AKAR EMLAK"} description={"BAYRAMİÇ'in Güvenilir adresi..."}>
         
          <div id="hero" className="">
        <nav id="nav" className="text-black">
            <img src="https://i.postimg.cc/DydN4snm/menu.png" alt="" id="menu-img"/>
            <img src="https://i.postimg.cc/RZSD7FZd/logo.png" alt="" id="logo"/>
            <ul id="nav" >
                <li id="nav" className="px-2"><a id="nav" href="/arsalar" >Arsalar</a></li>
                <li id="nav"className="px-2"><a id="nav"  href="#bottom">İletişim</a></li>
                
                <li id="nav" className="px-2 "><button  type="button" href="" className="text-gray-500 disabled:opacity-60" >(Yakında) Emlak {"&"} Kafe</button></li>
            </ul>
           
        </nav>

        <div id="lamp-container" className="hidden md:block">
        <img className="rounded-full w-full" src="/images/logo.png" alt="" id="lamp"/>
            
        </div>
        <hr className="border-slate-400" />
        <div id="text-container" className="">
            <h1>AKAR EMLAK<br/></h1>
            <h2>Emlak / Danışmanlık</h2> 
            <p>Çanakkale ve Kazdağlarının eşsiz doğasına hoş geldiniz.<br/></p>
            <a href="/arsalar">Arsalara Göz Atın</a>
            
        </div>
    </div>
    <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 mb-28">
     {/* 1. Resim */}

    <a href="http://bayramic.gov.tr/kurumlar/bayramic.gov.tr/Haber-Gorselleri/2022/Turizm-Haritasi/BAYRAMIC-TURIZM-HARITASI-_-HD-GORSEL.JPG" target="_blank" id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#05050510] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/2.jpg"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Bayramiç Haritası
                </h2>
            </div>
            </div>

        </a>   

        {/* 2. Resim */}
        <div id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3B82F6] to-[#9333EA] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/3.jpg"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Ayazma
                </h2>
            </div>
            </div>

        </div>   
         {/* 3. Resim */}
         <div id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3B82F6] to-[#9333EA] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/5.jpg"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Kazdağı
                </h2>
            </div>
            </div>

        </div> 
         {/* 4. Resim */}
         <div id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3B82F6] to-[#9333EA] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/7.jpg"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Ayazma Şelale
                </h2>
            </div>
            </div>

        </div>   
         {/* 5. Resim */}
         <div id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#6EE787] via-[#3B82F6] to-[#9333EA] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/9b.jpg"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Ayazma
                </h2>
            </div>
            </div>

        </div>  
         {/* 6. Resim */}
         <a href="https://www.google.com/maps/place/Bayramiç,+Çanakkale/@39.7950379,26.6032667,13.71z/data=!4m13!1m7!3m6!1s0x14b0e840a8536e5f:0x424d722dbe7816a!2zRXZjaWxlciwgQmF5cmFtacOnL8OHYW5ha2thbGU!3b1!8m2!3d39.775904!4d26.771464!3m4!1s0x14b0f0278f7a70e3:0x945771c4e3746d7d!8m2!3d39.809525!4d26.6120625?hl=tr" target="_blank" id="projectCardLink" rel="noopener noreferrer"
        className="rounded-xl w-full bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#00000015] p-1 first-letter:hover:cursor-pointer shadow-lg"
        >  
        
            <div id="cardBackground" className="w-full h-full p-4 bg-white rounded-lg">
            <div className="flex flex-col items-center space-y-4" >
                <img src="/images/12.png"  className="object-cover w-full rounded-lg max-h-64" />
                <h2 id="projectCardTitle" className="text-2xl font-semibold text-gray-900 ">
                 Bayramiç Lokasyon
                </h2>
            </div>
            </div>

        </a>  




    </div>
   <hr className="border-slate-400" />
    <footer id="bottom" class="site-footer">
      <div id="footer-container">
        <div className="grid grid-cols-6 gap-4 items-stretch">
          <div className="col-start-1 col-end-3" >
            <h6>Adres</h6>
            <p class="text-justify "><i>Çanakkale / Bayramiç </i> <br/>Ruhi yalçın caddesi Cami Kebir Mahallesi No:13</p><p className="text-gray-400">Evciler yolu Üzeri.</p>
            <br/>
            <i id="warning" className="text-purple-900">Mutlaka arayın.</i>
          </div>

         
          <div className="col-start-5 col-end-6">
            <h6>Telefon</h6>
            <ul class="footer-links">
              <li>0542 820 46 55</li>
              <li>0543 288 35 46</li>
              <li></li>   
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>

          <div>
            <h6>Diğer</h6>
            <ul class="footer-links">
              <li>Whatsapp'tan ulaşın</li>
              <li>Dilediğinizce arsa sorun</li>
              <li>Arazileri Gezin</li>
              <li className="text-red-800">Ayazmayı ziyaret edin.</li>
              
            </ul>
          </div>
        </div>
        <hr className="border-slate-400"/>
      </div>
      <br/>
      <div className="grid grid-cols-3 gap-4 items-stretch">
        
          <div className="col-start-1 col-end-2">
            
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="https://www.instagram.com/rmznjr/"><i class="fa fa-instagram"></i></a></li>
              <li><a class="dribbble" href="https://www.instagram.com/streetballbayramic/"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="https://www.linkedin.com/in/hüseyin-akar-10836a1b6/"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
           
          </div>


          <div className="col-start-3 text-gray-700">
            <p class="copyright-text" >Copyright &copy; 2022 All Rights Reserved by{" "} 
         <a href="/portfolio" target="_blank">code0mega</a>.
            </p>
          </div>

         
        
      </div>
</footer>
        </Layout>
        );
}

export const getStaticProps = async ()=>{
    const projects = await getAllProjects();
    return{
        props:{
            projects
        }
    };
}