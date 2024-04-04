import { useState } from 'react'
import './App.css'

function App() {
  const [display, setDisplay] = useState("")
  const [num, setNum] = useState("")
  const [operator, setOperator] = useState("")
  let [count, setCount] = useState("")


  // _______ Display of Calculator ___________

  const clickBtn7 = () => {
    setDisplay(display + 7);
  }
  const clickBtn8 = () => {
    setDisplay(display + 8);
  }
  const clickBtn9 = () => {
    setDisplay(display + 9);
  }
  const clickBtnC = () => {
    setDisplay(display.slice(0, -1));
  }
  const clickBtn4 = () => {
    setDisplay(display + 4);
  }
  const clickBtn5 = () => {
    setDisplay(display + 5);
  }
  const clickBtn6 = () => {
    setDisplay(display + 6);
  }
  const clickBtn1 = () => {
    setDisplay(display + 1);
  }
  const clickBtn2 = () => {
    setDisplay(display + 2)
  }
  const clickBtn3 = () => {
    setDisplay(display + 3);
  }
  const click0 = () => {
    setDisplay(display + 0);
  }
  const clearAll = () => {
    setDisplay('');
    setNum('');
    setOperator('');
  }

  // ________ Operation ____________
  const multiplication = (op) => {
    if (display !== "") {
      setNum(parseFloat(display))
      setDisplay('');
      setCount(count = 3)
      setOperator(op.target.value)
    }
    else  alert("Enter Digit before calculation")
  }
  const clickDecimal = () => {
    if (!display.includes('.')) {
      console.log(display.includes('.'));
      setDisplay((display + '.'));
    }
  }
  const clickPlus = (op) => {
    if (display !== "") {
      if (num === "") {
        setNum(parseFloat(display))
        setDisplay(num)
        setCount(count = 1)
        setOperator(op.target.value)
      }
    }
    else  alert("Enter Digit before calculation")
  }
  const clickMinus = (op) => {
    if (display !== "") {
      setNum(parseFloat(display))
      setDisplay('');
      setCount(count = 2)
      setOperator(op.target.value)
    }
    else  alert("Enter Digit before calculation")
  }
  const division = (op) => {
    if (display !== "") {
      setNum(parseFloat(display))
      setDisplay('');
      setCount(count = 4)
      setOperator(op.target.value)
    }
    else  alert("Enter Digit before calculation")
  }
  //  ___________ Equal Functioin __________
  const clickEqual = () => {
    if (display !== '' && num !== '') {
      const num2 = parseFloat(display);
      let result;
      switch (count) {
        case 1:
          result = num + num2
          console.log(result);
          break;
        case 2:
          result = num - num2
          break;
        case 3:
          result = num * num2
          break;
        case 4:
          result = num / num2
          break;
        default:
          return;
      }
      setDisplay(`${num} ${operator} ${num2} = ${result}`);
      setNum('');
      setOperator('');
    }
  }

  return (
    <>
      <div className=' max-w-[60%] min-w-[23%] mx-auto p-3 bg-gray-300 shadow-md rounded-md mt-10'>

        <div id='screen'>
          <input type="text" className='p-2 bg-slate-50 w-[100%] h-[2rem] rounded-md ' placeholder='0' value={display} readOnly />
        </div>

        <div className='grid grid-cols-4 gap-4 mx-1 my-3 w-[97%] h-[43%] '>

          <input type='button' value="7" onClick={clickBtn7} style={{backgroundColor:'#B2BEB5' , padding: '5px'}} />
          <input type='button' value="8" onClick={clickBtn8} style={{backgroundColor:'#B2BEB5' , padding: '5px'}} />

          <input type='button' value="9" onClick={clickBtn9} style={{backgroundColor:'#B2BEB5' , padding: '5px'}} />

          <input type="button" value="C" onClick={clickBtnC} style={{backgroundColor:'#EE4B2B' , padding: '5px'}}/>

          <input type="button" value="4" onClick={clickBtn4} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="5" onClick={clickBtn5} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="6" onClick={clickBtn6} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="/" onClick={division} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="1" onClick={clickBtn1} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/> 

         <input type="button" value="2" onClick={clickBtn2} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="3" onClick={clickBtn3} style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="*" onClick={multiplication}  style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="0" onClick={click0}  style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="Clear" onClick={clearAll}  style={{backgroundColor:'#B2BEB5' , padding: '5px 8px 8px 5px'}}/>

          <input type="button" value="." onClick={clickDecimal}  style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/>

          <input type="button" value="+" onClick={clickPlus}  style={{backgroundColor:'#B2BEB5' , padding: '5px'}}/> 

          <div className=' flex flex-row justify-between w-[14.7rem]'>

            <div className=' bg-green-600 w-[75%] text-center text-white p-[5px] font-semibold'>
              <button type='button' onClick={clickEqual} >Equal To</button>
            </div>

            <div className=' flex justify-center text-center font-semibold'>
              <input type="button" value="-" onClick={clickMinus}  style={{backgroundColor:'#B2BEB5' , padding: '4px 20px'}}/>
            </div>

          </div>

        </div>
      </div>

    </>
  )
}

export default App
