import { Link, NavLink } from "react-router";

export default function Header() {
  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-7xl">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-700 font-medium"
                  : "text-gray-700 hover:text-orange-700"
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-700 font-medium"
                  : "text-gray-700 hover:text-orange-700"
              }
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-700 font-medium"
                  : "text-gray-700 hover:text-orange-700"
              }
            >
              Contact Us
            </NavLink>

            <NavLink
              to="/github"
              className={({ isActive }) =>
                isActive
                  ? "text-orange-700 font-medium"
                  : "text-gray-700 hover:text-orange-700"
              }
            >
              Github
            </NavLink>

            <Link to="#" className="text-gray-800 font-medium text-sm">
              Log in
            </Link>

            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 font-medium rounded-lg text-sm px-4 py-2.5"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
