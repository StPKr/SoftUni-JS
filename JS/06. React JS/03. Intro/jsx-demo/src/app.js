// Gett root HTML Element
const rootHtmlElement = document.getElementById('root');
console.dir(rootHtmlElement);

// Initilize root react element
const rootReactElement = ReactDOM.createRoot(rootHtmlElement);

// Create basic react element
const headingReactSectionElement = (
    <header className="navigation" id="site-header">
        <h1>Hello JSX from React</h1>
        <h2>JSX is Awesome</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero, corrupti?</p>
    </header>
);

// Render content
rootReactElement.render(headingReactSectionElement);





