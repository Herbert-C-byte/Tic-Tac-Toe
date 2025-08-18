import type {  PropsWithChildren } from "react";

export default function Layout({children}: PropsWithChildren) {
  return (
    <div className="bg-gradient-to-b from-purple-500 to-indigo-900 flex flex-col h-screen justify-center items-center gap-4">
      {children}
    </div>
  )
}