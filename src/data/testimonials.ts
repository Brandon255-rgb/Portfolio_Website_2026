export type Testimonial = {
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  project: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Marcus Thompson",
    role: "Owner",
    company: "Thompson's Auto Repair",
    avatar: "/images/testimonials/sarah.svg",
    content: "Brandon built us a custom customer management system that's been a game changer. Appointment scheduling is automated, and our customer database is finally organized. Worth every penny and he explained everything in plain English.",
    rating: 5,
    project: "Business Management App"
  },
  {
    name: "Jennifer Lee",
    role: "Founder",
    company: "Bella Rosa Salon",
    avatar: "/images/testimonials/emily.svg",
    content: "The booking website Brandon created has completely transformed how we handle appointments. Clients love the online booking, and we've seen a 35% increase in bookings since launch. Professional work at a fair price.",
    rating: 4.5,
    project: "Salon Booking System"
  },
  {
    name: "David Okonkwo",
    role: "Managing Director",
    company: "Okonkwo Legal Services",
    avatar: "/images/testimonials/michael.svg",
    content: "Working with Brandon on our AI chatbot integration was excellent. The chatbot handles initial client inquiries 24/7, and the fine-tuned responses are surprisingly accurate for legal questions. Great communication throughout the project.",
    rating: 5,
    project: "AI Legal Assistant Chatbot"
  },
  {
    name: "Rachel Foster",
    role: "CEO",
    company: "Foster Financial Planning",
    avatar: "/images/testimonials/lisa.svg",
    content: "Brandon developed a React-based client portal that our advisors use daily. Clean interface, reliable performance, and he was patient with our feedback. The dashboard makes tracking portfolios much more efficient.",
    rating: 4.5,
    project: "Client Portal Dashboard"
  },
  {
    name: "Ahmed Hassan",
    role: "Operations Manager",
    company: "QuickShip Logistics",
    avatar: "/images/testimonials/james.svg",
    content: "The custom fine-tuned model Brandon built for routing optimization has saved us hours of manual work. It learns from our delivery patterns and suggests better routes. Solid technical skills and delivered on time.",
    rating: 4,
    project: "Fine-Tuned Routing Model"
  },
  {
    name: "Patricia Morrison",
    role: "Director",
    company: "Morrison Medical Clinic",
    avatar: "/images/testimonials/david.svg",
    content: "Brandon created a patient management system that integrates perfectly with our workflow. The React frontend is intuitive for our staff, and the backend handles all our records securely. Highly recommend for healthcare projects.",
    rating: 4.5,
    project: "Healthcare Management System"
  },

];

export default testimonials;
