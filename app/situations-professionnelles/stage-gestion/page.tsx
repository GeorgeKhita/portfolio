"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const StageGestion = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentMission, setCurrentMission] = useState(0);

  const missions = [
    {
      title: "1. Réunion d'analyse du projet",
      description: "Analyse approfondie des besoins et mise en place de la méthodologie de développement.",
      activities: [
        "Compréhension des besoins",
        "Adoption d'une méthode Agile",
        "Définition du cahier des charges"
      ],
      screens: [
        {
          src: "/Gestion/1.1.png",
          alt: "Exemple de Compte-rendu",
          description: "Exemple de Compte-rendu"
        }
      ]
    },
    {
      title: "2. Conception de la base de données",
      description: "Recensement et modélisation des entités nécessaires au fonctionnement du système.",
      activities: [
        "Recensement des entités : élèves, profs, stages, entreprises, contacts",
        "Adaptation du modèle fourni (ajustement des types, relations)"
      ],
      screens: [
        {
          src: "/Gestion/2.1.png",
          alt: "Vue concepteur de la base de données",
          description: "Vue concepteur de la base de données"
        }
      ]
    },
    {
      title: "3. Création de la maquette",
      description: "Développement des interfaces utilisateur avec Balsamiq pour les différents espaces.",
      activities: [
        "Maquette avec Balsamiq",
        "Espaces : étudiant, enseignant, admin",
        "Navigation fluide et intuitive"
      ],
      screens: [
        {
          src: "/Gestion/3.1.png",
          alt: "Choix de l'utilisateur",
          description: "Choix de l'utilisateur"
        },
        {
          src: "/Gestion/3.2.png",
          alt: "Page de connexion pour pouvoir accéder à son espace",
          description: "Page de connexion pour pouvoir accéder à son espace"
        },
        {
          src: "/Gestion/3.3.png",
          alt: "Espace étudiant avec les stages déjà renseigné et la possibilité d'en ajouter un avec un bouton",
          description: "Espace étudiant avec les stages déjà renseigné et la possibilité d'en ajouter un avec un bouton"
        },
        {
          src: "/Gestion/3.4.png",
          alt: "L'espace professeur avec la liste des élèves du professeur en question",
          description: "L'espace professeur avec la liste des élèves du professeur en question"
        },
        {
          src: "/Gestion/3.5.png",
          alt: "Liste du stage de l'élève par le professeur et la possibilité d'agir sur les différentes démarche du stage",
          description: "Liste du stage de l'élève par le professeur et la possibilité d'agir sur les différentes démarche du stage"
        }
      ]
    },
    {
      title: "4. Développement du site web",
      description: "Implémentation des fonctionnalités pour les différents espaces utilisateurs.",
      activities: [
        "Espace étudiant : gestion de stage, génération de documents",
        "Espace enseignant : suivi des élèves, validation des fiches",
        "Espace administratif : vue complète sur tous les stages"
      ],
      screens: [
        {
          src: "/Gestion/4.1.png",
          alt: "Sélection du rôle (Élève, enseignant, administrateur)",
          description: "Sélection du rôle (Élève, enseignant, administrateur)"
        },
        {
          src: "/Gestion/4.2.png",
          alt: "Page de connexion étudiant (la présentation est identique pour les trois rôles)",
          description: "Page de connexion étudiant (la présentation est identique pour les trois rôles)"
        },
        {
          src: "/Gestion/4.3.png",
          alt: "Espace étudiant/Historique des stages (Historique des stage, possibilité de créer nouveau stage)",
          description: "Espace étudiant/Historique des stages (Historique des stage, possibilité de créer nouveau stage)"
        },
        {
          src: "/Gestion/4.4.png",
          alt: "Information Utilisateur(Informations préremplies, informations dans la base)",
          description: "Information Utilisateur(Informations préremplies, informations dans la base)"
        },
        {
          src: "/Gestion/4.5.png",
          alt: "Information Entreprise (Recherche par numéro SIRET)",
          description: "Information Entreprise (Recherche par numéro SIRET)"
        },
        {
          src: "/Gestion/4.6.png",
          alt: "Contacts (possibilité de modifier/ajouter de nouveau contacts)",
          description: "Contacts (possibilité de modifier/ajouter de nouveau contacts)"
        },
        {
          src: "/Gestion/4.7.png",
          alt: "Choix du gérant",
          description: "Choix du gérant"
        },
        {
          src: "/Gestion/4.8.png",
          alt: "Choix du tuteur",
          description: "Choix du tuteur"
        },
        {
          src: "/Gestion/4.9.png",
          alt: "Informations sur le stage(dates, durée, adresse durant le stage…)",
          description: "Informations sur le stage(dates, durée, adresse durant le stage…)"
        },
        {
          src: "/Gestion/4.10.png",
          alt: "Récapitulatif",
          description: "Récapitulatif"
        },
        {
          src: "/Gestion/4.11.png",
          alt: "Accueil élève avec la fiche de renseignement remplie(possibilité de générer fiche de renseignement)",
          description: "Accueil élève avec la fiche de renseignement remplie(possibilité de générer fiche de renseignement)"
        },
        {
          src: "/Gestion/4.12.png",
          alt: "Fiche de renseignements généré automatiquement",
          description: "Fiche de renseignements généré automatiquement"
        },
        {
          src: "/Gestion/4.13.png",
          alt: "Espace enseignant (Possibilité de sélectionner une classe, puis un élève)",
          description: "Espace enseignant (Possibilité de sélectionner une classe, puis un élève)"
        },
        {
          src: "/Gestion/4.14.png",
          alt: "Historiques des stages de l'élève sélectionné (Approuver ou rejeter la fiche de renseignements)",
          description: "Historiques des stages de l'élève sélectionné (Approuver ou rejeter la fiche de renseignements)"
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
        <h1 className="text-3xl font-bold mb-4">Stage à l'Institut Limayrac</h1>
        <div className="text-gray-500 mb-6">Mai - Juillet 2023</div>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🏢 Entreprise d'accueil</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Nom :</strong> Institut Limayrac
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Lieu :</strong> Toulouse, France
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Effectif :</strong> 100 à 199 salariés
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Secteur :</strong> Établissement d'enseignement supérieur privé
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Activités principales :</strong>
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>BTS, Bachelor, Master</li>
              <li>Formations professionnelles continues</li>
              <li>Programmes d'échange (ERASMUS+)</li>
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
              <strong>Tuteur :</strong> Palmade Céline
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Durée :</strong> 6 semaines (22 mai au 3 juillet)
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Projet :</strong> Développement d'un site web de gestion des stages étudiants
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Objectif</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              Créer un outil en ligne permettant :
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>Aux étudiants de renseigner leurs informations de stage</li>
              <li>De générer automatiquement les documents (fiche de renseignements, convention, attestation)</li>
              <li>Aux enseignants & administratifs de suivre, valider, et gérer les démarches</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">🎯 Missions réalisées</h2>
          {missions.map((mission, missionIndex) => (
            <div key={missionIndex} className="mb-8">
              <h3 className="text-xl font-semibold mb-2">{mission.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{mission.description}</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-4">
                {mission.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
              <div className="overflow-x-auto pb-4">
                <div className="flex space-x-4 min-w-max">
                  {mission.screens.map((screen, screenIndex) => (
                    <div
                      key={screenIndex}
                      className="relative w-64 flex-shrink-0 cursor-pointer group"
                      onClick={() => openGalleryAt(missionIndex, screenIndex)}
                    >
                      <div className="aspect-video relative mb-2">
                        <Image
                          src={screen.src}
                          alt={screen.alt}
                          fill
                          className="object-cover rounded-lg transition-transform group-hover:scale-105"
                        />
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                        {screen.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">💻 Environnement technique</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Langages :</strong> PHP, HTML, CSS
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Base de données :</strong> MySQL
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-2">
              <strong>Outils :</strong>
            </p>
            <ul className="list-disc list-inside ml-4 text-gray-700 dark:text-gray-300">
              <li>VS Code, XAMPP, phpMyAdmin</li>
              <li>GitHub pour le versioning</li>
              <li>Trello pour le suivi</li>
              <li>Balsamiq pour la maquette</li>
              <li>Looping pour gérer la BDD</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📈 Retour d'expérience</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">✅ Points positifs</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Apprentissage des outils réels de gestion de projet</li>
                <li>Travail en équipe avec un autre étudiant</li>
                <li>Approfondissement de VS Code, GitHub, Trello, BDD</li>
              </ul>
            </div>
            <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">🔧 Pistes de progrès</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Hébergement du site à faire dans une prochaine itération</li>
                <li>Ajouter une signature électronique</li>
                <li>Optimiser le code et documenter davantage</li>
                <li>Mieux gérer les priorités</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">📄 Documents</h2>
          <a
            href="/SIO - Rapport de stage 1er.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            📥 Télécharger le rapport de stage
          </a>
        </section>
      </div>

      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
            onClick={() => setShowGallery(false)}
          >
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setShowGallery(false);
              }}
            >
              ✕
            </button>
            <button
              className="absolute left-4 text-white text-4xl hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
            >
              ‹
            </button>
            <div className="relative w-4/5 h-4/5">
              <Image
                src={missions[currentMission].screens[currentImageIndex].src}
                alt={missions[currentMission].screens[currentImageIndex].alt}
                fill
                className="object-contain"
              />
              <div className="absolute bottom-4 left-0 right-0 text-center text-white">
                <p className="text-lg font-medium">
                  {missions[currentMission].screens[currentImageIndex].description}
                </p>
              </div>
            </div>
            <button
              className="absolute right-4 text-white text-4xl hover:bg-white/10 p-2 rounded-full transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
            >
              ›
            </button>
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 overflow-x-auto p-4">
              {missions[currentMission].screens.map((screen, index) => (
                <div
                  key={index}
                  className="relative w-20 h-20 flex-shrink-0 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(index);
                  }}
                >
                  <Image
                    src={screen.src}
                    alt={screen.alt}
                    fill
                    className={`object-cover rounded ${
                      index === currentImageIndex ? "ring-2 ring-blue-500" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.main>
  );
};

export default StageGestion; 