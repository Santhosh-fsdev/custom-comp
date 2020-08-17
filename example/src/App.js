import React from 'react'

import { ExampleComponent, HeadComponent } from 'custom-comp'
import 'custom-comp/dist/index.css'

const App = () => {
  return <div>
      <ExampleComponent text="Create React Library Example 😄" />
      <HeadComponent />
  </div>
}

export default App
