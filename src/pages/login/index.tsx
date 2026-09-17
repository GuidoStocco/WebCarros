import { Link } from 'react-router-dom'
import { Container } from '../../components/container'
import logoImg from './../../assets/logo.svg'


export function Login() {
  return(
    <Container>
      <div className='w-full min-h-screen flex justify-center items-center flex-col gap-4'>
        <Link to='/' className='max-w-sm w-full mb-6'>
          <img
            src={logoImg}
            alt='Logo do site'
            className='w-full'
          />
        </Link>

        <form className='bg-white w-full max-w-xl rounded-xl'>
            <input

            />
        </form>
      </div>
    </Container>
  )
}


