import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import Sun from "../../images/sun.png";
import Moon from "../../images/moon.png";
import './topbar.css'
import { ThemeContext } from '../../context/ThemeContext.js' 

export default function TopBar() {
  const { user, dispatch } = useContext(Context)
  const PF = 'http://localhost:5000/images/'

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' })
  }

  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  }

  return (
    <>

    <div className="top">
     
      <div className="topLeft">
        <h2>ANGELA YANG</h2>

        {/* <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i> */}
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              BLOG
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              PORTFOLIO
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && 'LOGOUT'}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF + user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
              <i class="fa fa-sign-in">LOG IN</i>
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
              <i class="fa fa-sign-in">REGISTER</i>
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
          {/* toggle bar */}
        <div className="t">
          <img src={Sun} alt="" className="t-icon" />
          <img src={Moon} alt="" className="t-icon" />
          <div
            className="t-button"
            onClick={handleClick}
            style={{ left: theme.state.darkMode ? 4 : 25 }}></div>
        </div>


      </div>
    </div>
    </>
  )
}
