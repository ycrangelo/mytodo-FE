import { Link } from "react-router-dom";

const LoginFirst = () => {
  return (

      <div className='flex flex-col gap-6 justify-center pt-[10rem]'>
        <h1 className='text-center font-black text-4xl lg:text-8xl'>Don't have an account?</h1>
        <p className='text-center font-black lg:text-2xl'>Login <span className="underline"><Link to='/login'>here</Link></span> or Sign-up <span className="underline"><Link to='/signup'>here</Link></span> </p>
      </div>

  );
}

export default LoginFirst;
