import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <section className="bg-[#fbfdfc]">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-6xl text-[#07130e] font-black sm:text-7xl">
              TWINKLIN
            </h1>
            <h2 className="text-3xl font-black text-[#53b08f] sm:block">Simplify Your Day </h2>

            <p className="mt-4 sm:text-xl/relaxed">
              Let's Create a Meaningful List of Todos!
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {/* <a
                className="block w-full rounded bg-[#53b08f] px-12 py-3 text-sm font-medium text-[#fbfdfc] shadow hover:bg-[#6bd8b1] focus:outline-none focus:ring active:bg-[#53b08f] sm:w-auto"
               
              >
               <Link to='/signup'>Sign up</Link>
              </a> */}

              <Link to='/signup'  className="block w-full rounded bg-[#53b08f] px-12 py-3 text-sm font-medium text-[#fbfdfc] shadow hover:bg-[#6bd8b1] focus:outline-none focus:ring active:bg-[#53b08f] sm:w-auto">Sign up</Link>
              {/* <a
                className="block w-full rounded px-12 py-3 text-sm font-medium text-[#53b08f] shadow hover:text-[#6bd8b1] focus:outline-none focus:ring active:text-[#53b08f] sm:w-auto"
                href="/about"
              >
                Login
              </a> */}
            <Link to='/login' className="block w-full rounded px-12 py-3 text-sm font-medium text-[#53b08f] shadow hover:text-[#6bd8b1] focus:outline-none focus:ring active:text-[#53b08f] sm:w-auto">Login</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default LandingPage