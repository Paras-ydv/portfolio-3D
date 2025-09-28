import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'motion/react'
import Project from '../components/Project'
import Certificate from '../components/Certificate'
import { myProjects, technicalCertificates, nonTechnicalCertificates } from '../constants'
import { useState, useEffect } from 'react'

const Explore = () => {
  const [searchParams] = useSearchParams()
  const tabFromUrl = searchParams.get('tab')
  const [activeTab, setActiveTab] = useState(tabFromUrl || 'projects')

  // Scroll to top when component mounts or tab changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [activeTab])

  // Update active tab when URL changes
  useEffect(() => {
    if (tabFromUrl) {
      setActiveTab(tabFromUrl)
    }
  }, [tabFromUrl])

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="w-64 bg-navy min-h-screen p-6 fixed left-0 top-0">
        <h2 className="text-2xl font-bold text-white mb-8">Explore</h2>
        <nav className="space-y-2">
          <button
            onClick={() => setActiveTab('projects')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              activeTab === 'projects' 
                ? 'bg-royal text-white' 
                : 'text-gray-400 hover:bg-indigo hover:text-white'
            }`}
          >
            <span className="flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-rounded">folder</span>
              Projects
            </span>
          </button>
          <button
            onClick={() => setActiveTab('technical')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              activeTab === 'technical' 
                ? 'bg-royal text-white' 
                : 'text-gray-400 hover:bg-indigo hover:text-white'
            }`}
          >
            <span className="flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-rounded">code</span>
              Technical Certifications
            </span>
          </button>
          <button
            onClick={() => setActiveTab('non-technical')}
            className={`w-full text-left px-4 py-3 rounded-lg transition-all ${
              activeTab === 'non-technical' 
                ? 'bg-royal text-white' 
                : 'text-gray-400 hover:bg-indigo hover:text-white'
            }`}
          >
            <span className="flex items-center gap-3 cursor-pointer">
              <span className="material-symbols-rounded">school</span>
              Non-Technical Certifications
            </span>
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 ml-64 p-8">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {activeTab === 'projects' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Projects</h3>
                <Link 
                  to="/" 
                  className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender"
                >
                  Back to Home
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-8">
                {myProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="group relative bg-navy p-6 rounded-2xl hover:bg-indigo transition-all duration-300"
                  >
                    {/* Preview Image - Shows on Hover */}
                    <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover rounded-2xl absolute inset-0 z-0"
                      />
                      <div className="absolute inset-0 bg-black/50 rounded-2xl" />
                    </div>
                    
                    {/* Project Content */}
                    <div className="relative">
                      <Project {...project} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Technical Certificates</h3>
                <Link to="/" className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender">
                  Back to Home
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {technicalCertificates.map((cert) => (
                  <Certificate key={cert.id} {...cert} />
                ))}
              </div>
            </div>
          )}

          {activeTab === 'non-technical' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">Non-Technical Certificates</h3>
                <Link to="/" className="px-4 py-2 text-sm font-medium transition-all rounded-lg bg-royal hover:bg-lavender">
                  Back to Home
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {nonTechnicalCertificates.map((cert) => (
                  <Certificate key={cert.id} {...cert} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default Explore