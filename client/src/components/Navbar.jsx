

const Navbar = () => {
  return (
    <nav>
      <div className="logo">Chess.com</div>

      <div className="menu">
        <ul>
          <li><a href="/">play</a></li>
          <li><a href="/about">Watch</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>

      <div className="user"></div>
    </nav>
  )
}

export default Navbar