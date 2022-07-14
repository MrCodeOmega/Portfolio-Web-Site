import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';



const Layout= ({title,description,children})=>{
    return(
        <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property='og:site_name' content='Portfolio'/>
        <meta property='og:title' content={title}/>
        <meta property='og:description' content={description}/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <script src="https://cdn.tailwindcss.com"></script>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="code0mega" data-description="Support me on Buy me a coffee!" data-message="Maybe.. One day we drink together :)" data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
      </Head>
      <div id="background" className="relative z-10 px-3 overflow-hidden min-h-screen  antialiased font-montserrat">
          <div className="m-full h-full">
              <Header/>

              {children}
          </div>
           
      </div>
           
        </>
    )
}

export default Layout