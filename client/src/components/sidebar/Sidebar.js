import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './sidebar.css'
import { axiosInstance } from '../../config'

export default function Sidebar() {
  const [cats, setCats] = useState([])

  useEffect(() => {
    const getCats = async () => {
      const res = await axiosInstance.get('/categories')
      setCats(res.data)
    }
    getCats()
  }, [])
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="/1656759208734me.jpg" alt="" />
        <p>
          Tēnā Koutou. Welcome! My name is Angela. You could reach me through
          the contact form or social media. I am so exicted to be on this
          journey with you all. Until we connect again, happy coding.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">BLOG CATEGORY</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        {/* <span className="sidebarTitle">CONTACT</span> */}
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </div>
      </div>
    </div>
  )
}
