import {motion} from 'motion/react'
import { useEffect } from 'react';


// const Modal = ({ isOpen, onClose }) => {
//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'; 
//         } 
//         else {
//             document.body.style.overflow = 'auto'; 
//         }
//         return () => {
//             document.body.style.overflow = 'auto'; // Cleanup to avoid conflicts
//         };
//     }, [isOpen]);

//     if (!isOpen) return null;
//     return (
//         <div className="modatl" >
//             <button onClick={onClose}>Close</button>
//         </div>
//     );
// };
    {/* Add modal content here */}
// export default Modal,

const ProjectDetails = ({title, description, image, subDescription, href, tags, closeModel}) => {
    useEffect(() => {
        if (closeModel) {
            document.body.style.overflow = 'hidden'; 
        } 
        else {
            document.body.style.overflow = 'auto'; 
        }
        return () => {
            document.body.style.overflow = 'auto'; // Cleanup to avoid conflicts
        };
    }, [closeModel]);
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm'>
      <motion.div 
        className='relative max-w-2xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10'
        initial={{opacity:0, scale:0.5}}
        animate={{opacity:1, scale: 1}}
        >
            <button onClick={closeModel} className="absolute -top-12 right-0 flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 cursor-pointer">
                <span className="material-symbols-rounded text-2xl text-white">close</span>
            </button>
            <img src={image} alt={title} className='w-full rounded-t-2xl'/>
            <div className='p-5 '>
                <h5 className='mb-2 text-2xl text-white font-bold'>{title}</h5>
                <p className='mb-3 text-neutral-400 font-normal'>{description}</p>
                {subDescription.map((subDesc, index) => (
                    <p className='mb-3 font-normal text-neutral-400'>{subDesc}</p>
                ))}
                <div className='flex items-center justify-between mt-4'>
                    <div className='flex gap-3'>
                        {tags.map((tag) => (
                            <img src={tag.path} alt={tag.name} key={tag.id} className='rounded-lg size-10 hover-animation'/>
                        ))}
                    </div>
                    <a href={href} className='inline-flex items-center gap-1 font-medium cursor-pointer hover-animation '>
                        View Project <img src="assets/arrow-up.svg" alt="up-arrow" className='size-4'/>
                    </a>
                </div>
            </div>
      </motion.div>
    </div>
  )
}

export default ProjectDetails
