import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const {photo,name, role, description, resume, social } = about

  return (
    <div className='about center'>
      {photo && (
       <img className='img' height="250px" alt="Avatar placeholder" src={photo} />
      )}
      {name && (
        <h1>
          Hola, yo soy <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>{role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {/* {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )} */}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
                target="_blank"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
                target="_blank"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
