import React, { ReactElement } from 'react'

const GlitchRenderer = (): ReactElement => (
  <div>
    <div className="flex items-center justify-between align-center p-40">
      <div className="gl-center">
        <div className="glitch-effect" data-text="Loading...">
          Loading...
        </div>
        <div className="glow">Loading...</div>
      </div>
    </div>
  </div>
)

export default GlitchRenderer
