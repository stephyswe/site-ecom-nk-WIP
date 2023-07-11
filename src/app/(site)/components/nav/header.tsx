"use client";

import { useRef } from "react";
import { useScroll } from "react-use";

import { Banner } from "@/app/(site)/components/nav/banner";
import { MenuComponent } from "@/app/(site)/components/nav/megamenu";
import { TopNav } from "@/app/(site)/components/nav/topnav";
import { cn } from "@/lib/utils";
import useMenuState from "@/zustand/useMenu";

export const Header = () => {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);
  console.log(x, y);

  const { isOpen } = useMenuState();
  const activeMenu = isOpen === "Hem" ? true : false;
  return (
    <header>
      <div className="e">
        {activeMenu && (
          <div
            className="mn g h j lw i ae s mo"
            style={{ opacity: "0.25", zIndex: 7 }}
          />
        )}
        <div className="e mr m6">
          <div className="mk" />
          <div className={cn("g h i j b c", activeMenu ? "mp" : "k")}>
            <div className="l m n o">
              <Banner />
              <TopNav />
            </div>
            <MenuComponent />
          </div>
          <noscript>
            Det verkar inte som att din webbläsare har JavaScript aktiverat
            vilket behövs för att använda den här siten
          </noscript>
        </div>
      </div>
    </header>
  );
};
