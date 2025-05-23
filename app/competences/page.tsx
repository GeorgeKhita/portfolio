"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Realisation {
  titre: string;
  description: string;
  preuve: string | string[];
  telechargement?: string;
  lien?: string | string[];
}

interface Bloc {
  titre: string;
  realisations: Realisation[];
  commentaire: string;
}

const blocs: Bloc[] = [
  {
    titre: "Bloc 1 – Gérer le patrimoine informatique",
    realisations: [
      {
        titre: "Utilisation de GLPI pour la gestion des incidents",
        description: "J'ai simulé l'ouverture d'un ticket dans l'outil GLPI pour signaler un poste qui ne se connectait plus au réseau. Cette action fait partie des procédures de gestion des incidents en entreprise.",
        preuve: ["Capture GLPI 1", "Capture GLPI 2", "Capture GLPI 3"],
        lien: ["/TableauComp/glpi1.png", "/TableauComp/glpi2.png", "/TableauComp/glpi3.png"]
      },
      {
        titre: "Mise en place de la base de données du CRM (stage 2e année)",
        description: "Conception d'un schéma relationnel, développement de migrations et seeders Laravel pour structurer les données utilisateurs, clients, logs et factures. Optimisation de la performance, vérification de la cohérence et traçabilité via GitLab.",
        preuve: ["Capture Doc1", "Capture Doc2", "Capture Doc3"],
        lien: ["/TableauComp/BLOC1/1.5.png", "/TableauComp/BLOC1/116.png", "/TableauComp/BLOC1/1.2.png","/TableauComp/BLOC1/1.3.png","/TableauComp/BLOC1/1.4.png"]
        
        
      },
    ],
    commentaire: "Gestion d'incidents avec GLPI et structuration de la base de données du CRM via Laravel. J'ai mis en œuvre des pratiques réelles de suivi, d'optimisation et de documentation du patrimoine informatique.",
  },
  {
    titre: "Bloc 2 – Répondre aux incidents et aux demandes d'assistance et d'évolution",
    realisations: [
      {
        titre: "Configuration d'un serveur DHCP",
        description: "Lors d'un TP, j'ai configuré un serveur DHCP sous Windows Server. Cela permet d'attribuer automatiquement une adresse IP aux machines d'un réseau. J'ai également vérifié le bon fonctionnement de l'attribution via une machine cliente.",
        preuve: "DHCP capture",
        lien: ["/TableauComp/DHCP1.png", "/TableauComp/DHCP2.png", "/TableauComp/DHCP3.png", "/TableauComp/DHCP4.png", "/TableauComp/DHCP5.png"],
        telechargement: "/TableauComp/DHCP.pdf",
      },
      {
        titre: "Évolution fonctionnelle du CRM : gestion du verrouillage utilisateur",
        description: "Ajout des champs is_locked et lock_reason à la table users dans le CRM pour empêcher les utilisateurs de modifier leurs informations de compte lorsqu'ils sont verrouillés. Ajout d'une colonne dans la table users pour stocker le motif du verrouillage.",
        preuve: "Capture Doc1",
        lien: "/TableauComp/BLOC2/11.png"
      }
    ],
    commentaire: "J'ai résolu un incident réseau via DHCP et répondu à une demande d'évolution sur un CRM en adaptant sa base de données. Ces actions illustrent ma capacité à gérer à la fois des incidents techniques et des modifications fonctionnelles.",
  },
  {
    titre: "Bloc 3 - Développer la présence en ligne de l'organisation",
    realisations: [
      {
        titre: "Creation de site de gestion de stage pour mon stage",
        description: "site de gestion de stage pour mon stage codé en php, html, css",
        preuve: "Capture site stage",
        lien: ["/TableauComp/BLOC3/4.1.png","/TableauComp/BLOC3/4.2.png","/TableauComp/BLOC3/4.3.png","/TableauComp/BLOC3/4.4.png","/TableauComp/BLOC3/4.5.png", "/TableauComp/BLOC3/SiteStage.png"]
      },
      {
        titre: "Réalisation d'API Laravel pour le CRM (stage 2e année)",
        description: "Développement de routes web sécurisées pour la gestion des utilisateurs, clients et factures (authentification, CRUD, token JWT).",
        preuve: "Capture Doc1",
        lien: ["/TableauComp/BLOC3/2.1.png","/TableauComp/BLOC3/2.2.png","/TableauComp/BLOC3/2.3.png","/TableauComp/BLOC3/2.4.png","/TableauComp/BLOC3/2.5.png"]
      },
      {
        titre: "Génération de documents dynamiques",
        description: "Génération automatique de fiche de renseignement PDF (1re année)",
        preuve: "Capture Doc1",
        lien: "/TableauComp/BLOC3/1.1.png"
      }
    ],
    commentaire: "J'ai développé un site web de gestion de stages (frontend/backend), une API Laravel sécurisée pour un CRM, et des outils de génération automatique de documents. Ces projets illustrent ma capacité à créer des services en ligne fonctionnels et adaptés aux besoins des utilisateurs.",
  },
    {
    titre: "Bloc 4 - Travailler en mode projet",
    realisations: [
      {
        titre: "Organisation de projet avec Trello",
        description: "Utilisation de Trello pour gérer les tâches (colonne À faire / En cours / Terminé).",
        preuve: "Trello aperçu",
        lien: ["/TableauComp/Trello.png", "/TableauComp/Trello2.png", "/TableauComp/Trello3.png"],
      },
      {
        titre: "Partage via Google Drive et GitHub",
        description: "Dépôt de code sur GitHub, documents partagés via Google Drive.",
        preuve: ["Drive", "GitHub"],
        lien: ["/TableauComp/BLOC4/3.1.png", "/TableauComp/BLOC4/3.2.png", "/TableauComp/BLOC4/3.3.png"],
      },
      {
        titre: "Planification et suivi du projet CRM à l'aide d'un diagramme de Gantt (stage 2e année)",
        description: "Mon tuteur m'a fourni un planning prévisionnel sous forme de Gantt dès le début du stage. Ce document m'a servi de support pour organiser mes tâches : développement, réunions, documentation et livrables.",
        preuve: ["Maquette", "Gantt"],
        lien: "/TableauComp/BLOC4/2.1.png",
      },
      {
        titre: "Suivi et organisation du développement du CRM à l'aide de GitLab",
        description: " En stage chez InnoLabs, j'ai développé un CRM en PHP/Laravel. Le projet a été organisé avec la méthode Agile.",
        preuve: "Capture GitLab",
        lien: ["/TableauComp/BLOC4/1.1.png", "/TableauComp/BLOC4/1.2.png", "/TableauComp/BLOC4/1.3.png", "/TableauComp/BLOC4/1.4.png",]
      }
    ],
  commentaire: "J'ai utilisé des outils comme Trello, GitLab et un planning Gantt pour organiser, suivre et structurer mes projets scolaires et de stage, en appliquant des méthodes de gestion de projet réelles."  },
  {
    titre: "Bloc 5 – Mettre à disposition des utilisateurs un service informatique",
    realisations: [
      {
        titre: "Hébergement du portfolio sur Vercel",
        description: "Le site a été mis en ligne avec un nom de domaine propre.",
        preuve: "Capture Vercel",
        lien: "/TableauComp/Vercel.png",
      },
      {
        titre: "Déploiement fonctionnel du CRM",
        description: "Mise à disposition d'un CRM fonctionnel avec gestion des utilisateurs, clients, factures",
        preuve: "Capture Code",
        lien: ["/TableauComp/BLOC5/1.1.png", "/TableauComp/BLOC5/1.2.png"],
      }
    ],
    commentaire: "J'ai mis à disposition un portfolio en ligne et un CRM fonctionnel. Ces livrables ont été testés, documentés et pensés pour répondre à des besoins utilisateurs réels."
  },
  {
    titre: "Bloc 6 - Organiser son développement professionnel",
    realisations: [
      {
        titre: "Création d'un compte LinkedIn et d'un CV professionnel",
        description: "Mise à jour régulière de mon profil LinkedIn et création d'un CV clair et moderne.",
        preuve: "capture de mon profil LinkedIn",
        lien: ["/TableauComp/linkedin.png"],
  
      },
      {
        titre: "Suivi de veille technologique avec Flipboard",
        description: "Utilisation de Flipboard pour suivre les nouveautés web, IA, cybersécurité, etc.",
        preuve: "capture d'écran de Flipboard",
        lien: ["/TableauComp/flipboard.png"],
      },
    ],
    commentaire: "J'ai structuré ma démarche professionnelle en créant un profil LinkedIn et un CV moderne, et j'ai organisé une veille technologique active pour suivre les évolutions du secteur.",
  },
];

