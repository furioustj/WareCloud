import React from "react";

const Layout = ({children} : {children : React.ReactNode}) => { 
    return (
    <div className="flex min-h-screen">
         <section className="bg-purple p-10 hidden w-1/2 items-center justify-center lg:flex xl:w-2/5">
            <div className="flex max-h-[800px] max-w-[430px] flex-col justify-center space-y-12">
                
            </div>
            <div className="space-y-7 text-white gap-10">
                <h1 className="h1">The Best Way Of Storing Files</h1>
                <p className="body-1 items-center">A Warehouse of cloud storage.</p>
            </div>

           <img src = "/cloud-logo.png" width={200} height={200} className="transition-all hover:rotate-2 hover:scale-105" alt="cloud"/>

        </section>




        <section className="flex flex-1 flex-col items-center lg:justify-center p-4 py-10 lg:p-10 lg-py:0">

            <div className="mb-16 lg:hidden">
                <img src = "/warecloud-logo.png" alt="logo" width={300} height={120} className="h-auto w-[200px] lg:w-[250px]"/>

            </div>

          {children}
        </section>
       
    </div>
)};

export default Layout;