import logo from '../../assets/logo.png'
import './header.scss'
function Header() {
  return (
    <div className="header wrapper">
      <div className="header__container container">
        <div className="header__logo__container">
            <img src={logo} alt="LZ" className="header__logo" />
        </div>
        <ul className="header__navs">
            <li className="header__nav">about</li>
            <li className="header__nav">contact me</li>
            <li className="header__nav">my cv</li>
        </ul>
      </div>
    </div>
  )
}

export default Header