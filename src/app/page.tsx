import Image from "next/image";
import logoFull from "@/assets/images/logo-full.svg";
import patternBottom from "@/assets/images/pattern-squiggly-line-bottom-desktop.svg";
import patternTop from "@/assets/images/pattern-squiggly-line-top.svg";

export default function Home() {
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
          <h3 className="text-3xl font-bold">
            Your Journey to Coding Conf 2025 Starts Here!
          </h3>
          <p className="text-lg mt-2">
            Secure your spot at next year&apos;s biggest coding conference.
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 text-white rounded-xl p-6 w-full max-w-md shadow-lg">
         <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Avatar
            </label>
            <div className="border-dashed border-2 border-gray-300 rounded-xl p-4 text-center">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                id="avatar-upload"
              />
              <label
                htmlFor="avatar-upload"
                className="cursor-pointer text-purple-600 hover:underline"
              >
                Drag and drop or click to upload
              </label>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Upload your photo (JPG or PNG, max size: 500KB).
            </p>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your full name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">
              GitHub Username
            </label>
            <input
              type="text"
              className="w-full rounded-xl border border-gray-300 py-2 px-4 focus:outline-none focus:ring-2 focus:ring-purple-600"
              placeholder="@yourusername"
            />
          </div>
          <div>
            <button className="w-full bg-purple-600 text-white py-2 rounded-xl font-semibold hover:bg-purple-700 transition">
              Generate My Ticket
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Pattern */}
      <div className="absolute bottom-0 left-0">
        <Image src={patternBottom} alt="Bottom Pattern" />
      </div>
    </div>
  );
}
