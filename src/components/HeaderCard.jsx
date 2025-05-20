import React from 'react';
import {Mail, ExternalLink } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../index.css'
import '../App.css'
import '../Animate.css'
import { faDiscord, faFigma, faGithub, faLinkedin, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';


const HeaderCard = () => {
  return (
    <div className='bg-base-300 w-full min-h-55 p-6 flex flex-col md:flex-row items-center md:items-start shadow-lg z-10'>
      <img className='AH-Pulse rounded-3xl w-40 h-40 md:w-48 md:h-48 object-cover mb-6 md:mb-0 md:mr-8 border-4 border-primary' src="src/assets/revilo.lib.png" alt="Revilo.Dev Icon" />
      <div className='flex flex-col items-center md:items-start text-center md:text-left'>
        <a href='https://github.com/Revilo-Dev/Revilo.Lib' ><h1 className='text-4xl font-bold mb-2 text-primary AH-Underline'>Revilo.Lib</h1></a>
        <p className='text-lg text-zinc-500 mb-4'>A comprehensive library for creative development.</p>
        <div className='flex space-x-4 mb-4'>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="GitHub"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Figma"><FontAwesomeIcon icon={faFigma} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Discord"><FontAwesomeIcon icon={faDiscord} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="X/Twitter"><FontAwesomeIcon icon={faXTwitter} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="Reddit"><FontAwesomeIcon icon={faReddit} /></a>
        <a href="#" className="text-zinc-500 hover:text-primary btn btn-soft AH-Glow" aria-label="LinkedIn"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className=' AH-Pulse AH-Underline flex items-center text-zinc-400 hover:text-primary'>
          <Mail size={20} className="mr-2" />
          <a href="mailto:Revilo2.Dev@gmail.com" className="hover:underline">
            Revilo2.Dev@gmail.com
          </a>
          <ExternalLink size={16} className="ml-1" />
        </div>
      </div>
    </div>
  );
};

export default HeaderCard;

