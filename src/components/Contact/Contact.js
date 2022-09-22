import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <div className='redes'>
      <a href='https://api.whatsapp.com/send?phone=543795022500&text=Hola%20mi%20nombre%20es%20....' target="_blank" className='a'>
        <span type='button' className='btn btn--outline'>
        whatsapp
        </span>
      </a>
      <a href='https://github.com/Ivan18Gauna' target="_blank" className='a'>
        <span type='button' className='btn btn--outline'>
          Github
        </span>
      </a>
      <a href='https://www.linkedin.com/in/ivangauna' target="_blank" className='a'>
        <span type='button' className='btn btn--outline'>
          Linkedin
        </span>
      </a>
      </div>
    </section>
    
  )
}

export default Contact
