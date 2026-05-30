"use client";

import { useState } from "react";
import { programs } from "@/lib/site-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AnimateInView } from "@/components/ui/animate-in-view";

const MIN_AGE_MONTHS = 30;

export function ProgramMatcher() {
  const [age, setAge] = useState("");
  const [result, setResult] = useState<(typeof programs)[0] | null>(null);
  const [tooYoung, setTooYoung] = useState(false);

  const matchProgram = () => {
    const months = parseInt(age, 10);
    if (isNaN(months)) return;

    if (months < MIN_AGE_MONTHS) {
      setTooYoung(true);
      setResult(null);
      return;
    }

    setTooYoung(false);
    if (months < 48) setResult(programs[0]);
    else setResult(programs[1]);
  };

  return (
    <AnimateInView>
      <Card className="max-w-xl mx-auto">
        <h3 className="font-serif text-2xl text-charcoal mb-2 text-center">
          Which Program Is Right for My Child?
        </h3>
        <p className="text-charcoal/70 text-sm text-center mb-6">
          Enter your child&apos;s age in months. We enroll children ages 2.5 and up.
        </p>
        <div className="flex gap-3">
          <input
            type="number"
            min={MIN_AGE_MONTHS}
            max="72"
            placeholder="Age in months (30+)"
            value={age}
            onChange={(e) => {
              setAge(e.target.value);
              setResult(null);
              setTooYoung(false);
            }}
            className="flex-1 px-4 py-3 rounded-xl border border-birch bg-white focus:outline-none focus:ring-2 focus:ring-sage/50"
            aria-label="Child's age in months"
          />
          <Button onClick={matchProgram} variant="secondary">
            Find Program
          </Button>
        </div>
        {tooYoung && (
          <div className="mt-6 p-4 bg-amber/10 rounded-xl text-center">
            <p className="text-charcoal/80 text-sm leading-relaxed">
              Birch Learning Academy currently enrolls children starting at age 2.5.
              Please check back when your child is closer to 30 months, or{" "}
              <a href="/contact" className="text-sage font-medium hover:underline">
                contact us
              </a>{" "}
              to join our interest list.
            </p>
          </div>
        )}
        {result && (
          <div className="mt-6 p-4 bg-sage/10 rounded-xl text-center">
            <p className="text-sm text-sage font-medium mb-1">Recommended Program</p>
            <p className="font-serif text-xl text-charcoal mb-1">{result.name}</p>
            <p className="text-sm text-charcoal/70 mb-3">{result.ageRange}</p>
            <Button href={`/programs/${result.slug}`} size="sm">
              Learn More
            </Button>
          </div>
        )}
      </Card>
    </AnimateInView>
  );
}
