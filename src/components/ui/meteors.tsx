import { cn } from "../utils/cn.ts"; // Verifica que esta función esté disponible
import clsx from "clsx"; // Asegúrate de que 'clsx' esté importado y usado
import React from "react";

export const Meteors = ({ number = 20, className = "" }) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={"meteor" + idx}
          className={cn(
            "animate-meteor-effect absolute top-0 left-1/2 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            "before:content-[''] before:absolute before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent",
            className // Asegúrate de pasar 'className'
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * 800) - 400 + "px", // Rango de -400 a 400
            animationDelay: Math.random() * 0.6 + 0.2 + "s", // Tiempo de retardo
            animationDuration: Math.floor(Math.random() * 8) + 2 + "s", // Duración variable
          }}
        ></span>
      ))}
    </>
  );
};
