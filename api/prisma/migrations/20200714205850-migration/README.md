# Migration `20200714205850-migration`

This migration has been generated by Jörg Lauenroth at 7/14/2020, 8:58:50 PM.
You can check out the [state of the schema](./schema.prisma) after the migration.

## Database Steps

```sql
CREATE TABLE "public"."Client" (
"address" text   ,"createdAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,"email" text   ,"id" SERIAL,"name" text  NOT NULL ,"notes" text   ,"phone" text   ,"updatedAt" timestamp(3)   DEFAULT CURRENT_TIMESTAMP,"vat" integer   ,"website" text   ,
    PRIMARY KEY ("id"))

CREATE UNIQUE INDEX "Client.name" ON "public"."Client"("name")
```

## Changes

```diff
diff --git schema.prisma schema.prisma
migration 20200714204453-migration..20200714205850-migration
--- datamodel.dml
+++ datamodel.dml
@@ -1,7 +1,7 @@
 datasource DS {
-  provider = "sqlite"
-  url = "***"
+  provider = "postgres"
+  url = "***"
 }
 generator client {
   provider      = "prisma-client-js"
```


