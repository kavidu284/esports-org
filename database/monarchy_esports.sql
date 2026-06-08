-- =========================================
-- MONARCHY ESPORTS DATABASE (UPDATED)
-- =========================================

CREATE DATABASE IF NOT EXISTS monarchy_esports;
USE monarchy_esports;

-- =========================================
-- ADMINS
-- =========================================

CREATE TABLE admins (
id INT AUTO_INCREMENT PRIMARY KEY,
username VARCHAR(100) UNIQUE NOT NULL,
email VARCHAR(150) UNIQUE,
password_hash VARCHAR(255) NOT NULL,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================================
-- TOURNAMENTS
-- =========================================

CREATE TABLE tournaments (
id INT AUTO_INCREMENT PRIMARY KEY,

```
title VARCHAR(255) NOT NULL,
subtitle VARCHAR(255),

description TEXT,

game_name VARCHAR(100)
DEFAULT 'Mobile Legends: Bang Bang',

banner_image VARCHAR(500),

prize_pool DECIMAL(10,2) DEFAULT 0,

status ENUM(
    'Upcoming',
    'Ongoing',
    'Completed'
) NOT NULL,

registration_start DATETIME,
registration_end DATETIME,

tournament_start DATETIME,
tournament_end DATETIME,

show_registration BOOLEAN DEFAULT FALSE,
show_schedule BOOLEAN DEFAULT FALSE,
show_results BOOLEAN DEFAULT FALSE,

max_teams INT DEFAULT 16,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

);

-- =========================================
-- TEAM REGISTRATIONS
-- =========================================

CREATE TABLE registrations (
id INT AUTO_INCREMENT PRIMARY KEY,

```
tournament_id INT NOT NULL,

team_name VARCHAR(100) NOT NULL,
team_logo VARCHAR(500),

captain_name VARCHAR(100) NOT NULL,
captain_email VARCHAR(150),
captain_phone VARCHAR(30),

discord_username VARCHAR(100),

status ENUM(
    'Pending',
    'Approved',
    'Rejected'
) DEFAULT 'Pending',

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (tournament_id)
REFERENCES tournaments(id)
ON DELETE CASCADE
```

);

-- =========================================
-- REGISTRATION PLAYERS
-- 5 MAIN PLAYERS + 2 SUBS
-- PHOTO REQUIRED
-- =========================================

CREATE TABLE registration_players (
id INT AUTO_INCREMENT PRIMARY KEY,

```
registration_id INT NOT NULL,

player_name VARCHAR(100) NOT NULL,

ign VARCHAR(100) NOT NULL,

mlbb_id VARCHAR(50) NOT NULL,
server_id VARCHAR(50) NOT NULL,

photo_url VARCHAR(500) NOT NULL,

role ENUM(
    'Captain',
    'Player',
    'Substitute'
) NOT NULL,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (registration_id)
REFERENCES registrations(id)
ON DELETE CASCADE
```

);

-- =========================================
-- REGISTRATION VERIFICATION
-- =========================================

CREATE TABLE registration_verifications (
id INT AUTO_INCREMENT PRIMARY KEY,

```
registration_id INT NOT NULL,

profile_screenshot VARCHAR(500) NOT NULL,

rules_accepted BOOLEAN DEFAULT FALSE,

FOREIGN KEY (registration_id)
REFERENCES registrations(id)
ON DELETE CASCADE
```

);

-- =========================================
-- SCHEDULES
-- =========================================

CREATE TABLE schedules (
id INT AUTO_INCREMENT PRIMARY KEY,

```
tournament_id INT NOT NULL,

match_title VARCHAR(255),
stage VARCHAR(100),

match_date DATETIME,

FOREIGN KEY (tournament_id)
REFERENCES tournaments(id)
ON DELETE CASCADE
```

);

-- =========================================
-- RESULTS
-- =========================================

CREATE TABLE results (
id INT AUTO_INCREMENT PRIMARY KEY,

```
tournament_id INT NOT NULL,

team1 VARCHAR(100),
team2 VARCHAR(100),

score1 INT,
score2 INT,

winner VARCHAR(100),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (tournament_id)
REFERENCES tournaments(id)
ON DELETE CASCADE
```

);

-- =========================================
-- CHAMPIONS
-- =========================================

CREATE TABLE champions (
id INT AUTO_INCREMENT PRIMARY KEY,

```
tournament_id INT UNIQUE NOT NULL,

champion VARCHAR(100),
runner_up VARCHAR(100),
third_place VARCHAR(100),

FOREIGN KEY (tournament_id)
REFERENCES tournaments(id)
ON DELETE CASCADE
```

);

-- =========================================
-- GALLERY
-- =========================================

CREATE TABLE gallery (
id INT AUTO_INCREMENT PRIMARY KEY,

```
tournament_id INT NOT NULL,

image_url VARCHAR(500),
caption VARCHAR(255),

uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

FOREIGN KEY (tournament_id)
REFERENCES tournaments(id)
ON DELETE CASCADE
```

);

-- =========================================
-- ANNOUNCEMENTS
-- =========================================

CREATE TABLE announcements (
id INT AUTO_INCREMENT PRIMARY KEY,

```
title VARCHAR(255),
message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

);

-- =========================================
-- NEWS
-- =========================================

CREATE TABLE news (
id INT AUTO_INCREMENT PRIMARY KEY,

```
title VARCHAR(255),
content LONGTEXT,

cover_image VARCHAR(500),

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

);

-- =========================================
-- CONTACT MESSAGES
-- =========================================

CREATE TABLE contact_messages (
id INT AUTO_INCREMENT PRIMARY KEY,

```
name VARCHAR(100),
email VARCHAR(150),

subject VARCHAR(255),

message TEXT,

created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
```

);
