"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}>
      <Image
        src="/logo/MW-dark.svg"
        width={60}
        height={40}
        alt="alt"
        className="hidden dark:block"
      />
      <Image
        src="/logo/MW-light.svg"
        width={60}
        height={40}
        alt="alt"
        className="block dark:hidden"
      />
    </motion.div>
  );
}
