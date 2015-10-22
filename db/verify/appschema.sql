-- Verify zaparoom:appschema on pg

BEGIN;

SELECT pg_catalog.has_schema_privilege('zaparoom', 'usage');

ROLLBACK;
