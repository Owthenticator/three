import Header from "./Header";
import Buttons from "./Buttons";
import { FormEvent, useMemo, useState } from "react";

export default function AuthCard() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (pin !== "1234") {
      setError("Incorrect pin entered");
    }

    setError("");
    setSubmitted(true);

    const messagePayload = {
      status: "approved",
      assuranceData: {
        challengeType: "THREE_DS",
        authenticationSessionId: "session_id_random",
      },
    };
    debugger;
    const targetOrigin = window.location.origin;
    window.parent.postMessage(JSON.stringify(messagePayload), targetOrigin);
  };

  const handleCancel = () => {
    setError("");
    setSubmitted(true);

    const messagePayload = {
      status: "cancelled",
    };

    const targetOrigin = window.location.origin;
    window.parent.postMessage(JSON.stringify(messagePayload), targetOrigin);
  };

  return (
    <div className="auth-card">
      <Header />

      <div className="content">
        <h1>Purchase Authentication</h1>

        <p>
          We have sent you a text message with a code to your registered mobile
          number ending in 5329.
        </p>

        <p>
          You are paying HTS: Engineered for ambition the amount of $599.95
          using card ************8005.
        </p>

        <p>(OTP: 1234)</p>

        <h2>Enter your code below</h2>

        <input type="text" placeholder="Enter Code Here" />

        <Buttons handleSubmit={handleSubmit} handleCancel={handleCancel} />
      </div>
    </div>
  );
}
