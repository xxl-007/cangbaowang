/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : cangbaoshop

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-18 11:15:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for cbshop
-- ----------------------------
DROP TABLE IF EXISTS `cbshop`;
CREATE TABLE `cbshop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL,
  `adress` varchar(255) NOT NULL,
  `price2` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of cbshop
-- ----------------------------
INSERT INTO `cbshop` VALUES ('3', '白唇鹿露酒', '35.00', 'images/k_03.jpg', '45.00');
INSERT INTO `cbshop` VALUES ('1', '藏家糖袋装', '36.00', 'images/k_04.jpg', '43.00');
INSERT INTO `cbshop` VALUES ('4', '风味牦牛干', '55.00', 'images/k_05.jpg', '60.00');
INSERT INTO `cbshop` VALUES ('5', '黑木耳', '45.00', 'images/k_08.jpg', '50.00');
INSERT INTO `cbshop` VALUES ('6', '黑枸杞', '10.00', 'images/k_06.jpg', '16.00');
INSERT INTO `cbshop` VALUES ('2', '果冻', '17.00', 'images/k_07.jpg', '21.00');
