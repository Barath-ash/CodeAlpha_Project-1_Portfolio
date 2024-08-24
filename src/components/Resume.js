import Resume_img from '../assets/resume.jpg'
import Resume_PDF from '../assets/BARATH D-RESUME-1.pdf';


export default function Resume(){

    

    return(
        <>
        <section id='resume' className="flex flex-col md:flex-row bg-secondary px-5 pb-10 md:pb-0">
            <div className="py-5  md:w-1/2 flex justify-center md:justify-end">
            <img className="w-[300px]" src={Resume_img}  />
            </div>
         <div className="md:w-1/2  flex flex-row justify-center">  
            <div className="flex flex-col justify-center text-white  ">
                <h1 className='  text-4xl border-b-4 border-primary   font-bold w-[140px]' >Resume</h1>
                <p className="  mt-5 pb-5">You can view my resume <a className="btn" href={Resume_PDF} download="Resume"> Download  </a> </p>
                 
             </div>
            </div> 
        </section>
        
        
        
        
        </>
    )
}