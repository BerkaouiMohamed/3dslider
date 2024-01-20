import './navbar.css'
import logo from './images/logo.png'

function Navbar() {
  return (
    <div className='navbar'>
      <img src={ logo} alt=''/>
       <ul>
        <li>
            Home
        </li>
        <li>
            About
        </li>
        <li>
            Careers
        </li>
        <li>
            Partnership
        </li>
        <li>
            contact
        </li>
       </ul>


       <div>
        <p>My cart</p>
        <hr/>
        <p>Register</p>
       </div>
    </div>
  )
}

export default Navbar
