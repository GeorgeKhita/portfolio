"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const themes = [
  {
    icon: "🤖",
    titre: "IA & Développement",
    resume: "Découverte et test d'outils comme Cursor et GitHub Copilot pour accélérer le développement, générer du code, et automatiser les tests.",
    source: "https://www.cursor.com/"
  },
  {
    icon: "⚖️",
    titre: "Éthique & Risques",
    resume: "Réflexion sur la fiabilité, les biais, la propriété intellectuelle et le RGPD dans l'utilisation de l'IA pour le code.",
    source: "https://codpo.fr/rgpd-intelligence-artificielle/"
  }
];

const outils = [
  {
    nom: "Flipboard",
    image: "/TableauComp/flipboard.png",
    description: "Mon outil préféré pour centraliser et organiser ma veille tech.",
    badge: true,
    lien: "https://flipboard.com/@georgekhita69g7/ia-et-thique-l2ndkjnty"
  },
  {
    nom: "Youtube",
    image: "/TableauComp/youtube.png",
    description: "Pour rester à la pointe de la tech, je regarde des vidéos sur Youtube.",
    badge: false,
    lien: "https://www.youtube.com/"
  }
];

const points = [
  "L'IA permet de gagner du temps mais nécessite une relecture humaine.",
  "Il faut rester vigilant sur la fiabilité et l'éthique du code généré.",
  "La veille régulière permet d'anticiper les évolutions du métier."
];

const citation = {
  texte: "L'important n'est pas de prévoir l'avenir, mais de le rendre possible.",
  auteur: "Antoine de Saint-Exupéry"
};

const VeillePage = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-3xl font-bold mb-2"
      >🧠 Veille Technologique</motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="mb-4 text-lg text-gray-700 dark:text-gray-300"
      >
        Rester à la pointe de la tech, c'est anticiper les évolutions du métier et s'adapter en continu. Voici ma démarche de veille, mes outils et ce que j'ai retenu.
      </motion.p>

      {/* Thèmes de veille sous forme de cartes */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">🌟 Mes Thèmes de Veille</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {themes.map((t, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col hover:-translate-y-1 hover:shadow-xl transition">
              <span className="text-3xl mb-2">{t.icon}</span>
              <h3 className="font-bold text-lg mb-1">{t.titre}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-2">{t.resume}</p>
              <a href={t.source} className="text-blue-600 hover:underline text-sm mt-auto" target="_blank" rel="noopener noreferrer">🔗 Voir la source</a>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Outils de veille */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">🛠️ Outils de veille</h2>
        <div className="flex gap-6 flex-wrap">
          {outils.map((o, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 flex flex-col items-center w-56 hover:-translate-y-1 hover:shadow-xl transition">
              <img src={o.image} alt={o.nom} className="rounded mb-2 max-h-24 object-contain border border-gray-200 dark:border-gray-700" />
              <span className="font-bold mt-2">{o.nom}</span>
              {o.badge && <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full mt-1">Mon outil préféré</span>}
              <p className="text-gray-700 dark:text-gray-300 text-sm mt-2 text-center">{o.description}</p>
              <a href={o.lien} className="text-blue-600 hover:underline text-sm mt-2" target="_blank" rel="noopener noreferrer">Accéder</a>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Ce que j'ai retenu */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-bold mb-4">✅ Ce que j'ai retenu</h2>
        <ul className="list-disc ml-6 text-gray-700 dark:text-gray-300 space-y-1">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      </motion.section>

      {/* Citation */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-600 dark:text-gray-300 bg-blue-50 dark:bg-blue-900 rounded py-4">
          “{citation.texte}”
          <span className="block text-right font-semibold mt-2">— {citation.auteur}</span>
        </blockquote>
      </motion.section>

      {/* PDF */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="text-center"
      >
        <a
          href="/VeilleTechno/VeilleTechno.pdf"
          download
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          📄 Télécharger la synthèse PDF
        </a>
      </motion.section>
    </main>
  );
};

export default VeillePage; 