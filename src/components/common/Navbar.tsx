import { cn } from "@/lib/utils";
import images from "@/utils/images";
import urls from "@/utils/urls";
import {
  Bike,
  HeartIcon,
  Search,
  ShoppingCart,
  UserCircle,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import ToolWrapper from "./ToolWrapper";

export default function Navbar() {
  const nav_links = [
    {
      id: 1,
      name: "Home",
      url: urls.home,
    },
    {
      id: 2,
      name: "Menu",
      url: urls.menu,
    },
    {
      id: 3,
      name: "About Us",
      url: urls.about_us,
    },
    {
      id: 4,
      name: "Blog",
      url: urls.blog,
    },
    {
      id: 5,
      name: "Contact Us",
      url: urls.contact_us,
    },
    {
      id: 6,
      name: "Faq",
      url: urls.faq,
    },
  ];

  const pathname = useLocation().pathname;

  const [selectedLanguage] = useState("en");

  return (
    <nav className="py-5 shadow-md">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link to={urls.home}>
            <img src={images.logo} alt="logo" className="w-32" />
          </Link>

          <div className="flex gap-5 font-semibold">
            {nav_links.map(({ id, name, url }) => (
              <NavLink
                key={id}
                to={url}
                className={cn(
                  pathname === url && "text-primary",
                  "transition duration-300 hover:text-primary"
                )}
              >
                {name}
              </NavLink>
            ))}
          </div>

          <Link to="tel:01090830997" className="flex gap-2 items-center">
            <Bike size={35} />
            <div>
              <div className="text-gray-400">Call and order in</div>
              <span className="text-primary text-xl font-medium">
                01090830997
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-5">
            <ToolWrapper>
              <span>{selectedLanguage === "en" ? "AR" : "EN"}</span>
            </ToolWrapper>
            <ToolWrapper>
              <Search size={18} />
            </ToolWrapper>
            <ToolWrapper>
              <UserCircle size={18} />
            </ToolWrapper>
            <ToolWrapper>
              <HeartIcon size={18} />
            </ToolWrapper>
            <ToolWrapper>
              <ShoppingCart size={18} />
            </ToolWrapper>
          </div>
        </div>
      </div>
    </nav>
  );
}
