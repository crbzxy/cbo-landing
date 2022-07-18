//import reactLogo from '../assets/react.svg'
import { useState } from 'react'

function Header() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='contenedor bg-gradient-to-r from-blue to-purple bg-gradient  h-screen'>
        <div className='flex'>
          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          
        </div>
        <h1 className='text-3xl font-bold underline'>Hello world!</h1>

        <div className='card'>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>

          <p className='pt-3'>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className='read-the-docs'>
          Landing page from Carlos Boyzo
        </p>
      </header>
    </>
  );
}

export default Header;
