CREATE TABLE `artists` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `biography` text NOT NULL,
  `birthdate` date NOT NULL,
  `deathdate` date DEFAULT NULL,
  `nationality` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `artworks` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `artist_id` bigint(20) UNSIGNED NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `creation_date` date NOT NULL,
  `image` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`)
);

CREATE TABLE `exhibition` (
  `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT,
  `artist_id` bigint(20) UNSIGNED NOT NULL,
  `artwork_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `image` varchar(255) NOT NULL,
  `location` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`artist_id`) REFERENCES `artists`(`id`),
  FOREIGN KEY (`artwork_id`) REFERENCES `artworks`(`id`)
);

