import { useState } from "react";

import Button from "./Button";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setOpen] = useState(true);
  
  function handlePrevious() {
    if (step > 1) {
      setStep((s) =>s - 1);
    }
  }
  function handleNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }

  function handleOpen() {
    setOpen((o) => !o);
  }

  return (
    <>
      <button className='close' onClick={() => handleOpen()}>&times;</button>
      {isOpen && (
        <div className='steps'>
          <div className='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step >= 3 ? 'active' : ''}>3</div>
          </div>
          <p className='message'>Step {step}: {messages[step - 1]}</p>

          <div className='buttons'>
            <Button className='button'
                onButtonClick={handlePrevious} 
                name='Previous'/>
            <Button className='button'
                onButtonClick={handleNext}
                name='Next' />
          </div>
        </div>
      )}
    </>
  );
}

export default Steps;