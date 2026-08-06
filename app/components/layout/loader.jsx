import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

const Loader = () => {

    return (
        <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center text-center"
            initial={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
            animate={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
            exit={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
        >
            <motion.div
                className="absolute inset-0 loader-bg"
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            />
            <motion.div
                className="relative w-40 h-40 z-3"
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: 'easeOut' }}
            >
                <img
                    className="block w-40 h-40 opacity-20"
                    src="/logo-w-title"
                    alt="Logo"
                />
            </motion.div>
        </motion.div>
    )
}

export default Loader