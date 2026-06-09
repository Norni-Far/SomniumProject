"use client";

import { Dictionary } from "@/i18n/LangProvider";
import { FormEvent, useState } from "react";
import { ActionButton } from "./ui/Button";
import { Section } from "./ui/Section";
import { siteConfig } from "@/data/siteConfig";

type ContactsProps = {
  dict: Dictionary;
};

type Status = "idle" | "sending" | "success" | "error";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const allowedTypes = [
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const budgetOptions = [
  "up to $5k",
  "$5k-$15k",
  "$15k+",
  "let's discuss",
];

export function Contacts({ dict }: ContactsProps) {
  const [status, setStatus] = useState<Status>("idle");
  const [fileError, setFileError] = useState("");

  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("idle");
    setFileError("");

    const form = event.currentTarget;
    const fileInput = form.elements.namedItem("attachment") as HTMLInputElement | null;
    const file = fileInput?.files?.[0];

    if (file) {
      const validType = allowedTypes.includes(file.type);
      if (!validType || file.size > MAX_FILE_SIZE) {
        setFileError(dict.contacts.fileError);
        return;
      }
    }

    if (!endpoint) {
      setStatus("error");
      return;
    }

    const formData = new FormData(form);

    try {
      setStatus("sending");
      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form request failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <Section id="contacts" title={dict.contacts.title} subtitle={dict.contacts.lead}>
      <div className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <form className="space-y-4 rounded-2xl border border-border bg-surface p-5" onSubmit={handleSubmit}>
          <label className="block text-sm">
            {dict.contacts.contactLabel}
            <input
              name="contact"
              required
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 outline-none focus:border-primary"
              placeholder={dict.contacts.contactPlaceholder}
            />
          </label>
          <label className="block text-sm">
            {dict.contacts.taskLabel}
            <textarea
              name="task"
              required
              rows={5}
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 outline-none focus:border-primary"
              placeholder={dict.contacts.taskPlaceholder}
            />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              {dict.contacts.budgetLabel}
              <select
                name="budget"
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 outline-none focus:border-primary"
                defaultValue={budgetOptions[3]}
              >
                {budgetOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              {dict.contacts.timelineLabel}
              <input
                name="timeline"
                className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 outline-none focus:border-primary"
                placeholder={dict.contacts.timelinePlaceholder}
              />
            </label>
          </div>
          <label className="block text-sm">
            {dict.contacts.fileLabel}
            <input
              name="attachment"
              type="file"
              accept=".pdf,.doc,.docx"
              className="mt-1 w-full rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary"
            />
          </label>
          {fileError ? <p className="text-sm text-error">{fileError}</p> : null}
          {status === "success" ? <p className="text-sm text-secondary">{dict.contacts.success}</p> : null}
          {status === "error" ? <p className="text-sm text-error">{dict.contacts.error}</p> : null}
          <ActionButton type="submit" disabled={status === "sending"}>
            {status === "sending" ? dict.contacts.sending : dict.contacts.submit}
          </ActionButton>
        </form>

        <div className="rounded-2xl border border-border bg-surface p-5">
          <p className="font-medium">Telegram</p>
          <a href={siteConfig.telegram} className="mt-1 block text-primary hover:underline">
            @DorniParser
          </a>
          <p className="mt-5 font-medium">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-1 block break-all text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
      </div>
    </Section>
  );
}
