# Migration `20200907193343-invoices`

This migration has been generated by Jörg Lauenroth at 9/7/2020, 9:33:43 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Invoice" (
"id" SERIAL,
"number" text   NOT NULL ,
"date" timestamp(3)   NOT NULL ,
"clientId" integer   NOT NULL ,
"items" jsonb   ,
"total" Decimal(65,30)   NOT NULL ,
"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY ("id")
)

CREATE UNIQUE INDEX "Invoice.number_unique" ON "public"."Invoice"("number")

ALTER TABLE "public"."Invoice" ADD FOREIGN KEY ("clientId")REFERENCES "public"."Client"("id") ON DELETE CASCADE ON UPDATE CASCADE
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200906205646-migration..20200907193343-invoices
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
@@ -16,8 +16,9 @@
   phone     String?
   website   String?
   vat       String?
   notes     String?
+  invoices  Invoice[]
   createdAt DateTime? @default(now())
   updatedAt DateTime? @default(now())
 }
@@ -36,4 +37,16 @@
   import          String?
   createdAt       DateTime? @default(now())
   updatedAt       DateTime? @default(now())
 }
+
+model Invoice {
+  id        Int       @id @default(autoincrement())
+  number    String    @unique
+  date      DateTime
+  client    Client    @relation(fields: [clientId], references: [id])
+  clientId  Int
+  items     Json?
+  total     Float
+  createdAt DateTime? @default(now())
+  updatedAt DateTime? @default(now())
+}
```