const BlocCard = ({ bloc }: { bloc: typeof blocs[0] }) => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const openModal = (images: string[], index: number) => {
    setModalImages(images);
    setModalIndex(index);
    setModalImage(images[index]);
  };

  const closeModal = () => {
    setModalImage(null);
    setModalImages([]);
    setModalIndex(0);
  };

  const nextImage = () => {
    if (modalImages.length > 0) {
      const next = (modalIndex + 1) % modalImages.length;
      setModalIndex(next);
      setModalImage(modalImages[next]);
    }
  };

  const prevImage = () => {
    if (modalImages.length > 0) {
      const prev = (modalIndex - 1 + modalImages.length) % modalImages.length;
      setModalIndex(prev);
      setModalImage(modalImages[prev]);
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-6 mb-6">
      <h3 className="text-xl font-bold mb-2">🟩 {bloc.titre}</h3>
      {bloc.realisations.map((r, i) => (
        <div key={i} className="mb-2">
          <div className="font-semibold">{r.titre}</div>
          <div className="text-gray-700 dark:text-gray-300 mb-1">{r.description}</div>
          {Array.isArray(r.preuve) ? (
            <div className="flex flex-wrap gap-2 mb-1">
              {r.preuve.map((p, j) => (
                <span key={j} className="inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs">📎 {p}</span>
              ))}
            </div>
          ) : (
            <span className="inline-block bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs mb-1">📎 {r.preuve}</span>
          )}
          {r.telechargement && (
            <a href={r.telechargement} download className="block text-blue-600 hover:underline text-sm">📄 Voir le document PDF</a>
          )}
          {Array.isArray(r.lien) ? (
            <div className="flex flex-wrap gap-2 mt-2">
              {r.lien.map((l, j) => (
                l.match(/\.(png|jpg|jpeg|webp)$/i) ? (
                  <img
                    key={j}
                    src={l}
                    alt={Array.isArray(r.preuve) ? r.preuve[j] || "preuve" : "preuve"}
                    className="rounded shadow max-h-48 max-w-xs border border-gray-300 dark:border-gray-700 cursor-pointer hover:scale-105 transition"
                    onClick={() => Array.isArray(r.lien) ? openModal(r.lien.filter((x: string) => x.match(/\.(png|jpg|jpeg|webp)$/i)), j) : undefined}
                  />
                ) : (
                  <a key={j} href={l} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">🔗 Voir en ligne</a>
                )
              ))}
            </div>
          ) : (
            r.lien && (typeof r.lien === 'string' && r.lien.match(/\.(png|jpg|jpeg|webp)$/i) ? (
              <img
                src={r.lien}
                alt={typeof r.preuve === "string" ? r.preuve : "preuve"}
                className="rounded shadow max-h-48 max-w-xs border border-gray-300 dark:border-gray-700 mt-2 cursor-pointer hover:scale-105 transition"
                onClick={() => openModal([r.lien as string], 0)}
              />
            ) : (
              <a href={r.lien as string} target="_blank" rel="noopener noreferrer" className="block text-blue-600 hover:underline text-sm">�� Voir en ligne</a>
            ))
          )}
        </div>
      ))}
      <div className="bg-blue-50 dark:bg-blue-900 p-3 rounded mt-2">
        {bloc.commentaire}
      </div>
      {/* Modale d'agrandissement d'image avec navigation */}
      {modalImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
          onClick={closeModal}
        >
          {/* Flèche gauche */}
          {modalImages.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
              aria-label="Précédent"
              style={{ border: 'none' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
            </button>
          )}
          <img
            src={modalImage}
            alt="Agrandissement"
            className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg border-4 border-white"
            onClick={e => e.stopPropagation()}
          />
          {/* Flèche droite */}
          {modalImages.length > 1 && (
            <button
              onClick={e => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-60 hover:bg-opacity-90 text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow transition"
              aria-label="Suivant"
              style={{ border: 'none' }}
            >
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6"/></svg>
            </button>
          )}
          {/* Compteur */}
          {modalImages.length > 1 && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white bg-opacity-70 text-gray-800 px-3 py-1 rounded-full text-sm shadow">
              {modalIndex + 1} / {modalImages.length}
            </div>
          )}
          {/* Croix de fermeture */}
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-gray-700 hover:text-red-500 bg-white bg-opacity-70 rounded-full w-8 h-8 flex items-center justify-center shadow transition text-2xl"
            aria-label="Fermer"
            style={{ border: 'none' }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="5" x2="15" y2="15"/><line x1="15" y1="5" x2="5" y2="15"/></svg>
          </button>
        </div>
      )}
    </div>
  );
};

const CompetencesPage = () => (
  <motion.main
    className="max-w-6xl mx-auto p-6"
  >
    <h1 className="text-3xl font-bold mb-2">🧠 MES BLOCS DE COMPÉTENCES</h1>
    <p className="mb-4 text-lg text-gray-700 dark:text-gray-300">Présentation des compétences du BTS SIO SLAM illustrées par des projets concrets.</p>
    <a
      href="/tableau-competences.pdf"
      download
      className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition mb-8"
    >
      ⬇️ Télécharger le tableau PDF
    </a>
    <div className="mb-8">
      <iframe
        src="/tableau-competences.pdf"
        width="100%"
        height="700px"
        className="border rounded"
        title="Aperçu du tableau de compétences PDF"
      ></iframe>
    </div>
    <h2 className="text-2xl font-bold mb-6">📚 COMPÉTENCES ILLUSTRÉES</h2>
    {blocs.map((bloc, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <BlocCard bloc={bloc} />
      </motion.div>
    ))}
  </motion.main>
);

export default CompetencesPage; 