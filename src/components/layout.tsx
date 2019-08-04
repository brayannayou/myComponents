import React from "react"

import "./layout.css"
import { TaskBar } from "./TaskBar";

interface Props {
  children?: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const background = `url(http://hdqwalls.com/wallpapers/anime-yawning-girl-4k-ultra-hd-vn.jpg)`;
  return (
    <>
      <div
        style={{
          margin: 'auto',
          background,
          backgroundSize: 'cover',
        }}
        className="vh-100 relative"
      >
        <main style={{ padding: '32px', }}>{children}</main>
        <TaskBar />
      </div>
    </>
  )
}


export default Layout
