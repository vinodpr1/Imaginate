import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
// import "../../app/globals.css";
import AuthForm from "./AuthForm";
import { Button } from "./ui/button";

interface IAuth {
  component: string;
  loginHeading: string;
  authWithEmailText: string;
  userAuthOption: string;
  userAuthAction: string;
}

const Auth = ({
  component,
  loginHeading,
  authWithEmailText,
  userAuthOption,
  userAuthAction,
}: IAuth) => {
  return (
    <div className="h-full w-full flex flex-col lg:grid lg:grid-cols-10">
      <div className="flex flex-col py-12 px-2 col-span-4 justify-between">
        <div className="p-2">
          <Link href={"/"}>
            <Button size="lg" variant="outline" className="cursor-pointer py-1">
              <ArrowLeft className="h-4 w-4" /> Home
            </Button>
          </Link>
        </div>
        <div className="">
          <p className="text-2xl font-medium sm:text-3xl sm:font-semibold">
            <span className="text-3xl font-semibold sm:font-bold sm:text-4xl bg-gradient-to-tr from-[#2affec] to-green-700 bg-clip-text text-transparent">
              Imaginate{" "}
            </span>
            Fusion of Tech
            <br /> From Pixels to Perfection
          </p>
        </div>
        <div className="flex items-center pt-8 max-w-full">
          <div className="">
            <div className="lightning-line"></div>
            <div className="glow-effect"></div>
          </div>
        </div>
      </div>

      <div className="col-span-6 h-full py-6">
        <div className="flex flex-col items-center">
          <div className="wi-[100%]">
            <div className="flex flex-col ">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">
                  <span>{loginHeading}</span>
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 pt-2 gap-2">
              <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                <img
                  src="https://www.google.com/favicon.ico"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="font-medium">Google</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                <img
                  src="https://github.com/favicon.ico"
                  alt=""
                  className="w-5 h-5"
                />
                <span className="font-medium">GitHub</span>
              </button>

              <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                <img
                  src="https://www.apple.com/favicon.ico"
                  alt="Apple Logo"
                  className="w-5 h-5"
                />
                <span className="font-medium">Apple</span>
              </button>
              <button className="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 text-black px-8 py-2 rounded-md transition-colors">
                <img
                  src="https://img.icons8.com/color/48/discord-logo.png"
                  alt="Discord Logo"
                  className="w-5 h-5"
                />
                <span className="font-medium">Discord</span>
              </button>
            </div>

            <div className="flex flex-col w-full items-center justify-center mt-4">
              <div className="flex w-full items-center justify-center space-x-2">
                <div className="h-[1px] w-16 bg-gray-400"></div>
                <span className="text-xs text-gray-400 uppercase">
                  {authWithEmailText}
                </span>
                <div className="h-[1px] w-16 bg-gray-400"></div>
              </div>

              <AuthForm component={component} />

              <h3 className="flex gap-2 justify-center items-center">
                <span className="text-gray-400">{userAuthOption}</span>{" "}
                <Link href={component == "signup" ? "/auth/signin" : "signup"}>
                  <span className="text-blue-600">{userAuthAction}</span>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
