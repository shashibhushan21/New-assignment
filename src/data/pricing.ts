import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    name: "Foundation",
    price: "₹4,999",
    originalPrice: "₹9,999",
    duration: "21 Days",
    description:
      "Perfect for beginners who want to explore a career in sales.",
    features: [
      "21-day structured curriculum",
      "Access to recorded sessions",
      "Community access",
      "Basic sales toolkit",
      "Certificate of completion",
    ],
    highlighted: false,
    ctaText: "Get Started",
  },
  {
    id: 2,
    name: "Professional",
    price: "₹9,999",
    originalPrice: "₹19,999",
    duration: "21 Days + 30 Days Support",
    description:
      "Ideal for serious learners committed to landing a sales role.",
    features: [
      "Everything in Foundation",
      "Live mentorship sessions",
      "1-on-1 mock interviews",
      "Resume & LinkedIn optimization",
      "Guaranteed placement support",
      "AI practice tool access",
      "Lifetime community access",
    ],
    highlighted: true,
    ctaText: "Enroll Now",
  },
  {
    id: 3,
    name: "Enterprise",
    price: "₹24,999",
    originalPrice: "₹49,999",
    duration: "21 Days + 90 Days Mentorship",
    description:
      "For those targeting enterprise sales roles at top companies.",
    features: [
      "Everything in Professional",
      "Dedicated success manager",
      "Enterprise sales specialization",
      "Direct referrals to top companies",
      "Salary negotiation coaching",
      "90-day post-placement mentoring",
      "Priority support",
      "Money-back guarantee",
    ],
    highlighted: false,
    ctaText: "Apply Now",
  },
];
