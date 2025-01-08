class SpecialHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<header>
    <h1 class="logo">SL</h1>
    <div class="middle-header"></div>
    <div class="right-header">
      <a href="suzie_website_home.html" class="header-button">Home</a>
      <a href="suzie_website_gallery.html" class="header-button">Gallery</a>
      <a href="suzie_website_growth.html" class="header-button">Growth</button>
      <a href="suzie_website_about.html" class="header-button">About</a>
    </div>
    </header>
    `
  }
}

class SpecialFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<footer>
    <p class="footer-text">
      &copy; 2024 by Suzie Lou. All rights reserved. 
    </p>
    </footer>`
  }
}


customElements.define('special-header', SpecialHeader)

customElements.define('special-footer', SpecialFooter)