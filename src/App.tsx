import './App.css';
import { useState } from 'react';

function App() {

  const [amountOfItems, setAmountOfItems] = useState(0);
  const [checkoutLines, setCheckoutLines] = useState([[10, 5, 3], [], [], [], []]);

  function handleItemSubmit(e: React.FormEvent) {
    e.preventDefault();
  }

  return (
    <div className="App">
        
        <form className='inputs' onSubmit={handleItemSubmit}>
          <input
            placeholder='Amount of Items'
            type='number'
            value={amountOfItems}
            onChange={(e) => {setAmountOfItems(Number(e.target.value))}}
          />
          <button>Checkout</button>
        </form>

        <div className='lines'>
          {checkoutLines.map((e) => ( 
            <div className='line'>line</div>
          ))}
        </div>


    </div>
  );
}

export default App;
