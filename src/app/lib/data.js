// This file contains placeholder data that you'll be replacing with real data in the Data Fetching chapter:
// https://nextjs.org/learn/dashboard-app/fetching-data

import { title } from "process"

  
  const valeurs = [
    {
        id:1,
        title:"Intégrité",
        body:"Nous agissons avec honnêteté et transparence dans toutes nos prestations, respectant les normes éthiques et professionnelles.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:2,
        title:"Responsabilité",
        body:"Engagés envers des pratiques durables, nous mettons en œuvre des solutions respectueuses de l'environnement.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:3,
        title:"Service à la clientèle",
        body:"La satisfaction de nos clients est notre priorité. Nous nous eng ageons à offrir un service personnalisé et à être à l'écoute de leurs besoins.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:4,
        title:"Innovation",
        body:"Nous investissons dans la recherche et l'innovation pour anticiper les besoins de demain.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:5,
        title:"Précision",
        body:"La rigueur et l’exactitude sont au cœur de notre métier. Chaque mesure est prise avec le plus grand soin pour garantir des résultats fiables.",
        url:"/svg/card_img_head.svg"
    }
  ]

  const servicesFoncier = [
    {
        id:1,
        title:"Pole Foncier",
        body:"Le pôle foncier joue un rôle central dans la sécurisation et la gestion des droits de propriété. Ce département est spécialisé dans l’étude, la délimitation, et la régularisation des terrains, assurant ainsi la sécurité juridique des biens fonciers pour les propriétaires, investisseurs et institutions publiques.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:2,
        title:"Bornage et délimitation",
        body:"Le bornage est l’opération qui définit juridiquement et matérialise sur le terrain les limites de propriétés privées.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:3,
        title:"Etudes et enquêtes foncières",
        body:"Analyse de la situation foncière d’un terrain (historique, droits, servitudes) pour une prise de décision éclairée pour les transactions immobilières.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:4,
        title:"Études d’impact foncier pour projets d’aménagement",
        body:"Evaluation des effets potentiels d’un projet (infrastructures, zones résidentielles) sur les propriétés avoisinantes, contribuant ainsi à une planification territoriale équilibrée.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:5,
        title:"Division de propriété",
        body:"Morcellement de propriété en vue d’obtenir plusieurs entités distinctes. ",
        url:"/svg/card_img_head.svg"
    }
  ]

  const servicesTopo = [
    {
        id:1,
        title:"Pole Topographie",
        body:"Le pôle topographie d’un cabinet de géomètre-expert est spécialisé dans la mesure et la représentation précise de l’espace physique.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:2,
        title:"Levé et implantation de chantiers",
        body:"Positionnement précis des éléments d’un projet (bâtiments, routes, fondations) sur le terrain, garantissant la conformité aux plans d’urbanisme et de construction.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:3,
        title:"Scanner laser 3D et photogrammétrie",
        body:"Utilisation des technologies comme les scanners 3D et les drones pour capturer des modèles numériques détaillés, permettant une analyse fine et une visualisation en 3D du site.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:4,
        title:"Drones et photogrammétrie",
        body:"prises de vues aériennes pour des levés topographiques de haute précision pour les projets de grande envergure comme les infrastructures routières ou les grands chantiers d’aménagement.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:5,
        title:"Etudes géodésiques",
        body:"Implémentation de réseau de points de contrôle géodésique pour des projets de grande envergure, assurant des mesures fiables et précises sur de vastes zones. ",
        url:"/svg/card_img_head.svg"
    }
  ]

  const servicesGeo = [
    {
        id:1,
        title:"Pole Géomatique",
        body:"Le pôle géomatique se consacre à la gestion, l'analyse, et la visualisation de données géospatiales pour offrir des solutions précises et innovantes dans divers domaines, allant de l’urbanisme à l’environnement.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:2,
        title:"Gestion et analyse de bases de données géospatiales",
        body:"Organisation et structuration des données géographiques pour faciliter leur accessibilité et leur utilisation dans des projets variés (urbanisme, agriculture, ressources naturelles).",
        url:"/svg/card_img_head.svg"
    },
    {
        id:3,
        title:"Études d’impact environnemental et gestion des ressources naturelles",
        body:"Analyse de l'impact des projets sur l'environnement et optimiser l'utilisation des ressources de manière durable.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:4,
        title:"Imagerie satellite et télédétection",
        body:"Traitement et interprétation des images satellites pour des applications comme le suivi de l’occupation des sols, la gestion des ressources naturelles, et la surveillance des zones sensibles.",
        url:"/svg/card_img_head.svg"
    },
    {
        id:5,
        title:"Cartographie numérique et SIG",
        body:"Conception et mise à jour des cartes numériques interactives, permettant une visualisation et une analyse dynamique des données géographiques. ",
        url:"/svg/card_img_head.svg"
    },
    {
        id:6,
        title:"Développement d’applications géospatiales",
        body:"Création d’applications et portails web SIG personnalisés pour faciliter l'accès et la gestion des données géographiques en ligne. ",
        url:"/svg/card_img_head.svg"
    }
  ]

  const projets = [
    {
      id:1,
      title:"Extension de la route principale de Côte d'Ivoire",
      details:" Etudes géodésiques de haute précision et cartographie 3D pour une autoroute de 50 kilomètres. Livraison de modèles d'élévation détaillés et de données géospatiales.",
      impacts:"Alignement routier optimisé, réduction des erreurs de construction et amélioration de la planification de la sécurité pour le trafic futur.",
      url:"/project_img_1.jpg"
    },
    {
      id:2,
      title:"Réaménagement urbain à Abidjan",
      details:"Fourniture de cartographie SIG et d'études d'impact foncier pour un projet de réaménagement à usage mixte, comprenant des zones résidentielles et commerciales.",
      impacts:"Facilitation de la croissance urbaine durable, réduction des conflits fonciers et rationalisation des approbations de projets.",
      url:"/project_img_2.jpg"
    },
  ]

  const tools = [
    [
      '2 stations totales de haute précision',
      '2 niveaux électroniques de haute précision',
      '14 récepteurs GPS',
    ],
    ['1 drone DJI Phantom 4 Pro'],
    [
      'Distancemètre, trépied, réflecteur, jalon, croissant',
      'Serpette, panneau de signalisation',
      'cônes de signalisation, feux tricolores KR11'
    ]
  ]

  const questions_responses = [
    {
      id : 1,
      question: "Les documents techniques fournis par CGE-DAO sont-ils réglementaires ?",
      response : "Bien sûr nous suivons une procédure réglementaire dans la conception de vos documents se conformant aux exigences des autorités en la matière.",
    },
    {
      id : 2,
      question: "Quels types de projets CGE-DAO réalise-t-il en Côte d'Ivoire ?",
      response : "Nous intervenons sur divers projets : lotissement, aménagement, foncier, délimitation, dossier technique, copropriété,  routes, bâtiments, ponts, réhabilitation, etc. Notre expertise couvre tous les aspects du foncier, de la topographie et de la géomatique.",
    },
    {
      id : 3,
      question: "Comment puis-je obtenir un devis pour mon projet ?",
      response : " Vous pouvez nous contacter directement via notre formulaire de contact ou nous appeler. Nous serons ravis d'évaluer vos besoins et de vous proposer une solution adaptée.",
    }
  ]
  export { questions_responses, valeurs, servicesFoncier, servicesTopo, servicesGeo, projets, tools };
  
