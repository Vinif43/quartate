"use client"
import React, { useState } from "react";

export default function Page() {
  const [visible, setVisible] = useState(false)

  const changeVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <h1 className="text-9xl text-center font-bold">Sobre</h1>
     <div>
        <button onClick={changeVisibility}>{visible ? "visivel" : "Não visivel"}</button>
        {visible && <p>Estou Visivel</p>}
     </div>
    </div>
  );
}
