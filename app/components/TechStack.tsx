import React from "react";
import Image from "next/image";
import "./TechStackMarquee.css"; // On va créer ce fichier pour l'animation

// Pour ajouter tes propres SVG :
// 1. Place le fichier logo.svg dans le dossier public/ (ex: public/react.svg)
// 2. Ajoute une entrée dans le tableau techs ci-dessous avec le chemin du SVG
//    { name: "React", logo: "/react.svg" }
// Si tu n'as pas de logo, tu peux juste mettre le nom (logo: undefined)

const techs = [
  { name: "HTML", logo: "/html.svg" },
  { name: "CSS", logo: "/css.svg" },
  { name: "JavaScript", logo: "/javascript.svg" },
  { name: "PHP", logo: "/php.svg" },
  { name: "Java", logo: "/java.svg" },
  { name: "GitHub", logo: "/github.svg" },
  { name: "MySQL", logo: "/mysql.svg" },
  { name: "Trello", logo: "/trello.svg" },
  { name: "Next.js", logo: "/next.svg" },
  { name: "Vercel", logo: "/vercel.svg" },
  { name: "Globe", logo: "/globe.svg" },
  { name: "Window", logo: "/window.svg" },
];

const TechStack = () => (
  <div className="overflow-hidden w-full py-8 bg-white dark:bg-gray-900">
    <div className="tech-marquee flex items-center whitespace-nowrap animate-marquee">
      {techs.concat(techs).map((tech, i) => (
        <div key={i} className="logo-item flex flex-col items-center justify-center mx-8 min-w-[100px]">
          {tech.logo ? (
            <Image src={tech.logo} alt={tech.name} width={48} height={48} className="mb-2" />
          ) : (
            <span className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-2">{tech.name}</span>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default TechStack; 