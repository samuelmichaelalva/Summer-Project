-- CreateSchema
CREATE SCHEMA IF NOT EXISTS "public";

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT NOT NULL,
    "passwordHash" TEXT,
    "preferredLanguage" TEXT NOT NULL DEFAULT 'English',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CitizenProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
    "residenceType" TEXT NOT NULL DEFAULT '',
    "incomeBand" TEXT NOT NULL,
    "occupation" TEXT NOT NULL,
    "householdSize" INTEGER NOT NULL,
    "primaryNeed" TEXT NOT NULL,
    "dateOfBirth" TEXT NOT NULL DEFAULT '',
    "gender" TEXT NOT NULL DEFAULT '',
    "maritalStatus" TEXT NOT NULL DEFAULT '',
    "socialCategory" TEXT NOT NULL DEFAULT 'General',
    "minorityStatus" TEXT NOT NULL DEFAULT '',
    "disabilityStatus" TEXT NOT NULL DEFAULT '',
    "educationLevel" TEXT NOT NULL DEFAULT '',
    "employmentStatus" TEXT NOT NULL DEFAULT '',
    "landholding" TEXT NOT NULL DEFAULT '',
    "houseOwnership" TEXT NOT NULL DEFAULT '',
    "rationCardType" TEXT NOT NULL DEFAULT '',
    "lpgConnection" TEXT NOT NULL DEFAULT '',
    "hasAadhaar" BOOLEAN NOT NULL DEFAULT false,
    "hasBankAccount" BOOLEAN NOT NULL DEFAULT false,
    "completionPercent" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "CitizenProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Scheme" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "ministry" TEXT NOT NULL,

    CONSTRAINT "Scheme_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemeTranslation" (
    "id" TEXT NOT NULL,
    "schemeId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "benefit" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "deadline" TEXT NOT NULL,

    CONSTRAINT "SchemeTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemeRequirement" (
    "id" TEXT NOT NULL,
    "schemeId" TEXT NOT NULL,
    "kind" TEXT NOT NULL,

    CONSTRAINT "SchemeRequirement_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SchemeRequirementTranslation" (
    "id" TEXT NOT NULL,
    "requirementId" TEXT NOT NULL,
    "language" TEXT NOT NULL,
    "label" TEXT NOT NULL,

    CONSTRAINT "SchemeRequirementTranslation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Application" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "schemeId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Application_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_contact_key" ON "User"("contact");

-- CreateIndex
CREATE UNIQUE INDEX "CitizenProfile_userId_key" ON "CitizenProfile"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Scheme_slug_key" ON "Scheme"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "SchemeTranslation_schemeId_language_key" ON "SchemeTranslation"("schemeId", "language");

-- CreateIndex
CREATE UNIQUE INDEX "SchemeRequirementTranslation_requirementId_language_key" ON "SchemeRequirementTranslation"("requirementId", "language");

-- AddForeignKey
ALTER TABLE "CitizenProfile" ADD CONSTRAINT "CitizenProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchemeTranslation" ADD CONSTRAINT "SchemeTranslation_schemeId_fkey" FOREIGN KEY ("schemeId") REFERENCES "Scheme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchemeRequirement" ADD CONSTRAINT "SchemeRequirement_schemeId_fkey" FOREIGN KEY ("schemeId") REFERENCES "Scheme"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SchemeRequirementTranslation" ADD CONSTRAINT "SchemeRequirementTranslation_requirementId_fkey" FOREIGN KEY ("requirementId") REFERENCES "SchemeRequirement"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Application" ADD CONSTRAINT "Application_schemeId_fkey" FOREIGN KEY ("schemeId") REFERENCES "Scheme"("id") ON DELETE CASCADE ON UPDATE CASCADE;
