"use client";
import React from "react";
import Image from "next/image";
import { FaEnvelope, FaPhone, FaLinkedin, FaMapMarkerAlt, FaDownload, FaExternalLinkAlt, FaCopy } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";

const infos = {
  nom: "George Khitaridze",
  age: 25,
  email: "george.khitaridze@limayrac.fr",
  tel: "07 68 84 45 37",
  linkedin: "https://www.linkedin.com/in/george-k-9726b7295/",
  ville: "Toulouse, France",
  photo: "/photo-george.jpg",
};

const competences = [
  "PHP", "Laravel", "MySQL", "Angular", "Git", "HTML", "CSS", "JavaScript", "Trello", "VS Code", "GitHub"
];

const parcours = [
  { date: "2025 (à venir)", titre: "Bachelor Systèmes d'Information (option Développement des Systèmes Numériques)", lieu: "Limayrac Toulouse" },
  { date: "2023-2025", titre: "BTS SIO (option SLAM)", lieu: "Limayrac Toulouse" },
  { date: "2020-2022", titre: "L1 Informatique", lieu: "Université Paul Sabatier Toulouse" },
  { date: "2018", titre: "BAC S", lieu: "Lycée Paul Sabatier, Carcassonne" },
];

const experiences = [
  {
    date: "Janv. - Fév. 2025",
    titre: "Stagiaire Développeur Full Stack",
    entreprise: "InnoLabs SAS",
    missions: [
      "Développement d'un CRM complet (PHP, Laravel, MySQL, Angular)",
      "Mise en place de la base de données et optimisation sécurité",
      "Rédaction de documentation technique et suivi agile",
    ],
    telechargement: "/rapport-innolabs.pdf",
  },
  {
    date: "Mai - Juin 2024",
    titre: "Stagiaire Développeur d'un site de gestion de stages",
    entreprise: "Institut Limayrac",
    missions: [
      "Adaptation et optimisation de la base de données",
      "Création de maquettes interactives pour l'interface",
      "Développement de fonctionnalités pour la saisie des informations",
    ],
    telechargement: "/rapport-gestion-stages.pdf",
  },
];

const profil = `Étudiant motivé, ouvert d'esprit et passionné par l'informatique, je me spécialise dans le développement web et la gestion de projets numériques. J'aime apprendre, relever des défis et travailler en équipe.`;

export default function PageCV() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-10">
      {/* Carte d'identité */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row items-center gap-8 bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg"
      >
        <Image src={infos.photo} alt="Photo de George" width={120} height={120} className="rounded-full object-cover border-4 border-blue-600 shadow-md" />
        <div className="flex-1 space-y-2 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{infos.nom}</h1>
          <p className="text-blue-700 dark:text-blue-300 font-semibold">{infos.age} ans</p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start text-gray-700 dark:text-gray-300 text-sm mt-2">
            <span className="flex items-center gap-1"><FaEnvelope /> <a href={`mailto:${infos.email}`} className="hover:underline">{infos.email}</a></span>
            <span className="flex items-center gap-1"><FaPhone /> {infos.tel}</span>
            <span className="flex items-center gap-1"><FaLinkedin /> <a href={infos.linkedin} target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a></span>
            <span className="flex items-center gap-1"><FaMapMarkerAlt /> {infos.ville}</span>
          </div>
        </div>
      </motion.section>

      {/* Profil */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="bg-blue-50 dark:bg-blue-900 p-6 rounded-lg shadow text-center"
      >
        <h2 className="text-2xl font-bold mb-2 text-blue-800 dark:text-blue-200">Profil</h2>
        <p className="text-gray-700 dark:text-gray-100 text-lg">{profil}</p>
      </motion.section>

      {/* Parcours */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Parcours</h2>
        <ol className="relative border-l-4 border-blue-600 ml-4 space-y-6">
          {parcours.map((p, i) => (
            <li key={i} className="ml-4 pb-2">
              <div className="absolute -left-6 w-4 h-4 bg-blue-600 rounded-full border-2 border-white dark:border-gray-900"></div>
              <div className="font-semibold text-blue-700 dark:text-blue-300">{p.date}</div>
              <div className="text-gray-900 dark:text-white">{p.titre}</div>
              <div className="text-gray-600 dark:text-gray-300 text-sm">{p.lieu}</div>
            </li>
          ))}
        </ol>
      </motion.section>

      {/* Compétences */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Compétences techniques</h2>
        <div className="flex flex-wrap gap-2">
          {competences.map((c, i) => (
            <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{c}</span>
          ))}
        </div>
      </motion.section>

      {/* Expériences professionnelles */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Expériences professionnelles</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                <div>
                  <span className="text-gray-500">{exp.date}</span>
                  <h3 className="text-xl font-bold">{exp.titre}</h3>
                  <span className="italic text-gray-600">Entreprise : {exp.entreprise}</span>
                </div>
                {exp.telechargement && (
                  <a
                    href={exp.telechargement}
                    download
                    className="mt-2 md:mt-0 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    <FaDownload className="inline mr-2" /> Télécharger
                  </a>
                )}
              </div>
              <ul className="list-disc list-inside mb-2">
                {exp.missions.map((m, j) => (
                  <li key={j}>{m}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Aperçu PDF + actions */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Mon CV PDF</h2>
        <div className="flex flex-col md:flex-row gap-4 items-center mb-4">
          <a
            href="/CV-George-Khitaridze.pdf"
            download
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition font-semibold flex items-center gap-2"
          >
            <FaDownload /> Télécharger
          </a>
          <a
            href="/CV-George-Khitaridze.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-6 py-2 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition font-semibold flex items-center gap-2"
          >
            <FaExternalLinkAlt /> Ouvrir dans un nouvel onglet
          </a>
          <button
            onClick={handleCopy}
            className="bg-green-100 text-green-800 px-6 py-2 rounded hover:bg-green-200 transition font-semibold flex items-center gap-2"
          >
            <FaCopy /> {copied ? "Lien copié !" : "Partager mon CV"}
          </button>
        </div>
        <iframe
          src="/CV-George-Khitaridze.pdf"
          width="100%"
          height="700px"
          className="border rounded"
          title="Aperçu du CV PDF"
        ></iframe>
      </motion.section>
    </main>
  );
} 