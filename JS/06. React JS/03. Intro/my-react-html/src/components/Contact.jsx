export default function Contact() {
    return (
        <section className="contact_section layout_padding">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 col-lg-4 offset-md-1 offset-lg-2">
                        <div className="form_container">
                            <div className="heading_container">
                                <h2>
                                    Contact Us
                                </h2>
                            </div>
                            <form action="">
                                <div>
                                    <input type="text" placeholder="Full Name " />
                                </div>
                                <div>
                                    <input type="text" placeholder="Phone number" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Email" />
                                </div>
                                <div>
                                    <input type="text" className="message-box" placeholder="Message" />
                                </div>
                                <div className="d-flex ">
                                    <button>
                                        SEND NOW
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6  px-0">
                        <div className="map_container">
                            <div className="map">
                                <div id="googleMap"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}