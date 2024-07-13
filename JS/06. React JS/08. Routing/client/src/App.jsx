import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Header from './components/Header'
import Pricing from './components/Pricing'
import About from './components/About'
import Articles from './components/Articles'
import ArticleDetails from './components/ArticleDetails'
import NotFound from './components/NotFound'

import Mission from './components/Missing'
import OurTeam from './components/OurTeam'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <>
      <div className="bg-white">
        <Header />

        <Routes>
          <Route path='/' element={<Home />} />

          {/* alternative sub-routing allowed only with "/*" at the end of /about and Route components defined in the About component */}
          <Route path='/about' element={<About />} >
            <Route path='mission' element={<Mission />} />
            <Route path='our-team' element={<OurTeam />} />
            <Route path='contact-us' element={<ContactUs />} />
          </Route>
          <Route path='/articles' element={<Articles />} />
          <Route path='/articles/:articleId' element={<ArticleDetails />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/*' element={<NotFound />} />

        </Routes>

      </div>
    </>
  )
}

export default App
