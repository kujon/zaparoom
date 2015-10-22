-- Deploy zaparoom:users to pg
-- requires: appschema

BEGIN;

SET client_min_messages = 'warning';

CREATE TABLE zaparoom.users (
    first_name      TEXT    NOT NULL,
    last_name       TEXT    NOT NULL,
    type            TEXT,
    date_of_birth   DATE
);

COMMIT;
