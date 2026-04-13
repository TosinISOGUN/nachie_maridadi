import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CurtainReveal = () => {
  const [show, setShow] = useState(true);

  const complete = useCallback(() => {
    setShow(false);
  }, []);

  useEffect(() => {
    if (!show) return;

    const timer = setTimeout(complete, 1700);
    const handleInterrupt = () => complete();

    window.addEventListener("scroll", handleInterrupt, { passive: true });
    window.addEventListener("click", handleInterrupt);
    window.addEventListener("touchstart", handleInterrupt);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleInterrupt);
      window.removeEventListener("click", handleInterrupt);
      window.removeEventListener("touchstart", handleInterrupt);
    };
  }, [show, complete]);

  if (!show) return null;

  const fabricGradientLeft =
    "linear-gradient(135deg, hsl(30, 25%, 18%) 0%, hsl(35, 30%, 25%) 30%, hsl(38, 35%, 22%) 60%, hsl(32, 20%, 15%) 100%)";
  const fabricGradientRight =
    "linear-gradient(225deg, hsl(30, 25%, 18%) 0%, hsl(35, 30%, 25%) 30%, hsl(38, 35%, 22%) 60%, hsl(32, 20%, 15%) 100%)";

  const ease = [0.76, 0, 0.24, 1] as const;

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Branding text */}
          <motion.div
            className="absolute inset-0 z-[10001] flex flex-col items-center justify-center pointer-events-none"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 0.15, duration: 0.6, ease: "easeOut" as const }}
          >
            <h1
              className="font-heading text-3xl md:text-5xl lg:text-6xl font-normal tracking-[0.2em] md:tracking-[0.3em]"
              style={{ color: "hsl(38, 40%, 70%)" }}
            >
              Nachie Maridadi
            </h1>
            <p
              className="mt-3 md:mt-4 text-sm md:text-base tracking-[0.35em] uppercase font-light italic"
              style={{ color: "hsl(38, 30%, 55%)", fontFamily: "var(--font-heading)" }}
            >
              Customized With Love
            </p>
          </motion.div>

          {/* Left panel */}
          <motion.div
            className="absolute top-0 left-0 w-1/2 h-full z-[10000]"
            style={{
              background: fabricGradientLeft,
              boxShadow: "inset -20px 0 40px -10px rgba(0,0,0,0.4), 4px 0 20px rgba(0,0,0,0.3)",
            }}
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1.2, ease }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
              }}
            />
            <div
              className="absolute top-0 right-0 w-16 h-full"
              style={{
                background: "linear-gradient(to left, rgba(255,215,160,0.08), transparent)",
              }}
            />
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="absolute top-0 right-0 w-1/2 h-full z-[10000]"
            style={{
              background: fabricGradientRight,
              boxShadow: "inset 20px 0 40px -10px rgba(0,0,0,0.4), -4px 0 20px rgba(0,0,0,0.3)",
            }}
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.25, duration: 1.2, ease }}
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
              }}
            />
            <div
              className="absolute top-0 left-0 w-16 h-full"
              style={{
                background: "linear-gradient(to right, rgba(255,215,160,0.08), transparent)",
              }}
            />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CurtainReveal;
