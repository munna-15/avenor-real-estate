import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JournalArticle from "@/components/journal/JournalArticle";
import { journalStories } from "@/components/journal/journal";

type JournalPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return journalStories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;

  const story = journalStories.find((item) => item.slug === slug);

  if (!story) {
    return {
      title: "Journal Story Not Found — AVENOR",
    };
  }

  return {
    title: `${story.title} — AVENOR Journal`,
    description: story.excerpt,
  };
}

export default async function JournalPage({ params }: JournalPageProps) {
  const { slug } = await params;

  const story = journalStories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  return <JournalArticle story={story} />;
}
