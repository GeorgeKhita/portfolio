"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StageInnoLabs = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMission, setCurrentMission] = useState(0);

  const missions = [
    {
      title: "1. Mise en Place de la Base de Données et des Migrations",
      description: "Création et configuration de la base de données du CRM pour structurer et gérer efficacement les données.",
      activities: [
        "Conception de la structure de la base de données (tables, relations, contraintes)",
        "Rédaction et exécution des fichiers de migration pour la création des tables",
        "Mise en place de seeders pour initialiser la base de données",
        "Optimisation des requêtes et gestion des index"
      ],
      screens: [
        {
          src: "/InnoLabs/1.1.png",
          alt: "Emplacement du répertoire migrations dans le projet",
          description: "Emplacement du répertoire migrations dans le projet"
        },
        {
          src: "/InnoLabs/1.2.png",
          alt: "Extrait de tous les fichiers migrations",
          description: "Extrait de tous les fichiers migrations"
        },
        {
          src: "/InnoLabs/1.3.png",
          alt: "Exemple de code de Seeder",
          description: "Exemple de code de Seeder"
        },
        {
          src: "/InnoLabs/1.4.png",
          alt: "Exemple de code de Factory",
          description: "Exemple de code de Factory"
        },
        {
          src: "/InnoLabs/1.5.png",
          alt: "Vue concepteur de la base de données",
          description: "Vue concepteur de la base de données"
        },
        {
          src: "/InnoLabs/1.6.png",
          alt: "Commit GitLab pour la mise à jour de la structure",
          description: "Commit GitLab pour la mise à jour de la structure"
        }
      ]
    },
    {
      title: "2. Développement des Fonctionnalités Opérationnelles du CRM",
      description: "Implémentation des modules fonctionnels du CRM pour répondre aux besoins métiers identifiés.",
      activities: [
        "Développement des API REST pour la gestion des utilisateurs, clients, prospects et factures",
        "Implémentation des logiques métier pour la gestion des données",
        "Réalisation de tests unitaires et fonctionnels via Postman"
      ],
      screens: [
        {
          src: "/InnoLabs/2.1.png",
          alt: "Aperçu général des requêtes API du CRM_Back",
          description: "Aperçu général des requêtes API du CRM_Back"
        },
        {
          src: "/InnoLabs/2.2.png",
          alt: "Méthode login du UserController",
          description: "Méthode login du UserController"
        },
        {
          src: "/InnoLabs/2.3.png",
          alt: "Définition de la route POST '/auth/login'",
          description: "Définition de la route POST '/auth/login'"
        },
        {
          src: "/InnoLabs/2.4.png",
          alt: "Test de la route '/auth/login' dans Postman",
          description: "Test de la route '/auth/login' dans Postman"
        },
        {
          src: "/InnoLabs/2.5.png",
          alt: "Réponse JSON de la route '/auth/login'",
          description: "Réponse JSON de la route '/auth/login'"
        }
      ]
    },
    {
      title: "3. Suivi et Gestion des Issues GitLab",
      description: "Organisation et suivi de l'avancement du développement en utilisant GitLab.",
      activities: [
        "Création d'issues détaillées pour chaque tâche",
        "Mise à jour régulière des issues avec commentaires et changements de statut",
        "Association systématique des commits aux issues correspondantes",
        "Compilation d'un tableau de suivi des issues majeures résolues"
      ],
      screens: [
        {
          src: "/InnoLabs/3.1.png",
          alt: "Issues créées pendant le stage",
          description: "Issues créées pendant le stage"
        },
        {
          src: "/InnoLabs/3.2.png",
          alt: "Branches disponibles dans le répertoire CRM_back",
          description: "Branches disponibles dans le répertoire CRM_back"
        },
        {
          src: "/InnoLabs/3.3.png",
          alt: "Liste des commits effectués",
          description: "Liste des commits effectués"
        },
        {
          src: "/InnoLabs/3.4.png",
          alt: "Board GitLab",
          description: "Board GitLab"
        },
        {
          src: "/InnoLabs/3.5.png",
          alt: "Board GitLab (suite)",
          description: "Board GitLab (suite)"
        },
        {
          src: "/InnoLabs/3.6.png",
          alt: "Issue pour les endpoints du ClientController",
          description: "Issue pour les endpoints du ClientController"
        },
        {
          src: "/InnoLabs/3.7.png",
          alt: "Commit lié à l'issue des endpoints clients",
          description: "Commit lié à l'issue des endpoints clients"
        }
      ]
    },
    {
      title: "4. Optimisation de la Sécurité et Mise en Place de l'Audit",
      description: "Renforcement de la sécurité globale du CRM et mise en place d'un système de traçabilité.",
      activities: [
        "Implémentation de mesures de sécurité (rate limiting, blocage d'IP)",
        "Développement d'un système de journalisation pour les actions critiques",
        "Création d'un tableau de bord d'audit avec export CSV"
      ],
      screens: [
        {
          src: "/InnoLabs/4.1.png",
          alt: "Méthode register avec rate limiting",
          description: "Méthode register avec rate limiting"
        },
        {
          src: "/InnoLabs/4.2.png",
          alt: "Modèle de log pour la traçabilité",
          description: "Modèle de log pour la traçabilité"
        },
        {
          src: "/InnoLabs/4.3.png",
          alt: "Système de vérification des permissions",
          description: "Système de vérification des permissions"
        },
        {
          src: "/InnoLabs/4.4.png",
          alt: "Méthode hasPermission",
          description: "Méthode hasPermission"
        },
        {
          src: "/InnoLabs/4.5.png",
          alt: "Export des logs au format CSV",
          description: "Export des logs au format CSV"
        }
      ]
    },
    {
      title: "5. Documentation Technique des Nouvelles Fonctionnalités",
      description: "Rédaction et mise à jour de la documentation complète du CRM.",
      activities: [
        "Élaboration de guides techniques et guides utilisateurs pour chaque module",
        "Mise à jour de la fiche projet",
        "Rédaction de documents API pour les développeurs"
      ],
      screens: [
        {
          src: "/InnoLabs/5.1.png",
          alt: "Répertoires GitLab accessibles",
          description: "Répertoires GitLab accessibles"
        },
        {
          src: "/InnoLabs/5.2.png",
          alt: "Structure des fichiers de documentation",
          description: "Structure des fichiers de documentation"
        },
        {
          src: "/InnoLabs/5.3.png",
          alt: "Édition de la documentation en Markdown",
          description: "Édition de la documentation en Markdown"
        },
        {
          src: "/InnoLabs/5.4.png",
          alt: "Affichage de la documentation sur GitLab",
          description: "Affichage de la documentation sur GitLab"
        },
        {
          src: "/InnoLabs/5.5.png",
          alt: "Commit de la documentation pour la gestion des factures",
          description: "Commit de la documentation pour la gestion des factures"
        }
      ]
    }
  ];

  const openGalleryAt = (missionIndex: number, imageIndex: number) => {
    setCurrentMission(missionIndex);
    setCurrentImageIndex(imageIndex);
    setShowGallery(true);
  };

  const nextImage = () => {
    const currentMissionScreens = missions[currentMission].screens;
    setCurrentImageIndex((prev) => (prev + 1) % currentMissionScreens.length);
  };

  const prevImage = () => {
    const currentMissionScreens = missions[currentMission].screens;
    setCurrentImageIndex((prev) => (prev - 1 + currentMissionScreens.length) % currentMissionScreens.length);
  };

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
        <div className="text-gray-500 mb-6">Janvier - Février 2024</div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🏢 Entreprise d'accueil</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Lieu :</strong> Toulouse, France
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Effectif :</strong> 2 personnes
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Activités principales :</strong>
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>Développement de solutions logicielles sur mesure</li>
              <li>Hébergement de serveurs modulables</li>
              <li>Système d'archivage innovant</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">👨‍💻 Contexte du stage</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Stagiaire :</strong> George Khitaridze
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Tuteur :</strong> Marc MAGUEUR (Président et Développeur)
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              L'objectif principal était le développement et l'amélioration d'un CRM (Customer Relationship Management) complet.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Missions réalisées</h2>
          <div className="space-y-8">
            {missions.map((mission, missionIndex) => (
              <div key={missionIndex}>
                <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {mission.description}
                </p>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 mb-4">
                  {mission.activities.map((activity, index) => (
                    <li key={index}>{activity}</li>
                  ))}
                </ul>
                <div className="mt-4 space-y-4">
                  <h4 className="font-semibold text-lg">📸 Captures d'écran</h4>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {mission.screens.map((screen, index) => (
                      <div
                        key={index}
                        className="relative min-w-[180px] cursor-pointer"
                        onClick={() => openGalleryAt(missionIndex, index)}
                      >
                        <Image
                          src={screen.src}
                          alt={screen.alt}
                          width={180}
                          height={120}
                          className="rounded-lg object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">💻 Environnement technique</h2>
          <div className="flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHP 8.2</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Laravel 10</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">MySQL</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">XAMPP</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">PHPStorm</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Postman</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">GitLab</span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Mailtrap</span>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📈 Retour d'expérience</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Points positifs :</h3>
            <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
              <li>Gain de compétences techniques (Laravel, sécurité, GitLab)</li>
              <li>Organisation agile et travail structuré</li>
              <li>Réelle autonomie dans le développement</li>
            </ul>
            <h3 className="font-semibold mb-2">Axes de progrès :</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Renforcement de la modularité du code</li>
              <li>Meilleure planification personnelle</li>
              <li>Éventuelle interface front-end à développer</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📄 Documents</h2>
          <a
            href="/SIO - Rapport de stage 2annee.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            📥 Télécharger le rapport de stage
          </a>
        </section>
      </div>

      {/* Modal de la galerie */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setShowGallery(false)}
          >
            <div className="relative max-w-4xl w-full p-4" onClick={e => e.stopPropagation()}>
              <button
                className="absolute top-4 right-4 text-white text-2xl hover:bg-white hover:bg-opacity-20 rounded-full p-2 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowGallery(false);
                }}
              >
                ✕
              </button>
              <div className="relative h-[80vh]">
                <Image
                  src={missions[currentMission].screens[currentImageIndex].src}
                  alt={missions[currentMission].screens[currentImageIndex].alt}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
                <button
                  className="bg-white bg-opacity-50 rounded-full p-2"
                  onClick={prevImage}
                >
                  ←
                </button>
              </div>
              <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                <button
                  className="bg-white bg-opacity-50 rounded-full p-2"
                  onClick={nextImage}
                >
                  →
                </button>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-4 py-2 rounded">
                {missions[currentMission].screens[currentImageIndex].description}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default StageInnoLabs; 