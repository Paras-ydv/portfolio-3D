import { useRef, useState } from 'react'
import { myProjects } from '../constants'
import Project from '../components/Project'
import {motion, useMotionValue, useSpring} from 'motion/react'
import { Link } from 'react-router-dom'

const Projects = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springX = useSpring(x, {damping: 10, stiffness: 50});
    const springY = useSpring(y, {damping: 10, stiffness: 50});
    const [preview, setPreview] = useState(null);
    const [showPreview, setShowPreview] = useState(false);

    const timeoutRef = useRef(null);

    const handleMouseMove = (e) => {
        // always update cursor position
        x.set(e.clientX + 20);
        y.set(e.clientY + 20);
        // hide preview while moving
        setShowPreview(false);

        // clear any previous timer
        if (timeoutRef.current) clearTimeout(timeoutRef.current);

        // after 200ms of no movement → show preview
        timeoutRef.current = setTimeout(() => {
        setShowPreview(true);
        }, 200);
    };
  return (
    <section onMouseMove={handleMouseMove} className='relative c-space section-spacing'>
      <div className="flex items-center justify-between">
        <h2 className='text-heading'>
            My Selected Projects
        </h2>
        <Link 
          to="/explore?tab=projects"
          className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender"
        >
          Show All
        </Link>
      </div>
      <div className='bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full'/>
      {myProjects.map((project) => (
          <Project key={project.id} {...project} setPreview={setPreview}/>
      ))}
      {preview && showPreview && (<motion.img 
          src={preview}
          alt="preview" 
          className='fixed top-0 left-0 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80'
          style={{x: springX, y: springY}}
      />)}
    </section>
  )
}

export default Projects
