-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: nestjs
-- ------------------------------------------------------
-- Server version	5.5.5-10.11.2-MariaDB-1:10.11.2+maria~ubu2204

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_5c1cf55c308037b5aca1038a131` (`userId`),
  CONSTRAINT `FK_5c1cf55c308037b5aca1038a131` FOREIGN KEY (`userId`) REFERENCES `user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Post1 Title','Post4 zz',15),(8,'Post1 Title','Post1 bbb',14),(9,'Post2 Title','Post2 zzz',14),(10,'Post3 Title','Post3 fff',15),(11,'Post4','',16),(12,'Post5','',17),(13,'Post6','',18),(14,'Post7','',19),(15,'Post8','',20),(16,'Post9','',21),(17,'Post10','',22);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_postreply`
--

DROP TABLE IF EXISTS `post_postreply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_postreply` (
  `postReplyId` int(11) NOT NULL,
  `postId` int(11) NOT NULL,
  PRIMARY KEY (`postReplyId`,`postId`),
  KEY `FK_02ed2f0b5c847809c651d8928d1` (`postId`),
  CONSTRAINT `FK_02ed2f0b5c847809c651d8928d1` FOREIGN KEY (`postId`) REFERENCES `post` (`id`),
  CONSTRAINT `FK_02ed2f0b5c847809c651d8928d2` FOREIGN KEY (`postReplyId`) REFERENCES `post_reply` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_postreply`
--

LOCK TABLES `post_postreply` WRITE;
/*!40000 ALTER TABLE `post_postreply` DISABLE KEYS */;
INSERT INTO `post_postreply` VALUES (1,8),(2,8),(3,9),(4,9),(5,10),(6,10),(7,11),(8,12),(9,13),(10,14),(11,15),(12,16),(13,17);
/*!40000 ALTER TABLE `post_postreply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post_reply`
--

DROP TABLE IF EXISTS `post_reply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post_reply` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `postId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_02ed2f0b5c847809c651d8928d0` (`postId`),
  CONSTRAINT `FK_02ed2f0b5c847809c651d8928d0` FOREIGN KEY (`postId`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post_reply`
--

LOCK TABLES `post_reply` WRITE;
/*!40000 ALTER TABLE `post_reply` DISABLE KEYS */;
INSERT INTO `post_reply` VALUES (1,'aaa',8),(2,'jjj',8),(3,'nnn',9),(4,'hhh',9),(5,'bbb',10),(6,'iii',10),(7,'fff',11),(8,'ggg',12),(9,'ddd',13),(10,'eee',14),(11,'kkk',15),(12,'ccc',16),(13,'mmm',17);
/*!40000 ALTER TABLE `post_reply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (14,'User1','u1',1),(15,'User2','u2',3),(16,'User3','u3',5),(17,'User4','u4',7),(18,'User5','u5',9),(19,'User6','u6',2),(20,'User7','u7',4),(21,'User8','u8',6),(22,'User9','u9',8);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'nestjs'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-05 10:10:34
