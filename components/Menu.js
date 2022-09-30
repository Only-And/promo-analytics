const Menu = () => (
    <div>
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css" passHref={true}></link>
        <nav className="navbar">
            <div className="menu-container">
                <div className="logo"><a href="/"><img src="https://promofarma.vtexassets.com/assets/vtex/assets-builder/promofarma.store-theme/2.1.10/icons/logo-promofarma___42fb6a31c620652d88ad390a97c4cb3f.svg" alt=""></img></a></div>
            </div>
            <div class="mobile-menu">
                <div className="line-1"></div>
                <div className="line-2"></div>
                <div className="line-3"></div>
            </div>
            <ul className="menu_ul">
                <li>
                    <a href="/analise">Analise da concorrencia</a>
                </li>
                <li>
                    <a href='/about-dev'>Desenvolvedor</a>
                </li>
            </ul>
            <div class="dark_light">
                <i class="uil uil-moon nav_icon"></i>
            </div>
            <script src="mobile-navbar.js"></script>
        </nav>
    </div>
)


export default Menu