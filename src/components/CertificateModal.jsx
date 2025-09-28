import { motion } from 'motion/react'
import { useEffect } from 'react'

const CertificateModal = ({ image, title, issuer, date, closeModal }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black">
      <motion.div 
        className="relative max-w-3xl mx-4"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Close Button */}
        <button 
          onClick={closeModal}
          className="absolute -top-12 right-0 flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 cursor-pointer"
        >
          <span className="material-symbols-rounded text-2xl text-white">close</span>
        </button>

        {/* Certificate Content */}
        <div className="bg-gradient-to-l from-midnight to-navy border border-white/10 rounded-2xl overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full max-h-[70vh] object-contain"
          />
          
          {/* Certificate Info */}
          <div className="p-6">
            <h5 className="text-2xl font-bold text-white mb-2">{title}</h5>
            <p className="text-neutral-400">
              {issuer} • {date}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default CertificateModal