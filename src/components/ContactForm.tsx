import { useState, type FormEvent } from "react";
import Button from "./Button";
import Icon from "./Icon";

// Frontend-only for now. Swap this for a POST to /api/contact once a
// backend is available — the form and validation stay unchanged.
async function submitContactRequest(data: { name: string; phone: string; message: string }) {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return data;
}

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "sent">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    await submitContactRequest({
      name: String(data.get("name") ?? ""),
      phone: String(data.get("phone") ?? ""),
      message: String(data.get("message") ?? ""),
    });
    setStatus("sent");
    form.reset();
  };

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-green-600/15 bg-green-50 p-8 text-center">
        <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-green-600 text-cream">
          <Icon name="mail" className="size-6" />
        </span>
        <h3 className="mt-4 font-display text-lg font-semibold text-green-900">
          Thank you, we&rsquo;ve received your message
        </h3>
        <p className="mt-2 text-sm text-ink-soft">
          For anything urgent, please call us directly at{" "}
          <a href="tel:+919937787999" className="font-semibold text-green-700">
            +91 99377 87999
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 text-sm font-semibold text-gold-600 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="mb-1.5 block text-sm font-semibold text-green-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full rounded-xl border border-green-600/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="phone" className="mb-1.5 block text-sm font-semibold text-green-900">
          Phone Number
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          required
          autoComplete="tel"
          className="w-full rounded-xl border border-green-600/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-semibold text-green-900">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full rounded-xl border border-green-600/20 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-600/20"
          placeholder="How can we help?"
        />
      </div>

      <Button type="submit" icon="mail" className="w-full sm:w-auto">
        {status === "submitting" ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
