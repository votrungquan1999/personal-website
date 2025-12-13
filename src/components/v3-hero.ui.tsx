import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import type { ContactInfo } from "src/data/resume";

interface V3HeroUIProps {
  name: string;
  introduction: string;
  contact: ContactInfo;
}

export function V3HeroUI({ name, introduction, contact }: V3HeroUIProps) {
  return (
    <section className="mb-16 max-md:mb-12">
      <div className="space-y-6">
        {/* Name */}
        <div>
          <h1 className="text-5xl font-bold text-foreground mb-6 max-lg:text-4xl max-md:text-3xl">
            {name}
          </h1>

          {/* Narrative introduction */}
          <p className="text-xl text-card-foreground leading-relaxed max-lg:text-lg max-md:text-base">
            {introduction}
          </p>
        </div>

        {/* Contact and Actions */}
        <div className="flex flex-wrap items-center gap-6 pt-4 max-md:gap-4">
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground max-md:text-xs">
            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Mail className="size-4" />
              <span className="max-sm:hidden">{contact.email}</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Phone className="size-4" />
              <span className="max-sm:hidden">{contact.phone}</span>
            </a>
            <a
              href={`https://${contact.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Github className="size-4" />
              <span className="max-sm:hidden">GitHub</span>
            </a>
            <a
              href={`https://${contact.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-foreground transition-colors"
            >
              <Linkedin className="size-4" />
              <span className="max-sm:hidden">LinkedIn</span>
            </a>
          </div>

          <Button size="sm" asChild className="ml-auto max-md:ml-0">
            <Link href="/resume.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
