import { PrismaClient } from "../generated/prisma/client";
import { PrismaLibSql } from "@prisma/adapter-libsql";

import path from "path";

const dbPath = path.resolve(process.cwd(), "prisma/dev.db");
const url = `file:${dbPath}`;
const adapter = new PrismaLibSql({ url });
const prisma = new PrismaClient({ adapter });

const schemesData = [
  {
    slug: "ayushman-bharat",
    category: "Healthcare",
    state: "All India",
    ministry: "National Health Authority",
    translations: [
      {
        language: "English",
        title: "Ayushman Bharat PMJAY",
        benefit: "Up to Rs. 5 lakh annual health cover per family.",
        amount: "Rs. 5 lakh cover",
        deadline: "Open year-round",
      },
      {
        language: "हिन्दी",
        title: "आयुष्मान भारत पीएम-जय",
        benefit: "प्रति परिवार प्रति वर्ष 5 लाख रुपये तक का स्वास्थ्य कवर।",
        amount: "5 लाख रुपये का कवर",
        deadline: "वर्ष भर खुला",
      },
    ],
    requirements: [
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Low-income household" },
          { language: "हिन्दी", label: "कम आय वाला परिवार" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Valid identity proof" },
          { language: "हिन्दी", label: "वैध पहचान पत्र" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Family listed in eligible database" },
          { language: "हिन्दी", label: "पात्र डेटाबेस में सूचीबद्ध परिवार" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Aadhaar card" },
          { language: "हिन्दी", label: "आधार कार्ड" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Ration card" },
          { language: "हिन्दी", label: "राशन कार्ड" },
        ],
      },
    ],
  },
  {
    slug: "pm-kisan",
    category: "Agriculture",
    state: "All India",
    ministry: "Ministry of Agriculture",
    translations: [
      {
        language: "English",
        title: "PM-Kisan Samman Nidhi",
        benefit: "Rs. 6,000 yearly direct benefit transfer.",
        amount: "Rs. 6,000/year",
        deadline: "Next installment cycle",
      },
      {
        language: "हिन्दी",
        title: "पीएम-किसान सम्मान निधि",
        benefit: "6,000 रुपये वार्षिक प्रत्यक्ष लाभ हस्तांतरण।",
        amount: "6,000 रुपये/वर्ष",
        deadline: "अगली किस्त चक्र",
      },
    ],
    requirements: [
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Small or marginal farmer" },
          { language: "हिन्दी", label: "छोटे या सीमांत किसान" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Cultivable landholding" },
          { language: "हिन्दी", label: "कृषि योग्य भूमि" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Bank account linked" },
          { language: "हिन्दी", label: "बैंक खाता लिंक" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Land record" },
          { language: "हिन्दी", label: "भूमि अभिलेख" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Aadhaar card" },
          { language: "हिन्दी", label: "आधार कार्ड" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Bank account" },
          { language: "हिन्दी", label: "बैंक खाता" },
        ],
      },
    ],
  },
  {
    slug: "pmay-gramin",
    category: "Housing",
    state: "Rural India",
    ministry: "Ministry of Rural Development",
    translations: [
      {
        language: "English",
        title: "PMAY Gramin",
        benefit: "Housing support for eligible rural households.",
        amount: "Up to Rs. 1.3 lakh",
        deadline: "State-wise window",
      },
      {
        language: "हिन्दी",
        title: "पीएमएवाई ग्रामीण",
        benefit: "पात्र ग्रामीण परिवारों के लिए आवास सहायता।",
        amount: "1.3 लाख रुपये तक",
        deadline: "राज्य-वार विंडो",
      },
    ],
    requirements: [
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Rural household" },
          { language: "हिन्दी", label: "ग्रामीण परिवार" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "No pucca house" },
          { language: "हिन्दी", label: "कोई पक्का घर नहीं" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Meets deprivation criteria" },
          { language: "हिन्दी", label: "वंचना मानदंडों को पूरा करता है" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Aadhaar card" },
          { language: "हिन्दी", label: "आधार कार्ड" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Income certificate" },
          { language: "हिन्दी", label: "आय प्रमाण पत्र" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Residence proof" },
          { language: "हिन्दी", label: "निवास प्रमाण पत्र" },
        ],
      },
    ],
  },
  {
    slug: "vidya-siri",
    category: "Education",
    state: "Karnataka",
    ministry: "State Scholarship Portal",
    translations: [
      {
        language: "English",
        title: "Vidya Siri Scholarship",
        benefit: "Student support for higher education expenses.",
        amount: "Fee and hostel support",
        deadline: "31 August",
      },
      {
        language: "हिन्दी",
        title: "विद्या सिरी छात्रवृत्ति",
        benefit: "उच्च शिक्षा खर्चों के लिए छात्र सहायता।",
        amount: "शुल्क और छात्रावास सहायता",
        deadline: "31 अगस्त",
      },
    ],
    requirements: [
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Karnataka resident" },
          { language: "हिन्दी", label: "कर्नाटक निवासी" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Post-matric student" },
          { language: "हिन्दी", label: "मैट्रिकोत्तर छात्र" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Income under scheme limit" },
          { language: "हिन्दी", label: "योजना सीमा के तहत आय" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Student ID" },
          { language: "हिन्दी", label: "छात्र पहचान पत्र" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Income certificate" },
          { language: "हिन्दी", label: "आय प्रमाण पत्र" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Caste certificate" },
          { language: "हिन्दी", label: "जाति प्रमाण पत्र" },
        ],
      },
    ],
  },
  {
    slug: "one-nation-one-ration",
    category: "Food Security",
    state: "All India",
    ministry: "Department of Food and Public Distribution",
    translations: [
      {
        language: "English",
        title: "One Nation One Ration Card",
        benefit: "Access subsidized food grains from any fair price shop.",
        amount: "Monthly ration support",
        deadline: "Open year-round",
      },
      {
        language: "हिन्दी",
        title: "एक देश एक राशन कार्ड",
        benefit: "किसी भी उचित मूल्य की दुकान से रियायती खाद्यान्न प्राप्त करें।",
        amount: "मासिक राशन सहायता",
        deadline: "वर्ष भर खुला",
      },
    ],
    requirements: [
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "NFSA ration card holder" },
          { language: "हिन्दी", label: "एनएफएसए राशन कार्ड धारक" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Aadhaar seeded ration card" },
          { language: "हिन्दी", label: "आधार से जुड़ा राशन कार्ड" },
        ],
      },
      {
        kind: "eligibility",
        translations: [
          { language: "English", label: "Family member verification" },
          { language: "हिन्दी", label: "परिवार के सदस्य का सत्यापन" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Ration card" },
          { language: "हिन्दी", label: "राशन कार्ड" },
        ],
      },
      {
        kind: "document",
        translations: [
          { language: "English", label: "Aadhaar card" },
          { language: "हिन्दी", label: "आधार कार्ड" },
        ],
      },
    ],
  },
];

async function main() {
  console.log("Seeding database...");

  // Clear existing schemes data to prevent duplicates on re-run
  await prisma.scheme.deleteMany({});
  console.log("Cleared existing schemes.");

  for (const s of schemesData) {
    const createdScheme = await prisma.scheme.create({
      data: {
        slug: s.slug,
        category: s.category,
        state: s.state,
        ministry: s.ministry,
        translations: {
          create: s.translations,
        },
      },
    });

    console.log(`Created scheme: ${createdScheme.slug}`);

    for (const req of s.requirements) {
      await prisma.schemeRequirement.create({
        data: {
          schemeId: createdScheme.id,
          kind: req.kind,
          translations: {
            create: req.translations,
          },
        },
      });
    }
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error("Seeding failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
