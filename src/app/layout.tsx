"use client";

import { ApolloProvider } from "@apollo/client";
import client from "@/graphqlClient";
import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const queryClient = new QueryClient();

  return (
    <html lang="pt-BR">
      <QueryClientProvider client={queryClient}>
        <ApolloProvider client={client}>
          <body className="h-screen bg-gradient-to-r from-indigo-500 to-purple-600">
            {children}
            <ToastContainer />
          </body>
        </ApolloProvider>
      </QueryClientProvider>
    </html>
  );
}
