import Link from "next/link";
import { Instagram, Github, Twitter } from "lucide-react";

const socialLinks = [
  { href: "https://instagram.com/im.heinzzz", icon: Instagram, label: "instagram" },
  { href: "https://x.com/chrysantastixxx", icon: Twitter, label: "X" },
  { href: "https://github.com/demonicheinz", icon: Github, label: "github" },
];

export function SocialLinks() {
  return (
    <div className="w-full">
      <div className="text-lg flex justify-between w-full mb-4">
        <h1 className="tracking-wider">All My Socials</h1>
        <span>( {socialLinks.length} )</span>
      </div>
      <ul className="flex w-full justify-center gap-2 flex-wrap">
        {socialLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              aria-label={link.label}
              className="social-icon inline-flex items-center justify-center whitespace-nowrap text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-9 h-9 rounded-full p-2 hover:scale-125 transition-all duration-300 ease-in-out"
            >
              <link.icon className="w-5 h-5" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
