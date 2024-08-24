import websiteImg1 from '../assets/Greenden.jpeg'
import websiteImg2 from '../assets/Nostra.jpeg'
import websiteImg3 from '../assets/Udemy.jpeg'


export default function Projects(){

       const config = {
        projects : [
            {
                Image: websiteImg2,
                description: '  A Ecommerce Website.  Built Using FrontEnd Languages.',
                link: 'https://barath-ash.github.io/NOSTRA/',
                

            },
            {
                Image: websiteImg1,
                description: 'Plant Ecommerce Website like The Sill, Built with HTML & CSS',
                link: 'https://barath-ash.github.io/Greenden-Tailwind/',
            },
            {
                Image: websiteImg3,
                description: '  Basic Udemy Website.  Built with React.JS & TailWind.',
                link: 'https://udemy-react-drab.vercel.app/',
            }
        ]
       }



      return(
       <>
       <section id='projects' className="flex flex-col py-20 pb-32 px-5 justify-center bg-primary text-white ">
         <div className="w-full">
            <div className="flex flex-col px-10 py-5">
            <h1 className=" text-4xl border-b-4 border-secondary   font-bold w-[140px]">  Projects</h1>
            <p className='mt-5 text-lg'>These are some of my best projects.  I have built these with HTML,CSS
                ,JavaScript, Tailwind and React.  Check them out.
            </p>

            </div>
         </div>
         <div className="w-full mt-5  ">
            <div className='flex flex-col  md:flex-row px-24 gap-20 '>
                {config.projects.map((project) =>(
                <div className='relative '>
                     <img  className="    md:h-[250px] w-[300px] "  src={project.Image}/> 
                       <div className='project-desc'>
                          <p className=' text-center py-5 px-5'>
                            {project.description}
                          </p>
                          <div className='flex justify-center'>
                        <a className='btn' target='_blank' href={project.link}>View Project </a>
                    </div>
                       </div>
                      
                </div>
              ))}
            </div>
         </div>





       </section>
       </>


      )


}