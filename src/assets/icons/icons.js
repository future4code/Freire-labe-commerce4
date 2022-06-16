import React from 'react'
import { BagIconContainer } from './styles.js'

export const BagIcon = () => {
  return (
    <BagIconContainer viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <g data-name="Layer 2" id="Layer_2">
        <g id="Workspace">
          <rect className="cls-1" height="24" width="24" />
          <polyline className="cls-2" points="6 10 7 17 17 17 18 10" />
          <line className="cls-2" x1="9" x2="10" y1="11" y2="7" />
          <line className="cls-2" x1="15" x2="14" y1="11" y2="7" />
          <line className="cls-2" x1="5" x2="19" y1="10" y2="10" />
        </g>
      </g>
    </BagIconContainer>
  )
}

export const TrashIcon = () => {
  return (
    <svg fill="#1A1A1A" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
      <path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z" />
    </svg>
  )
}

export const CloseIcon = () => {
  return (
    <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg">
      <path d="M443.6,387.1L312.4,255.4l131.5-130c5.4-5.4,5.4-14.2,0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4  L256,197.8L124.9,68.3c-2.6-2.6-6.1-4-9.8-4c-3.7,0-7.2,1.5-9.8,4L68,105.9c-5.4,5.4-5.4,14.2,0,19.6l131.5,130L68.4,387.1  c-2.6,2.6-4.1,6.1-4.1,9.8c0,3.7,1.4,7.2,4.1,9.8l37.4,37.6c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1L256,313.1l130.7,131.1  c2.7,2.7,6.2,4.1,9.8,4.1c3.5,0,7.1-1.3,9.8-4.1l37.4-37.6c2.6-2.6,4.1-6.1,4.1-9.8C447.7,393.2,446.2,389.7,443.6,387.1z" />
    </svg>
  )
}