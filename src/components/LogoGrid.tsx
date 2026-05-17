export default function LogoGrid() {
  return (
    <div className="grid-logo">
      {Array.from({ length: 9 }).map((_, i) => (
        <span key={i}></span>
      ))}
    </div>
  )
}