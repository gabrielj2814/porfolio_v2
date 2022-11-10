export default function HeaderComponent(){

    function mostarMenu(){
        let $menuDesktop = document.getElementById("menuDesktop")
        let $menuMovil = document.getElementById("menuMovil")
        $menuDesktop.classList.toggle("ocultar")
        $menuMovil.classList.toggle("ocultar")
    }


    return (
        <header className="contenedor container-fluid pt-3">
            <div className="item-menu" onClick={mostarMenu}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </div>
            <div className="ocultar" id="contenedorMenu">

            </div>
            <nav className="menu-desktop d-none d-lg-block" id="menuDesktop">
                    <h2>menu desktop</h2>
            </nav>
            <nav className="menu-movil  d-block d-lg-none" id="menuMovil">
                <h2>menu movil</h2>
            </nav>
        </header>
    )
}