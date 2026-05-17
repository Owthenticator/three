type ButtonsProps = {
  handleSubmit: () => void
  handleCancel: () => void
}

export default function Buttons({
  handleSubmit,
  handleCancel,
}: ButtonsProps) {
  return (
    <>
      <button onClick={handleSubmit}>SUBMIT</button>
      <button>RESEND CODE</button>
      <button onClick={handleCancel}>CANCEL</button>
    </>
  )
}