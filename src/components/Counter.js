const Counter = (props) => {

  let handleClick = (e) => {
    console.log(e);
    props.updateCount(e.target.dataset.calc)
  }

  return (
    <div>
      <button data-calc="-5" onClick={handleClick}>-5</button>
      <button data-calc="-1" onClick={handleClick}>-1</button>
      <button data-calc="reset" onClick={handleClick}>Reset</button>
      <button data-calc="1" onClick={handleClick}>+1</button>
      <button data-calc="5" onClick={handleClick}>+5</button>
    </div>
  )
}

export default Counter;