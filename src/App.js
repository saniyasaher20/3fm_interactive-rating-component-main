import { useState } from "react"
import './main.scss'
import star from "./images/icon-star.svg"
import thanks from "./images/illustration-thank-you.svg"

function App() {

  const [isSubmitted, setIsSubmitted] = useState(false)
  const[items, setItems] = useState("")

  const Button = ({ number }) => {
    return <button onClick={()=> setItems(number)} type="button" className="btn"><span>{number}</span></button>
  }
  const Card = () => {
    return (<div className="card">

      <div className="card-body">
        <div className="card--img-wrapper">
          <img src={star} alt="Card image cap" />
        </div>
        <h5 className="card-title"> How did we do?</h5>
        <p className="card-text">Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

        {/* rating start */}
        <div className="rating--group" role="group" aria-label="rating buttons">
          <Button number={1} />
          <Button number={2} />
          <Button number={3} />
          <Button number={4} />
          <Button number={5} />
        </div>
        {/* rating end */}

        <a onClick={() => setIsSubmitted(true)} href="#" className="btn submit--btn text-uppercase d-block">Submit</a>
      </div>

    </div>)
  }

  return (
    <>
      {!isSubmitted && <Card />}

      {isSubmitted && <ThankYou items={items} setIsSubmitted={setIsSubmitted} />}

    </>
  );
}

const ThankYou = ({items, setIsSubmitted }) => {
  return (
    <div className="card">
      <div className="card-body text-center">
        <img src={thanks} className="w-50" alt="Thanks " />
        <div>
          <p className="rating-selected ">You selected {items} out of 5</p>
        </div>
        <h2 className="card-title">Thank You</h2>
        <small className="card-text">We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</small></div>
      <a onClick={() => setIsSubmitted(false)}  href="#" className="btn submit--btn text-uppercase d-block">Rate Again</a>

    </div>
  )
}

export default App;
