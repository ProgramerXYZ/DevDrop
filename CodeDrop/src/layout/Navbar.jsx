import React, { use, useState } from "react";
import Button from "@/components/Button";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#features", label: "Features" },
  { href: "#docs", label: "Docs" },
  { href: "#pricing", label: "Pricing" },
];

function Navbar() {
  const [menu, setActiveMenu] = useState(false);

  return (
    <header className="w-full p-4 fixed top-0 left-0 right-0 fade-in-animation glass z-50">
      <nav className="container mx-auto flex justify-between items-center ">
        {/* logo */}

        <div className="bg-white">
          <a href="">
            <img
              className="w-[100px] h-[30px] md:w-[150px] md:h-[45px] object-contain"
              src=""
              alt=""
            />
          </a>
        </div>

        {/* Links */}

        <div className="hidden md:flex w-max items-center gap-1 p-1 bg-surface/20 backdrop-blur-sm">
          {links.map((link, index) => (
            <a
              className="px-6 py-2 text-sm rounded-full text-muted-foreground hover:text-foreground hover:bg-surface-hover focus:bg-surface-hover transition-all duration-200"
              key={index}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* buttons */}
        <div className="hidden md:flex w-max gap-2">
          <Button className="hover:bg-primary hover:shadow-primary/20">
            Login In
          </Button>
          <Button className="bg-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20">
            Sign In
          </Button>
        </div>

        {/* menu */}
        <button
          onClick={() => setActiveMenu(prev => !prev)}
          className="p-2 text-foreground cursor-pointer block md:hidden transition-colors duration-200 hover:text-primary"
        >
          {menu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/*  */}

      {menu && (
        // parent
        <div className="md:hidden w-full mx-auto overflow-hidden mt-1 fade-in-animation">
          {/* mobile links */}

          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 bg-surface/90 border border-border/40 rounded-2xl backdrop-blur-md mt-2 shadow-2xl">
            {links.map((link, index) => (
              <a onClick={() => setActiveMenu(prev => !prev)}
                className="px-6 py-2 text-sm text-center rounded-xl text-muted-foreground hover:text-foreground hover:bg-surface-hover transition-all duration-200"
                key={index}
                href={link.href}
              >
                {link.label}
              </a>
            ))}

            {/* mobile buttons */}

            <Button onClick={() => setActiveMenu(prev => !prev)} size="sm" className="hover:bg-primary hover:shadow-primary/20 w-full">
              Login In
            </Button>
            <Button onClick={() => setActiveMenu(prev => !prev)} size="sm" className="bg-primary hover:bg-primary/20 hover:shadow-lg hover:shadow-primary/20 w-full">
              Sign In
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
