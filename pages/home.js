import React from 'react';
import Button from '../Components/Button/buttonComponent';
function home() {
  const handleclick = () => {
    console.log("button clicked")
  }
  return <div>
    <button>hi</button>
    <Button onClick={handleclick} className="mt-4">Hello</Button>
    </div>;
}

export default home;
