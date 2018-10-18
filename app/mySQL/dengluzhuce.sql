/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : dengluzhuce

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-10-18 11:16:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for zhucebiao
-- ----------------------------
DROP TABLE IF EXISTS `zhucebiao`;
CREATE TABLE `zhucebiao` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `mark` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of zhucebiao
-- ----------------------------
INSERT INTO `zhucebiao` VALUES ('1', 'xixi_001', '123', '1');
INSERT INTO `zhucebiao` VALUES ('2', 'xixi_002', '1232', '1');
INSERT INTO `zhucebiao` VALUES ('3', 'xixi_003', '1233', '1');
INSERT INTO `zhucebiao` VALUES ('4', 'xixi_004', '1234', '1');
INSERT INTO `zhucebiao` VALUES ('5', 'xixi_005', '1235', '1');
INSERT INTO `zhucebiao` VALUES ('6', 'xixi_006', '1236', '1');
INSERT INTO `zhucebiao` VALUES ('7', 'xixi_007', '1237', '1');
INSERT INTO `zhucebiao` VALUES ('8', 'xixi_008', '1238', '1');
INSERT INTO `zhucebiao` VALUES ('9', 'xiaohua', 'huahua', null);
INSERT INTO `zhucebiao` VALUES ('21', 'renlei', 'rl', null);
INSERT INTO `zhucebiao` VALUES ('22', 'xixixi', 'xxxxxxx', null);
INSERT INTO `zhucebiao` VALUES ('23', 'lan', 'lanlan', null);
INSERT INTO `zhucebiao` VALUES ('19', 'wuguikun', 'xxxsss', null);
INSERT INTO `zhucebiao` VALUES ('20', 'xuxiaoli', 'xxl', null);
INSERT INTO `zhucebiao` VALUES ('24', 'lan', 'lanlan', null);
INSERT INTO `zhucebiao` VALUES ('25', 'liutao', '123456', null);
