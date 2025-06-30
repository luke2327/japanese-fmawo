"use client";

import { BlogAuthentication } from "@/components/blog/authentication";
import { motion } from "framer-motion";

export default function AdminPage() {
  return (
    <motion.div
      className="gap-4 flex flex-col w-screen tracking-widest"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}>
      <BlogAuthentication />
    </motion.div>
  );
}
