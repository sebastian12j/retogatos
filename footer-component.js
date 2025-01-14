// footer-component.js
class FooterComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                <nav class="footer-nav">
                    <a href="http://127.0.0.1:5500/adotp.html" class="nav-item">
                        <img src="/img/BARRA/home.png" alt="Home">
                        <span>Home</span>
                    </a>
                    <a href="http://127.0.0.1:5500/favoritos.html" class="nav-item">
                        <img src="/img/BARRA/d.png" alt="Chat">
                        <span>Chat</span>
                    </a>
                    <a href="http://127.0.0.1:5500/adotp.html" class="nav-item active">
                        <img src="/img/BARRA/Group 10.png" alt="Add">
                    </a>
                    <a href="http://127.0.0.1:5500/adotp.html" class="nav-item">
                        <img src="/img/BARRA/noti.png" alt="Notification">
                        <span>Notification</span>
                    </a>
                    <a href="http://127.0.0.1:5500/profile.html" class="nav-item">
                        <img src="/img/BARRA/perfil.png" alt="Profile">
                        <span>Profile</span>
                    </a>
                </nav>
            </footer>
        `;
    }
}

customElements.define('footer-component', FooterComponent);

