import Head from 'next/head'
import Bodyanalise from '../components/Bodyanalise'
import Menu from '../components/Menu'

function Analise() {
    return (
        <div>
        <Head>
          <meta charSet='utf-8'/>
          <meta name='robots' content='index, follow'></meta>
          <meta name='description' content='projeto'></meta>
          <meta name='author' content='@And'></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Promofarma</title>
  
        </Head>
        <Menu/>
        <Bodyanalise/>
        <script src="mobile-navbar.js"></script>
        <script src="dark-mode.js"></script>
  
      </div>
    )
  }
  
  export default Analise