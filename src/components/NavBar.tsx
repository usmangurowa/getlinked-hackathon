import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Close, MenuIcon } from "./Icons";
import { clsx } from "class-flex";
import { useRouter } from "next/router";

const links = [
    {
        href: "/#timeline",
        label: "Timeline",
    },
    {
        href: "/#overview",
        label: "Overview",
    },
    {
        href: "/#faqs",
        label: "FAQs",
    },
    {
        href: "/contact",
        label: "Contact",
    },
];

const NavBar = () => {
    const [open, setOpen] = React.useState(false);
    const router = useRouter();

    React.useEffect(() => {
        setOpen(false);
    }, [router.asPath]);
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
                            className={clsx(
                                "2xl:px-5 px-2 hidden xl:inline text-base font-medium",
                                {
                                    "text-transparent bg-clip-text bg-gradient-to-r from-primary-dark  to-primary !font-bold":
                                        router.pathname == href,
                                }
                            )}
                        >
                            <Link href={href} className="p-5 block">
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="hidden xl:inline !ml-16">
                        <button
                            className={clsx({
                                "bg-gradient-to-r from-primary to-primary-dark  rounded p-[2px]":
                                    router.pathname === "/register",
                            })}
                        >
                            <Link
                                href={"/register"}
                                className={clsx({
                                    " rounded text-base inline-block bg-primary-background !py-3 px-12":
                                        router.pathname === "/register",
                                    "primary-btn":
                                        router.pathname !== "/register",
                                })}
                            >
                                Register
                            </Link>
                        </button>
                    </li>
                    <li className="xl:hidden">
                        <button onClick={() => setOpen(!open)}>
                            <MenuIcon />
                        </button>
                    </li>
                </ul>
            </nav>
            <div
                className={clsx(
                    "bg-primary-background  z-50 min-h-fit h-screen fixed transition-all duration-300 ease-in-out  top-0 left-0",
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
                        "container transition-all duration-1000 ease-in-out ",
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
                            <Link href={href} className="p-5 block">
                                {label}
                            </Link>
                        </li>
                    ))}
                    <li className="p-5 block">
                        <Link href={"/register"} className="primary-btn">
                            Register
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default NavBar;
