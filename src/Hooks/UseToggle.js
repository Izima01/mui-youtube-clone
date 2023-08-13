import { useState } from 'react'

const UseToggle = () => {
    const [element, setElement] = useState(null);
    const open = Boolean(element);

    const handleOpen = (event) => {
        setElement(event.target);
    };

    const handleClose = () => {
        setElement(null);
    };

  return {
    element, open, handleClose, handleOpen
  };
}

export default UseToggle