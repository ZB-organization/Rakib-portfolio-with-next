"use client";

import { useFilter } from "@/context/FilterContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

export default function PlatformURLSync() {
  const { platform } = useFilter();
  const router = useRouter();
  const pathname = usePathname();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const params = new URLSearchParams(window.location.search);

    if (params.get("platform") !== platform) {
      params.set("platform", platform);
      router.replace(`${pathname}?${params.toString()}`, {
        scroll: false,
      });
    }
  }, [platform, pathname, router]);

  return null;
}
