import React from "react";
import type { Metadata } from "next";
import CoursesClient from "./CoursesClient";

export const metadata: Metadata = {
  title: "Professional Coding Courses & Web Dev Workshops | Eng. Muhammed Khaled",
  description: "Join practical, hands-on programming courses and web development bootcamps taught by senior software engineer Eng. Muhammed Khaled. Learn React, Next.js, and frontend technologies.",
  keywords: [
    "Muhammed Khaled courses",
    "software development course Egypt",
    "React workshop Cairo",
    "learn Next.js Arabic",
    "كورس برمجة",
    "ورشة عمل ريأكت"
  ],
};

export default function CoursesPage() {
  return <CoursesClient />;
}
