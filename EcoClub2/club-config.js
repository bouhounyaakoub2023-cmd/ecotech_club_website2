/**
 * ============================================
 * ECOCLUB — FICHIER DE CONFIGURATION
 * ============================================
 *
 * Modifiez UNIQUEMENT ce fichier pour personnaliser tout le contenu du site.
 * Les valeurs sont automatiquement injectées dans toutes les pages.
 *
 * Ne modifiez pas les fichiers HTML directement pour le contenu.
 * Gardez ce fichier à jour avec les informations de votre club.
 *
 * ============================================
 */

const CLUB_CONFIG = {
  // ------------------------------------------
  // INFORMATIONS GÉNÉRALES DU CLUB
  // ------------------------------------------
  club: {
    name: "EcoTech Club",
    logo: "media/club/logo of the web site.png",
    description: "EcoTech is a student club that combines technology and environmental protection to promote sustainability. We work on innovative projects, participate in scientific competitions, and use modern technologies to create positive environmental impacts.",
    tagline: "Living in harmony with nature",
    heroTitle: "Green by VISION,",
    heroSubtitle: "Tech by ACTION",
    heroImage: "media/club/heroImage.jpg",
    heroImage2: "media/club/heroImage2.jpg",
    heroImage3: "media/club/heroImage3.jpg"
  },

  // ------------------------------------------
  // VISION & MISSION
  // ------------------------------------------
  vision: "EcoTech envisions a future where technology is used responsibly to protect the environment and support sustainable development. We aim to empower students to create innovative, smart, and eco-friendly solutions that contribute to a cleaner and more sustainable world.",
  mission: "The mission of EcoTech is to bring together technology and environmental awareness by encouraging students to develop projects that use artificial intelligence and modern technologies to solve real environmental challenges. We strive to build skills, promote innovation, and inspire positive impact through collaboration, research, and practical action.",

  // ------------------------------------------
  // VALEURS (4 valeurs)
  // ------------------------------------------
  values: [
    { title: "Learning & Development", description: "Empowering members through hands-on projects, workshops, and research." },
    { title: "Collaboration", description: "Fostering teamwork, knowledge sharing, and cooperation among students and partners." },
    { title: "Innovation", description: "Encouraging creative and smart technological solutions to real-world environmental challenges." },
    { title: "Impact", description: "Creating practical solutions that contribute positively to society and the environment." }
  ],

  // ------------------------------------------
  // STATISTIQUES (affichées sur la page d'accueil)
  // ------------------------------------------
  stats: {
    members: 40,
    eventsOrganized: 3,
    yearsActive: 1
  },

  // ------------------------------------------
  // DÉPARTEMENTS (4 départements)
  // ------------------------------------------
  departments: [
    { name: "SensibiliGreen Tech Department", description: "Focuses on developing technical and innovative solutions that combine technology with sustainability.", image: "media/departments/SensibiliGreen Tech Department.jpg" },
    { name: "Environmental & Research Department", description: "Dedicated to studying environmental challenges and ensuring that projects follow sustainability principles.", image: "media/departments/Environmental & Research Department.jpg" },
    { name: "Media & Design Department", description: "Manages the club’s visual identity and communication across platforms.", image: "media/departments/Media & Design Department.jpg" },
    { name: "Projects & Events Department", description: "Responsible for organizing events and building partnerships with other clubs and institutions.", image: "media/departments/Projects & Events Department.JPG" }
  ],

  // ------------------------------------------
  // ÉQUIPE (6 membres maximum)
  // ------------------------------------------
  team: [
    { name: "Mezaache Mohamed", role: "President", bio: "the President of the EcoTech Club at ENPC. leads the club’s mission to integrate technology and environmental sustainability through innovative student-led projects, scientific competitions, and awareness initiatives at both national and international levels.", image: "media/team/Mezaache Mohamed.jpg", linkedin: "https://www.linkedin.com/in/mezaache-mohamed-261433352?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://instagram.com/mez_moh1" },
    { name: "Adjal Ouissal", role: "Vice President", bio: "Curious mind, determined heart", image: "media/team/Adjal Ouissal.jpg", linkedin: "https://www.linkedin.com/in/adjal-ouissal-a06b282a1/", instagram: "https://instagram.com/wissou_ad" },
    { name: "Mansouri Ihcen", role: "HR / project and event coordinator", bio: "Responsible for team coordination, project organization, and event planning within the club.", image: "media/team/Mansouri Ihcen.jpg", linkedin: "https://www.linkedin.com/in/ihcen-mansouri-41510a390", instagram: "https://www.instagram.com/ihxeene?igsh=MWlkbDB2dWd6cnV5Mg==" },
    { name: "Hounaida Belhour", role: "Office Secretary", bio: "4th-Year Environmental & Process Engineering Student at ENP Constantine | Passionate about Water & Waste Management | Exploring Sustainable and Innovative Solutions", image: "media/team/Hounaida Belhour.jpg", linkedin: "https://www.linkedin.com/in/hounaida-belhour-4a8b5b350/", instagram: "https://instagram.com/blhounaida" },
    { name: "Azizi Mohammed", role: "external relations manager", bio: "ENPC student in 3rd year of Mechanical Engineering (automotive industry). Ambitious, solution-focused, curious, project-driven, and future-ready.", image: "media/team/Azizi Mohammed.jpg", linkedin: "https://www.linkedin.com/in/azizi-mohammed-4b33113b2?utm_source=share_via&utm_content=profile&utm_medium=member_android", instagram: "https://instagram.com/m.e.d_az"},
    { name: "Yaakoub Bouhoun", role: "GreenTech department coordinator", bio: "ENPC student passionate about artificial intelligence, smart industrial systems, and innovative tech solutions. He builds practical projects combining automation, sustainability, and digital entrepreneurship in Algeria.", image: "media/team/Yaakoub Bouhoun.jpg", linkedin: "https://www.linkedin.com/in/yaakoub-bouhoun-b7a0863a9/", instagram: "https://www.instagram.com/yakoen.elnano/#" },
    { name: "Mahdi Ahmed Taha", role: "Photographer", bio: "ENPC Student photographer.", image: "media/team/Mahdi Ahmed Taha.jpg", linkedin: "", instagram: "https://instagram.com/tahamxhdi" }
  ],

  // ------------------------------------------
  // ÉVÉNEMENTS
  // Passés (3) et À venir (2)
  // ------------------------------------------
  events: {
    past: [
      { title: "EcoTech Opening Day", date: "February 16, 2026", location: "ENPC – Main Hall", description: "Official opening of the EcoTech Club featuring project exhibitions, department presentations, and interactive activities focused on technology and sustainability", Time: "09:00 AM – 03:00 PM", Status: "Completed.", image: "media/events/EcoTech Opening Day.jpg" },
      { title: "Blood Donation Campaign", date: "February 11, 2026", location: "ENPC Campus", description: "A humanitarian initiative organized by EcoTech to encourage blood donation and promote health awareness among students.", Time: "10:00 AM – 02:00 PM", Status: "Completed.", image: "media/events/Blood Donation Campaign.jpg" },
       { title: "Fourth edition of the National Green Technology Forum", date: "February 2026", location: "ENSC-conference room", description: "Participation in a competition on smart agriculture (winning the #3 spot).", Time: "09:00 AM – 05:30 PM", Status: "Upcoming.", image: "media/events/Fourth edition of the National Green Technology Forum.jpg" }
      
    ],
    upcoming: [
      { title: "AI for Sustainability Workshop", date: "February 2026", location: "ENSC-conference room", description: "Participation in a competition on smart agriculture (winning the #3 spot).", Time: "09:00 AM – 05:30 PM", Status: "Completed.", image: "media/events/AI for Sustainability Workshop.png" },
      { title: "EcoTech Project Showcase", date: "May 2026", location: "ENPC", description: "Presentation of EcoTech members’ projects combining AI, technology, and environmental protection.", Time: "10:00 AM – 01:00 PM", Status: "Upcoming.", image: "media/events/EcoTech Project Showcase.jpg" }
    ]
  },

  // ------------------------------------------
  // CONTACT & RÉSEAUX SOCIAUX
  // ------------------------------------------
  contact: {
    email: "ecotech.club2026@gmail.com",
    phone: "",
    address: "ENPC, Constantine, Algeria ",
    social: {
      instagram: "https://www.instagram.com/ecotech_club/#",
      linkedin: "https://www.linkedin.com/company/ecotech-club/",
      facebook: "https://www.facebook.com/share/18E8AVEYT6/",
      
    }
  },

  // ------------------------------------------
  // FORMULAIRE D'INSCRIPTION
  // Collez ici l'URL de votre webhook n8n pour recevoir les candidatures.
  // Laissez vide "" pour tester en local (les données s'affichent dans la console).
  // ------------------------------------------
  form: {
    webhookUrl: "https://apexds.app.n8n.cloud/webhook/club-registration"
  }
};

// Export pour utilisation par le script de personnalisation
if (typeof window !== 'undefined') {
  window.CLUB_CONFIG = CLUB_CONFIG;
}
