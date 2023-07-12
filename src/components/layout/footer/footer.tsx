"use client";

import { FooterBottom } from "@/components/layout/footer/footer-bottom";
import { FooterForm } from "@/components/layout/footer/footer-form";
import { FooterMobile } from "@/components/layout/footer/mobile/footer-mobile";
import useWindowSizeState from "@/zustand/useWindowSize";

export const Footer = () => {
  const { isMobile } = useWindowSizeState();
  return (
    <footer>
      <div className="kx u s"></div>
      <FooterForm />
      <div className="kx u s"></div>
      {isMobile ? <FooterMobile /> : <FooterBottom />}
    </footer>
  );
};
