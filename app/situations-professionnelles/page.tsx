"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const stages = [
  {
    date: "Janv. - Fév. 2025",
    titre: "Stagiaire Développeur Back-end",
    entreprise: "InnoLabs SAS",
    missions: [
      "Développement d'un CRM (PHP, Laravel, MySQL)",
      "Mise en place de la base de données et optimisation sécurité",
      "Rédaction de documentation technique et suivi agile",
    ],
    retour: "J'ai pu découvrir le développement d'un outil métier de A à Z, en travaillant à distance. Ce stage m'a permis de renforcer mes compétences en PHP et en gestion de projet agile.",
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
    retour: "Un stage très formateur où j'ai pu travailler sur l'ergonomie et la gestion de données, tout en découvrant l'importance du travail en équipe.",
    telechargement: "/rapport-gestion-stages.pdf",
  },
];

const projets = [
  {
    date: "1ère année - Semestre 1",
    titre: "Site web statique de Rugby",
    type: "Projet en groupe (3 personnes)",
    missions: [
      "HTML/CSS : Structure et mise en page du site.",
      "Navigation entre les rubriques des différents sports.",
      "Premier projet web réalisé au BTS SIO.",
    ],
    retour: "Mon tout premier projet web, J'ai appris à structurer des pages HTML et à styliser avec CSS",
    screens: [
      {
        src: "/M2L/Rugby.jpg",
        alt: "Page Rugby",
        description: "Page Rugby"
      },
      {
        src: "/M2L/Natation.jpg",
        alt: "Page Natation",
        description: "Page Natation"
      },
      {
        src: "/M2L/M2L.png",
        alt: "Page M2L",
        description: "Page M2L"
      },
      {
        src: "/M2L/Rugby1.png",
        alt: "Page Rugby",
        description: "Page Rugby"
      },
      {
        src: "/M2L/Rugby2.png",
        alt: "Page Rugby",
        description: "Page Rugby"
      },

      {
        src: "/M2L/Natation1.png",
        alt: "Page Natation",
        description: "Page Natation"
      },
      {
        src: "/M2L/CodeRugby.png",
        alt: "Code Rugby",
        description: "Code Rugby"
      },
      {
        src: "/M2L/CodeNatation.png",
        alt: "Code Natation",
        description: "Code Natation"
      },
      {
        src: "/M2L/CodeM2L.png",
        alt: "Code M2L",
        description: "Code M2L"
      },
      {
        src: "/M2L/CodeCSS.png",
        alt: "Code CSS",
        description: "Code CSS"
      },

      
      
        
    ]
  },
  {
    date: "1ère année - Semestre 2",
    titre: "Site web dynamique Sport",
    type: "Projet en binôme",
    missions: [
      "Création de comptes avec rôles : admin, superadmin, utilisateur.",
      "Technologies utilisées : PHP, SQL, HTML/CSS.",
      "Connexion à base de données.",
    ],
    retour: "Ce projet m'a fait découvrir le fonctionnement des rôles utilisateurs, la gestion de sessions et l'interaction avec une base de données via PHP/MySQL.",
    screens: [
      {
        src: "/ForumSport/1.png",
        alt: "Interface de connexion",
        description: "Accueil "
      },
      {
        src: "/ForumSport/2.png",
        alt: "Interface administrateur",
        description: "Page d'inscription"
      },
      {
        src: "/ForumSport/3.png",
        alt: "Base de données",
        description: "Page de connexion"
      },
      {
        src: "/ForumSport/4.png",
        alt: "Gestion des utilisateurs",
        description: "Accueil (Connecté)"
      },
      {
        src: "/ForumSport/5.png",
        alt: "Gestion des utilisateurs",
        description: "Liste des messages"
      },
      {
        src: "/ForumSport/6.png",
        alt: "Gestion des utilisateurs",
        description: "Ajouter une question"
      },
      {
        src: "/ForumSport/7.png",
        alt: "Gestion des utilisateurs",
        description: "Liste des messages"
      },
      {
        src: "/ForumSport/8.png",
        alt: "Gestion des utilisateurs",
        description: "Accueil Admin"
       },
      {
        src: "/ForumSport/9.png",
        alt: "Gestion des utilisateurs",
        description: "Structure Base de Données"
      },
      {
        src: "/ForumSport/10.png",
        alt: "Gestion des utilisateurs",
        description: "Vue Concepteur"
      },
      {
        src: "/ForumSport/11.png",
        alt: "Gestion des utilisateurs",
        description: "XAMPP"
      },
      
      



    ]
  },
  {
    date: "2ème année",
    titre: "Projet RestoWeb & RestoSwing",
    type: "Projet en groupe (4 personnes)",
    missions: [
      "Site client RestoWeb en HTML/PHP/SQL.",
      "App Java Swing pour les restaurateurs.",
      "Interaction avec la base de données MySQL.",
    ],
    retour: "Un projet complet en équipe : j'ai relié un site PHP et une application Java Swing autour d'une base MySQL, en collaborant à chaque étape.",
    screens: [
      {
        src: "/RestoSwingWeb/1.png",
        alt: "Application Java Swing",
        description: "Interface de l'application RestoSwing"
      },
      {
        src: "/RestoSwingWeb/2.png",
        alt: "Site web RestoWeb",
        description: "Interface Inscription"
      },
      {
        src: "/RestoSwingWeb/3.png",
        alt: "Développement Java",
        description: "Interface Connexion"
      },
      {
        src: "/RestoSwingWeb/4.png",
        alt: "Base de données",
        description: "Page d'accueil (Connecté)"
      },
      {
        src: "/RestoSwingWeb/5.png",
        alt: "Base de données",
        description: "Page produit"
      },
      {
        src: "/RestoSwingWeb/6.png",
        alt: "Base de données",
        description: "Panier"
      },
      {
        src: "/RestoSwingWeb/7.png",
        alt: "Base de données",
        description: "Paiment de la commande"
      },
      {
        src: "/RestoSwingWeb/8.png",
        alt: "Base de données",
        description: "Commande confirmée"
      },
      {
        src: "/RestoSwingWeb/9.png",
        alt: "Base de données",
        description: "Partie RestoSwing"
      },
      {
        src: "/RestoSwingWeb/10.png",
        alt: "Base de données",
        description: "Liste de commandes"
      },
      {
        src: "/RestoSwingWeb/11.png",
        alt: "Base de données",
        description: "Détails de la commande"
      },
      {
        src: "/RestoSwingWeb/12.png",
        alt: "Base de données",
        description: "Commande dans la BDD"
      },
      {
        src: "/RestoSwingWeb/14.png",
        alt: "Base de données",
        description: "Structure RestoWeb"
      },


    ]
  },
];

