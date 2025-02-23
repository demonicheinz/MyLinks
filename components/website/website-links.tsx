import Image from "next/image";
import Link from "next/link";

const websiteLinks = [
  {
    href: "https://heinz.com",
    image: "/images/web.png",
    label: "Website",
    description: "Check out my portfolio website",
  },
  {
    href: "https://heinz.id/blog",
    image: "/images/web.png",
    label: "Blog",
    description: "Sharing tech tips, tutorials, and ideas.",
  },
  {
    href: "https://ko-fi.com/demonicheinz",
    image: "/images/ko-fi.png",
    label: "Donate!",
    description: "Buy me a coffee to support my work",
  },
];

export function WebsiteLinks() {
  return (
    <div className="w-full">
      <div className="text-lg flex justify-between w-full mb-4">
        <h1 className="tracking-wider">All My Websites</h1>
        <span>( {websiteLinks.length} )</span>
      </div>
      <ul className="space-y-3">
        {websiteLinks.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              target="_blank"
              className="flex items-center space-x-3 p-3 rounded-lg bg-white/10 dark:bg-gray-900/30 backdrop-blur-xl group"
            >
              <div className="relative w-12 h-12 overflow-hidden rounded-full">
                <Image
                  src={link.image || "/placeholder.svg"}
                  alt={link.label}
                  width={50}
                  height={50}
                  className="group-hover:animate-spin"
                  style={{ animationDuration: "4s" }}
                />
              </div>
              <div>
                <div className="font-medium text-lg">{link.label}</div>
                <div className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                  {link.description}
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
