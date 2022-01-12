let page = 'aboutArticle';

/*Buttons*/

const aboutButton = document.getElementById('about-button');
const gameButton = document.getElementById('game-button');
const islandButton = document.getElementById('island-button');
const portfolioButton = document.getElementById('portfolio-button');
const moreButton = document.getElementById('more-button');
const imgButton = document.getElementById('img-button');
const htmlButton = document.getElementById('html-button');
const cssButton = document.getElementById('css-button');
const jsButton = document.getElementById('script-button');
const flexbox = document.getElementById('flexbox');
const fotomatic = document.getElementById('fotomatic');
const cheatSheet = document.getElementById('cheatSheet');
const styleGuide = document.getElementById('styleGuide');
/*Articles*/

const aboutArticle = document.getElementById('about');
const gameArticle = document.getElementById('game');
const islandArticle = document.getElementById('island');
const portfolioArticle = document.getElementById('portfolio');
const moreArticle = document.getElementById('more');

/*Code Viewer Pages*/

const imgPage = document.getElementById('img');
const htmlPage = document.getElementById('html');
const cssPage = document.getElementById('css');
const jsPage = document.getElementById('js');

/*Nav Bar Highlight*/

const reset = () => {
    aboutButton.style.textDecoration = 'none';
    gameButton.style.textDecoration = 'none';
    islandButton.style.textDecoration = 'none';
    portfolioButton.style.textDecoration = 'none';
    moreButton.style.textDecoration = 'none';
    aboutArticle.style.zIndex = 1;
    gameArticle.style.zIndex = 1;
    islandArticle.style.zIndex = 1;
    portfolioArticle.style.zIndex = 1;
    moreArticle.style.zIndex = 1;
}

const highlight = (button) => {
    button.style.textDecoration= 'underline #4266a1';
}

/*Nav Bar Articles*/

const goToArticle = (article) => {
    article.style.zIndex = 2;
}

/* Nav Bar Pages*/

const loadImg = (project) => {
    imgPage.firstElementChild.src=`./codes/${project}/img.jpg`;
}

const loadCode = (project) => {
    htmlPage.firstElementChild.data=`./codes/${project}/html.txt`;
    cssPage.firstElementChild.data=`./codes/${project}/css.txt`;
    jsPage.firstElementChild.data=`./codes/${project}/js.txt`;
}

/*About Button*/

aboutButton.addEventListener('click', reset)
aboutButton.addEventListener('click', function () {
    highlight(aboutButton);
})
aboutButton.addEventListener('click', function () {
    goToArticle(aboutArticle);
} )
aboutButton.addEventListener('click', function () {
    loadImg('about');
    loadCode('about')
})
/*Game Button*/

gameButton.addEventListener('click', reset);
gameButton.addEventListener('click', function () {
    highlight(gameButton);
})
gameButton.addEventListener('click', function () {
    goToArticle(gameArticle);
})
gameButton.addEventListener('click', function () {
    loadImg('gameOfWar');
    loadCode('gameOfWar')
})
/*Island Button*/

islandButton.addEventListener('click', reset);
islandButton.addEventListener('click', function () {
    highlight(islandButton);
})
islandButton.addEventListener('click', function () {
    goToArticle(islandArticle);
})
islandButton.addEventListener('click', function () {
    loadImg('golfIsland');
    loadCode('golfIsland')
})
/*Portfolio Button*/

portfolioButton.addEventListener('click', reset);
portfolioButton.addEventListener('click', function () {
    highlight(portfolioButton);
})
portfolioButton.addEventListener('click', function () {
    goToArticle(portfolioArticle);
})
portfolioButton.addEventListener('click', function () {
    loadImg('portfolio');
    loadCode('portfolio')
})
/*More Button*/

moreButton.addEventListener('click', reset);
moreButton.addEventListener('click', function () {
    highlight(moreButton);
})
moreButton.addEventListener('click', function() {
    goToArticle(moreArticle);
})
moreButton.addEventListener('click', function () {
    loadImg('more');
    loadCode('more');
})
/*Code Viewer*/

const viewerReset = () => {
    imgPage.style.zIndex = 1;
    htmlPage.style.zIndex = 1;
    cssPage.style.zIndex = 1;
    jsPage.style.zIndex = 1;
    imgButton.style.textDecoration = 'none';
    htmlButton.style.textDecoration = 'none';
    cssButton.style.textDecoration = 'none';
    jsButton.style.textDecoration = 'none';
}

const switchViewer = (page) => {
    page.style.zIndex = 2;
}

/*IMG Button*/

imgButton.addEventListener('click', viewerReset);
imgButton.addEventListener('click', function () {
    switchViewer(imgPage);
})
imgButton.addEventListener('click', function () {
    highlight(imgButton);
})

/*HTML Button*/

htmlButton.addEventListener('click', viewerReset);
htmlButton.addEventListener('click', function () {
    switchViewer(htmlPage);
})
htmlButton.addEventListener('click', function () {
    highlight(htmlButton);
})

/*CSS Button*/

cssButton.addEventListener('click', viewerReset);
cssButton.addEventListener('click', function () {
    switchViewer(cssPage);
})
cssButton.addEventListener('click', function () {
    highlight(cssButton);
})

/*JS Button*/

jsButton.addEventListener('click', viewerReset);
jsButton.addEventListener('click', function () {
    switchViewer(jsPage);
})
jsButton.addEventListener('click', function () {
    highlight(jsButton);
})


/*More Projects*/
const moreReset = () => {
    flexbox.style.color = '#4266a1';
    fotomatic.style.color = '#4266a1';
    cheatSheet.style.color = '#4266a1';
    styleGuide.style.color = '#4266a1';
}

const moreHighlight = (project) => {
    project.style.color = '#d01d47';
}

flexbox.addEventListener('click', moreReset);

flexbox.addEventListener('click', function () {
    loadImg('flexbox');
    loadCode('flexbox');
    moreHighlight(flexbox);
});

fotomatic.addEventListener('click', moreReset);

fotomatic.addEventListener('click', function () {
    loadImg('fotomatic');
    loadCode('fotomatic');
    moreHighlight(fotomatic);
});

styleGuide.addEventListener('click', moreReset);

styleGuide.addEventListener('click', function () {
    loadImg('styleGuide');
    loadCode('styleGuide');
    moreHighlight(styleGuide);
})

cheatSheet.addEventListener('click', moreReset);

cheatSheet.addEventListener('click', function () {
    loadImg('cheatSheet');
    loadCode('cheatSheet');
    moreHighlight(cheatSheet);
})