PRAGMA foreign_keys = ON;

CREATE TABLE users (
    id INTEGER PRIMARY KEY, 
    fname TEXT NOT NULL, 
    lname TEXT NOT NULL

);

CREATE TABLE questions (
    id INTEGER PRIMARY KEY, 
    title TEXT NOT NULL, 
    body TEXT NOT NULL,
    author_id INTEGER NOT NULL, 

    FOREIGN KEY(author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
    id INTEGER PRIMARY KEY, 
    users_id INTEGER NOT NULL, 
    questions_id INTEGER NOT NULL, 

    FOREIGN KEY(questions_id) REFERENCES questions(id),
    FOREIGN KEY(users_id) REFERENCES users(id),
 
);

CREATE TABLE replies (
    id INTEGER PRIMARY KEY,
    body TEXT NOT NULL,
    questions_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,
    parent_reply_id INTEGER,

    FOREIGN KEY (author_id) REFERENCES users(id),
    FOREIGN KEY (questions_id) REFERENCES questions(id),
    FOREIGN KEY (parent_reply_id) REFERENCES replies(id)
);

CREATE TABLE question_likes (
    id INTEGER PRIMARY KEY,
    users_id INTEGER NOT NULL, 
    questions_id INTEGER NOT NULL, 

    FOREIGN KEY(questions_id) REFERENCES questions(id),
    FOREIGN KEY(users_id) REFERENCES users(id),
);

INSERT INTO
    users (fname, lname)
VALUES
    ("Bob","Bobbington"), ("Cindy", "Carpenter"), ("Sam", "Smith");

INSERT INTO 
    questions (title, body, author_id)
SELECT 
    ("Does God exist?", "Looks like no", users.id)
        FROM users 
            WHERE fname = "BOB" and lname = "Bobbington"

INSERT INTO 
    questions (title, body, author_id)
SELECT 
    ("Is Bob kind of a jerk", "Looks like yes", users.id)
        FROM users 
            WHERE fname = "BOB" and lname = "Bobbington"

INSERT INTO 
    questions (title, body, author_id)
SELECT 
    ("Does God exist?", "Looks like no", users.id)
        FROM users 
            WHERE fname = "BOB" and lname = "Bobbington"


-- INSERT INTO
--   plays (title, year, playwright_id)
-- VALUES
--   ('All My Sons', 1947, (SELECT id FROM playwrights WHERE name = 'Arthur Miller')),
--   ('Long Day''s Journey Into Night', 1956, (SELECT id FROM playwrights WHERE name = 'Eugene O''Neill'));
