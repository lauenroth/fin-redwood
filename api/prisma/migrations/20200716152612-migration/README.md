# Migration `20200716152612-migration`

This migration has been generated by Jörg Lauenroth at 7/16/2020, 3:26:12 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Transaction" (
"amount" Decimal(65,30)  NOT NULL ,"category" text   ,"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,"date" timestamp(3)  NOT NULL ,"description" text   ,"foreignAmount" Decimal(65,30)   ,"foreignCurrency" text   ,"id" SERIAL,"import" text   ,"payee" text  NOT NULL ,"reference" text   ,"type" text   ,"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,"vat" text   ,
    PRIMARY KEY ("id"))
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200714205850-migration..20200716152612-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
   provider = "postgres"
-  url = "***"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
@@ -19,4 +19,21 @@
   notes     String?
   createdAt DateTime? @default(now())
   updatedAt DateTime? @default(now())
 }
+
+model Transaction {
+  id              Int       @id @default(autoincrement())
+  date            DateTime
+  payee           String
+  amount          Float
+  type            String?
+  foreignAmount   Float?
+  foreignCurrency String?
+  category        String?
+  vat             String?
+  reference       String?
+  description     String?
+  import          String?
+  createdAt       DateTime? @default(now())
+  updatedAt       DateTime? @default(now())
+}
```

