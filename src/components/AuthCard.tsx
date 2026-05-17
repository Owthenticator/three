import Header from './Header'
import Buttons from './Buttons'

export default function AuthCard() {
  return (
    <div className="auth-card">
      <Header />

      <div className="content">
        <h1>Purchase Authentication</h1>

        <p>
          We have sent you a text message with a code to your
          registered mobile number ending in 5329.
        </p>

        <p>
          You are paying HTS: Engineered for ambition the amount
          of $599.95 using card ************8005.
        </p>

        <p>(OTP: 1234)</p>

        <h2>Enter your code below</h2>

        <input type="text" placeholder="Enter Code Here" />

        <Buttons />
      </div>
    </div>
  )
}