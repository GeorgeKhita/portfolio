"use client"

import Image from "next/image";
import TechStack from './components/TechStack';
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12 relative">
      {/* Section Hero avec effet d'apparition, sans hero.svg */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg mb-8 overflow-hidden"
      >
        <div className="flex-shrink-0">
          <Image
            src="/photo-george.jpg"
            alt="Photo de George Khitaridze"
            width={160}
            height={160}
            className="rounded-full object-cover border-4 border-blue-600 shadow-md"
            priority
          />
          {/* Liens sociaux */}
          <div className="flex gap-4 justify-center mt-4">
            <a href="https://www.linkedin.com/in/george-k-9726b7295/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl"><FaLinkedin /></a>
            <a href="mailto:george.khitaridze@limayrac.fr" className="text-blue-700 hover:text-blue-900 text-2xl"><FaEnvelope /></a>
            <a href="https://github.com/GeorgeKhita" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 text-2xl"><FaGithub /></a>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-4xl font-bold text-gray-900 dark:text-white"
          >
            George Khitaridze
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="text-xl text-blue-700 dark:text-blue-300 font-semibold"
          >
            "Passionné par le développement, la tech et l'innovation !"
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Étudiant en 2ème année de BTS SIO (option SLAM) à Limayrac Toulouse, je me spécialise dans le développement web, la programmation et la gestion de projets numériques.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="flex flex-wrap gap-2 justify-center md:justify-start mt-2"
          >
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">Web</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Back-end</span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">PHP</span>
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">HTML/CSS</span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">MySQL</span>
            <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">Laravel</span>
          </motion.div>
        </div>
      </motion.section>

      {/* Section Parcours avec effet d'apparition */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon Parcours</h2>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-600 border border-transparent cursor-pointer">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2025 (à venir)</h3>
            <p>Bachelor Systèmes d'Information (option Développement des Systèmes Numériques) – Limayrac Toulouse</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-600 border border-transparent cursor-pointer">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2023-2025</h3>
            <p>BTS SIO (option SLAM) – Limayrac Toulouse</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-600 border border-transparent cursor-pointer">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2020-2022</h3>
            <p>L1 Informatique – Université Paul Sabatier Toulouse</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-600 border border-transparent cursor-pointer">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2019-2020</h3>
            <p>L1 Chimie – Université Paul Sabatier Toulouse</p>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-xl hover:bg-blue-50 dark:hover:bg-blue-900 hover:border-blue-600 border border-transparent cursor-pointer">
            <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">2018</h3>
            <p>BAC S – Lycée Paul Sabatier, Carcassonne</p>
          </div>
        </div>
      </motion.section>

      {/* Section BTS SIO avec card.png en fond */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6 relative overflow-hidden"
        style={{ backgroundImage: "url('/card.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mon BTS SIO 🎓</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Le BTS SIO (Services Informatiques aux Organisations) est une formation professionnalisante en deux ans, axée sur l'informatique d'entreprise. J'ai choisi l'option SLAM (Solutions Logicielles et Applications Métiers) pour me spécialiser dans le développement d'applications web et logicielles.
        </p>
        <div className="space-y-8 md:flex md:space-y-0 md:space-x-8">
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Option SISR</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cette spécialisation forme des experts en réseaux et systèmes informatiques, capables de gérer l'infrastructure technique d'une entreprise.
            </p>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Débouchés :</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Administrateur systèmes et réseaux</li>
              <li>Technicien d'infrastructure</li>
              <li>Support technique</li>
              <li>Technicien réseau</li>
            </ul>
          </div>
          <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border-2 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Option SLAM 👈 Mon choix</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Cette option se concentre sur la conception, le développement et la maintenance de solutions logicielles. J'y ai appris à coder, à gérer des bases de données, à travailler en équipe et à mener des projets de A à Z.
            </p>
            <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Débouchés :</h4>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
              <li>Développeur web</li>
              <li>Développeur d'applications</li>
              <li>Analyste programmeur</li>
              <li>Technicien d'études informatiques</li>
            </ul>
          </div>
        </div>
      </motion.section>

      {/* Section Technologies */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Mes Technologies</h2>
        <TechStack />
      </motion.section>

      {/* Blur en bas de page, en arrière-plan sans espace */}
      <div className="relative overflow-hidden" style={{ minHeight: 0 }}>
        <img
          src="/blur-23.svg"
          alt="Effet blur"
          className="absolute left-0 bottom-0 w-full object-cover pointer-events-none select-none"
          style={{ maxHeight: 200, zIndex: -1 }}
        />
      </div>
    </div>
  );
}
