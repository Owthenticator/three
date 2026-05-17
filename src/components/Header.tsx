import LogoGrid from './LogoGrid'

export default function Header() {
  return (
    <div className="header">
      <div className="logo-left">
        <LogoGrid />

        <div className="card-network">
          <p>Card</p>
          <p>Network</p>
        </div>
      </div>

      <div className="logo-right">
        <div className="bank-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <span className="bank-name">AnyBank</span>
      </div>
    </div>
  )
}