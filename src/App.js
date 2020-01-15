import React, { useRef, useState } from 'react';
import ReactToPrint from 'react-to-print';

import Form from './Form'
import './App.css';

import bangdiem from './bangdiem'
import diemdanh from './diemdanh'

function App() {

    const [ currentId, setId ] = useState(0)
    const componentRef = useRef();
    return (
      <div>
        <ReactToPrint
          trigger={() => <button style={{position: 'fixed', top: 10, left: 10}}>Print this out!</button>}
          content={() => componentRef.current}
          onAfterPrint={() => setId(currentId + 1)}
        />
        <Form
          ref={componentRef}
          tenthanh={diemdanh[currentId].tenthanh}
          hoten={diemdanh[currentId].hoten}
          diemdanh={diemdanh[currentId]}
          diem={bangdiem[currentId]}
        />
      </div>
    );
}

export default App;
