import React, { useState } from 'react';


const useFlip = () => {
  const [state, setState] = useState();
  const flipCard = () => {
    setState(state => !state)
  }
  return [state, flipCard]
}
export default useFlip;