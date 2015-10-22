-- Revert zaparoom:appschema from pg

BEGIN;

DROP SCHEMA zaparoom;

COMMIT;
