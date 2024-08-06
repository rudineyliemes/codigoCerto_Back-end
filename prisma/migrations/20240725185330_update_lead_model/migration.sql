-- CreateTable
CREATE TABLE "Lead" (
    "id" SERIAL NOT NULL,
    "lead_name" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,

    CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
