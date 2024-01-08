import React, { useState } from "react"
import { MDBInput } from "mdb-react-ui-kit"
import { MDBBtn } from "mdb-react-ui-kit"
import "./content.css"

function Content() {
  const [amount, setAmount] = useState(0)
  const [discount, setDiscount] = useState(0)
  const [result, setResult] = useState(0)
  const [saving, setSaving] = useState(0)

  const calculate = () => {
    if (amount == "" || discount == "") {
      alert("Please complete the fields to calculate the discount")
    } else if (amount == 0 || discount == 0) {
      alert("The amount or discount cannot be zero")
    } else {
      const savingAmt = (amount * discount) / 100
      setSaving(savingAmt)
      const discountAmount = amount - savingAmt
      setResult(discountAmount)
    }
  }

  const reset = () => {
    setAmount(0)
    setDiscount(0)
    setResult(0)
    setSaving(0)
  }
  return (
    <div>
      <div className="container">
        <h3>REACTJS DISCOUNT CALCULATOR APP</h3>

        <br />

        <div className="box">
          <h4>ACTUAL PRICE : &#8377;{amount}</h4>
          <h4>YOUR SAVINGS : &#8377;{saving}</h4>
        </div>

        <div className="form">
          <MDBInput label="Enter the Amount" id="form1" type="text" value={amount || " "} onChange={(e) => setAmount(e.target.value)} />
          <br />
          <MDBInput label="Enter Discount %" id="form1" type="text" value={discount || " "} onChange={(e) => setDiscount(e.target.value)} />
        </div>

        <div className="button">
          <MDBBtn className="me-1" color="success" onClick={(e) => calculate(e)}>
            CALCULATE
          </MDBBtn>
          <MDBBtn className="me-1" color="danger" onClick={(e) => reset(e)}>
            CLEAR
          </MDBBtn>
        </div>

        <div className="result">
          <h2>NET AMOUNT :&#8377;{result} </h2>
        </div>
      </div>
    </div>
  )
}

export default Content
