import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'JS.',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Ivan Gauna',
  role: 'Full stack developer',
  description:
    'Egresado del bootcamp de la academia de soy Henry, estoy altamente interesado en trabajar con personas de las cuales pueda aprender.',
  resume: 'https://example.com',
  social: {
    linkedin: 'http://linkedin.com/in/ivangauna',
    github: 'https://github.com/Ivan18Gauna',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Food-App',
    description:
      'Esta aplicacion fue un proyecto individual donde desarrolle tanto el front-end como el back-end, consumo una API REST donde me traigo todos los datos relevantes de 100 recetas para mostrarlas en el front-end de a 9 recetas gracias al paginado, el ususario podra buscar,filtrar, ordenar y tambien crear una receta.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux','Node','Express','Sequelize'],
    sourceCode: 'https://github.com/Ivan18Gauna/PI-Food-main',
    livePreview: 'https://food-app-indol-theta.vercel.app/',
  },
  {
    name: '+Salud',
    description:
      'Este es un proyecto grupal donde aprendi a trabajar en equipo usando metodologia agil/scrum, mi mayor participacion fue en el front-end.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux','Node','Express','Sequelize'],
    sourceCode: 'https://github.com/Ivan18Gauna/app-clinica',
    livePreview: 'https://app-clinica.vercel.app/',
  },
  {
    name: 'Clon de Mercado Libre',
    description:
      'Este proyecto lo acabo de iniciar por lo cual esta en proceso, la finalidad es aplicar todos mis conocimientos y apreder nuevos.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux','Node','Express','Sequelize'],
    sourceCode: 'https://github.com/Ivan18Gauna',
    livePreview: 'https://www.mercadolibre.com.ar/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'MySQL',
  'React',
  'Redux',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ivan18gauna@gmail.com',
}

export { header, about, projects, skills, contact }
