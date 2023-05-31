"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "react-redux";
import store from "./store";
const inter = Inter({ subsets: ["latin"] });
import { Suspense } from "react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className="font-mono ">{children}</body>
      </Provider>
    </html>
  );
}
