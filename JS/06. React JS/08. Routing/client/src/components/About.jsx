import { Link, Route, Routes, Outlet } from 'react-router-dom';
import OurTeam from "./OurTeam";
import Mission from './Missing';
import ContactUs from './ContactUs';

export default function About() {
    return (
        <>
            <nav className='p-20 hidden lg:flex lg:gap-x-12'>
                <Link to="mission" className='text-sm font-semibold leading-6 text-gray-900'> Mission</Link>
                <Link to="our-team" className='text-sm font-semibold leading-6 text-gray-900'> Our Team</Link>
                <Link to="contact-us" className='text-sm font-semibold leading-6 text-gray-900'> Contact Us</Link>
            </nav>

            {/* <Routes>
                <Route path='/mission' element={<Mission />} />
                <Route path='/our-team' element={<OurTeam />} />
                <Route path='/contact-us' element={<ContactUs />} />
            </Routes> - if routing not done in the App component itself*/}

            <Outlet />
        </>
    )
}
