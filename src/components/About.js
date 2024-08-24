import Aboutimg from '../assets/about.png'


export default function About(){

    const config = {
        line: 'Hi, My name is D Barath.  I am a Frontend web developer.  I built beautiful websites with React.js and Tailwind.CSS',
        line2: 'I am proficient in Frontend skills like React.js, Redux, Tool Kit, Axios, TailWind CSS,Sass, Css3 and many more.',
        line3: 'In backend I know Node.js, Express.js, MongoDB, and Mongoose ',
    };


    return(
        <>
        <section id='about' className="flex flex-col md:flex-row bg-secondary px-5 pb-10 md:pb-0">
            <div className="py-5  md:w-1/2">
            <img src={Aboutimg}  />
            </div>
         <div className="md:w-1/2  flex flex-row justify-center">  
            <div className="flex flex-col justify-center text-white  ">
                <h1 className='  text-4xl border-b-4 border-primary   font-bold w-[170px]' >About Me</h1>
                <p className="  mt-5 pb-5 text-lg">{config.line}</p>
                <p className="pb-5 text-lg">{config.line2} </p>
                    <p className="text-lg">{config.line3}</p>
             </div>
            </div> 
        </section>
        
        
        
        
        </>
    )
}