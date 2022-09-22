import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <div className='redes'>
      <a href='/' className='a'>
        <span type='button' className='btn btn--outline'>
          Email
        </span>
      </a>
      <a href='https://github.com/Ivan18Gauna' className='a'>
        <span type='button' className='btn btn--outline'>
          Github
        </span>
      </a>
      <a href='https://www.linkedin.com/in/ivangauna' className='a'>
        <span type='button' className='btn btn--outline'>
          Linkedin
        </span>
      </a>
      </div>
    </section>
    
  )
}

export default Contact
