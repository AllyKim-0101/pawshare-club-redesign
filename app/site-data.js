export const faqItems = [
  {
    question: "How can I ensure other dog lovers are a good fit for me and my dog?",
    blocks: [
      { type: "list", items: [
        "Every member creates a detailed profile on pawshare club, where you can read about each dog's behavior, size, care needs, and personality.",
        "Highly recommend setting up multiple coffee or brunch meetups, or even going on walks together. This way, you can get to know the other pawrents (& dog lovers) and their dog’s personality before committing to long term pet sittings",
      ] },
    ],
  },
  {
    question: "How do you ensure trust and safety within the community?",
    blocks: [
      { type: "paragraph", text: "To ensure everyone’s safety, we enforce a zero-tolerance policy:" },
      { type: "list", items: [
        "If someone behaves inappropriately, users can easily report, which could result in their removal from the platform.",
        "Members get asked to complete a short pet care safety course & quiz, and upload their ID or linkedin profile (only visible to admin) to help build trust and ensure the safety of our members.",
        "We have a review system to build trust",
      ] },
    ],
  },
  {
    question: "My first time handling multiple dogs. Any tips?",
    blocks: [
      { type: "paragraph", text: "Test their compatibility with a playdate is a must." },
      { type: "heading", text: "Tips for walking multiple dogs:" },
      { type: "list", items: ["Use strong, tangle-free leashes or halti", "Choose quiet routes and keep walks calm."] },
      { type: "heading", text: "Tips for pet sitting multiple dogs:" },
      { type: "list", items: ["Monitor play and separate if dogs get too excited. Regular breaks teach them to settle down often.", "Set clear boundaries and supervise closely."] },
    ],
  },
  {
    question: "Can I join even if I don’t have a dog?",
    blocks: [
      { type: "paragraph", text: "Absolutely! You can borrow a dog for walks or playdates, and if you're working toward a dog training certificate, it’s a fantastic way to gain hands-on experience with different dogs. Plus, you might connect with other dog lovers who don’t have a dog yet but are interested in sharing pet duties, even before getting one of your own!" },
    ],
  },
  {
    question: "Can I still join even if my dog is has a serious behaviour issue? ",
    blocks: [
      { type: "paragraph", text: "No, for everyone's safety, dogs with serious behavior issues should not join the community until their behavior is improved. There are many facebook groups, professional trainers that you can still post questions and seek advice from others on how to help your dog." },
    ],
  },
  {
    question: "I’m not sure if I’m knowledgeable enough about dog care or fully ready to join the dog lover’s social community.",
    blocks: [
      { type: "paragraph", text: "Take this fun quiz to test your knowledge! Try it here: https://bot-beta.andaihub.com/pawshare-club-bot" },
      { type: "paragraph", text: "Not sure about some answers? It’s a great opportunity to see if you’re ready to join the pet care community and learn something new." },
      { type: "paragraph", text: "Check out this resource on dog care and welfare: https://agriculture.vic.gov.au/livestock-and-animals/animal-welfare-victoria/dogs/results-from-the-petcare-practices-research-into-the-welfare-needs-of-dogs" },
    ],
  },
  {
    question: "Why does Pawshare Club charge a fee if it’s a community-driven platform?",
    blocks: [
      { type: "paragraph", text: "Pawshare Club is built to support dog lovers like you—helping each other reduce the financial and emotional stress of pet care. While the spirit of the platform is community-driven, there are real costs involved in keeping it running securely and smoothly, including technology, support, and outreach." },
      { type: "paragraph", text: "Your contribution helps cover these costs and ensures we can keep improving the platform to better serve our members. We aim to keep our fees as low as possible—significantly more affordable than traditional pet-sitting services—so more people can access reliable, trustworthy support." },
      { type: "paragraph", text: "By subscribing, you’re not just accessing a service—you’re helping build a caring, sustainable community for pet lovers." },
    ],
  },
  {
    question: "How does the point system work?",
    blocks: [
      { type: "paragraph", text: "We have a fair exchange system that rewards members for helping others with pet sitting/walking in the community. We use the same points to get help. We use reward points instead of money.  Points have no monetary value and cannot be redeemed for cash. Check out https://www.pawshareclub.com/how-points-work" },
    ],
  },
];

