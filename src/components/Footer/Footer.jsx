import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import './Footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container'>
            <img src="/footer_img.png" alt="footer img" className='footer__img' />
            <h2 className='footer__h2'>Andres Sanabria</h2>
            <p className='footer__p'>Frontend Developer</p>
            <a href="https://github.com/80asv" target="_blank">
                <FontAwesomeIcon className='footer__icon' icon={faGithubAlt}/>
            </a>
        </div>
        <div className='footer__gradient-line'></div>
    </footer>
  )
}
export default Footer