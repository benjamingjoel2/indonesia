import type { FaqGroup } from "./types";

export const faqGroups: FaqGroup[] = [
  {
    title: "Planning & booking",
    items: [
      {
        q: "How does planning a journey with The Tailor work?",
        a: "You start with a conversation, by phone or video, with the Travel Designer who will look after you from first idea to the flight home. They build a draft itinerary around your interests and pace, refine it with you until it feels right, then confirm every stay, flight and guide. The same person remains your contact throughout, including while you are travelling.",
      },
      {
        q: "Will I deal with one person the whole way through?",
        a: "Yes. Each client has a single dedicated Travel Designer. Because we take a limited number of journeys each year, your Travel Designer has the time to know your preferences properly and to step in personally if anything needs to change while you are away.",
      },
      {
        q: "Is there a minimum budget?",
        a: "Our journeys typically start from around A$1,500 per person, per day, including accommodation, private touring and internal travel, but excluding international flights. Itineraries that include private air charters or exclusive-use lodges sit well above that figure. We will always give you a clear sense of cost early in the conversation.",
      },
      {
        q: "How quickly will I hear back after an enquiry?",
        a: "A Travel Designer replies to every enquiry personally within one business day (Adelaide time), usually sooner. If your dates are close, mention it in your message and we will prioritise availability checks at the lodges that matter most to you.",
      },
    ],
  },
  {
    title: "Travelling in Australia",
    items: [
      {
        q: "Do I need a visa to visit Australia?",
        a: "Almost all visitors need a visa or travel authority before departure. Passport holders from the United States, Canada, Singapore, Hong Kong (SAR) and several other countries can usually apply for an Electronic Travel Authority (ETA) through the official Australian ETA app. Citizens of the UK and many European countries are typically eligible for a free eVisitor. Requirements change, so please confirm with the Australian Department of Home Affairs before booking flights.",
      },
      {
        q: "When is the best time to travel?",
        a: "It depends on where you are going. The tropical north, including the Daintree, the Top End and the Kimberley, is best in the dry season from roughly May to October; the wet season brings heat, humidity and some road closures. The south, including Tasmania, Kangaroo Island and the wine regions, is most comfortable from October to April. The Red Centre is pleasant from April to September, when days are warm and nights cool.",
      },
      {
        q: "How do you handle the long distances?",
        a: "Australia is roughly the size of continental Europe, so we plan routes that avoid unnecessary backtracking and use scheduled domestic flights in business class where available. For remote lodges or tight timing, private air charters and helicopter transfers can turn a full travel day into an hour or two, and often become a highlight in their own right.",
      },
    ],
  },
  {
    title: "Payments & protection",
    items: [
      {
        q: "What are your deposit and payment terms?",
        a: "A deposit, typically around 25 to 30 per cent of the journey cost, secures your booking, with the balance usually due about 90 days before departure. Some lodges and charter operators set their own deposit and cancellation terms, particularly in peak season, and your Travel Designer will set these out clearly in your proposal before you commit.",
      },
      {
        q: "Do I need travel insurance?",
        a: "Yes. We ask all clients to hold comprehensive travel insurance from the time of booking, covering cancellation, medical expenses and emergency evacuation. Remote areas of Australia can be a long way from hospital care, so evacuation cover is especially important. Please check that any planned activities, such as diving or scenic flights, are included.",
      },
      {
        q: "What happens if plans change or something goes wrong?",
        a: "Your Travel Designer is your first call, before and during the journey, and we provide emergency contact details for when they are off duty. If a flight is cancelled or the weather closes in, we rearrange transfers, stays and activities on your behalf. Changes requested by you before departure are subject to the terms of each supplier, which we will explain before making them.",
      },
    ],
  },
];

export const homeFaqs = faqGroups.flatMap((g) => g.items).slice(0, 6);
