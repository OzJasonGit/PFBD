"use client";

import { useTheme } from "../Context/ThemeContext";
import Footer from "./Footer";

export default function FooterWrapper() {
  const { theme } = useTheme();
  return <Footer theme={theme} />;
}

