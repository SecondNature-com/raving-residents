"use client";
import { useEffect } from "react";
import { setBrandingCookie } from "@/lib/server-actions";
import type { Branding } from "@/lib/second-nature-types";

interface BrandingHandlerProps {
  branding: Branding;
}

export function BrandingHandler({ branding }: BrandingHandlerProps) {
  useEffect(() => {
    // Set the branding cookie on the client via server action
    setBrandingCookie(branding);
  }, [branding]);
  return null;
}
