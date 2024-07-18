import './About.css'

export default function About() {
    return (
        <section id="about-section">
            <div id="about-intro">
                <h1>About Us</h1>
                <p>Welcome to [Your Company Name], where we [brief introduction].</p>
            </div>

            <div id="about-mission">
                <h2>Our Mission</h2>
                <p>At [Your Company Name], our mission is to [mission statement].</p>
            </div>

            <div id="about-history">
                <h2>Our History</h2>
                <p>Founded in [year], we have been [brief history and key milestones].</p>
            </div>

            <div id="about-team">
                <h2>Meet Our Team</h2>
                <div className="team-member">
                    <img src="/person1.jpg" alt="Team Member Photo" />
                    <h3>Bai Pesho</h3>
                    <p>Big boss and founder.</p>
                </div>
                <div className="team-member">
                    <img src="/person2.jpg" alt="Team Member Photo" />
                    <h3>Kaka Ginka</h3>
                    <p>Vice-Senior Facility Hygiene and Sanitation Optimization Executive Specialist</p>
                </div>
            </div>

            <div id="about-services">
                <h2>Our Services</h2>
                <p>We offer [summary of services/products].</p>
            </div>

            <div id="about-testimonials">
                <h2>What Our Clients Say</h2>
                <blockquote>
                    <p>"[Customer testimonial]"</p>
                    <footer>— Client Name</footer>
                </blockquote>
            </div>

            <div id="about-culture">
                <h2>Our Culture</h2>
                <p>At [Your Company Name], we believe in [company values and culture].</p>
            </div>

            <div id="about-awards">
                <h2>Awards and Recognitions</h2>
                <p>We are proud to have received [awards and recognitions].</p>
            </div>

            <div id="about-community">
                <h2>Community Involvement</h2>
                <p>We are committed to giving back by [community involvement and initiatives].</p>
            </div>

            <div id="about-contact">
                <h2>Contact Us</h2>
                <p>Feel free to reach out to us at:</p>
                <ul>
                    <li>Email: [email address]</li>
                    <li>Phone: [phone number]</li>
                    <li>Address: [physical address]</li>
                </ul>
            </div>

            <div id="about-cta">
                <h2>Get in Touch</h2>
                <p>Ready to work with us? <a href="contact-page-link">Contact us today</a>.</p>
            </div>
        </section>
    );
}