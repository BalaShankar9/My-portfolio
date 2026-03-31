import { Mail } from "lucide-react";
import { GitHubIcon } from "@/components/ui/icons";
import { SOCIAL } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800/50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-600">
          Bala Sankar Bollineni &copy; {new Date().getFullYear()}
        </p>
        <p className="text-sm text-zinc-700">Built with Next.js</p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-zinc-600 hover:text-zinc-400 transition-colors text-sm"
            aria-label="GitHub"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={`mailto:${SOCIAL.email}`}
            className="text-zinc-600 hover:text-zinc-400 transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
