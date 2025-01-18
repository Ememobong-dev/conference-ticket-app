import Image from "next/image";
import logoFull from "@/assets/images/logo-full.svg";
import patternBottom from "@/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternTop from "@/assets/images/pattern-squiggly-line-top.svg";

export default function Home() {
  return (
    <div className="relative" >
      <div className="absolute top-0 left-[70%]  ">
        <Image alt="" src={patternTop} />
      </div>
      <div className="flex flex-col w-full justify-center items-center text-white">
        <div className="flex gap-5 ">
          <Image src={logoFull} alt="" />
        </div>
        <div>
          <h3>Your Journey to Coding Conf 2025 Starts Here! </h3>
          <p>Secure your spot at next year&apos;s biggest coding conference. </p>
        </div>
        <div>
          <div>
            <p>Full Name</p>
            <input className={'w-full rounded-xl py-2 px-4'}  />
          </div>
          <div>
            <p>Full Name</p>
            <input className={'w-full rounded-xl py-2 px-4'}  />
          </div>
          <div>
            <p>Full Name</p>
            <input className={'w-full rounded-xl py-2 px-4'}  />
          </div>
          <div>
            <button>
              Generate My Ticket
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0"  >
        <Image src={patternBottom} alt="" />

      </div>



    </div>
  );
}
