import {motion} from 'motion/react'
import { useEffect } from 'react';

const ProjectDetails = ({ title, description, subDescription, image, tags, href, closeModel }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-[300] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={closeModel}
    >
      <motion.div 
        className="relative max-w-3xl mx-4"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        // transition={{ duration: 0.2 }}
      >
        {/* Content Container */}
        <div className="bg-gradient-to-l from-midnight to-navy border border-white/10 rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full max-h-[70vh] object-contain"
          />
          
          {/* Project Info */}
          <div className="p-6">
            <h5 className="text-2xl font-bold text-white mb-4">{title}</h5>
            <p className="text-neutral-400 mb-4">{description}</p>
            {subDescription && (
              <p className="text-neutral-400 mb-4">{subDescription}</p>
            )}
            <div className="flex flex-wrap gap-4 mt-4">
              {tags.map((tag) => (
                <img src={tag.path} alt={tag.name} key={tag.id} className='rounded-lg size-10 hover-animation'/>
              ))}
            </div>
            {href && (
              <a 
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 text-royal hover:text-lavender"
              >
                View Project
                <span className="material-symbols-rounded">arrow_outward</span>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;
