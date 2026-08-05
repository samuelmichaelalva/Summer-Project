CREATE TABLE "UserSettings" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "theme" TEXT NOT NULL DEFAULT 'system',
    "notificationsSchemes" BOOLEAN NOT NULL DEFAULT true,
    "notificationsMatches" BOOLEAN NOT NULL DEFAULT true,
    "notificationsApplications" BOOLEAN NOT NULL DEFAULT false,
    "showSensitiveAmounts" BOOLEAN NOT NULL DEFAULT true,
    "profileReminders" BOOLEAN NOT NULL DEFAULT false,
    "compactDashboard" BOOLEAN NOT NULL DEFAULT false,
    "highContrast" BOOLEAN NOT NULL DEFAULT true,
    "largerLabels" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "UserSettings_pkey" PRIMARY KEY ("id")
);
CREATE UNIQUE INDEX "UserSettings_userId_key" ON "UserSettings"("userId");
ALTER TABLE "UserSettings" ADD CONSTRAINT "UserSettings_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
