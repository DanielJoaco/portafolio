"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn.ts";
import React from 'react';
import useMediaQuery from './useMediaQuery.tsx';

type Tab = {
    title: string;
    value: string;
    content?: string | React.ReactNode | any;
  };
   
  export const Tabs = ({
    tabs: propTabs,
    containerClassName,
    activeTabClassName,
    tabClassName,
    contentClassName,
  }: {
    tabs: Tab[];
    containerClassName?: string;
    activeTabClassName?: string;
    tabClassName?: string;
    contentClassName?: string;
  }) => {
    const [active, setActive] = useState<Tab>(propTabs[0]);
    const [tabs, setTabs] = useState<Tab[]>(propTabs);
   
    const moveSelectedTabToTop = (idx: number) => {
      const newTabs = [...propTabs];
      const selectedTab = newTabs.splice(idx, 1);
      newTabs.unshift(selectedTab[0]);
      setTabs(newTabs);
      setActive(newTabs[0]);
    };
   
    const [hovering, setHovering] = useState(false);
   
    return (
      <>
        <div
          className={cn(
            "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
            containerClassName
          )}
        >
          {propTabs.map((tab, idx) => (
            <button
              key={tab.title}
              onClick={() => {
                moveSelectedTabToTop(idx);
              }}
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className={cn("relative px-4 py-2 rounded-full", tabClassName)}
              style={{
                transformStyle: "preserve-3d",
                backgroundColor: '#190b32',
                opacity: '0.9'
              }}
            >
              {active.value === tab.value && (
                <motion.div
                  layoutId="clickedbutton"
                  transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                  className={cn(
                    "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full ",
                    activeTabClassName
                  )}
                />
              )}
   
              <span className="relative block text-black dark:text-white">
                {tab.title}
              </span>
            </button>
          ))}
        </div>
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("mt-32", contentClassName)}
        />
      </>
    );
  };
   
  export const FadeInDiv = ({
    className,
    tabs,
    active,
    hovering,
  }: {
    className?: string;
    tabs: Tab[];
    active: Tab;
    hovering?: boolean;
  }) => {
    const isActive = (tab) => tab.value === active.value;
    const is1020pxOrSmaller = useMediaQuery('(max-width: 1020px)'); // Para pantallas más pequeñas que 1020px
    const is620pxOrSmaller = useMediaQuery('(max-width: 620px)'); // Para pantallas más pequeñas que 620px
    const is500pxOrSmaller = useMediaQuery('(max-width: 500px)'); // Para pantallas más pequeñas que 620px
  
    return (
      <div className="relative w-full h-full">
        {tabs.map((tab, idx) => (
          <motion.div
            key={tab.value}
            layoutId={tab.value}
            style={{
              scale: 1 - idx * 0.1,
              zIndex: tabs.length - idx, // El orden de apilamiento
              opacity: isActive(tab) ? 1 : 0.3 + idx * 0.3,
              height: is620pxOrSmaller ? '52rem' : is1020pxOrSmaller ? '46rem' : '55rem', // Ajusta el height según la media query
              backgroundColor: 'rgba(50, 22, 100)', // Fondo negro con transparencia
              boxShadow: '2px -2px 10px rgba(0, 0, 0, 0.3)',
              borderRadius: '2rem',
              padding: '1rem',
              position: 'relative',
              top: is500pxOrSmaller ? idx * -315 :is620pxOrSmaller ? idx * -375 : is1020pxOrSmaller ? idx * -400 : idx * -595, // Ajusta el valor de top según la media query
            }}
            animate={{
            y: hovering ? idx * -25 : 0, // Cambia el desplazamiento al hacer hover
            }}
            transition={{ 
              type: 'spring',
              bounce: 0.3,
              duration: 0.6,
            }}
            className={cn('w-full h-full', className)}
          >
            {/* Capa de Fondo Negro con Transparencia */}
            {!isActive(tab) && ( // Muestra la capa negra solo si no está activo
              <div
                style={{
                  position: 'absolute', // Asegura que está encima del contenido
                  inset: 0, // Cubre todo el contenido
                  zIndex: 1, // Debe tener un z-index mayor para estar delante del contenido
                  backgroundColor: 'rgba(50, 22, 100)', // Fondo negro con transparencia
                  borderRadius: '2rem',
                  boxShadow: '2px -2px 10px rgba(0, 0, 0, 0.5)'
                }}
              />
            )}
  
            {/* El contenido de la pestaña */}
            <div style={{ zIndex: 2 }}>{tab.content}</div> {/* El contenido debe tener z-index mayor que el fondo negro */}
          </motion.div>
        ))}
      </div>
    );
  };
