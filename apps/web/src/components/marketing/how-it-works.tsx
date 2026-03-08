import { Bell, Globe, Monitor } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Add your monitors",
    description:
      "Connect your websites and APIs in seconds. Set your check frequency and regions.",
    icon: Monitor,
  },
  {
    number: 2,
    title: "Get notified instantly",
    description:
      "Receive alerts via email, Slack, or SMS the moment downtime is detected.",
    icon: Bell,
  },
  {
    number: 3,
    title: "Share your status",
    description:
      "Publish a beautiful public status page to keep your users informed.",
    icon: Globe,
  },
];

export function HowItWorks() {
  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        {/* Header */}
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-cal text-3xl tracking-tight text-foreground md:text-4xl">
            How it works
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Get started with OpenStatus in three simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connecting line */}
          <div
            className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 md:block"
            aria-hidden="true"
          >
            <div className="mx-auto flex max-w-3xl items-center justify-between px-16">
              <div className="h-px flex-1 border-t-2 border-dashed border-border" />
              <div className="mx-4 text-muted-foreground/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <div className="h-px flex-1 border-t-2 border-dashed border-border" />
              <div className="mx-4 text-muted-foreground/50">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
              <div className="h-px flex-1 border-t-2 border-dashed border-border" />
            </div>
          </div>

          {/* Cards */}
          <div className="relative grid gap-6 md:grid-cols-3 md:gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group relative flex flex-col items-center rounded-none border border-border bg-background p-6 text-center transition-colors hover:bg-accent/50"
              >
                {/* Number badge */}
                <div className="absolute -top-3 left-4 flex h-6 w-6 items-center justify-center bg-foreground text-xs font-semibold text-background">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="mb-4 flex h-12 w-12 items-center justify-center border border-border bg-muted">
                  <step.icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Title */}
                <h3 className="mb-2 font-mono text-lg font-medium text-foreground">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
