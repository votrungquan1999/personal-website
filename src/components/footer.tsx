import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <div className="flex gap-4">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-foreground transition-colors"
          >
            Portfolio
          </Link>
        </div>
        <p>© {new Date().getFullYear()} Quan Vo. All rights reserved.</p>
      </div>
    </footer>
  );
}
