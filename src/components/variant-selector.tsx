"use client";

import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";
import { Button } from "src/components/ui/button";
import { ChevronDown } from "lucide-react";

const variants = [
  { label: "Strength-First", value: "/strength-first" },
  { label: "Statement-Driven", value: "/statement-driven" },
  { label: "Story-Led", value: "/story-led" },
  { label: "Impact Dashboard", value: "/impact-dashboard" },
];

interface VariantSelectorProps {
  currentVariant?: string;
}

export function VariantSelector({
  currentVariant = "/strength-first",
}: VariantSelectorProps) {
  const router = useRouter();
  const current = variants.find((v) => v.value === currentVariant);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm">
          {current?.label || "Select Variant"}
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {variants.map((variant) => (
          <DropdownMenuItem
            key={variant.value}
            onClick={() => router.push(variant.value)}
          >
            {variant.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
