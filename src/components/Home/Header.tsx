import { FC } from "react";
import Socials from "./Socials";

const Header: FC = () => {
  return (
    <div className="flex flex-row md:flex-col">
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-5">
          Hey, I&apos;m Arun{" "}
          <span className="animate-wave inline-block">👋</span>
        </h1>
        <div className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
          <p className="mb-2">
            I&apos;m Full-Stack Engineer with a strong foundation in web and
            software development.
          </p>
          <p className="mb-4">
            I am dedicated to delivering innovative, efficient, and
            user-friendly solutions that meet the needs of end-users.
          </p>
          <p className="mb-2">
            If you&apos;re ever in Bangalore, let&apos;s grab coffee or maybe
            chaii. I am always open to new opportunities, collaborations, and
            discussions related to technology and software development.
          </p>
          <div>
            <p className="mb-4">
              Feel free to reach out at{" "}
              <a
                href="https://twitter.com/arunwtf"
                target="_blank"
                rel="noreferrer"
              >
                <span className="underline underline-offset-2 hover:text-zinc-100">
                  @arunwtf
                </span>
              </a>
              , or drop an email at{" "}
              <a
                href="mailto:reddyarun59@yahoo.com"
                target="_blank"
                rel="noreferrer"
              >
                <span className="underline underline-offset-2 hover:text-zinc-100">
                  reddyarun59@yahoo.com.
                </span>
              </a>
            </p>
            <div>
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
