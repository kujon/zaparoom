-- Verify zaparoom:users on pg

BEGIN;

SELECT first_name, last_name, type, date_of_birth
    FROM zaparoom.users
    WHERE FALSE;

ROLLBACK;
