
export default function Header() {
  return (
    <header className="bg-gray-800 text-white flex items-center w-full px-6 py-4 shadow-md">
          <img className="flex items-center mr-3" src="react-logo.png" width="40px" alt="React logo" />
          <nav >
              <ul className="flex space-x-6">
                  <li  className="hover:text-blue-300 transition-colors cursor-pointer font-medium">Pricing</li>
                  <li  className="hover:text-blue-300 transition-colors cursor-pointer font-medium">About</li>
                  <li  className="hover:text-blue-300 transition-colors cursor-pointer font-medium">Contact</li>
              </ul>
          </nav>
      </header>
  )
}
