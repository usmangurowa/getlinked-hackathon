import { Facebook, Instagram, Linkedin, TwitterX } from "@/components/Icons";
import NavBar from "@/components/NavBar";
import {
    TContactFormMessage,
    THackathonRegistration,
    getCategoryList,
    registerHackathon,
    sendContactMessage,
} from "@/lib/api";
import { clsx } from "class-flex";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

import { toast } from "react-toastify";

const Register = () => {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [categories, setCategories] = React.useState<
        { id: number; name: string }[]
    >([]);

    const router = useRouter();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setLoading(true);
        e.preventDefault();
        const values = e.target as any;
        const data: THackathonRegistration = {
            email: values.email.value,
            team_name: values.team_name.value,
            phone_number: values.phone_number.value,
            category: values.category.value,
            group_size: values.group_size.value,
            privacy_poclicy_accepted: values.privacy_poclicy_accepted.checked,
            project_topic: values.project_topic.value,
        };

        registerHackathon(data)
            .then((res) => setOpen(true))
            .catch((err) =>
                toast.error("Please try again. We could not register you.")
            )
            .finally(() => setLoading(false));
    };

    const handleClose = React.useCallback(() => {
        setOpen(false);
        router.replace("/");
    }, []);

    React.useEffect(() => {
        getCategoryList().then((res) => {
            setCategories(res);
        });
    }, []);
    return (
        <>
            <div
                className={clsx(
                    "transition-all duration-300 ease-in-out h-screen w-screen fixed overflow-hidden flex items-center justify-center  z-50 flex-col bg-primary-background/90 ",
                    {
                        "scale-100 opacity-100": open,
                        "scale-0 opacity-0": !open,
                    }
                )}
            >
                <div className="xl:max-w-xl max-w-xs  border border-primary p-10 rounded-md space-y-3">
                    <div className="relative w-full xl:h-[321px] h-[184px]">
                        <Image
                            src={"/images/congratulation.png"}
                            fill
                            alt="Congratualtions"
                        />
                    </div>
                    <p className="md:text-2xl text-xl font-semibold text-center">
                        Congratulations <br /> you have successfully Registered!
                    </p>
                    <p className="text-center md:text-base text-sm">
                        Yes, it was easy and you did it! <br /> check your mail
                        box for next step 😉
                    </p>
                    <button
                        className="primary-btn w-full"
                        onClick={handleClose}
                    >
                        Back
                    </button>
                </div>
            </div>

            <main className="2xl:h-screen min-h-screen flex flex-col bg-[url('/images/contact-page-bg.png')] bg-cover pb-20 2xl:pb-0">
                <NavBar />
                <div className="flex-grow grid xl:grid-cols-2 grid-cols-1 container items-center">
                    <div className="relative w-full xl:h-[717px] h-[500px]">
                        <Image
                            src={"/images/register-img.png"}
                            alt="Register"
                            fill
                            className="object-contain"
                        />
                    </div>

                    <form
                        action="#"
                        onSubmit={handleSubmit}
                        className="w-full xl:bg-white/5 rounded-xl xl:shadow-2xl xl:p-14 md:p-10   flex flex-col space-y-5"
                    >
                        <h1 className="text-primary font-clash text-4xl font-semibold">
                            Register
                        </h1>
                        <p className="flex items-end">
                            Be part of this movement!{" "}
                            <span className="border-b border-primary border-dotted">
                                <img
                                    src="/images/movement.png"
                                    className="w-14 h-8"
                                    alt=""
                                />
                            </span>
                        </p>
                        <p className="text-2xl">CREATE YOUR ACCOUNT</p>
                        <div className="grid grid-cols-2 gap-5">
                            <InputWithLabel
                                required
                                name="team_name"
                                placeholder="Enter the name of your group"
                                label="Team's Name"
                            />
                            <InputWithLabel
                                required
                                placeholder="Enter your phone number"
                                label="Phone"
                                name="phone_number"
                                type="tel"
                            />
                            <InputWithLabel
                                required
                                placeholder="Enter your email address"
                                label="Email"
                                name="email"
                                type="email"
                            />
                            <InputWithLabel
                                required
                                placeholder="What is your group project topic"
                                label="Project Topic"
                                name="project_topic"
                            />
                            <SelectWithLabel
                                label="Category"
                                required
                                defaultValue={"Select your category"}
                                name="category"
                            >
                                <option
                                    value="Select your category"
                                    disabled
                                    defaultChecked
                                >
                                    Select your category
                                </option>
                                {categories?.map((category) => (
                                    <option
                                        value={category.id}
                                        key={category.id}
                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </SelectWithLabel>
                            <SelectWithLabel
                                required
                                label="Group size"
                                name="group_size"
                            >
                                <option value="Select" disabled defaultChecked>
                                    Select
                                </option>
                                {[...Array(10)].map((_, i) => (
                                    <option key={i} value={i + 1}>
                                        {i + 1}
                                    </option>
                                ))}
                            </SelectWithLabel>
                        </div>
                        <p className="italic text-primary text-sm">
                            Please review your registration details before
                            submitting
                        </p>
                        <div className="flex items-center space-x-4">
                            <input
                                name="privacy_poclicy_accepted"
                                type="checkbox"
                                id="terms"
                                required
                            />{" "}
                            <label htmlFor="terms" className="text-sm">
                                I agreed with the event terms and conditions and
                                privacy policy
                            </label>
                        </div>
                        <button
                            disabled={loading}
                            type="submit"
                            className="primary-btn "
                        >
                            {loading
                                ? "Please wait... Registering..."
                                : "Register Now"}
                        </button>
                    </form>
                </div>
            </main>
        </>
    );
};

export default Register;

interface IInputWithLabel extends React.AllHTMLAttributes<HTMLInputElement> {
    label: string;
}
const InputWithLabel = ({ label, className, ...props }: IInputWithLabel) => (
    <div className="flex flex-col space-y-2">
        <label className="text-white text-sm">{label}</label>
        <input
            {...props}
            className={
                "bg-white/5  px-5 py-3 border-white border rounded-md outline-none " +
                className
            }
        />
    </div>
);

interface ISelectWithLabel extends React.AllHTMLAttributes<HTMLSelectElement> {
    label: string;
}

const SelectWithLabel = ({
    label,
    className,
    children,
    ...props
}: ISelectWithLabel) => (
    <div className="flex flex-col space-y-2">
        <label className="text-white text-sm">{label}</label>
        <select
            {...props}
            className={
                "bg-white/5 [&>option]:bg-primary-background px-5 py-3 border-white border rounded-md outline-none " +
                className
            }
        >
            {children}
        </select>
    </div>
);
