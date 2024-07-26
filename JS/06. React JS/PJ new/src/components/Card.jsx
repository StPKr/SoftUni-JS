export default function Card() {
    return (
        <>
            {/* component */}
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 h-80 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
                    <img
                        src="https://www.material-tailwind.com/img/team-3.jpg"
                        alt="profile-picture"
                    />
                </div>
                <div className="p-6 text-center">
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        Natalie Paisley
                    </h4>
                    <p className="block bg-gradient-to-tr from-pink-600 to-pink-400 bg-clip-text font-sans text-base font-medium leading-relaxed text-transparent antialiased">
                        CEO / Co-Founder
                    </p>
                </div>
                <div className="flex justify-center gap-7 p-6 pt-2">
                    <a
                        href="#facebook"
                        className="block bg-gradient-to-tr from-blue-600 to-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-facebook" aria-hidden="true" />
                    </a>
                    <a
                        href="#twitter"
                        className="block bg-gradient-to-tr from-light-blue-600 to-light-blue-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-twitter" aria-hidden="true" />
                    </a>
                    <a
                        href="#instagram"
                        className="block bg-gradient-to-tr from-purple-600 to-purple-400 bg-clip-text font-sans text-xl font-normal leading-relaxed text-transparent antialiased"
                    >
                        <i className="fab fa-instagram" aria-hidden="true" />
                    </a>
                </div>
            </div>
            <div className="w-full pt-5 px-4 mb-8 mx-auto ">
                <div className="text-sm text-gray-700 py-1">
                    Made with{" "}
                    <a
                        className="text-gray-700 font-semibold"
                        href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
                        target="_blank"
                    >
                        Material Tailwind
                    </a>{" "}
                    by{" "}
                    <a
                        href="https://www.creative-tim.com?ref=tailwindcomponents"
                        className="text-gray-700 font-semibold"
                        target="_blank"
                    >
                        {" "}
                        Creative Tim
                    </a>
                    .
                </div>
            </div>
            {/* stylesheet */}
            <link
                rel="stylesheet"
                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />
            {/* Font Awesome Link */}
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"
                integrity="sha512-HK5fgLBL+xu6dm/Ii3z4xhlSUyZgTT9tuc/hSrtw6uzJOvgRr2a9jyxxT1ely+B+xFAmJKVSTbpM/CuL7qxO8w=="
                crossOrigin="anonymous"
            />
        </>

    );
}