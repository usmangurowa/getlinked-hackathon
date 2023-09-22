import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Close, MenuIcon } from "./Icons";
import { clsx } from "class-flex";

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
    const [open, setOpen] = React.useState(false);
    return (
        <>
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
                        <li
                            key={label}
                            className="2xl:px-5 px-2 hidden md:inline"
                        >
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
                        <button onClick={() => setOpen(!open)}>
                            <MenuIcon />
                        </button>
                    </li>
                </ul>
            </nav>
            <div
                className={clsx(
                    "bg-primary-background  z-50 min-h-fit h-[50vh] transition-all duration-300 ease-in-out absolute top-0 left-0",
                    {
                        "w-screen": open,
                        "w-0 overflow-hidden": !open,
                    }
                )}
            >
                <div className="w-full p-5 flex justify-end">
                    <button onClick={() => setOpen(false)}>
                        <Close />
                    </button>
                </div>
                <ul
                    className={clsx(
                        "container transition-all duration-1000 ease-in-out",
                        {
                            "opacity-0": !open,
                            "opacity-100": open,
                        }
                    )}
                >
                    {links.map(({ href, label }) => (
                        <li
                            key={label}
                            // className="2xl:px-5 px-2 hidden md:inline"
                        >
                            <Link href={href} className="px-5 py-3 block">
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="px-5 py-4 block">
                        <Link href={"#"} className="primary-btn">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
