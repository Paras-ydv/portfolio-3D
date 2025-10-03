import { motion } from 'motion/react'

const LeetcodeBadge = ({ title, image, date, description }) => {
  return (
    <motion.div 
      className="bg-gradient-to-l from-midnight to-navy border border-white/10 rounded-2xl overflow-hidden group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6 border-t border-white/10">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-neutral-400 text-sm mb-2">{date}</p>
        <p className="text-neutral-400">{description}</p>
      </div>
    </motion.div>
  )
}

export default LeetcodeBadge