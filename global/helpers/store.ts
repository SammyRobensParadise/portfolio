import { createRef } from 'react'

const state = {
  sections: 3,
  pages: 3,
  zoom: 75,
  images: [],
  top: createRef<unknown>()
}

export default state
