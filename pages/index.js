import Head from 'next/head'
import FooterPageComponent from '../components/footerPageComponent'
import HeaderComponent from '../components/headerComponent'

export default function Home() {
  return (
    <div className="contenedor-pagina">
        <Head>
          <title>Inicio</title>
        </Head>
        <HeaderComponent/>
        <main>

        </main>
        <FooterPageComponent/>
    </div>
  )
}
