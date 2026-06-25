import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { coursesData } from "@/config/courses";
import { siteConfig } from "@/config/site";
import CourseDetailClient from "./CourseDetailClient";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return coursesData.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const course = coursesData.find((c) => c.id === id);
  if (!course) {
    return {
      title: "Course Not Found",
    };
  }

  const title = `${course.title.en} | ${course.title.ar}`;
  const desc = course.desc.en || course.desc.ar;

  return {
    title: `${title} | Eng. Muhammed Khaled`,
    description: desc,
    openGraph: {
      title: title,
      description: desc,
      url: `${siteConfig.domain}/courses/${course.id}`,
      type: "website",
      images: [
        {
          url: course.image,
          width: 1200,
          height: 630,
          alt: course.title.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: title,
      description: desc,
      images: [course.image],
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const course = coursesData.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return <CourseDetailClient id={id} />;
}
