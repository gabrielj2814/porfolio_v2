export default function FooterPageComponent() {
    return (
        <footer className="footerPage py-4">
            <div className="contenedor container-fluid">
                <div className="row">
                    <div className="col-12 col-ms-12 col-md-12 col-lg-6">
                        <div className="row">
                            <div className="col-12 mb-3 text-center text-lg-start">
                                <h4>Contacto:</h4>
                                <span>gabrielj2814@hotmail.com</span>
                            </div>
                            <div className="col-12 mb-3 text-center text-lg-start">
                                <h4>Redes:</h4>
                                <a href="https://twitter.com/gabrielj2814" target="_blank" rel="noreferrer" className="link-icon-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-footer bi bi-twitter" viewBox="0 0 16 16">
                                        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                    </svg>
                                </a>
                                <a href="https://www.tiktok.com/@xotakudevx" target="_blank" rel="noreferrer" className="link-icon-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-footer bi bi-tiktok" viewBox="0 0 16 16">
                                        <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z"/>
                                    </svg>
                                </a>
                                <a href="https://www.linkedin.com/in/gabriel-jesus-valera-castillo" target="_blank" rel="noreferrer" className="link-icon-footer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="icon-footer bi bi-linkedin" viewBox="0 0 16 16">
                                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-ms-12 col-md-12 col-lg-6 text-center text-lg-end">
                        <span>© pagina creada en el 2022 por Gabriel Valera</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}