import { useState } from 'react'
import {AnimatePresence, motion} from "motion/react"

const CopyEmailButton = () => {
  const [copied, setIsCopied] = useState(false);
  const email = "parasydv77@gmail.com";

  const copyToClipboard = async () => {
    try {
        if (navigator.clipboard && window.isSecureContext) {
        // ✅ modern API in secure contexts
            await navigator.clipboard.writeText(email);
        } 
        else {
        // ❌ fallback for insecure contexts (like http://192.168.x.x)
            const textArea = document.createElement("textarea");
            textArea.value = email;
            textArea.style.position = "fixed"; // avoid scrolling to bottom
            textArea.style.opacity = "0";
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();
            document.execCommand("copy");
            document.body.removeChild(textArea);
        }

        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
        } 
        catch (err) {
        console.error("Failed to copy text: ", err);
    }
  };

  return (
    <motion.button 
        onClick={copyToClipboard}
        whileHover={{y: -5}}
        whileTap={{scale: 1.05}}
        className='relative px-1 py-4 text-sm text-center rounded-full font-extralight bg-primary w-[12rem] cursor-pointer overflow-hidden'
    >
        <AnimatePresence mode='wait'>
        {copied ? (
            <motion.p 
                className='flex items-center justify-center gap-2'
                key="copied"
                initial={{opacity: 0, y: -10}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -10}}
                transition={{duration: 0.1, ease: "easeInOut"}}
            >
            <img src="assets/copy-done.svg" alt="image-copied" className='w-5'/>
            Copied!
        </motion.p>
        ) : (
            <motion.p 
                className='flex items-center justify-center gap-2'
                key = "copy"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                transition={{duration: 0.1}}
            >
                <img src="assets/copy.svg" alt="copy-email" className='w-5'/>
                Copy Email Address
        {/* {copied ? "Copied!" : "Copy Email Address"} */}
            </motion.p>
        )}
        </AnimatePresence>
    </motion.button>
  );
}

export default CopyEmailButton;
