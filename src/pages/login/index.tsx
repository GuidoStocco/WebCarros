import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Container } from '../../components/container'
import logoImg from './../../assets/logo.svg'
import { Input } from '../../components/input'
import {useForm} from 'react-hook-form';
import {z} from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {signInWithEmailAndPassword, signOut} from 'firebase/auth';
import {auth} from './../../services/firebase';



const schemaLogin = z.object({
  email: z.email("Insira um email válido").min(1, "O campo email é obrigatório"),
  password: z.string().min(1,"O campo senha é obrigatório")
})


type LoginFormData = z.infer<typeof schemaLogin>


export function Login() {

  const navigate = useNavigate();

  const {register, handleSubmit, formState:{errors}} = useForm<LoginFormData>({
    resolver: zodResolver(schemaLogin),
    mode: 'onChange'
  })


  useEffect(() => {
    async function handleLogout(){
      await signOut(auth)
    }

    handleLogout();
  },[])

  function onSubmit(data:LoginFormData){
    signInWithEmailAndPassword(auth, data.email, data.password)
    .then(() => {
      navigate('/dashboard', {replace: true})
    })
    .catch((error) => {
      console.log(error)
    })
  }

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

        <form className='bg-white w-full max-w-xl rounded-lg p-4'
          onSubmit={handleSubmit(onSubmit)}
        >
            <div className='mb-3'>
              <Input
                type='email'
                placeholder='Digite seu email'
                name='email'
                error={errors.email?.message}
                register={register}
              />
            </div>

            <div className='mb-3'>
              <Input
                type='password'
                placeholder='Digite sua senha'
                name='password'
                error={errors.password?.message}
                register={register}
              />
            </div>

            <button type='submit' className='bg-zinc-900 w-full rounded-md text-white h-10 font-medium'>
              Acessar
            </button>
        </form>

        <Link to='/register'>
          Não possui uma conta? Cadastre-se
        </Link>

      </div>
    </Container>
  )
}


