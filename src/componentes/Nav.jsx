import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#7BCAB2]/90 shadow-lg">
      <nav className="max-w-7xl mx-auto h-14 px-6 flex items-center justify-between">
        
        {/* Logo / Marca */}
        <h1 className="text-2xl font-semibold tracking-wide text-emerald-50">
          EJJAF
        </h1>

        {/* Links */}
        <ul className="flex gap-10">
          {[
            { to: "/", label: "Inicio" },
            { to: "/ventas", label: "Ventas" },
          ].map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) =>
                  `
                  relative text-lg text-emerald-50 transition-all duration-300
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-[2px] after:w-full after:bg-emerald-100
                  after:scale-x-0 after:origin-left after:transition-transform after:duration-300
                  hover:after:scale-x-100
                  ${isActive ? "after:scale-x-100 font-medium" : ""}
                  `
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

      </nav>
    </header>
  );
};
