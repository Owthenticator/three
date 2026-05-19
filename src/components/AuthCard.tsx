import Header from "./Header";
import Buttons from "./Buttons";
import { useState } from "react";

export default function AuthCard() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const sendMessageToParent = (payload: unknown) => {
    if (window.parent) {
      window.parent.postMessage(payload, "*");
    }
  };

  const handleSubmit = () => {
    if (pin !== "12345") {
      setError("Incorrect pin entered");
      return;
    }

    setError("");
    setSubmitted(true);

    sendMessageToParent({
      status: "approved",
      assuranceData: {
        challengeType: "THREE_DS",
        authenticationSessionId: "session_id_random",
      },
    });
  };

  const handleCancel = () => {
    setError("");
    setSubmitted(true);

    sendMessageToParent({
      status: "cancelled",
    });
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

        <p>(OTP: 12345)</p>

        <h2>Enter your code below</h2>

        <input
          type="text"
          placeholder="Enter Code Here"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />

        {error && <p>{error}</p>}

        <Buttons
          handleSubmit={handleSubmit}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
}