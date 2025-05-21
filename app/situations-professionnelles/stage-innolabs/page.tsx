"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StageInnoLabs = () => {
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
        <h1 className="text-3xl font-bold mb-4">Stage chez InnoLabs SAS</h1>
        <div className="text-gray-500 mb-6">Janvier - Février 2025</div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📋 Contexte du stage</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            InnoLabs SAS est une entreprise spécialisée dans le développement de solutions innovantes pour les entreprises.
            Durant ce stage, j'ai participé au développement d'un CRM complet pour la gestion de la relation client.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Missions principales</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            <li>Développement d'un CRM complet (PHP, Laravel, MySQL, Angular)</li>
            <li>Mise en place de la base de données et optimisation sécurité</li>
            <li>Rédaction de documentation technique et suivi agile</li>
            <li>Participation aux réunions d'équipe et aux revues de code</li>
            <li>Mise en place de tests unitaires et d'intégration</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">💻 Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Laravel</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Angular</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Git</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Docker</span>
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
            <li>Maîtrise du framework Laravel et de ses bonnes pratiques</li>
            <li>Développement d'APIs RESTful</li>
            <li>Gestion de base de données et optimisation des requêtes</li>
            <li>Travail en équipe et méthodologie agile</li>
            <li>Documentation technique et tests</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📄 Documents</h2>
          <a
            href="/rapport-innolabs.pdf"
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

export default StageInnoLabs; 