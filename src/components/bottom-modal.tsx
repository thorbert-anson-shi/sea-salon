import { motion } from "framer-motion";
import { useState } from "react";

interface BottomModalProps {
  children: React.ReactNode;
}

const variants = {
  open: { y: 0 },
  closed: { y: "100%" },
};

export const BottomModal = ({ children }: BottomModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed -bottom-[30vh] left-0 flex h-[30vh] w-[30vw] flex-row bg-white align-middle shadow-md">
      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="h-1/2 w-full bg-white"
      >
        {children}
        <button onClick={() => setIsOpen(!isOpen)} className="bg-gray-200">
          Toggle
        </button>
      </motion.div>
    </div>
  );
};

export default BottomModal;
