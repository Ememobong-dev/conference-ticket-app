"use client";

import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import logoFull from "@/assets/images/logo-full.svg";
import patternBottom from "@/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternTop from "@/assets/images/pattern-squiggly-line-top.svg";

export default function Ticket() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const fullName = searchParams.get("fullName");
  const email = searchParams.get("email");
  const githubUsername = searchParams.get("githubUsername");
  const avatar = searchParams.get("avatar");

  return (
    <div className="relative h-screen">
        <div className="absolute top-0 right-0">
            <Image alt="Top Pattern" src={patternTop} />
        </div>

        {/* Main Content */}
        <div className="flex flex-col w-full items-center justify-center text-white px-6">
            <div className="mt-10">
            <Image src={logoFull} alt="Coding Conf Logo" />
            </div>

            <div className="text-center mt-6">
                <h3 className="text-5xl leading-relaxed  font-bold">
                    Congrats, <span  className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(7,86%,67%)] to-[hsl(0,0%,100%)]">{fullName}!</span> 
                    <br /> Your ticket is ready.
                </h3>
                <p className="text-lg mt-2 ">
                    We&apos;ve emailed your ticket to 
                </p>
                <p>
                    {email} and will send updates in 
                </p>
                <p>
                    the run up to the event
                </p>
            </div>
            {avatar && (
            <Image
                src={decodeURIComponent(avatar)}
                alt="Avatar"
                className="mx-auto rounded-full mt-10 w-32 h-32 mb-4"
                width={48}
                height={48}
            />
            )}
            <p className="text-lg font-semibold">Name: {fullName}</p>
            <p className="text-lg">Email: {email}</p>
            <p className="text-lg">GitHub: {githubUsername}</p>
            <button
            onClick={() => router.push("/")}
            className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
            Back to Home
            </button>
        </div>

        {/* Bottom Pattern */}
        <div className="absolute bottom-0 left-0">
            <Image src={patternBottom} alt="Bottom Pattern" />
        </div>
    </div>
    
       
  );
}
