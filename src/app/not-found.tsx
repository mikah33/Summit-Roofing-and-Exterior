import Link from "next/link";
import { LogoIcon } from "@/components/logo";
import { CTAButton, PhoneButton } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="flex min-h-svh items-center justify-center bg-navy px-4 py-32">
      <div className="max-w-lg text-center">
        <LogoIcon color="white" className="mx-auto h-20 w-20 opacity-90" />
        <p className="mt-8 font-heading text-7xl font-extrabold text-white">
          404
        </p>
        <h1 className="mt-3 text-2xl font-bold text-white">
          Looks like this page blew off in the storm.
        </h1>
        <p className="mt-3 leading-relaxed text-slate-300">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
          Unlike missing shingles, this one&rsquo;s an easy fix.
        </p>
        <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
          <CTAButton href="/">Back to Home</CTAButton>
          <PhoneButton />
        </div>
        <p className="mt-8 text-sm text-slate-400">
          Or head straight to a{" "}
          <Link href="/contact" className="font-semibold text-accent underline-offset-4 hover:underline">
            free inspection request
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
