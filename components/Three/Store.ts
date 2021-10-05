import { createRef } from 'react'

const state = {
  sections: 6,
  pages: 5,
  zoom: 75,
  ref: createRef<JSX.Element>(),
  top: createRef<JSX.Element>()
}

export default state
