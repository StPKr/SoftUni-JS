import React from 'react';
import './About.css';

export default function About() {
    return (
        <section id="about-section">
            <div id="about-intro">
                <h1>About Us</h1>
                <p>Welcome to The book club, where book lovers unite to explore, discuss, and enjoy literature in all its forms. Our weekly meetings provide a friendly and engaging atmosphere for readers of all ages and backgrounds.</p>
            </div>

            <div id="about-mission">
                <h2>Our Mission</h2>
                <p>At The book club, our mission is to foster a love for reading and provide a space for thoughtful discussion and community building. We aim to inspire curiosity, encourage critical thinking, and celebrate the joy of books.</p>
            </div>

            <div id="about-history">
                <h2>Our History</h2>
                <p>Founded in 2015, The book club started with a small group of book enthusiasts who wanted to share their passion for reading. Over the years, we have grown into a vibrant community, hosting a wide range of literary events and activities, from author talks to themed discussions.</p>
            </div>

            <div id="about-team">
                <h2>Meet Our Founders</h2>
                <div className="team-member">
                    <img src="/person1.jpg" alt="Team Member Photo" />
                    <h3>John Doe</h3>
                    <p>CEO Webmaster. His vision and love for literature brought The book club to life.</p>
                </div>
                <div className="team-member">
                    <img src="/person2.jpg" alt="Team Member Photo" />
                    <h3>Jane Smith</h3>
                    <p>Event Coordinator. John ensures our meetings are organized and engaging.</p>
                </div>
            </div>

            <div id="about-services">
                <h2>Our Services</h2>
                <p>We offer a variety of services to our members, including weekly book discussions, reading recommendations, author interviews, and access to a vast library of resources. Join us and enrich your reading experience!</p>
            </div>

            <div id="about-testimonials">
                <h2>What Our Members Say</h2>
                <blockquote>
                    <p>"The book club has rekindled my love for reading. The discussions are insightful, and I've made wonderful friends!"</p>
                    <footer>— Emily R.</footer>
                </blockquote>
            </div>

            <div id="about-culture">
                <h2>Our Culture</h2>
                <p>At The book club, we believe in creating a welcoming and inclusive environment. We value diverse perspectives and encourage open, respectful dialogue about the books we read and the ideas they present.</p>
            </div>

            <div id="about-contact">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us at:</p>
                <ul>
                    <li><strong>Email:</strong> info@thebookestofclubs.com</li>
                    <li><strong>Phone:</strong> (123) 456-7890</li>
                    <li><strong>Address:</strong> 123 Bookworm Lane, Bibliophile City, BK 12345</li>
                </ul>
            </div>


        </section>
    );
}
