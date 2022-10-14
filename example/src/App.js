import React from 'react'

import { OdinNav} from 'odin-react'
import 'odin-react/dist/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return <OdinNav title="Spectrometer Integration"
  navLinks={["Main Page", "Spectrometer", "Cryostat", "Attocube"]}>

    </OdinNav>
  // return <ExampleComponent text="Create React Library Example 😄" />
}

export default App
