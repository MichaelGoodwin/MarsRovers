// tslint:disable:max-line-length
import { RoverPage } from './RoverPage';
import { RoverCameras } from '../services/beans/RoverCameras';

export const Rovers = {
  PERSEVERANCE: new RoverPage('Perseverance',
    './assets/percy_600_600.png',
    'https://en.wikipedia.org/wiki/Perseverance_(rover)',
    RoverCameras.PERSEVERANCE,
    '<b>Perseverance</b>, nicknamed <b>Percy</b>, is a car-sized rover designed to explore the crater Jezero on Mars as part of NASA\'s Mars 2020 mission. This rover has a similar design to its predecessor rover Curiosity and carried a mini-helicopter called Ingenuity to mars, which achieved the first powered flight on another planet on the 19th of April 2021. This rover\'s goal include identifying ancient Martian environments capable of supporting life, seeking out evidence of former microbial life existing in those environments, collecting rock and soil samples to store on the Martian surface, and testing oxygen production from the Martian atmosphere to prepare for future crewed missions.'),
  CURIOSITY: new RoverPage('Curiosity',
    './assets/curiosity_600_600.png',
    'https://en.wikipedia.org/wiki/Curiosity_(rover)',
    RoverCameras.CURIOSITY,
    '<b>Curiosity</b> is a car-sized rover designed to explore the crater Gale on Mars as part of NASA\'s Mars Science Laboratory mission (MSL). The rover is responsible for investigating the Martian climate and geology as well as assessing whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life. In December of 2012 Curiosity\'s two-year mission was extended indefinitely.'),
  OPPORTUNITY:  new RoverPage('Opportunity',
    './assets/oppy_600_600.png',
    'https://en.wikipedia.org/wiki/Opportunity_(rover)',
    RoverCameras.OPPORTUNITY,
    '<b>Opportunity</b>, nicknamed <b>Oppy</b>, is a robotic rover that was launched as part of NASA\s Mars Exploration Rover (MER) program and landed in Meridiani Planum on January 25, 2004. The MER program was originally designed to determine the potential for life to exist on mars, prepare for potential human missions to mars, and characterize the Martian climate and geology. After the initial 90 day mission Oppy continued to explore the martian terrian and is considered one of NASA\'s most successful ventures.'),
  SPIRIT:  new RoverPage('Spirit',
    './assets/spirit_600_600.png',
    'https://en.wikipedia.org/wiki/Spirit_(rover)',
    RoverCameras.SPIRIT,
    '<b>Spirit</b> is one of the two rovers launched as part of NASA\s Mars Exploration Rover (MER) program and landed in the Gusev impact crater on January 4, 2004. Spirit lasted over 5 years and 3 months on mars, ~21.6 times longer than the planned 90-day mission duration, before becoming stuck in soft sand on May 1st, 2009. Although the rover was stuck it continued to communicate and run scientific experiments until its last communication on March 22, 2010.'),
};
