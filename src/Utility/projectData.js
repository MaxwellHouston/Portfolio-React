//About
import aboutImg from '../Utility/codes/about/img.jpg';
import aboutHTML from '../Utility/codes/about/html.txt';
import aboutCSS from '../Utility/codes/about/css.txt';
import aboutJS from '../Utility/codes/about/js.txt';
//gameOfWar
import gameImg from '../Utility/codes/gameOfWar/img.jpg';
import gameHTML from '../Utility/codes/gameOfWar/html.txt';
import gameCSS from '../Utility/codes/gameOfWar/css.txt';
import gameJS from '../Utility/codes/gameOfWar/js.txt';
//Golf Island
import golfIslandImg from '../Utility/codes/golfIsland/img.jpg';
import golfIslandHTML from '../Utility/codes/golfIsland/html.txt';
import golfIslandCSS from '../Utility/codes/golfIsland/css.txt';
//import golfIslandJS from '../Utility/codes/golfIsland/js.txt';
//Portfolio
import portfolioImg from '../Utility/codes/portfolio/img.jpg';
import portfolioHTML from '../Utility/codes/portfolio/html.txt';
import portfolioCSS from '../Utility/codes/portfolio/css.txt';
import portfolioJS from '../Utility/codes/portfolio/js.txt';
//Flexbox
import flexboxImg from '../Utility/codes/flexbox/img.jpg';
import flexboxHTML from '../Utility/codes/flexbox/html.txt';
import flexboxCSS from '../Utility/codes/flexbox/css.txt';
//import flexboxJS from '../Utility/codes/flexbox/js.txt';
// Fotomatic
import fotomaticImg from '../Utility/codes/fotomatic/img.jpg';
import fotomaticHTML from '../Utility/codes/fotomatic/html.txt';
import fotomaticCSS from '../Utility/codes/fotomatic/css.txt';
//import fotomaticJS from '../Utility/codes/fotomatic/js.txt';
//CheatSheet
import cheatSheetImg from '../Utility/codes/cheatSheet/img.jpg';
import cheatSheetHTML from '../Utility/codes/cheatSheet/html.txt';
import cheatSheetCSS from '../Utility/codes/cheatSheet/css.txt';
//import cheatSheetJS from '../Utility/codes/cheatSheet/js.txt';
//StyleGuide
import styleGuideImg from '../Utility/codes/styleGuide/img.jpg';
import styleGuideHTML from '../Utility/codes/styleGuide/html.txt';
import styleGuideCSS from '../Utility/codes/styleGuide/css.txt';
//import styleGuideJS from '../Utility/codes/styleGuide/js.txt';
//Calculator
import calculatorImg from '../Utility/codes/calculator/img.jpg';
import calculatorHTML from '../Utility/codes/calculator/html.txt';
import calculatorCSS from '../Utility/codes/calculator/css.txt';
import calculatorJS from '../Utility/codes/calculator/js.txt';
//Appointment
import appointmentImg from '../Utility/codes/appointment/img.jpg';
import appointmentHTML from '../Utility/codes/appointment/html.txt';
import appointmentCSS from '../Utility/codes/appointment/css.txt';
import appointmentJS from '../Utility/codes/appointment/js.txt';
//Empty
import empty from '../Utility/codes/empty.txt';


