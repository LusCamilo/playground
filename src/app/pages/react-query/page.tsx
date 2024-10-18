"use client";

import { motion } from "framer-motion";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import GoBack from "@/components/GoBack";

export default function ReactQuery() {
  return <Example />;
}

function Example() {
  const { isPending, error, data } = useQuery({
    queryKey: ["starWarsStarship"],
    queryFn: async () =>
      (await fetch("https://swapi.dev/api/starships/")).json(),
  });

  return (
    <div className="min-h-screen p-10">
      <GoBack />
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        React Query - Lista de naves de star wars
      </h1>

      {isPending ? (
        <p className="text-center text-lg">Carregando...</p>
      ) : error ? (
        <p className="text-center text-lg text-red-500">
          Erro: {error.message}
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.results.map(
            (data: {
              name: string;
              manufacturer: string;
            }) => (
              <motion.div
                key={data.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-lg p-6"
              >
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {data.name}
                </h2>
                <p className="text-gray-600">{data.manufacturer}</p>
              </motion.div>
            ),
          )}
        </div>
      )}
    </div>
  );
}
