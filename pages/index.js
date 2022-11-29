import Head from 'next/head'
import Image from 'next/image'
import FooterPageComponent from '../components/footerPageComponent'
import HeaderComponent from '../components/headerComponent'
import PublictFotoPerfil from "../public/images/avatar_2.jpg"

export default function Home() {
  return (
    <div className="contenedor-pagina">
        <Head>
          <title>Home</title>
        </Head>
        <HeaderComponent/>
        <main className='contenido-home contenedor'>
          
          <section className='seccion-bienvenida mb-5'>
            <Image className='imagen-perfil-home' src={PublictFotoPerfil}  alt='foto_de_perfil' priority/>
            <p className=' text-center text-lg-start'>
              <strong>Hola bienvenido a mi sitio web</strong> mi nombre es Gabriel Valera y soy un desarrollador de Software.
            </p>
          </section>
          <section className='sobre-mi-home'>
            <h3 className='mb-4'>Un poco sobre mi.</h3>
            <p>Escogí la programación como profesión por la forma en que se pueden automatizar uno o varios procesos complejos, entregando al cliente una herramienta que le ayude en su día a día y en su trabajo.</p>
            
            <p>Me gusta trabajar en conjunto con otros desarrolladores porque siempre se puede aprender más y nutrirse de los conocimientos de los compañeros del equipo.</p>
            
            <p>Disfruto aprendiendo cosas nuevas, más cuando se trata de un lenguaje nuevo de programación o un framework nuevo.</p>
            
            {/* <p className='mb-4'>Gustos: Anime, manga, cultura japonesa, videojuegos y música chill.</p> */}
            <p className='mb-5'>Si quieres enviarme un correo, dele click <a href='#'>aqui</a> o si desea saber sobre los proyectos en los que e trabajado o participado dele click <a href='#'>aqui</a>.</p>
        
          </section>
          </main>
        <FooterPageComponent/>
    </div>
  )
}
