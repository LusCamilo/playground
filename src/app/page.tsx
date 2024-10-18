"use client";

import { motion } from "framer-motion";
import { technologies } from "../utils/technologies";
import ReactQuery from "./pages/react-query/page";
import { useStore } from "@/utils/useStore";
import GqlTada from "./pages/gql.tada/page";
import ShadcnUI from "./pages/shadcn.ui/page";
import Nuqs from "./pages/nuqs/page";
import { toast } from "react-toastify";
import FramerMotion from "./pages/framer-motion/page";
import Recharts from "./pages/recharts/page";

export default function Home() {
  const { setPageSelected, pageSelected } = useStore();

  if (
    pageSelected === "home" ||
    pageSelected === "nextjs" ||
    pageSelected === "biome" ||
    pageSelected === "zustand"
  ) {
    return (
      <div className="h-full p-10">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Tecnologias Belas
        </h1>
        <p className="text-xl text-gray-200 text-center mb-16">
          Bem-vindo ao playground, tem coisas bem legais aqui 😁
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.3 }}
              className="bg-white cursor-pointer rounded-lg shadow-lg p-6"
              onClick={() => {
                if (tech.page === "nextjs") {
                  toast.info("o projeto é feito com o Next.js 😉");
                  setPageSelected("nextjs");
                } else if (tech.page === "biome") {
                  toast.info(
                    "o Biome é um linter e formatador de código extremamente rápido, não tem como dar exemplo aqui 😅",
                  );
                  setPageSelected("biome");
                } else if (tech.page === "zustand") {
                  toast.info(
                    "o Zustand é um gerenciador de estados global leve e fácil de usar, não tem como dar exemplo aqui 😅",
                  );
                  setPageSelected("zustand");
                } else setPageSelected(tech.page);
              }}
            >
              <h2 className="text-2xl font-semibold text-indigo-600 mb-2">
                {tech.name}
              </h2>
              <p className="text-gray-700">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  if (pageSelected === "react-query") {
    return <ReactQuery />;
  }

  if (pageSelected === "gql.tada") {
    return <GqlTada />;
  }

  if (pageSelected === "shadcn.ui") {
    return <ShadcnUI />;
  }

  if (pageSelected === "nuqs") {
    return <Nuqs />;
  }

  if (pageSelected === "framer-motion") {
    return <FramerMotion />;
  }

  if (pageSelected === "recharts") {
    return <Recharts />;
  }
}
