"use client";

import { useState, type FormEvent } from "react";
import { Typography } from "@/components/atoms/Typography";
import { Input, Textarea } from "@/components/atoms/Input";
import { Button } from "@/components/atoms/Button";
import { ContactLink } from "@/components/molecules/ContactLink";
import { Icon } from "@/components/atoms/Icon";
import { SOCIAL_LINKS, CONTACT_EMAIL, SITE_OWNER, FORMSPREE_ENDPOINT } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("submitting");

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setFormState("error");
    }
  };

  const handleChange = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <main className="flex-grow pt-32 pb-section px-gutter">
      <div className="w-full max-w-container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center gap-12">
          <div className="flex flex-col gap-6">
            <Typography variant="h1">
              {SITE_OWNER.aboutHeadline.split("exceptional")[0]}
              <span className="text-primary-container">exceptional.</span>
            </Typography>
            <Typography variant="body-lg">{SITE_OWNER.aboutSubtitle}</Typography>
          </div>

          <div className="flex flex-col gap-6">
            <Typography variant="h3">Connect</Typography>
            <ContactLink href={`mailto:${CONTACT_EMAIL}`} label={CONTACT_EMAIL} icon="mail" />
            {SOCIAL_LINKS.slice(0, 2).map((link) => (
              <ContactLink key={link.label} href={link.href} label={link.label} icon={link.icon} />
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low border border-subtle rounded-xl p-card">
          {formState === "success" ? (
            <div className="flex flex-col items-center justify-center h-full gap-6 py-16">
              <div className="w-16 h-16 rounded-full bg-primary-container/10 border border-primary-container/30 flex items-center justify-center">
                <Icon name="check_circle" size="lg" className="text-primary-container" fill={1} />
              </div>
              <div className="text-center flex flex-col gap-2">
                <Typography variant="h3">Message Sent!</Typography>
                <Typography variant="body-md">{"Thanks for reaching out. I'll get back to you soon."}</Typography>
              </div>
              <Button
                variant="secondary"
                onClick={() => {
                  setFormState("idle");
                  setFormData({ name: "", email: "", message: "" });
                }}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <Input
                id="name"
                name="name"
                label="Name"
                type="text"
                placeholder="Ahmed Mohamed"
                required
                value={formData.name}
                onChange={handleChange("name")}
                disabled={formState === "submitting"}
              />
              <Input
                id="email"
                name="email"
                label="Email"
                type="email"
                placeholder="ahmed@example.com"
                required
                value={formData.email}
                onChange={handleChange("email")}
                disabled={formState === "submitting"}
              />
              <Textarea
                id="message"
                name="message"
                label="Message"
                placeholder="How can I help you?"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange("message")}
                disabled={formState === "submitting"}
              />
              {formState === "error" && (
                <Typography variant="body-md" className="text-error">
                  Something went wrong. Please try again.
                </Typography>
              )}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                isFullWidth
                disabled={formState === "submitting"}
                className="mt-4"
              >
                {formState === "submitting" ? (
                  <>
                    <Icon name="progress_activity" size="sm" className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Icon name="send" size="sm" />
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}

export { ContactForm };
