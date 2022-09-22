import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contacto</h2>
      <a href='/'>
        <span type='button' className='btn btn--outline'>
          Email
        </span>
      </a>
      <a href='https://github.com/Ivan18Gauna'>
        <span type='button' className='btn btn--outline'>
          Github
        </span>
      </a>
      <a href='https://www.linkedin.com/in/ivangauna'>
        <span type='button' className='btn btn--outline'>
          Linkedin
        </span>
      </a>
    </section>
  )
}

export default Contact
