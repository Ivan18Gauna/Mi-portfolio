import aboutpic from "./components/Access/mePhoto.jpg"

const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: 'Mi Portfolio',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Iván Gauna',
  role: 'Full stack developer',
  description:
    'Egresado del bootcamp de la academia, soy Henry, estoy altamente interesado en trabajar donde pueda aportar y aprender de mis compañeros para poder así expandir mis conocimientos y brindar un trabajo de calidad.',
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
    name: 'App-Pelis',
    description:
      'Esta aplicación fue un proyecto individual donde desarrolle el Front-end, consumo una API REST donde me traigo todos los datos relevantes para mostrarlas en el front-end , el usuario podrá buscar las peliculas que desee.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux',],
    sourceCode: 'https://github.com/Ivan18Gauna/app-pelis',
    livePreview:'https://app-pelis.vercel.app' ,
  },
  {
    name: '+Salud',
    description:
      'Este es un proyecto grupal donde aprendí a trabajar en equipo usando metodología ágil/scrum, mi mayor participación fue en el Front-end.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux','Node','Express','SQL'],
    sourceCode: 'https://github.com/Ivan18Gauna/app-clinica',
    livePreview: 'https://app-clinica.vercel.app/',
  },
  {
    name: 'Clon de Mercado Libre',
    description:
      'Este proyecto lo acabo de iniciar, por lo cual está en proceso, la finalidad es aplicar todos mis conocimientos y aprender nuevos.',
    stack: ['Javascript', 'HTML', 'Css','React','Redux','Node','Express','SQL'],
    sourceCode: '',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'Express',
  'SQL',
  'React',
  'Redux',
  'Git',
]


const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'ivan18gauna@gmail.com',
}

export { header, about, projects, skills, contact }
