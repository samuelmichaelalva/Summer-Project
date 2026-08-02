-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_CitizenProfile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "district" TEXT NOT NULL,
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
    CONSTRAINT "CitizenProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_CitizenProfile" ("completionPercent", "district", "hasAadhaar", "hasBankAccount", "householdSize", "id", "incomeBand", "occupation", "primaryNeed", "state", "userId") SELECT "completionPercent", "district", "hasAadhaar", "hasBankAccount", "householdSize", "id", "incomeBand", "occupation", "primaryNeed", "state", "userId" FROM "CitizenProfile";
DROP TABLE "CitizenProfile";
ALTER TABLE "new_CitizenProfile" RENAME TO "CitizenProfile";
CREATE UNIQUE INDEX "CitizenProfile_userId_key" ON "CitizenProfile"("userId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
