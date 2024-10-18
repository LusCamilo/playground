"use client";

import React, { Suspense } from "react";
import GoBack from "@/components/GoBack";
import { useQueryState } from "nuqs";

function NuqsComponent() {
  const [text, setText] = useQueryState("text");

  return (
    <>
      <GoBack />
      <h1 className="text-4xl p-10 font-bold text-center text-white">
        NUQS - escreve algo e olha sua url 😱
      </h1>
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Escreva alguma coisa
            </label>
            <input
              id="name"
              type="text"
              value={text || ""}
              onChange={(e) => setText(e.target.value)}
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="flex justify-between items-center mb-4">
            <button
              type="button"
              onClick={() => setText(null)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Clear
            </button>
            <p className="text-gray-600">
              Hello,{" "}
              <span className="font-semibold">
                {text || "Olá, escreva algo na caixa acima"}
              </span>
              !
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default function Nuqs() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NuqsComponent />
    </Suspense>
  );
}