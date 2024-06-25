function Navbar() {
  return (
    <nav>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <h1 className="text-xl">logo</h1>
          </div>
          <div className="">
            <ul className="flex gap-x-8">
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
              <li>Home</li>
            </ul>
          </div>
          <div className="bg-cyan-500 px-10 py-4 text-lg font-medium text-white rounded hover:bg-black transition-all duration-200">
            <button className="">Login</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
