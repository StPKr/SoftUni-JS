import './Home.css'


export default function Home() {
    return (
        <section id="home" className="home">
            <div className='home-banner'>
                <img src="https://placehold.co/1839x400" alt="banner" />
            </div>
            <div id="current-book-of-the-week">
                <h1>Book of the Week</h1>
                <h3>Current book</h3>
            </div>
            <div id="past-discussions">
            <h2>Last 3 Weeks&apos; Discussions</h2>
                <p>Past Book</p>
            </div>
        </section>
    );
}