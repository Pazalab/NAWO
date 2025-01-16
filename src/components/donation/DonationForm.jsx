import { useEffect, useRef, useState } from "react";
import { BsCurrencyDollar } from "react-icons/bs";

const DonationForm = () => {
    const [ activeAmount, setActiveAmount ] = useState(25);
    // eslint-disable-next-line no-unused-vars
    const [ amountError, setAmountError ] = useState('You cannot donate 0 $')
    const amountRef = useRef();


    useEffect(() => {
              amountRef.current.value = activeAmount;

              amountRef.current.addEventListener("focusout", () => {
                     if(amountRef.current.value === ""){
                            setActiveAmount(25)
                     }
              })
    }, [activeAmount])

    const handleAmountInput = (val) =>{
           setActiveAmount(parseInt(val))
    }

  return (
    <div className="donation-form">
               <div className="donation-head">
                         <h4>Choose an Amount</h4>
                         <p>How much would you like to donate? As a contributor to NAWO we make sure your donation goes directly to supporting various causes. Thank you for your generosity!</p>
               </div>

               <div className="donation-options">
                         <p>You can quickly choose an option or enter a custom amount:</p>

                         <div className="donation-option-row">
                                       <div className="entry-input-wrap">
                                                 <div className="entry-input">
                                                              <span><BsCurrencyDollar /></span>
                                                              <input ref={amountRef} type="number" className="entry-input-control" onChange={(e) => handleAmountInput(e.target.value) }  pattern="+[0,9]"/>
                                                 </div>
                                                 { activeAmount === 0  ? <span className="error">{amountError}</span> : ''}
                                       </div>
                                       <div className="entry-options">
                                                     <div className={activeAmount === 25 ? "option-moja active" : "option-moja"} onClick={() => setActiveAmount(25)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>25</h5>
                                                     </div>
                                                     <div className={activeAmount === 50 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(50)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>50</h5>
                                                     </div>
                                                     <div className={activeAmount === 100 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(100)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>100</h5>
                                                     </div>
                                                     <div className={activeAmount === 250 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(250)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>250</h5>
                                                     </div>
                                                     <div className={activeAmount === 500 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(500)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>500</h5>
                                                     </div>
                                                     <div className={activeAmount === 1000 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(1000)}>
                                                                 <span><BsCurrencyDollar /></span>
                                                                 <h5>1000</h5>
                                                     </div>
                                                     <div id="custom" className={activeAmount === 0 ? "option-moja active" : "option-moja"}  onClick={() => setActiveAmount(0)}>
                                                                 <h5>Custom</h5>
                                                     </div>
                                       </div>
                         </div>
               </div>

               <div className="personal-information-row">
                           <h2>Personal Information</h2>
                            <form>
                                     <div className="form-row-split">
                                               <div className="form-row">
                                                          <input type="text" className="form-control" placeholder="First name*" />
                                               </div>
                                               <div className="form-row">
                                                          <input type="text" className="form-control" placeholder="Last name*" />
                                               </div>
                                     </div>
                                     <div className="form-row">
                                                <input type="email" className="form-control" placeholder="Email address*"/>
                                     </div>

                                     <div className="donation-total">
                                                <h5>Donation Summary</h5>
                                                 <h5 className="total"><span><BsCurrencyDollar /></span>{activeAmount.toLocaleString()}</h5>
                                     </div>

                                     <div className="btn-row">
                                                 <button type="submit" className="form-btn">Donate Now</button>
                                     </div>
                            </form>
               </div>
    </div>
  )
}

export default DonationForm