const ProjectData = {

    empty: {
        name: 'empty',
        txt: empty
    },
    about: {
        header: 'About Me ',
        article: `My name is Max Houston and I am currently learning how to be a full stack engineer through Codecademy. 
                This website is my portfolio for the work I have completed so far. The main projects will have a code 
                viewer on the right side of the screen that shows the different code for each project and a description 
                of the project on the left. The more projects page will have a list of other work and have links to 
                their GitHub repositories. I will be updating this site regularly with new contentent and my GitHub 
                page will always have my most recent work. I would love to hear any feedback you have on my projects 
                as I still have a whole lot to learn.`,
        email: 'maxhouston@gmail.com',
        github: 'https://github.com/MaxwellHouston',    
        img: aboutImg,
        html: aboutHTML,
        css: aboutCSS,
        js: aboutJS,
    },
    gameOfWar: {
        header: 'Game of War',
        article: `This is a personal project that I started when learning JavaScript. It began as just building a
                deck of cards as an array but as I learned more it grew into a full game. Then while learning 
                then while learning HTML and CSS I made it playable on a web browser. Everytime I learn something
                relevant I add to the project.`,
        github: 'https://github.com/MaxwellHouston/Game_of_War',
        img: gameImg,
        html: gameHTML,
        css: gameCSS,
        js: gameJS,

    },
    calculator: {
        header: 'Psychrometric Calculator',
        article: `This web app is a calculator that takes in two inputs of either: Temperature, Dew Point, or Relative Humidity. 
                The conversion equations are stored in a library object then used to solve for the input not used.  
                The main use for this web app is to help make calculations for 
                people working in the Water Mitigation field, or studying Psychrometrics.`,
        github: 'https://github.com/MaxwellHouston/Psychrometric-Calculator',
        img: calculatorImg,
        html: calculatorHTML,
        css: calculatorCSS,
        js: calculatorJS,

    },
    frontPage: {
        header: 'Front Page',
        article: `This project is a Reddit client that acts as a  homepage that takes users input for topics that interest them and displays reddit articles pertaining to that topic. 
        It was built using React, React Router, and Redux. All of the data is pulled from the Reddit API. Each topic chosen pulls the top three articles from three diffrent subreddits pertaining to the topic. These articles are then
        displayed in a grid with tumbnail photos and a link to the full article. When clicked, this link opens up that article to fill the whole page and displays the awards, upvotes, the body of
        the article, and also fetches and displays the comments section.`,
        github: 'https://github.com/MaxwellHouston/appointment-planner',
        img: appointmentImg,
        html: appointmentHTML,
        css: appointmentCSS,
        js: appointmentJS,

    },
    more: {
        name: 'More',
        section: 'none',
        value: 'more',
        img: flexboxImg,
        html: flexboxHTML,
        css: flexboxCSS,
        //js: flexboxJS,
    },
    flexbox: {
        name: 'Flexbox',
        section: 'more',
        value: 'flexbox',
        img: flexboxImg,
        html: flexboxHTML,
        css: flexboxCSS,
        //js: flexboxJS,
    },
    fotomatic: {
        name: 'Fotomatic',
        section: 'more',
        value: 'fotomatic',
        img: fotomaticImg,
        html: fotomaticHTML,
        css: fotomaticCSS,
        //js: fotomaticJS,
    },
    cheatSheet: {
        name: 'CheatSheet',
        section: 'more',
        value: 'cheatSheet',
        img: cheatSheetImg,
        html: cheatSheetHTML,
        css: cheatSheetCSS,
        //js: cheatSheetJS,
    },
    styleGuide: {
        name: 'Style Guide',
        section: 'more',
        value: 'styleGuide',
        img: styleGuideImg,
        html: styleGuideHTML,
        css: styleGuideCSS,
        //js: styleGuideJS,
    },
    golfIsland: {
        name: 'Golf Island',
        section: 'more',
        value: 'golfIsland',
        img: golfIslandImg,
        html: golfIslandHTML,
        css: golfIslandCSS,
        //js: golfIslandJS,
    },
    portfolio: {
        name: 'Portfolio',
        section: 'more',
        value: 'portfolio',
        img: portfolioImg,
        html: portfolioHTML,
        css: portfolioCSS,
        js: portfolioJS,
    },
    appointment: {
        name: 'Appointment',
        section: 'more',
        value: 'appointment',
        img: appointmentImg,
        html: appointmentHTML,
        css: appointmentCSS,
        js: appointmentJS,
    }
    
}


export default ProjectData;