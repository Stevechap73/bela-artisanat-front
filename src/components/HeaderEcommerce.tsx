import Link from "next/link";
import Image from "next/image";
import { useStoreCart } from "@/stores/storeAll";
import { useState } from "react";
// import { useRouter } from "next/router";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";

const HeaderEcommerce = () => {
  const { cart } = useStoreCart((state) => state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    // Supprimez le token (par exemple, de localStorage)
    localStorage.removeItem("token");
    // Redirigez vers la page de login
    router.push("/login");
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-screen-xl px-4 mx-auto md:flex md:items-center md:justify-between py-4">
        <div className="flex justify-between items-center">
          <Link href="/" passHref>
            <div className="flex items-center cursor-pointer">
              <Image
                src="/logoo.jpg"
                alt="logo"
                width={60}
                height={60}
                className="rounded object-cover"
              />
              <span className="ml-3 font-semibold text-xl">
                BELA ARTISANATS
              </span>
            </div>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-8`}
        >
          <Link href="/" passHref>
            <span className="hover:text-gray-700 cursor-pointer block md:inline-block">
              Home
            </span>
          </Link>
          <Link href="/contact" passHref>
            <span className="hover:text-gray-700 cursor-pointer block md:inline-block">
              Contact
            </span>
          </Link>
          <div className="relative hidden md:block">
            <input
              type="text"
              placeholder="Search..."
              className="px-2 py-1 border rounded"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-2">
          <Link href={"/ecommerce/shoppingCart"}>
            <button
              id="myCartDropdownButton1"
              data-dropdown-toggle="myCartDropdown1"
              type="button"
              className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
            >
              <span className="sr-only">Cart</span>
              <svg
                className="w-5 h-5 lg:me-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                />
              </svg>
              <span className="hidden sm:flex">Panier({cart.length})</span>
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className="p-2 hover:bg-gray-100 rounded cursor-pointer text-gray-800 dark:text-white focus:outline-none"
          >
            <LogoutIcon />
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            <Link href="/ecommerce/shoppingCart" passHref>
              <button
                id="myCartDropdownButton1"
                data-dropdown-toggle="myCartDropdown1"
                type="button"
                className="w-full text-left inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white"
              >
                <span className="sr-only">Cart</span>
                <svg
                  className="w-5 h-5 lg:me-1"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312"
                  />
                </svg>
                <span className="sm:flex">Panier({cart.length})</span>
              </button>
            </Link>
            <Link href="/login" passHref>
              <span className="block w-full p-2 hover:bg-gray-100 rounded cursor-pointer">
                Login
              </span>
            </Link>
            <Link href="/register" passHref>
              <span className="block w-full p-2 hover:bg-gray-100 rounded cursor-pointer">
                Signup
              </span>
            </Link>
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-2 py-1 border rounded"
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default HeaderEcommerce;
