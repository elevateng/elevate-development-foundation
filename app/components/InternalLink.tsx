import type { AnchorHTMLAttributes, ReactNode } from "react";

type InternalLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
  children: ReactNode;
};

/**
 * Uses native document navigation so every route works consistently in the
 * hosted site, while preserving the same Link-shaped API throughout the app.
 */
export default function InternalLink({ href, children, ...props }: InternalLinkProps) {
  return (
    <a href={href} {...props}>
      {children}
    </a>
  );
}
