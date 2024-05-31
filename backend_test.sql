-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.30 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for backend_test
CREATE DATABASE IF NOT EXISTS `backend_test` /*!40100 DEFAULT CHARACTER SET latin1 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `backend_test`;

-- Dumping structure for table backend_test.books
CREATE TABLE IF NOT EXISTS `books` (
  `code` varchar(40) NOT NULL,
  `title` varchar(200) NOT NULL,
  `author` varchar(100) NOT NULL,
  `stock` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table backend_test.books: ~4 rows (approximately)
REPLACE INTO `books` (`code`, `title`, `author`, `stock`, `created_at`) VALUES
	('BK2019', 'Programer handal', 'Abdul Malik', 30, '2024-05-30 05:21:15'),
	('BK2020', 'Laravel vue', 'Abdul Malik', 25, '2024-05-30 05:21:55'),
	('BK2024', 'Mahir pemrograman python', 'Abdul Malik', 15, '2024-05-30 03:34:33'),
	('BK2101', 'Jago Python', 'Lionel', 10, '2024-05-29 21:00:51');

-- Dumping structure for table backend_test.book_return
CREATE TABLE IF NOT EXISTS `book_return` (
  `code` varchar(40) NOT NULL,
  `loan_id` varchar(40) DEFAULT NULL,
  `return_date` date DEFAULT NULL,
  `book_condition` enum('Baik','Rusak') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table backend_test.book_return: ~8 rows (approximately)
REPLACE INTO `book_return` (`code`, `loan_id`, `return_date`, `book_condition`, `created_at`) VALUES
	('RN2024060001', 'PJM3105241', '2024-06-08', 'Baik', '2024-05-31 06:04:09'),
	('RN2024060004', 'PJM3105242', '2024-06-08', 'Baik', '2024-05-31 06:10:36'),
	('RN2024060148', 'PJM3105243', '2024-06-08', 'Baik', '2024-05-31 06:26:46'),
	('RN20240603546', 'PJM3105241', '2024-06-08', 'Baik', '2024-05-31 07:12:20'),
	('RN202406063454', 'PJM3105241', '2024-06-09', 'Baik', '2024-05-31 07:18:00'),
	('RN2024060647', 'PJM3105243', '2024-06-08', 'Baik', '2024-05-31 06:28:37'),
	('RN20240608', 'PJM3105243', '2024-06-08', 'Baik', '2024-05-31 04:49:58'),
	('RN20240677777', 'PJM3105243', '2024-06-08', 'Baik', '2024-05-31 07:05:40');

-- Dumping structure for table backend_test.loan
CREATE TABLE IF NOT EXISTS `loan` (
  `code` varchar(40) NOT NULL,
  `member_id` varchar(40) DEFAULT NULL,
  `book_id` varchar(40) DEFAULT NULL,
  `loan_date` date DEFAULT NULL,
  `due_date` date DEFAULT NULL,
  `fine` int DEFAULT NULL,
  `loan_status` enum('Aktif','Kembali','Diperpanjang') DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table backend_test.loan: ~4 rows (approximately)
REPLACE INTO `loan` (`code`, `member_id`, `book_id`, `loan_date`, `due_date`, `fine`, `loan_status`, `created_at`) VALUES
	('PJM3105241', 'MB120524', 'BK2024', '2024-05-31', '2024-06-07', NULL, 'Aktif', '2024-05-30 18:22:46'),
	('PJM3105242', 'MB120524', 'BK2101', '2024-05-31', '2024-06-07', NULL, 'Aktif', '2024-05-31 02:59:24'),
	('PJM310524234', 'MB10229', 'BK2019', '2024-05-31', '2024-06-07', NULL, 'Kembali', '2024-05-31 06:14:28'),
	('PJM3105243', 'MB120524', 'BK2020', '2024-05-31', '2024-06-07', NULL, 'Kembali', '2024-05-31 03:01:47');

-- Dumping structure for table backend_test.members
CREATE TABLE IF NOT EXISTS `members` (
  `code` varchar(40) NOT NULL,
  `name` varchar(200) NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- Dumping data for table backend_test.members: ~4 rows (approximately)
REPLACE INTO `members` (`code`, `name`, `created_at`) VALUES
	('M4783274', 'Evan', '2024-05-30 09:38:19'),
	('MB010524', 'Solihin', '2024-05-30 04:44:47'),
	('MB10229', 'Budiman', '2024-05-30 09:40:15'),
	('MB120524', 'Louis Jeckture', '2024-05-30 04:54:27');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
