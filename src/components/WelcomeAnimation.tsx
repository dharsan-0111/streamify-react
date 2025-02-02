import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export const WelcomeAnimation = () => {
  const [showWelcome, setShowWelcome] = useState(true)
  const [position, setPosition] = useState<"center" | "toolbar">("center")

  useEffect(() => {
    const timer = setTimeout(() => {
      setPosition("toolbar")
      setTimeout(() => setShowWelcome(false), 1000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {showWelcome && (
        <motion.div
          className={`fixed z-50 ${
            position === "center" ? "inset-0 flex items-center justify-center bg-black/80" : "top-0 left-0 p-4"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.h1
            className="text-4xl font-bold text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: position === "center" ? 1 : 0.5,
              opacity: 1,
              y: position === "center" ? 0 : -20,
              x: position === "center" ? 0 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <span className="block md:block sm:block xl:hidden lg:hidden">Streamify</span>
            <span className="hidden md:hidden sm:hidden xl:block lg:block">Streamify - Your goto place for enjoying music</span>
          </motion.h1>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

