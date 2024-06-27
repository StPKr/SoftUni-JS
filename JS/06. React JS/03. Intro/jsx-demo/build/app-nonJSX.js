//get root HTML element
var rootHtmlElement = document.getElementById('root');

//Initialize root react element

var rootReactElement = ReactDOM.createRoot(rootHtmlElement);

//Create basic react element
var headingReactElement = React.createElement('h1', null, 'Hello JSX from React');
var secondHeadingReactElement = React.createElement('h2', null, 'JSX is Awesome');

var headingSectionElement = React.createElement('header', null, headingReactElement, secondHeadingReactElement);

//Render content
rootReactElement.render(headingSectionElement);