export const sitePages = {
  about: { title: "About Pawshare", lead: "Pawshare Club begins with pet care, but our deeper purpose is human connection. We are a community-driven platform that brings local pet owners and animal lovers together through shared pet sitting, dog walking and playdates.", sections: ["These practical acts of support make pet care more accessible but they also create something many people are missing: trusted, meaningful connections within their local community."] },
  events: { title: "Our Upcoming Events", lead: "first Saturday of every month - Melbourne City", sections: ["Limited spots!", "Previous Events (60+ events)"] },
  "neighbourhood-dog-walking-challenge": { title: "Australia's neighbourhood dog walking challenge", lead: "Paws & People is Australia's neighbourhood dog walking challenge from 10th of July and 10th of August in 2026.", sections: ["Getting active is easier when you're not doing it alone.", "We believe a dog walk is one of the most underrated tools for human connection."] },
  blog: { title: "Pawshare Club Blog", lead: "Stories, pet care tips and community news for dog lovers.", sections: ["Australia's neighbourhood dog walking challenge from July to August 2926", "How to Build Bulletproof Trust with Your Pet Sitter Before You Pack Your Bags", "Winter 2026 Pet Events: The Perfect Way to Celebrate Community and Our Furry Companions"] },
  pricing: { title: "Pricing", lead: "Basic A$0/month. For getting started or occasional use (was $5).", sections: ["Create a profile", "Message other members", "Book pet care", "Enjoy 30 welcome pet care points - one-time bonus!", "Premium A$30 A$19/month. Perfect for active community members periodically."] },
  "referral-bonus": { title: "Invite a friend to Pawshare Club - you’ll both earn 20 bonus points each.", lead: "Points can be used for a free pet sit from our members", sections: ["20 points = 2 x dog walking or 1 x day/night care from our follow members.", "Both the referrer and the person being referred must: Create an account on Pawshare Club. Complete their profile."] },
  "get-a-referral-bonus": { title: "Referral Bonus", lead: "Invite a friend to Pawshare Club - you’ll both earn 20 bonus points each.", sections: ["Points can be used for a free pet sit from our members."] },
  "join-rewards-challenges": { title: "Convert your reward points into vouchers", lead: "Book a Pet Sit, Boarding or Dog Walk and Convert Points into Vouchers.", sections: ["Every time you book or host a pet sit, boarding, or dog walk through the Pawshare system, and leave a review, you earn Reward Points.", "2. Playdate Challenge (Social Tagging)"] },
  "how-points-work": { title: "How Points Work", lead: "A fair exchange system that rewards members for helping others in the community.", sections: ["Start your journey by either offering help to earn points or using your welcome points to receive care - the choice is yours!", "The same points apply whether you’re helping or receiving care.", "Note: Points have no monetary value and cannot be redeemed for cash"] },
  "testominal-1": { title: "Testimonials", lead: "Stories from Pawshare Club members.", sections: ["As a busy single parent, I hated leaving my Golden Retriever alone all day while I worked, but I couldn’t afford expensive sitters.", "Suri, Raj, and Nika, their dog, were new in Melbourne when they joined Pawshare club and they didn't know many people at that time."] },
  faqs: { title: "FAQs", lead: "Answers from Pawshare Club.", sections: [] },
  "our-partners": { title: "Our Partners", lead: "Built on community. Powered by people who love pets", sections: ["We believe great pet care starts with great connections.", "Every Pawshare Club partner is hand-picked because they share our values: kindness, quality, and a genuine love for animals."] },
  value: { title: "Pawshare Club — Mission & Values", lead: "We believe pets and people thrive when they are connected — to each other, to community, and to trusted support.", sections: ["Too many pets and their people feel alone, overwhelmed by the cost and complexity of pet care, and disconnected from meaningful support systems.", "Join a movement toward more humane, connected, and resilient pet ownership."] },
  contact: { title: "Contact Us", lead: "Do you have any further questions?", sections: ["If you're having trouble with the platform or have an urgent question, feel free to book a meeting with our founder for a personal demo of the app via link", "pawshareclub@gmail.com", "Melbourne, VIC, AUS"] },
  "qualified-pet-professional": { title: "Are you insured & qualified pet professional?", lead: "When peer-to-peer matches aren’t possible due to specific needs, behavioural challenges, or limited availability, it’s important to have reliable fallback options.", sections: ["For safety reasons, we don’t encourage pet owners with behavioural issue cases to join the platform. But we also don’t want to turn these owners away with no support."] },
  "become-a-pet-sitter": { title: "Become a Pet Sitter in Australia", lead: "Give Love, Gain Purpose, and Join a Community", sections: ["Think pet sitting is only for dog owners with a big backyard? Hundreds of Australians are already pet sitting without owning a pet — and loving it.", "Step1: Profile, ID & Dog knowledge quiz", "Step2: Meet up with members", "Step3: Exchange pet care points & Review"] },
  "community-pet-sitting-agreement": { title: "Community Pet Sitting Agreement", lead: "At PAWSHARE CLUB PTY LTD, our mission is to help neighbours and local pet lovers support one another through a trusted community.", sections: ["Many members help care for each other’s pets out of goodwill and friendship.", "To help make expectations clear between members, we provide a Community Pet Sitting Agreement template that members may choose to use when arranging pet care."] },
  "privacy-policy": { title: "Pawshare Club Privacy policy", lead: "Effective Date: 6 October 2025. Last Updated: 6 October 2025.", sections: ["INTRODUCTION AND COMMITMENT TO PRIVACY", "Pawshare Club Pty Ltd (ABN: 84685619443) is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth)."] },
  "terms-of-service": { title: "PAWSHARE CLUB TERMS OF SERVICE", lead: "Effective Date: 06 October 2025. Last Updated: 06 October 2025. Version: 2.1", sections: ["INTRODUCTION AND ACCEPTANCE", "These Terms of Service (\"Terms\") constitute a legally binding agreement between you and Pawshare Club Pty Ltd (ABN: 84685619443) governing your use of our mobile application, website, and related services (\"Services\")."] },
  "code-of-conduct": { title: "Code of Conduct", lead: "Welcome to the pawshare club community!", sections: ["We're here to build meaningful friendships among dog lovers and create a trusted support network for our furry friends.", "General Guidelines", "Respect Each Other: Treat all members with kindness, patience, and respect.", "Safety First: Prioritize the safety and well-being of all pets and members."] },
  "dog-walker-melbourne": { title: "Dog Walkers in Melbourne - Flexible, Verified, Local", lead: "Regular dog walking in Melbourne, done differently", sections: ["Pawshare Club offers a better way — connecting Melbourne dog owners with local members who walk dogs because they genuinely love it."] },
  "pet-sitting-melbourne": { title: "Pet Sitting in Melbourne", lead: "Care You Can Actually Trust", sections: ["Pawshare Club exists to fix that, connecting Melbourne pet owners with verified local carers who treat your animal like their own."] },
  "dog-sitter-melbourne": { title: "Dog Sitters in Melbourne -Trusted, Verified, Local", lead: "Melbourne's community-based alternative to kennels and pet sitting apps", sections: ["Pawshare Club is different. We're a community of verified Melbourne pet lovers who look after each other's animals — neighbourhood by neighbourhood."] },
  "dog-walker-sydney": { title: "Dog Walkers in Sydney — Flexible, Verified, Local", lead: "Need a Dog Walker?", sections: ["Pawshare Club connects Sydney dog owners with local members who enjoy walking dogs and building genuine community connections around pet care."] },
  "pet-sitting-sydney": { title: "Pet Sitting in Sydney — Dogs, Cats and More", lead: "Sydney's community pet sitting network", sections: ["Pawshare Club offers pet sitting in Sydney through a local, community-based network of animal lovers who care for pets with genuine attention and kindness."] },
  "dog-sitter-sydney": { title: "Dog Sitters in Sydney - Trusted, Verified, Local", lead: "Sydney's community-based alternative to kennels and pet sitting apps", sections: ["Pawshare Club offers a more personal alternative. We connect Sydney dog owners with verified local members who genuinely love dogs and want to help care for them as part of a real community."] },
  privacy: { title: "Pawshare Club Privacy policy", lead: "Effective Date: 6 October 2025. Last Updated: 6 October 2025.", sections: ["Pawshare Club Pty Ltd is committed to protecting your privacy and handling your personal information in accordance with the Privacy Act 1988 (Cth)."] },
  cart: { title: "Cart", lead: "Your cart is currently empty.", sections: [] },
};
