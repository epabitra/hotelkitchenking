import { faqs } from "../data/faq";
import FAQItem from "./FAQItem";

export default function FAQAccordion() {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <FAQItem key={faq.question} faq={faq} defaultOpen={index === 0} />
      ))}
    </div>
  );
}
