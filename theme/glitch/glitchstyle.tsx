import React, { ReactElement, useEffect, useState } from 'react'

const GlitchRenderer = (): ReactElement => (
  <div>
    <div>
      <div className="glitch-effect" data-text="Loading...">
        Loading...
      </div>
      <div className="glow">Loading...</div>
    </div>
    <div className="scanlines" />
  </div>
)

export default GlitchRenderer
