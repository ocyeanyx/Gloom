import Container from "@/components/container";
import { ImageComponent } from "@/components/image";
import { TextScroll } from "@/components/ui/text-scroll";
import { Book, Info } from "lucide-react";
import { Metadata } from "next";
import CuteImage from "@/assets/img/cute.jpg";
import type { WebPage, WithContext } from "schema-dts";

export const metadata: Metadata = {
  title: "Blog",
  description: "Write stuff and things.",
  openGraph: {
    title: "Blog",
    description: "Write stuff and things.",
  },
};

export default function About() {
  const jsonLd: WithContext<WebPage> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Blog",
    alternateName: "realm. | Blog",
    mainEntityOfPage: "https://thesonofnyx.vercel.app/blog",
    description: "Write stuff and things.",
    url: "https://thesonofnyx.vercel.app/blog",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Landing",
          item: "https://thesonofnyx.vercel.app/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "https://thesonofnyx.vercel.app/about",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Blog",
          item: "https://thesonofnyx.vercel.app/blog",
        },
      ],
    },
  };

  return (
    <>
      <Container>
        <div className="relative rounded-lg overflow-clip">
          <ImageComponent
            img={CuteImage}
            alt="Awoo"
            className="w-full relative max-h-96 z-10 rounded-lg"
            innerClassName="md:-translate-y-8"
            height={720}
          />
          <p className="z-20 md:w-fit w-3/4 text-center font-bold absolute bottom-3 left-1/2 rounded-full -translate-x-1/2 px-7 py-3 font-doto bg-background/80 text-foreground md:text-xl backdrop-blur-lg">
            ALL POSTS
          </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Book className="size-4" />
            <span className="text-sm font-mono">DETAILS.md</span>
          </h2>
            <p className="px-5 py-3">
            In case you&apos;re wondering—yeah, I write. Sometimes it&apos;s deep, sometimes it&apos;s dumb, sometimes it&apos;s just me trying to get the voices in my head to chill. You&apos;ll find rambles, rants, <span className="line-through">a few backshots</span>, unhinged thoughts, and whatever else my brain throws at me. Could be random, could be genius. Who knows? Not me.
            </p>
        </div>
        <div className="w-full bg-background rounded-lg border border-border">
          <h2 className="w-full flex items-center gap-3 text-muted-foreground px-5 py-3 border-b border-border">
            <Info className="size-4" />
            <span className="text-sm font-mono">NOTICE.md</span>
          </h2>
          <p className="px-5 py-3">
            This page is currently under heavy development. Please check again
            later. Otherwise you can try visiting other pages since what can you
            do anyways here.
          </p>
        </div>
      </Container>
      <TextScroll
        className="text-5xl md:text-7xl text-muted-foreground/50 dark:font-semibold font-bold py-24 md:space-y-2"
        textClassName="py-1 md:py-3 font-doto"
        default_velocity={0.66}
        text="AGES AND AGES LATER AND I&apos;M STILL WRITING RANDOM SHIT."
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </>
  );
}
