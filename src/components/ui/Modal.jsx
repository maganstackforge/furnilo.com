import { motion, AnimatePresence } from 'framer-motion'
import { createPortal } from 'react-dom'

export default function Modal({ isOpen, onClose, children, overlayClass = '', contentClass = '' }) {
  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={`fixed inset-0 z-50 ${overlayClass}`}
          initial='hidden'
          animate='visible'
          exit='hidden'
        >
          {/* OVERLAY */}
          <motion.div
            onClick={onClose}
            className='absolute inset-0 bg-black/20'
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          />

          {/* SLIDE PANEL */}
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className={`absolute right-0 top-0 w-full md:w-3/4 h-full bg-white flex flex-col ${contentClass}`}
            variants={{
              hidden: { x: '100%' },
              visible: { x: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
          >
            <div className='flex-1 overflow-y-auto'>{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
