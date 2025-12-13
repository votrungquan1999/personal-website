"use client";

import { Mail, Phone, Github, Linkedin } from "lucide-react";
import Link from "next/link";
import { Button } from "src/components/ui/button";
import type { ContactInfo } from "src/data/resume";

interface V1HeroUIProps {
  name: string;
  contact: ContactInfo;
}

export function V1HeroUI({ name, contact }: V1HeroUIProps) {
  return (
    <header className="mb-12">
      <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
        <div>
          <h1 className="text-4xl font-bold max-md:text-3xl">{name}</h1>
          <p className="text-xl text-muted-foreground mt-2 max-md:text-lg">
            Product Engineer & Problem Solver
          </p>
        </div>

        <div className="flex gap-2 max-md:flex-wrap">
          <Button variant="outline" size="sm" asChild>
            <Link href={`mailto:${contact.email}`}>
              <Mail className="w-4 h-4" />
              <span className="sr-only">Email</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`tel:${contact.phone}`}>
              <Phone className="w-4 h-4" />
              <span className="sr-only">Phone</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`https://${contact.github}`} target="_blank">
              <Github className="w-4 h-4" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link href={`https://${contact.linkedin}`} target="_blank">
              <Linkedin className="w-4 h-4" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/resume.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
