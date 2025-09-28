import { Link } from 'react-router-dom'
import Certificate from '../components/Certificate'
import { technicalCertificates, nonTechnicalCertificates } from '../constants'
import { motion } from 'motion/react'

const Certificates = () => {
  const limitedTechnical = technicalCertificates.slice(0, 3)
  const limitedNonTechnical = nonTechnicalCertificates.slice(0, 3)

  return (
    <div className="min-h-screen pt-24">
      <motion.section 
        className="c-space"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        
        {/* Technical Certificates */}
        <div className="mt-10">
          <div className="flex items-center justify-between">
            <h3 className="text-heading">Technical Certificates</h3>
            <Link 
              to="/explore?tab=technical"
              className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender"
            >
              Show All
            </Link>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-5 h-[1px] w-full" />
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {limitedTechnical.map((cert) => (
              <Certificate key={cert.id} {...cert} />
            ))}
          </div>
        </div>

        {/* Non-Technical Certificates */}
        <div className="mt-20">
          <div className="flex items-center justify-between">
            <h3 className="text-heading">Non-Technical Certificates</h3>
            <Link 
              to="/explore?tab=non-technical"
              className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender"
            >
              Show All
            </Link>
          </div>
          <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-5 h-[1px] w-full" />
          <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2 lg:grid-cols-3">
            {limitedNonTechnical.map((cert) => (
              <Certificate key={cert.id} {...cert} />
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  )
}

export default Certificates
