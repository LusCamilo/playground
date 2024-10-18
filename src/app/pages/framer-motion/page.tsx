"use client";

import GoBack from "@/components/GoBack";
import { motion } from "framer-motion";

export default function FramerMotion() {
  return (
    <div className="">
      <h1 className="text-4xl font-bold  text-white text-center mt-8">
        Framer Motion
      </h1>
      <div className="flex flex-wrap justify-center items-center w-full h-screen  p-8 space-y-8">
        <GoBack />

        <motion.div
          animate={{ x: [100, 0, 100] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            duration: 2,
          }}
          className="h-48 w-48 bg-blue-500 rounded-lg shadow-2xl mx-4"
        />
        <motion.div
          animate={{ y: [100, 0, 100] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            duration: 2,
          }}
          className="h-48 w-48 bg-orange-500 rounded-lg shadow-2xl mx-4"
        />
        <motion.div
          animate={{
            scale: [1, 2, 2, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["0%", "0%", "50%", "50%", "0%"],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: 1,
          }}
          className="h-36 w-36 bg-red-500 rounded-lg shadow-2xl mx-4"
        />
        <motion.div
          animate={{ opacity: [1, 0, 1], scale: [1, 0, 1] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeOut",
            duration: 2,
          }}
          className="h-48 w-48 bg-green-500 rounded-lg shadow-2xl mx-4"
        />
        <motion.div
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
          }}
          className="h-48 w-48 bg-yellow-500 rounded-lg shadow-2xl mx-4"
        />
      </div>
    </div>
  );
}
