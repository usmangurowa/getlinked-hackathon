import {
    Facebook,
    Instagram,
    Linkedin,
    LocationMarker,
    Phone,
    TwitterX,
} from "@/components/Icons";
import NavBar from "@/components/NavBar";
import { clsx } from "class-flex";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <main className="flex min-h-screen md:h-screen flex-col items-center justify-between relative divide-y divide-gray-500 bg-[url('/images/hero-bg.svg')]  bg-no-repeat ">
                <NavBar />
                <div className="w-full  h-full flex-grow relative space-y-5 md:space-y-0">
                    <div className="md:w-full container lg:text-right text-center italic flex flex-col md:items-end  w-fit py-3">
                        <p className="font-bold 2xl:text-4xl md:text-3xl text-base md:text-right text-center   relative ">
                            Igniting a Revolution in HR Innovation
                        </p>
                        <img
                            src="/images/curve-line.svg"
                            alt=""
                            className="ml-auto md:w-fit w-32 "
                        />
                    </div>
                    <div className="w-full flex md:flex-row flex-col h-full flex-grow items-center relative container ">
                        <div className="flex flex-col md:items-start items-center md:justify-end md:h-full md:py-5  2xl:py-10 space-y-5 2xl:space-y-5">
                            <h1 className="font-black 2xl:text-7xl md:text-6xl text-4xl whitespace-nowrap z-10 relative text-center md:text-left">
                                <img
                                    src="/images/bulb.png"
                                    alt=""
                                    className="w-8 h-8 md:w-12 md:h-12 absolute md:right-32 right-12 md:-top-8 -top-6"
                                />
                                getlinked Tech
                                <br />
                                Hackathon{" "}
                                <span className="text-primary">1.0</span>
                                <img
                                    src="/images/link-bang.png"
                                    alt=""
                                    className="md:w-32 md:h-20 w-20 h-10 inline"
                                />
                            </h1>
                            <p className="2xl:text-xl md:text-lg text-sm md:whitespace-nowrap text-center md:text-left">
                                Participate in getlinked tech Hackathon 2023
                                stand <br />a chance to win a Big prize
                            </p>
                            <button className="primary-btn md:self-start">
                                Register
                            </button>
                            <div className="2xl:!my-20 !my-10 flex flex-row items-center space-x-10 text-white text-3xl">
                                <span>
                                    00 <span className="text-xs">H</span>
                                </span>
                                <span>
                                    00 <span className="text-xs">M</span>
                                </span>
                                <span>
                                    00 <span className="text-xs">S</span>
                                </span>
                            </div>
                        </div>
                        <div className="md:hidden flex relative h-[367px] w-full">
                            <Image
                                src={require("../../public/images/hero.png")}
                                fill
                                alt="Hero"
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <div className="w-full absolute -right-0 bottom-0 h-full pointer-events-none !overflow-hidden flex-col justify-end md:flex hidden">
                        <div className="relative w-full h-[90%] !overflow-hidden ">
                            <Image
                                src={require("../../public/images/hero.png")}
                                fill
                                alt="Hero"
                                className="object-contain object-right-bottom"
                            />
                        </div>
                    </div>
                </div>
            </main>
            <hr className=" border-gray-500" />

            <section className="container grid grid-cols-1 md:grid-cols-2 py-10 justify-center items-center bg-[url('/images/section-1.svg')] bg-contain bg-no-repeat md:bg-cover md:bg-left-bottom">
                <div className="relative w-full h-[477px]">
                    <Image
                        src={require("../../public/images/the-big-idea.svg")}
                        fill
                        alt="idea"
                        // className="object-contain object-right"
                    />
                </div>
                <div className="w-full space-y-5">
                    <h2 className="font-black md:text-3xl md:whitespace-nowrap text-center md:text-left text-xl z-10 relative">
                        Introduction to getlinked <br />
                        <span className="text-primary">tech Hackathon 1.0</span>
                    </h2>
                    <p className="md:text-left text-center">
                        {`Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real-world problems, pushing
                        the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about!`}
                    </p>
                </div>
            </section>
            <hr className=" border-gray-500" />
            <section className="container grid grid-cols-1 md:grid-cols-2 py-10 justify-center items-center bg-[url('/images/section-2.svg')] bg-contain bg-left-bottom bg-no-repeat">
                <div className="w-full space-y-5">
                    <h2 className="font-black md:text-3xl md:whitespace-nowrap text-center md:text-left text-xl z-10 relative">
                        Rules and <br />
                        <span className="text-primary">Guidelines</span>
                    </h2>
                    <p className="md:text-left text-center">
                        {`Our tech hackathon is a melting pot of visionaries, and
                        its purpose is as clear as day: to shape the future.
                        Whether you're a coding genius, a design maverick, or a
                        concept wizard, you'll have the chance to transform your
                        ideas into reality. Solving real-world problems, pushing
                        the boundaries of technology, and creating solutions
                        that can change the world, that's what we're all about!`}
                    </p>
                </div>

                <div className="relative w-full h-[477px]">
                    <Image
                        src={require("../../public/images/rules-and-regulations.svg")}
                        fill
                        alt="idea"

                        // className="object-contain object-right"
                    />
                </div>
            </section>
            <hr className=" border-gray-500" />
            <section className="container grid grid-cols-1 md:grid-cols-2 py-10 justify-center items-center bg-[url('/images/section-3.svg')] bg-contain bg-bottom bg-no-repeat">
                <div className="relative w-full h-[477px]">
                    <Image
                        src={require("../../public/images/judging.svg")}
                        fill
                        alt="idea"

                        // className="object-contain object-right"
                    />
                </div>
                <div className="w-full space-y-5 md:text-left text-center">
                    <h2 className="font-black md:text-3xl md:whitespace-nowrap text-center md:text-left text-xl z-10 relative">
                        Judging Criteria <br />
                        <span className="text-primary">Key attributes</span>
                    </h2>
                    <p>
                        <span className="text-primary font-bold">
                            Innovation and Creativity
                        </span>
                        : Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world
                        problem in a novel way or introduces innovative
                        features.
                    </p>
                    <p>
                        <span className="text-primary font-bold">
                            Functionality
                        </span>
                        : Assess how well the solution works. Does it perform
                        its intended functions effectively and without major
                        issues? Judges would consider the completeness and
                        robustness of the solution.
                    </p>
                    <p>
                        <span className="text-primary font-bold">
                            Impact and Relevance
                        </span>
                        : Determine the potential impact of the solution in the
                        real world. Does it address a significant problem, and
                        is it relevant to the target audience? Judges would
                        assess the potential social, economic, or environmental
                        benefits.
                    </p>
                    <p>
                        <span className="text-primary font-bold">
                            Technical Complexity
                        </span>
                        : Evaluate the technical sophistication of the solution.
                        Judges would consider the complexity of the code, the
                        use of advanced technologies or algorithms, and the
                        scalability of the solution.
                    </p>
                    <p>
                        <span className="text-primary font-bold">
                            Adherence to Hackathon Rules
                        </span>
                        : Judges will Ensure that the team adhered to the rules
                        and guidelines of the hackathon, including deadlines,
                        use of specific technologies or APIs, and any other
                        competition-specific requirements.
                    </p>
                    <button className="primary-btn">Read More</button>
                </div>
            </section>
            <hr className=" border-gray-500" />
            <section className="container grid grid-cols-1 md:grid-cols-2 py-10 justify-center items-center bg-[url('/images/section-4.svg')] bg-contain bg-right-bottom bg-no-repeat">
                <div className="w-full space-y-5 ">
                    <h2 className="font-black md:text-3xl md:whitespace-nowrap text-center md:text-left text-xl z-10 relative">
                        Frequently Ask
                        <br />
                        <span className="text-primary">Question</span>
                    </h2>
                    <p>
                        We got answers to the questions that you might want to
                        ask about getlinked Hackathon 1.0
                    </p>
                    <div className="space-y-3">
                        {faqs.map((faq, i) => (
                            <Collapse
                                key={i}
                                title={faq.title}
                                content={faq.content}
                            />
                        ))}
                    </div>
                </div>

                <div className="relative w-full h-[741px]  ">
                    <Image
                        src={require("../../public/images/faq.svg")}
                        fill
                        alt="idea"
                        className="object-contain object-right"
                    />
                </div>
            </section>
            <hr className=" border-gray-500" />
            <section className="container py-10 space-y-5">
                <div className="w-full !mb-16">
                    <h1 className="font-bold text-4xl text-center">Timeline</h1>
                    <p className="text-center md:w-1/4 w-4/5 mx-auto my-2">
                        Here is the breakdown of the time we anticipate using
                        for the upcoming event.
                    </p>
                </div>
                {timelines.map((timeline, index) => (
                    <Timeline {...timeline} index={index + 1} key={index} />
                ))}
            </section>
            <section className="bg-[url('/images/prizes-bg.png')] bg-cover  bg-no-repeat xl:h-screen min-h-screen">
                <div className="container py-10  gap-5 grid grid-cols-1 xl:grid-cols-5 h-full items-center ">
                    <div className="xl:col-span-5 col-span-1">
                        <div className="xl:w-fit w-full xl:text-left text-center xl:ml-auto">
                            <h2 className="font-black xl:text-3xl xl:whitespace-nowrap text-center xl:text-left text-xl z-10 relative">
                                Prizes and <br />
                                <span className="text-primary">Rewards</span>
                            </h2>
                            <p>
                                Highlight of the prizes or rewards for winners
                                and <br /> for participants.
                            </p>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-1 w-full relative h-[482px] ">
                        <Image src={"/images/cup.svg"} alt="Cup" fill />
                    </div>

                    <div className="xl:col-span-3 col-span-1 flex items-end w-full h-full xl:mt-0 mt-0 md:mt-16">
                        <div className="flex  flex-row w-full items-center justify-between ">
                            {prizes
                                .sort((a, b) => a.index - b.index)
                                .map((prize) => (
                                    <PrizeCard
                                        {...prize}
                                        key={prize.position}
                                    />
                                ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[url('/images/prizes-bg.png')] bg-cover  bg-no-repeat xl:h-screen min-h-screen">
                <div className="py-10 container md:space-y-20 space-y-10">
                    <div className="mx-auto md:w-1/4 w-full text-center space-y-5">
                        <h1 className="text-4xl font-bold">
                            Parners and Sponsors
                        </h1>
                        <p className="text-sm">
                            Getlinked Hackathon 1.0 is honored to have the
                            following major companies as its partners and
                            sponsors
                        </p>
                    </div>
                    <div className="w-full border border-primary   rounded-md grid grid-cols-3 p-10 items-center justify-center">
                        {sponsors.map((sp: any, i) => (
                            <div
                                key={i}
                                className=" w-full md:h-56  h-32  relative"
                            >
                                {i > 2 ? (
                                    <div className="w-full absolute md:-top-7 -top-4 left-0 ">
                                        <div className="w-4/5 mx-auto border-t-4 border-primary"></div>
                                    </div>
                                ) : null}
                                <div
                                    className={clsx(
                                        "w-full h-4/5 my-auto py-10 ",
                                        {
                                            "border-x-4 border-primary":
                                                sp === "liberty-pay" ||
                                                sp === "pay-box",
                                        }
                                    )}
                                >
                                    <div className="relative h-full w-4/5 mx-auto ">
                                        <Image
                                            src={`/images/${sp}.png`}
                                            fill
                                            alt={sp}
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="bg-[url('/images/prizes-bg.png')]  flex flex-col justify-end bg-cover -scale-y-100   bg-no-repeat xl:h-screen min-h-screen ">
                <div className="container -scale-y-100 grid xl:grid-cols-2 grid-cols-1 xl:gap-0 gap-10">
                    <div className="w-full space-y-10">
                        <div className="space-y-5">
                            <h2 className="font-black md:text-3xl md:whitespace-nowrap text-center md:text-left text-xl z-10 relative">
                                Privacy Policy and
                                <br />
                                <span className="text-primary">Terms</span>
                            </h2>
                            <p className="text-sm my-3">
                                Last updated on September 12, 2023
                            </p>
                            <p className="text-sm">
                                {`Below are our privacy & policy, which outline a lot of
                        goodies. it’s our aim to always take of our participant`}
                            </p>
                        </div>
                        <div className="w-full flex flex-col border border-primary rounded-md bg-black/20 p-12 space-y-8">
                            <p>
                                {`At getlinked tech Hackathon 1.0, we value your privacy
                                    and are committed to protecting your personal information.
                                    This Privacy Policy outlines how we collect, use, disclose, 
                                    and safeguard your data when you participate in our tech 
                                    hackathon event. By participating in our event, you consent 
                                    to the practices described in this policy.`}
                            </p>
                            <div>
                                <p className="font-bold text-base text-primary">
                                    Licensing Policy
                                </p>
                                <p className="font-bold text-sm">
                                    Here are terms of our Standard License:
                                </p>
                            </div>

                            <ul className="space-y-5">
                                <li className="pl-6 bg-[length:16px_16px] bg-[url('/images/check.svg')] leading-normal bg-no-repeat">
                                    The Standard License grants you a
                                    non-exclusive right to navigate and register
                                    for our event
                                </li>
                                <li className="pl-6 bg-[length:16px_16px] bg-[url('/images/check.svg')] leading-normal bg-no-repeat">
                                    You are licensed to use the item available
                                    at any free source sites, for your project
                                    developement
                                </li>
                            </ul>
                            <button className="primary-btn mx-auto">
                                Read More
                            </button>
                        </div>
                    </div>
                    <div className="w-full relative xl:h-full h-[447px]">
                        <Image
                            src={"/images/terms.png"}
                            fill
                            alt="idea"
                            className="object-contain"
                        />
                    </div>
                </div>
            </section>
            <footer className="bg-[url('/images/footer-bg.png')]  bg-cover bg-no-repeat  ">
                <div className="w-full container grid grid-cols-1 xl:grid-cols-4 xl:py-20 py-10 xl:gap-5 gap-10">
                    <div className="xl:col-span-2 col-span-1 space-y-5">
                        <Link href="/" className="">
                            <Image
                                src={require("../../public/images/getlinked.svg")}
                                width={150}
                                height={60}
                                alt="Logo"
                            />
                        </Link>
                        <p className="xl:w-4/5 text-sm">
                            {`Getlinked Tech Hackathon is a technology innovation program 
                                established by a group of organizations with the aim of showcasing 
                                young and talented individuals in the field of technology`}
                        </p>

                        <div className="flex items-center divide-x-2 divide-primary">
                            <Link href={"#"} className="pr-5">
                                Terms Of Use
                            </Link>
                            <Link href={"#"} className="pl-5">
                                Privacy Policy
                            </Link>
                        </div>
                    </div>

                    <ul className="space-y-4 col-span-1">
                        <li className="font-bold text-primary text-base">
                            Useful Links
                        </li>
                        {links.map((link) => (
                            <li key={link.label}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                        <li className="text-primary flex">
                            Follow Us
                            <ul className="flex items-center ml-3 space-x-3">
                                <li>
                                    <Instagram />
                                </li>
                                <li>
                                    <TwitterX />
                                </li>
                                <li>
                                    <Facebook />
                                </li>
                                <li>
                                    <Linkedin />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="space-y-4 col-span-1">
                        <li className="font-bold text-primary text-base">
                            Useful Links
                        </li>
                        <li className="flex space-x-4 items-center">
                            <Phone /> <span>+234 679 81819</span>
                        </li>
                        <li className="flex space-x-4 items-center">
                            <LocationMarker />{" "}
                            <span>27,Alara Street Yaba 100012 Lagos State</span>
                        </li>
                    </ul>
                    <div className="xl:col-span-4 col-span-1 text-center mt-10">
                        <span>All rights reserved. © getlinked Ltd.</span>
                    </div>
                </div>
            </footer>
        </>
    );
}

const links = [
    {
        href: "#overview",
        label: "Overview",
    },
    {
        href: "#timeline",
        label: "Timeline",
    },
    {
        href: "#faqs",
        label: "FAQs",
    },
    {
        href: "#contact",
        label: "Contact",
    },
    {
        href: "/register",
        label: "Register",
    },
];

const sponsors = [
    "liberty-assured",
    "liberty-pay",
    "winwise",
    "wisper",
    "pay-box",
    "vizual-plus",
];

const faqs = [
    {
        title: "Can I work on a project I started before the hackathon?",
        content: "",
    },
    {
        title: "What happens if I need help during the hackathon?",
        content: "",
    },
    {
        title: "What happens if I don't have an idea for a project?",
        content: "",
    },
    {
        title: "Can I join a team or do I have to come with one?",
        content: "",
    },
    {
        title: "What happens after the hackathon ends",
        content: "",
    },
    {
        title: "Can I work on a project I started before the hackathon?",
        content: "",
    },
];

const Collapse = ({
    title,
    content: string,
}: {
    title: string;
    content?: string;
}) => (
    <div className="flex flex-col border-b border-primary py-2">
        <div className="flex items-center justify-between">
            <h1 className="text-sm">{title}</h1>
            <button className="text-primary text-xl">+</button>
        </div>
    </div>
);

const timelines = [
    {
        title: "Hackathon Announcement",
        date: "November 18, 2023",
        content:
            "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    },
    {
        title: "Teams Registration begins",
        date: "November 18, 2023",
        content:
            "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    },
    {
        title: "Teams Registration ends",
        date: "November 18, 2023",
        content: "Interested Participants are no longer Allowed to register",
    },
    {
        title: "Announcement of the accepted teams and ideas",
        date: "November 18, 2023",
        content:
            "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    },
    {
        title: "Getlinked Hackathon 1.0 Offically Begins",
        date: "November 18, 2023",
        content:
            "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    },
    {
        title: "Demo Day",
        date: "November 18, 2023",
        content:
            "Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day",
    },
];

const Timeline = ({
    content,
    date,
    index,
    title,
}: (typeof timelines)[0] & { index: number }) => (
    <div
        className={`w-full flex  justify-around flex-row-reverse ${
            index % 2 ? "md:flex-row" : "flex-row-reverse"
        }`}
    >
        <div className="flex flex-col md:w-2/5 w-4/5 md:justify-end">
            <h2 className="text-primary font-bold md:text-2xl text-sm">
                {title}
            </h2>
            <p className="text-sm">{content}</p>
            <p className="text-primary md:hidden font-bold">{date}</p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-2">
            <div
                className={`h-16 ${
                    index === 1 ? "md:h-32" : "md:h-20"
                } w-1 rounded-full bg-primary`}
            ></div>
            <div className="bg-gradient-to-tr from-primary to-primary-dark h-10 flex items-center justify-center w-10 rounded-full">
                <span className="font-bold">{index}</span>
            </div>
        </div>
        <div className="flex-col w-2/5 justify-end md:flex hidden">
            <p className="text-primary text-2xl font-bold">{date}</p>
        </div>
    </div>
);

const prizes = [
    {
        index: 2,
        position: "1st",
        prize: "N400,000",
        image: "/images/medal-1.svg",
    },
    {
        index: 1,
        position: "2nd",
        prize: "N300,000",
        image: "/images/medal-2.svg",
    },
    {
        index: 3,
        position: "3rd",
        prize: "N150,000",
        image: "/images/medal-3.svg",
    },
];

const PrizeCard = ({ index, position, prize, image }: (typeof prizes)[0]) => (
    <div className="xl:w-fit w-[30%] relative overflow-visible ">
        <img
            src={image}
            className={clsx("absolute   left-0 z-50 object-contain ", {
                "w-[296px] h-[296px] scale-[1.4] xl:-top-32 -top-40":
                    position === "1st",
                "w-full h-[180px] xl:-top-20 -top-28": position !== "1st",
            })}
            alt=""
        />
        <div
            className={clsx(
                "xl:w-[212px] w-full text-center rounded-lg xl:p-5 p-2 flex flex-col justify-end relative",
                {
                    "bg-primary-dark/20 xl:h-[347px] md:h-[250px] h-[147px] border-primary-dark border":
                        position === "1st",
                    "bg-primary/20  xl:h-[296px] md:h-[200px] h-[125px] border-primary border":
                        position !== "1st",
                }
            )}
        >
            <span className="font-bold xl:text-4xl text-xl md:text-2xl">
                {position}
            </span>
            <span className="xl:text-2xl md:text-lg text-sm font-semibold">
                Runner
            </span>
            <span
                className={clsx(
                    "font-bold text-base md:text-2xl xl:text-3xl mb-2",
                    {
                        "text-primary-dark": position === "1st",
                        "text-primary": position !== "1st",
                    }
                )}
            >
                {prize}
            </span>
        </div>
    </div>
);
