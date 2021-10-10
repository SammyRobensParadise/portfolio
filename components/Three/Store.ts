import { createRef } from 'react'

const state = {
  sections: 6,
  pages: 5,
  zoom: 75,
  ref: createRef<JSX.Element | null>(),
  top: createRef<number | null | HTMLDivElement>()
}

export default state
