import Link from "next/link";
import Layout from "../../components/Layout";
import ArsaCards from "../../components/ArsaCards";
import { getAllArsa } from "../../functions/getAllArsa";


export default function ArsaPage({projects}){
    
    return (
        <Layout title={"..PRojects"} description={"My projects"}>

            <section className="h-full max-w-5xl pt-4 mx-auto mb-16 md:pt-16">
                <Link href="/">
                    <a id="backButton"
                     className=" items-center space-x-4 font-semibold pb-6 text-gray-600 hover:text-gray-800">
                        <span> {'<---'} Back to MainPage</span>
                    </a>
                   
                </Link>

               

                {/* Projects */ }
                <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-3 mt-6"
                >
                    {projects.map(project=>(
                        <ArsaCards key={project.id} project={project}/>
                    ))}

                </div>
              

            </section>

        </Layout>
        );
}

export const getStaticProps = async ()=>{
    const projects = await getAllArsa();
    return{
        props:{
            projects
        }
      
    };
}