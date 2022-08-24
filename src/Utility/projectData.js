
const ProjectData = {

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
        images: []
    },
    gameOfWar: {
        header: 'Game of War',
        article: `This is a personal project that I started when learning JavaScript. It began as just building a
                deck of cards as an array but as I learned more it grew into a full game. Then while learning 
                then while learning HTML and CSS I made it playable on a web browser. Everytime I learn something
                relevant I add to the project.`,
        github: 'https://github.com/MaxwellHouston/Game_of_War',
        images: []
        
    },
    calculator: {
        header: 'Psychrometric Calculator',
        article: `This web app is a calculator that takes in two inputs of either: Temperature, Dew Point, or Relative Humidity. 
                The conversion equations are stored in a library object then used to solve for the input not used.  
                The main use for this web app is to help make calculations for 
                people working in the Water Mitigation field, or studying Psychrometrics.`,
        github: 'https://github.com/MaxwellHouston/Psychrometric-Calculator',
        images: []
        
    },
    frontPage: {
        header: 'Front Page',
        article: `This project is a Reddit client that acts as a  homepage that takes users input for topics that interest them and displays reddit articles pertaining to that topic. 
        It was built using React, React Router, and Redux. All of the data is pulled from the Reddit API. Each topic chosen pulls the top three articles from three diffrent subreddits pertaining to the topic. These articles are then
        displayed in a grid with tumbnail photos and a link to the full article. When clicked, this link opens up that article to fill the whole page and displays the awards, upvotes, the body of
        the article, and also fetches and displays the comments section. Only the components are shown in the code viewer, to view the Redux store and slice files go to the github project link.`,
        github: 'https://github.com/MaxwellHouston/front-page',
        images: []
        
    },
    maxsports: {
        header: 'Max Sports',
        article: `This project is a mock e-commerce web app that I built for the Codecademy curriculum. I have always loved sports, so I decided to base the inventory and design on a sporting goods store. 
        The project consists of three main sections, a PostgreSQL database, a back end built with Node.js, and the front end, which is built using React. The project is hosted on Heroku, and the link is provided below. 
        Building a project of this size really tested me as a young developer but helped me find many ways of overcoming and solving problems on my own. Overall, it was a great learning experience and really gave me confidence in my coding ability. `,
        github: 'https://github.com/MaxwellHouston/E-Commerce-Full-Stack',
        deployment: 'https://max-ecommerce-fullstack.herokuapp.com/',
        images: []
    }
}


export default ProjectData;