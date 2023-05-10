import "../style/Footer.css"

function Footer() {
    const year = new Date().getFullYear();

  return (
    <footer className="footer">
        <p className="footer-text">&copy; {year} Made with <span className="heart">&hearts;</span> by <a href="https://github.com/alimarchi">Alice</a></p>
    </footer>
  );
}

export default Footer;
