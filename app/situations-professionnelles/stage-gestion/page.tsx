"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StageGestion = () => {
  return (
    <motion.main
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto p-6"
    >
      <Link href="/situations-professionnelles" className="text-blue-600 hover:text-blue-800 mb-4 inline-block">
        ← Retour aux situations professionnelles
      </Link>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mt-4">
        <h1 className="text-3xl font-bold mb-4">Stage de Développement Web</h1>
        <div className="text-gray-500 mb-6">Mai - Juin 2024</div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📋 Contexte du stage</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Stage de développement d'un site web de gestion des stages pour une école.
            L'objectif était de créer une plateforme permettant aux étudiants de trouver et gérer leurs stages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Missions principales</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Adaptation et optimisation de la base de données</li>
            <li>Création de maquettes interactives pour l'interface</li>
            <li>Développement de fonctionnalités pour la saisie des informations</li>
            <li>Mise en place d'un système de recherche avancé</li>
            <li>Intégration d'un système de notifications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">💻 Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">HTML/CSS</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Bootstrap</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📸 Captures d'écran</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Ajoutez vos captures d'écran ici */}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📚 Acquis et compétences</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Développement d'interfaces utilisateur intuitives</li>
            <li>Optimisation des performances de base de données</li>
            <li>Gestion de projet et respect des délais</li>
            <li>Communication avec les utilisateurs finaux</li>
            <li>Documentation technique et utilisateur</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📄 Documents</h2>
          <a
            href="/rapport-gestion-stages.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            📥 Télécharger le rapport de stage
          </a>
        </section>
      </div>
    </motion.main>
  );
};

export default StageGestion; 