const StageCard = ({ stage }: { stage: typeof stages[0] }) => (
  <div className="bg-white dark:bg-gray-800 rounded shadow p-6 mb-6">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <div>
        <span className="text-gray-500">{stage.date}</span>
        <h3 className="text-xl font-bold">{stage.titre}</h3>
        <span className="italic text-gray-600">Entreprise : {stage.entreprise}</span>
      </div>
      <div className="flex gap-2 mt-2 md:mt-0">
        <Link
          href={stage.titre.includes("Back-end") ? "/situations-professionnelles/stage-innolabs" : "/situations-professionnelles/stage-gestion"}
          className="inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Voir le détail
        </Link>
      </div>
    </div>
    <ul className="list-disc list-inside mb-2">
      {stage.missions.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded mb-2">
      <span className="font-bold">💡</span> {stage.retour}
    </div>
  </div>
);

const ProjetCard = ({ projet }: { projet: typeof projets[0] }) => {
  const [showGallery, setShowGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openGalleryAt = (index: number) => {
    setCurrentImageIndex(index);
    setShowGallery(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projet.screens.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projet.screens.length) % projet.screens.length);
  };

  return (
  <div className="bg-white dark:bg-gray-800 rounded shadow p-6 mb-6">
    <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
      <div>
        <span className="text-gray-500">{projet.date}</span>
        <h3 className="text-xl font-bold">{projet.titre}</h3>
        <span className="italic text-gray-600">{projet.type}</span>
      </div>
    </div>
    <ul className="list-disc list-inside mb-2">
      {projet.missions.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
    <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded mb-2">
      <span className="font-bold">💡</span> {projet.retour}
    </div>
      
      {/* Section des images */}
      {projet.screens && projet.screens.length > 0 && (
        <div className="mt-4 space-y-4">
          <h4 className="font-semibold text-lg">📸 Captures d'écran</h4>
          <div className="flex gap-4 overflow-x-auto pb-2">
            {projet.screens.map((screen, index) => (
              <div key={index} className="relative min-w-[180px] cursor-pointer" onClick={() => openGalleryAt(index)}>
                <Image
                  src={screen.src}
                  alt={screen.alt}
                  width={180}
                  height={120}
                  className="rounded-lg object-cover h-28 w-44"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => setShowGallery(true)}
            className="mt-2 text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2"
          >
            Voir la galerie complète ({projet.screens.length} images) →
          </button>
        </div>
      )}

      {/* Galerie Modale */}
      <AnimatePresence>
        {showGallery && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setShowGallery(false)}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full bg-white dark:bg-gray-800 rounded-lg p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setShowGallery(false)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                ✕
              </button>
              
              <div className="relative aspect-video mb-4">
                <Image
                  src={projet.screens[currentImageIndex].src}
                  alt={projet.screens[currentImageIndex].alt}
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
              
              <div className="flex justify-between items-center">
                <button
                  onClick={prevImage}
                  className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  ←
                </button>
                <p className="text-center text-gray-600 dark:text-gray-300">
                  {projet.screens[currentImageIndex].description}
                </p>
                <button
                  onClick={nextImage}
                  className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                  →
                </button>
              </div>
              {/* Slider horizontal de miniatures */}
              <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
                {projet.screens.map((screen, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`rounded overflow-hidden border-2 ${
                      currentImageIndex === index ? 'border-blue-600' : 'border-transparent'
                    } focus:outline-none`}
                    style={{ minWidth: 80 }}
                  >
                    <Image
                      src={screen.src}
                      alt={screen.alt}
                      width={80}
                      height={60}
                      className="object-cover h-16 w-20"
                    />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  </div>
);
};

const SituationsProPage = () => (
  <motion.main
    className="max-w-4xl mx-auto p-6"
  >
    <h1 className="text-3xl font-bold mb-2">🚀 Mes Expériences Professionnelles</h1>
    <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">Découvrez mes stages réalisés durant mon BTS SIO.</p>
    <h2 className="text-2xl font-bold mb-4">📌 Mes Stages</h2>
    {stages.map((stage, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <StageCard stage={stage} />
      </motion.div>
    ))}
    <h2 className="text-2xl font-bold mb-4 mt-10">📚 Projets Scolaires</h2>
    {projets.map((projet, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <ProjetCard projet={projet} />
      </motion.div>
    ))}
  </motion.main>
);

export default SituationsProPage; 