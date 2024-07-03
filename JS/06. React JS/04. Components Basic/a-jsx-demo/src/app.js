// Gett root HTML Element
const rootHtmlElement = document.getElementById('root');

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

// Create component without JSX
function Main(props) {
    return React.createElement(
        'main',
        {},
        React.createElement('h3', {}, props.title),
        React.createElement(
            'ul',
            {},
            React.createElement(
                'li',
                {},
                'The Matrix',
            ),
            React.createElement(
                'li',
                {},
                'Man of Steel',
            )
        )
    );
}

// const siteContent = React.createElement(
//     'div',
//     {},
//     headingReactSectionElement,
//     React.createElement(
//         Main,
//         {title: 'Best Movies'},
//     ),
// );

const siteContentJSX = (
    <div>
        {headingReactSectionElement}
        <Main title="Best Movies" />
    </div>
);

// Render content
rootReactElement.render(siteContentJSX);





