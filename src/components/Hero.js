import hero from '../assets/hero.png'
import { AiOutlineFacebook, AiOutlineGithub,  AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){

    const config = {
        subtitle: 'Im a Frontend Developer',
        social: 
            {
                Github: 'https://github.com/Barath-ash',
                Linkedin: 'https://www.linkedin.com/in/barath-d',
                Facebook: 'www.facebook.com',

            },
    };


    return(
        <>
       <section className="flex flex-col md:flex-row px-5 py-32 bg-primary justify-center">
    <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl   font-font-hero">Hi,
        <br/> Im <span className="text-black font-bold">D</span> Barath
        <p className='text-2xl'>
            {config.subtitle}
        </p>
        </h1>
        <div className='flex  py-10'>
           <a href={config.social.Github} className="pr-5 hover:text-white">< AiOutlineGithub size={40}/></a>
           <a href={config.social.Facebook} className="pr-5 hover:text-white">< AiOutlineFacebook size={40}/></a>
           <a href={config.social.Linkedin} className="hover:text-white">< AiOutlineLinkedin size={40}/></a>
        </div>
    </div>
        <img src={hero} className="md:w-1/3"></img>
       </section>



        </>
    )
}