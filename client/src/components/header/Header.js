import './header.css'

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm"></span>
        <span className="headerTitleLg"></span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/2463936/pexels-photo-2463936.jpeg?auto=compress&cs=tinysrgb&w=1600"
        alt=""
      />
    </div>
  )
}
