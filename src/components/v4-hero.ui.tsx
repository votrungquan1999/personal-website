import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import type { ContactInfo } from "src/data/resume";

interface V4HeroUIProps {
  name: string;
  title: string;
  contact: ContactInfo;
}

export function V4HeroUI({ name, title, contact }: V4HeroUIProps) {
  return (
    <section className="mb-12 max-md:mb-10">
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
        {/* Name and title */}
        <div>
          <h1 className="text-4xl font-bold text-foreground mb-2 max-lg:text-3xl max-md:text-2xl">
            {name}
          </h1>
          <p className="text-xl text-muted-foreground max-lg:text-lg max-md:text-base">
            {title}
          </p>
        </div>

        {/* Contact and actions */}
        <div className="flex flex-col gap-3 max-md:w-full">
          <Button size="sm" asChild>
            <Link href="/resume.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
          <div className="flex flex-wrap gap-3 text-sm text-muted-foreground max-md:text-xs">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Mail className="size-3.5" />
              <span className="max-sm:hidden">Email</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Phone className="size-3.5" />
              <span className="max-sm:hidden">Phone</span>
            </a>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Github className="size-3.5" />
              <span className="max-sm:hidden">GitHub</span>
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-foreground transition-colors"
            >
              <Linkedin className="size-3.5" />
              <span className="max-sm:hidden">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
