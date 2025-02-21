import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    path: "https://github.com/lcorbitt",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/lukascorbitt/",
  },
];

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({containerStyles, iconStyles}: SocialsProps) => {
  return (
    <div className={(containerStyles)}>
      {socials.map((item, index) => (
        <Link href={item.path} key={index} className={iconStyles}>
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials;