CREATE DATABASE IF NOT EXISTS monarchy_esports;
USE monarchy_esports;

-- =====================================
-- ADMINS
-- =====================================

CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    email VARCHAR(150) UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- TOURNAMENTS
-- =====================================

CREATE TABLE tournaments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    subtitle VARCHAR(255),
    description TEXT,
    game_name VARCHAR(100),
    banner_image VARCHAR(500),
    rulebook_url VARCHAR(500),
    prize_pool DECIMAL(10,2) DEFAULT 0,

    status ENUM(
        'Upcoming',
        'Ongoing',
        'Completed'
    ) DEFAULT 'Upcoming',

    registration_start DATETIME,
    registration_end DATETIME,

    tournament_start DATETIME,
    tournament_end DATETIME,

    show_registration BOOLEAN DEFAULT FALSE,
    show_schedule BOOLEAN DEFAULT FALSE,
    show_results BOOLEAN DEFAULT FALSE,

    max_teams INT DEFAULT 32,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- REGISTRATIONS
-- =====================================

CREATE TABLE registrations (

    id INT AUTO_INCREMENT PRIMARY KEY,

    tournament_id INT NOT NULL,

    team_name VARCHAR(100) NOT NULL,
    team_logo VARCHAR(500),

    captain_name VARCHAR(100) NOT NULL,
    captain_email VARCHAR(150),
    captain_phone VARCHAR(30),

    player1 VARCHAR(100) NOT NULL,
    player1_photo VARCHAR(500) NOT NULL,

    player2 VARCHAR(100) NOT NULL,
    player2_photo VARCHAR(500) NOT NULL,

    player3 VARCHAR(100) NOT NULL,
    player3_photo VARCHAR(500) NOT NULL,

    player4 VARCHAR(100) NOT NULL,
    player4_photo VARCHAR(500) NOT NULL,

    player5 VARCHAR(100) NOT NULL,
    player5_photo VARCHAR(500) NOT NULL,

    sub1 VARCHAR(100),
    sub1_photo VARCHAR(500),

    sub2 VARCHAR(100),
    sub2_photo VARCHAR(500),

    status ENUM(
        'Pending',
        'Approved',
        'Rejected'
    ) DEFAULT 'Pending',

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (tournament_id)
    REFERENCES tournaments(id)
    ON DELETE CASCADE
);

-- =====================================
-- ANNOUNCEMENTS
-- =====================================

CREATE TABLE announcements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- NEWS
-- =====================================

CREATE TABLE news (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content LONGTEXT,
    cover_image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- GALLERY
-- =====================================

CREATE TABLE gallery (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tournament_id INT,
    image_url VARCHAR(500),
    caption VARCHAR(255),
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (tournament_id)
    REFERENCES tournaments(id)
    ON DELETE CASCADE
);

-- =====================================
-- CONTACT MESSAGES
-- =====================================

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(150),
    subject VARCHAR(255),
    message TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =====================================
-- DUMMY ADMIN
-- =====================================

INSERT INTO admins
(username,email,password_hash)
VALUES
(
'admin',
'admin@monarchyesports.com',
'admin123'
);

-- =====================================
-- DUMMY TOURNAMENTS
-- =====================================

INSERT INTO tournaments
(
title,
subtitle,
description,
game_name,
banner_image,
rulebook_url,
prize_pool,
status,
show_registration,
show_schedule,
show_results,
max_teams
)
VALUES

(
'Echoes of Destiny',
'Second Resonance',
'Official Monarchy Esports MLBB Tournament',
'Mobile Legends: Bang Bang',
'/banners/echoes2.jpg',
'/rules/echoes-rulebook.pdf',
100000,
'Ongoing',
TRUE,
TRUE,
FALSE,
32
),

(
'Monarchy MLBB Cup',
'Season 1',
'Upcoming Community Tournament',
'Mobile Legends: Bang Bang',
'/banners/mlbbcup.jpg',
'/rules/mlbb-cup-rulebook.pdf',
50000,
'Upcoming',
TRUE,
FALSE,
FALSE,
32
),

(
'Echoes of Destiny',
'First Resonance',
'Completed Tournament',
'Mobile Legends: Bang Bang',
'/banners/echoes1.jpg',
'/rules/echoes1-rulebook.pdf',
75000,
'Completed',
FALSE,
FALSE,
TRUE,
32
);

-- =====================================
-- DUMMY REGISTRATION
-- =====================================

INSERT INTO registrations
(
tournament_id,
team_name,
captain_name,
captain_email,
captain_phone,

player1,
player1_photo,

player2,
player2_photo,

player3,
player3_photo,

player4,
player4_photo,

player5,
player5_photo,

sub1,
sub1_photo,

sub2,
sub2_photo,

status
)
VALUES
(
1,
'Team Phoenix',
'Kavidu',
'kavidu@example.com',
'0771234567',

'Player One',
'/players/p1.jpg',

'Player Two',
'/players/p2.jpg',

'Player Three',
'/players/p3.jpg',

'Player Four',
'/players/p4.jpg',

'Player Five',
'/players/p5.jpg',

'Sub One',
'/players/s1.jpg',

'Sub Two',
'/players/s2.jpg',

'Pending'
);

-- =====================================
-- DUMMY ANNOUNCEMENTS
-- =====================================

INSERT INTO announcements
(title,message)
VALUES
(
'Registration Open',
'Registrations are now open for Monarchy MLBB Cup.'
),
(
'Tournament Schedule Released',
'Check the website for updated match schedules.'
);

-- =====================================
-- DUMMY NEWS
-- =====================================

INSERT INTO news
(title,content,cover_image)
VALUES
(
'Monarchy Esports Launches New Season',
'Welcome to the newest season of Monarchy Esports tournaments.',
'/news/news1.jpg'
);

-- =====================================
-- DUMMY GALLERY
-- =====================================

INSERT INTO gallery
(
tournament_id,
image_url,
caption
)
VALUES
(
3,
'/gallery/finals1.jpg',
'Grand Finals'
),
(
3,
'/gallery/finals2.jpg',
'Champion Celebration'
),
(
3,
'/gallery/finals3.jpg',
'Prize Ceremony'
);

-- =====================================
-- DUMMY CONTACT MESSAGE
-- =====================================

INSERT INTO contact_messages
(
name,
email,
subject,
message
)
VALUES
(
'Test User',
'test@example.com',
'Tournament Inquiry',
'When will registration close?'
);
