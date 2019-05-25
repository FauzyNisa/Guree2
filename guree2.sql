-- phpMyAdmin SQL Dump
-- version 4.8.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2019 at 08:12 PM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `guree2`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(1, '1558546114727_todo_schema', 1, '2019-05-22 19:28:41'),
(2, '1558551096070_user', 2, '2019-05-22 19:31:43'),
(3, '1558551096078_token', 2, '2019-05-22 19:31:44'),
(4, '1558553106070_akun_schema', 3, '2019-05-22 19:32:33');

-- --------------------------------------------------------

--
-- Table structure for table `todos`
--

CREATE TABLE `todos` (
  `id` int(10) UNSIGNED NOT NULL,
  `konten` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `todos`
--

INSERT INTO `todos` (`id`, `konten`, `created_at`, `updated_at`, `foto`) VALUES
(1, 'Cuvuci kegah pornu niv bo irnublo ok nozgufoz bekec wiprew atibira co po te. Egap rimkemip jupib roglakhik pil puzovecu kuace ehwoho ti vaot ef vukuhi viwosuz rujtehoro gocvivota ga cadun teze. Irrap umizji jozur ovaimco kuvbogifi ege giz peisuzuv vignoj ozihajiz vijo uc. Du jic vejmupa huhpomo sut ukaco woj cak vakpadev cifocaaca gi ezahosso on. Bicupa enusi katwe rabadja sez azo da denozfe hu gevi hivah so evobe joma sohbopoz riugu dizi.', '2019-05-23 02:43:36', '2019-05-23 02:43:36', ''),
(2, 'Lamfilanu ulume omoda cuur ahda caknuwe senin fac nihza avukalsoz ru gikade raev kitelu gispoji tamliccoz. Bovum ib ridjoka wasu opiwapmoj mihowjel puc kujsa jakof ota il ad woz jiwume ikelid gari zujzar renbazfac. Muzko wir fotsa neejed tu uwasuh hogfoc wanug tuta ockocu idonij ihjufe fir hefezi fihbe meg hadho. Gamisad erosutof puuz ujiul talumemij torpidpo ekfud zurukebek ubo do wemepoke kefneotu izwoc kok du tamebzo. Cejzo epo iwi babdoez ojafu obawu jehridcal bu samre ku lekwupva bapeawi puawoin hilek heswusvi pi dav ufahi. Santontoh bebcival juleer casheza eje ka hohke dum led dekhefo mosu tif vuv gisifgu upo ihlicoh. Taz zeb makfa ohaedbar lolsilfiw nazu tegos pofaj kotop ahe kuonowu wunoh ad etdabo ar uc bofon.', '2019-05-23 02:43:36', '2019-05-23 02:43:36', ''),
(5, 'aaa', '2019-05-23 11:46:48', '2019-05-23 11:46:48', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tokens`
--

CREATE TABLE `tokens` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `token` varchar(255) NOT NULL,
  `type` varchar(80) NOT NULL,
  `is_revoked` tinyint(1) DEFAULT '0',
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `nuptk` varchar(80) NOT NULL,
  `nama` varchar(254) NOT NULL,
  `tempat_ngajar` varchar(254) NOT NULL,
  `tgl` varchar(50) NOT NULL,
  `jk` varchar(2) NOT NULL,
  `username` varchar(80) NOT NULL,
  `email` varchar(254) NOT NULL,
  `password` varchar(60) NOT NULL,
  `matpel` varchar(254) DEFAULT NULL,
  `status` varchar(254) DEFAULT NULL,
  `foto` varchar(254) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nuptk`, `nama`, `tempat_ngajar`, `tgl`, `jk`, `username`, `email`, `password`, `matpel`, `status`, `foto`, `created_at`, `updated_at`) VALUES
(4, '1111111111111111111', 'lala', 'Banda Aceh', '1998-03-15', 'p', 'FauzyN', 'nisafauzy@gmail.com', '$2a$10$A9a/KuDP6VpoOStM/QwQ0exLPvcdY59RqDyPm2vB90vMyzP2IthaO', NULL, 'pns', 'null', '2019-05-23 03:37:49', '2019-05-23 09:20:30'),
(5, '12345', 'lalala', 'Banda Aceh', '2019-05-01', 'L', 'LALA', 'lala@email.com', '$2a$10$dopEVoqlgLJxEPXGiv9anuZENwOHJqvHeMOlFLq5y9p/1/KgjmgmO', NULL, 'null', NULL, '2019-05-23 10:34:49', '2019-05-23 10:37:06');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `todos`
--
ALTER TABLE `todos`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `tokens_token_unique` (`token`),
  ADD KEY `tokens_user_id_foreign` (`user_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_nuptk_unique` (`nuptk`),
  ADD UNIQUE KEY `users_username_unique` (`username`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `todos`
--
ALTER TABLE `todos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `tokens_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
