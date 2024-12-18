"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const Preloader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => setIsVisible(false), 200);
    }, 250);
    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isVisible) return null;

  return (
    <div
      style={{
        position: "fixed",
        color:"#ffffff",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#1D0A5B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 99999,
        opacity: isLoading ? 1 : 0,
        transition: "opacity 0.5s ease", 
        visibility: isVisible ? 'visible' : 'hidden',
      }}
    >
      <span>
        <img width={100} src="/images/preloader.png"/>
      </span>
    </div>
  );
};

export default Preloader;
