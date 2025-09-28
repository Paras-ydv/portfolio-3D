import { section } from 'motion/react-client'
import { useRef } from 'react'
import Card from '../components/Card'
import { Globe } from '../components/Globe';
import CopyEmailButton from '../components/CopyEmailButton';
import {Frameworks} from '../components/Frameworks';

const About = () => {
    const grid2container = useRef();
  return (
    <section className='c-space section-spacing'>
        <h2 className='text-heading'>About Me</h2>
        <div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'> {/* on medium screens (≥768px), the grid switches to 6 columns, on medium screens, every row has a fixed height of 18rem (~288px).*/}
            {/* Grid 1 */}
            <div className='flex items-end grid-default-color grid-1'>
                <img src="assets/coding-pov.png" alt="coding" 
                    className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'/>
                <div className='z-10'>
                    <p className='headtext'>Hi, I'm Paras</p>
                    <p className='subtext'>
                        Over the fast 2 years, I have develped my frontend and backend dev
                        skills to deliver dynamic software and web solutions
                    </p>
                </div>
                <div className='absolute inset-x-0 pointer-events-none -bottome-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo'></div>
            </div>
            {/* Grid 2 */}
            <div className='grid-default-color grid-2'>
                <div ref={grid2container} className='flex items-center justify-center w-full h-full '>
                    <p className='flex items-end text-5xl text-gray-500'>CODE IS CRAFT</p>
                    <Card 
                        text={"LEARN"} 
                        style={{rotate: "75deg", top: "30%", left: "20%"}}
                        containerRef={grid2container}
                    />
                    <Card 
                        text={"BUILD"} 
                        style={{rotate: "-30deg", top: "60%", left: "45%"}}
                        containerRef={grid2container}
                    />
                    <Card 
                        text={"CREATE"} 
                        style={{rotate: "90deg", bottom: "30%", left: "70%"}}
                        containerRef={grid2container}
                    />
                    <Card 
                        text={"INNOVATE"} 
                        style={{rotate: "-45deg", bottom: "55%", left: "0%"}}
                        containerRef={grid2container}    
                    />
                    <Card 
                        text={"SOLVE"} 
                        style={{rotate: "20deg", bottom: "10%", left: "38%"}}
                        containerRef={grid2container}
                    />
                    <Card
                        style={{ rotate: "30deg", top: "70%", left: "70%"}}
                        image="assets/logos/tailwindcss.svg"
                        containerRef={grid2container}
                    />
                    <Card
                        style={{ rotate: "-45deg", top: "70%", left: "25%"}}
                        image="assets/logos/react.svg"
                        containerRef={grid2container}
                    />
                </div>
            </div>
            {/* Grid 3 */}
            <div className='grid-black-color grid-3'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Time zone</p>
                    <p className='subtext'>I'm based in Mars, and open to work worldwide</p>
                </div>
                <figure className='absolute left-[30%] top-[10%]'>
                    <Globe/>
                </figure>
            </div>
            {/* Grid 4 */}
            <div className='grid-special-color grid-4'>
                <div className='flex flex-col items-center justify-center gap-4 size-full'>
                    <p className='text-center headtext'>Do you want to start a project together?</p>
                    <CopyEmailButton/>
                </div>
            </div>
            {/* Grid 5 */}
            <div className='grid-default-color grid-5'>
                <div className='z-10 w-[50%]'>
                    <p className='headtext'>Tech Stack</p>
                    <p className='subtext'>I specialize in a variety of languages, frameworks, and tools that allows me to build
                        robust and scalable applications. 
                    </p>
                </div>
                <div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
                    <Frameworks/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
