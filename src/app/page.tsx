/* eslint-disable @next/next/no-img-element */
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getData } from "@/lib/utils";
import Link from "next/link";
import {
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
  GlobeIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  const data = getData();

  return (
    <main>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-5xl">
                Hey 👋, I&apos;m {data.personalInfo.name}
              </h1>
            </div>
            <p className="max-w-[600px] text-gray-500 dark:text-gray-400">
              {data.personalInfo.bio}
            </p>
            <Button>Get In Touch</Button>
            <div className="flex space-x-4">
              <Button variant="secondary" size="icon">
                <GitHubLogoIcon className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <TwitterLogoIcon className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <LinkedInLogoIcon className="h-4 w-4" />
              </Button>
              <Button variant="secondary" size="icon">
                <EnvelopeClosedIcon className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <img
            src="/placeholder.svg"
            width="600"
            height="600"
            alt="Developer"
            className="mx-auto aspect-square overflow-hidden rounded-xl object-cover object-center sm:w-full"
          />
        </div>
      </section>

      <section className="container max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-12">
          Work Experience
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.workExperience.map((exp) => (
            <div key={exp.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">
                {exp.role} @
                <Link
                  href={exp.companyWebsite}
                  target="_blank"
                  className="ml-2 text-primary"
                >
                  {exp.company}
                </Link>
              </h4>
              <div className="text-gray-500 dark:text-gray-400">
                {exp.startDate} - {exp.endDate}
              </div>
              <div className="mt-2">
                <h6 className="font-medium">Key Responsibilities:</h6>
                <ul className="text-gray-500 text-sm list-disc pl-4">
                  {exp.keyResponsibilities.map((resp) => (
                    <li key={resp}>{resp}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-12">
          My Projects
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:gap-6">
          {data.projects.map((project) => (
            <Card key={project.title} className="flex">
              <img
                src="/placeholder.svg"
                alt="Project 1"
                className="w-1/3 rounded-md object-cover"
              />
              <div className="w-2/3">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="space-x-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{project.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <div className="flex space-x-3">
                    <Link href="#" prefetch={false}>
                      <Button size="sm">
                        <GlobeIcon className="h-3 w-3 mr-2" />
                        Live Demo
                      </Button>
                    </Link>
                    <Link href="#" prefetch={false}>
                      <Button size="sm" variant="outline">
                        <GitHubLogoIcon className="h-3 w-3 mr-2" />
                        Open Repository
                      </Button>
                    </Link>
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="container max-w-4xl mx-auto py-12 md:py-16 lg:py-20">
        <h2 className="font-bold text-3xl sm:text-4xl md:text-5xl mb-12">
          Education
        </h2>
        <div className="relative pl-6 after:absolute after:inset-y-0 after:left-0 after:w-px after:bg-gray-500/20 dark:after:bg-gray-400/20 grid gap-10">
          {data.education.map((ed) => (
            <div key={ed.id} className="grid gap-1 relative">
              <div className="aspect-square w-3 bg-gray-900 rounded-full absolute left-0 translate-x-[-29.5px] z-10 top-2 dark:bg-gray-50" />

              <h4 className="text-xl font-medium">{ed.degree}</h4>
              <h5 className="font-medium">{ed.institution}</h5>
              <div className="text-gray-500 dark:text-gray-400">
                {ed.startDate} - {ed.endDate}
              </div>
              <p className="mt-2 text-sm text-gray-500">{ed.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
