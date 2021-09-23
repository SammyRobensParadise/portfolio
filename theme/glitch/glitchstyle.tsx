import React, { ReactElement } from 'react'

const GlitchRenderer = (): ReactElement => (
  <div>
    <div>
      <div className="glitch-effect" data-text="Loading...">
        Loading...
      </div>
      <div className="glow">Loading...</div>
    </div>
  </div>
)

export default GlitchRenderer
