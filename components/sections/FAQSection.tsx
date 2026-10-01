"use client";

import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import { ChevronIcon } from "@/components/ui/Icons";
import { faqs } from "@/data/clinic";

/** 자주 묻는 질문 - 클릭하면 답변이 펼쳐지는 아코디언 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-4xl px-5">
        <SectionTitle eyebrow="FAQ" title="자주 묻는 질문" />

        <Reveal className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div
                key={faq.q}
                className={`overflow-hidden rounded-2xl bg-white transition-shadow ${
                  open ? "shadow-[0_8px_24px_rgba(75,33,84,0.1)]" : ""
                }`}
              >
                <h3>
                  <button
                    type="button"
                    id={`faq-q-${i}`}
                    aria-expanded={open}
                    aria-controls={`faq-a-${i}`}
                    onClick={() => setOpenIndex(open ? null : i)}
                    className="flex w-full items-center gap-4 px-5 py-5 text-left md:px-8"
                  >
                    <span className="text-lg font-bold text-berry">Q</span>
                    <span className="flex-1 text-[15px] font-medium text-ink md:text-[17px]">{faq.q}</span>
                    <ChevronIcon
                      className={`h-5 w-5 shrink-0 text-plum-500 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-a-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="mx-5 flex gap-4 border-t border-line pb-6 pt-5 md:mx-8">
                      <span className="text-lg font-bold text-plum-800">A</span>
                      <p className="flex-1 text-[14px] leading-relaxed text-mute md:text-[15px]">{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
