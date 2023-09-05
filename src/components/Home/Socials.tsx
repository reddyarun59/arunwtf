import { FC } from "react";
import { FiGithub, FiTwitter, FiLinkedin } from "react-icons/fi/index";
import { RxDiscordLogo } from "react-icons/rx";

const socials = [
  {
    aria: "GitHub",
    icon: FiGithub,
    href: "https://github.com/reddyarun59",
  },
  {
    aria: "Twitter",
    icon: FiTwitter,
    href: "https://twitter.com/arunwtf",
  },
  {
    aria: "Linkedin",
    icon: FiLinkedin,
    href: "https://linkedin.com/in/arunwtf",
  },
  {
    aria: "Discord",
    icon: RxDiscordLogo,
    href: "https://discord.com/users/arunwtf",
  },
];

const Socials: FC = () => {
  return (
    <div className="flex">
      {socials.map((social, index) => (
        <a
          href={social.href}
          target="_blank"
          rel="noreferrer"
          className="w-5 h-5 mr-3  hover:text-zinc-100 transition transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:transform-none"
          key={index}
          aria-label={social.aria}
        >
          <social.icon size={22} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
