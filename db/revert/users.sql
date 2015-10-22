-- Revert zaparoom:users from pg

BEGIN;

DROP TABLE zaparoom.users;

COMMIT;
