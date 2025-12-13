"use client";

import Link from "next/link";
import { Download, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "src/components/ui/button";

interface V2HeroUIProps {
  name: string;
  statement: string;
  taglines: string[];
  contact: {
    email: string;
    phone: string;
    github: string;
    linkedin: string;
  };
}

export function V2HeroUI({ name, statement, taglines, contact }: V2HeroUIProps) {
  return (
    <section className="mb-20 max-md:mb-16">
      {/* Name */}
      <div className="mb-8 max-md:mb-6">
        <h1 className="text-2xl font-semibold text-foreground max-md:text-xl">
          {name}
        </h1>
      </div>

      {/* Bold Statement */}
      <div className="mb-12 max-lg:mb-10 max-md:mb-8">
        <h2 className="text-6xl font-bold text-foreground leading-tight max-xl:text-5xl max-lg:text-4xl max-md:text-3xl">
          {statement}
        </h2>
      </div>

      {/* Taglines */}
      <div className="mb-12 max-md:mb-10">
        <p className="text-2xl text-muted-foreground max-lg:text-xl max-md:text-lg">
          {taglines.join(" • ")}
        </p>
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap gap-3 max-md:gap-2">
        <Button
          asChild
          variant="outline"
          size="default"
          className="shadow-sm"
        >
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center gap-2"
          >
            <Mail className="size-4" />
            Email
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="default"
          className="shadow-sm"
        >
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2"
          >
            <Phone className="size-4" />
            Phone
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="default"
          className="shadow-sm"
        >
          <a
            href={`https://${contact.github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Github className="size-4" />
            GitHub
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="default"
          className="shadow-sm"
        >
          <a
            href={`https://${contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Linkedin className="size-4" />
            LinkedIn
          </a>
        </Button>
        <Button
          asChild
          variant="outline"
          size="default"
          className="shadow-sm"
        >
          <Link
            href="/resume.pdf"
            download
            className="flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download className="size-4" />
            Resume
          </Link>
        </Button>
      </div>
    </section>
  );
}
