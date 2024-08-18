 


export default function Contact(){

    const config = {
        email: 'bbarath601@gmail.com',
        phone: '+0234758397',
    };

    return(
        <>
        <section id="contact" className="flex flex-col  bg-primary px-5 pb-10 py-32  ">
            
         <div className="   flex flex-col items-center text-white">  
             
                <h1 className='  text-4xl border-b-4  border-secondary   font-bold w-[140px]' >Contact</h1>
                <p className="  mt-5 pb-5">If you want to discuss more in detail, please contact me </p>
                 <p className="py-2"> <span className="font-bold">Email :</span>{config.email}</p>
                 <p className="py-2"> <span className="font-bold">Phone : </span>{config.phone}</p>
            </div> 
        </section>
        
        
        
        
        </>
    )
}