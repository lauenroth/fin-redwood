# Migration `20200906205646-migration`

This migration has been generated by Jörg Lauenroth at 9/6/2020, 10:56:46 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
ALTER TABLE "public"."Client" ALTER COLUMN "vat" SET DATA TYPE text 

ALTER INDEX "public"."Client.name" RENAME TO "Client.name_unique"
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200716152612-migration..20200906205646-migration
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
@@ -14,9 +14,9 @@
   address   String?
   email     String?
   phone     String?
   website   String?
-  vat       Int?
+  vat       String?
   notes     String?
   createdAt DateTime? @default(now())
   updatedAt DateTime? @default(now())
 }
```


