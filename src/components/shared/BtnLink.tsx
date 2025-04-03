interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 outline-none relative rounded-full overflow-hidden border border-violet-700 dark:bg-violet-600 cursor-pointer transform transition duration-300  ${className}`}
    >
      <span className="relative text-white">{text}</span>
    </a>
  );
};
