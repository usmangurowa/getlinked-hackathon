import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MenuIcon } from "./Icons";

const links = [
    {
        href: "#timeline",
        label: "Timeline",
    },
    {
        href: "#overview",
        label: "Overview",
    },
    {
        href: "#faqs",
        label: "FAQs",
    },
    {
        href: "#contact",
        label: "Contact",
    },
];

const NavBar = () => {
    return (
        <nav className="flex items-start container">
            <ul className="flex items-center space-x-5 2xl:pt-10 pt-6 2xl:pb-5 pb-4 w-full">
                <li>
                    <Link href="/" className="">
                        <Image
                            src={require("../../public/images/getlinked.svg")}
                            width={150}
                            height={60}
                            alt="Logo"
                        />
                    </Link>
                </li>
                <li className="flex-grow"></li>
                {links.map(({ href, label }) => (
                    <li className="2xl:px-5 px-2 hidden md:inline">
                        <Link href={href} className="p-5 block">
                            {label}
                        </Link>
                    </li>
                ))}
                <li className="hidden md:inline">
                    <Link href={"#"} className="primary-btn">
                        Register
                    </Link>
                </li>
                <li className="md:hidden">
                    <button>
                        <MenuIcon />
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
