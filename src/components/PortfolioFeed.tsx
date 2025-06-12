import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
} from "lucide-react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import { projects, type Project } from "@/data/portfolioData";

const ProjectCarousel = ({ images }: { images: string[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (emblaApi) {
      const onSelect = () => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
        setCanScrollPrev(emblaApi.canScrollPrev());
        setCanScrollNext(emblaApi.canScrollNext());
      };

      emblaApi.on("select", onSelect);
      onSelect(); // Initial state
    }
  }, [emblaApi]);

  return (
    <div className="space-y-4">
      <div className="relative">
        <div ref={emblaRef} className="overflow-hidden rounded-lg">
          <div className="flex">
            {images.map((image, index) => (
              <div className="relative flex-[0_0_100%]" key={index}>
                <div className="aspect-video">
                  <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/80 shadow-lg hover:bg-gray-700",
            !canScrollPrev && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canScrollPrev}
        >
          <ChevronLeft className="h-4 w-4 text-white" />
        </Button>
        <Button
          variant="secondary"
          size="icon"
          className={cn(
            "absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-gray-800/80 shadow-lg hover:bg-gray-700",
            !canScrollNext && "opacity-50 cursor-not-allowed"
          )}
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canScrollNext}
        >
          <ChevronRight className="h-4 w-4 text-white" />
        </Button>
      </div>

      <div className="flex gap-2 overflow-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative flex-0 min-w-[100px] cursor-pointer overflow-hidden rounded-md border-2 transition-all",
              selectedIndex === index
                ? "border-primary"
                : "border-transparent opacity-70 hover:opacity-100"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
          >
            <div className="aspect-video w-[100px]">
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="mb-8 overflow-hidden rounded-lg border border-gray-700 bg-gray-900 shadow-lg">
      <CardHeader>
        <h3 className="text-2xl font-bold text-gray-100">{project.title}</h3>
      </CardHeader>
      <CardContent className="space-y-6">
        <ProjectCarousel images={project.images} />

        <div className="space-y-4">
          <p className="text-gray-300">{project.summary}</p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="bg-gray-700 text-gray-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {project.githubUrls && project.githubUrls.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.githubUrls.map((url, idx) => (
                <Button
                  key={url}
                  variant="outline"
                  className="border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white"
                  asChild
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {idx === 0 ? "Frontend" : "Backend"}
                  </a>
                </Button>
              ))}
            </div>
          )}

          {project.githubUrl && !project.githubUrls && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="cursor-pointer w-12 h-12 invert bg-white p-2 rounded-full scale-100 hover:scale-110 hover:invert-0 flex transition-all"
                type="button"
                aria-label="Voir sur GitHub"
                style={{ minWidth: "3rem", minHeight: "3rem" }}
              >
                <svg
                  height="28"
                  width="28"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 98 98"
                >
                  <path
                    fill="#000"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                  />
                </svg>
              </button>
            </a>
          )}

          <div
            className={`space-y-4 overflow-hidden transition-all duration-500 ease-in-out ${
              isExpanded ? "max-h-[1000px]" : "max-h-0"
            }`}
          >
            <div className="rounded-lg bg-gray-800/60 p-4 space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-100">Challenge</h4>
                <p className="text-gray-300">{project.details.challenge}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-100">Solution</h4>
                <p className="text-gray-300">{project.details.solution}</p>
              </div>

              <div>
                <h4 className="font-semibold mb-2 text-gray-100">Impact</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-300">
                  {project.details.impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              {project.externalLink && (
                <Button
                  variant="link"
                  className="flex items-center gap-2 text-md text-gray-200 hover:text-white"
                  asChild
                >
                  <a
                    href={project.externalLink.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.externalLink.title}
                  </a>
                </Button>
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            className="w-full text-gray-300 hover:text-white"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? (
              <>
                <ChevronUp className="mr-2 h-4 w-4" /> Afficher moins
              </>
            ) : (
              <>
                <ChevronDown className="mr-2 h-4 w-4" /> Voir plus
              </>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const PortfolioFeed = () => {
  return (
    <section className="relative z-10 min-h-screen bg-gray-950/95 px-4 py-24 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-12 text-center text-4xl font-bold tracking-tight text-gray-100">
          Projets
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFeed;
