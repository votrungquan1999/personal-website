/**
 * Technology icon mappings using lucide-react icons
 * Maps technology names to their corresponding icon components
 */

import type { LucideIcon } from "lucide-react";
import {
  Box,
  CircleDot,
  Cloud,
  Code,
  Cpu,
  Database,
  FileCode,
  GitBranch,
  Globe,
  Layers,
  Server,
  Smartphone,
  Terminal,
  Webhook,
  Zap,
} from "lucide-react";

/**
 * Technology icon mapping
 * Maps technology names to lucide-react icon components
 */
export const techIcons: Record<string, LucideIcon> = {
  // Frontend
  React: Code,
  "Next.js": Globe,
  TypeScript: FileCode,
  "Tailwind CSS": Layers,
  JavaScript: Code,

  // Backend
  Go: Terminal,
  "Node.js": Server,
  "REST APIs": Webhook,
  GraphQL: CircleDot,

  // Databases
  "SQL Databases": Database,
  "NoSQL Databases": Database,
  MongoDB: Database,
  MySQL: Database,
  Firestore: Cloud,

  // Tools & Services
  "CI/CD workflows": GitBranch,
  "Mobile Development": Smartphone,

  // UI Libraries
  "Radix UI": Box,
  "Shadcn UI": Box,
  "Ant Design": Box,

  // General
  Default: Cpu,
};

/**
 * Returns the icon component for a given technology name
 * @param techName - The name of the technology
 * @returns The corresponding icon component or Default icon
 */
export function getTechIcon(techName: string): LucideIcon {
  return techIcons[techName] || techIcons.Default;
}

/**
 * Returns the icon component for a project type
 * @param projectName - The name of the project
 * @returns The corresponding icon component based on project type
 */
export function getProjectIcon(projectName: string): LucideIcon {
  const name = projectName.toLowerCase();

  if (name.includes("portal") || name.includes("dashboard")) {
    return Globe;
  }
  if (name.includes("match") || name.includes("fitting")) {
    return Zap;
  }
  if (name.includes("tool") || name.includes("scan")) {
    return Terminal;
  }
  if (name.includes("task") || name.includes("management")) {
    return Layers;
  }
  if (name.includes("inventory")) {
    return Database;
  }

  return Box;
}
