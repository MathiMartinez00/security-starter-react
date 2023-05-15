import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <p className="text-3xl font-bold">Bienvenido a Joko Security.</p>
      <h1 className="text-3xl">TODO:</h1>
      <ul>
        <li>
          Boton en la cabecera para esconder y hacer aparecer el navbar <Link href='/login' className='hover:font-bold'>Click para iniciar sesion</Link>.
        </li>
      </ul>
    </>
  )
}