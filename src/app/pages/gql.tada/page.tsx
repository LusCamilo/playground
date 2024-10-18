"use client";

import { motion } from "framer-motion";
import React from "react";
import GoBack from "@/components/GoBack";
import { useQueryExample } from "@/app/hook/useRequestExample";

export default function GqlTada() {
  const { data, isError, isLoading, error } = useQueryExample();

  return (
    <div className="min-h-screen p-10">
      <GoBack />
      <h1 className="text-4xl font-bold text-center mb-8 text-white">
        usando Gql.Tada
      </h1>
      <h2 className="text-2xl text-center mb-8 text-white">
        Veja o código em src/app/graphql/requestExample.ts
      </h2>

      {isLoading ? (
        <p className="text-center text-lg">Carregando...</p>
      ) : isError ? (
        <p className="text-center text-lg text-red-500">
          Erro: {error.message}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data?.continents?.map((data) => (
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
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
