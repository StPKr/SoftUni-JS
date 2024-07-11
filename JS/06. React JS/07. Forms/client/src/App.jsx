import ControlledForm from './components/ControlledForm'
import RefDemo from './components/RefDemo'
import TailwindDemo from './components/TailwindDemo'
import UncontrolledForm from './components/UncontrolledForm'
import './App.css';

function App() {
  return (
    <>
      <UncontrolledForm />
      <ControlledForm />
      <RefDemo />
      <TailwindDemo />
    </>
  )
}

export default App
