-- MySQL Script generated by MySQL Workbench
-- Thu Oct 13 18:54:25 2022
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema MetaViews
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `MetaViews` ;

-- -----------------------------------------------------
-- Schema MetaViews
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `MetaViews` DEFAULT CHARACTER SET utf8 ;
USE `MetaViews` ;

-- -----------------------------------------------------
-- Table `MetaViews`.`Midia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Midia` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Midia` (
  `idMidia` INT NOT NULL AUTO_INCREMENT,
  `duracao` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `tipo` TINYINT NOT NULL,
  `classificacaoIndicatica` TINYINT(1) NOT NULL,
  `sinopse` MEDIUMTEXT NOT NULL,
  `dataLancamento` DATE NOT NULL,
  PRIMARY KEY (`idMidia`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idMidia_UNIQUE` ON `MetaViews`.`Midia` (`idMidia` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Usuario` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Usuario` (
  `idUsuario` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(180) NOT NULL,
  `idade` TINYINT(1) NULL,
  `senha` VARCHAR(45) NOT NULL,
  `nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idUsuario`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `idUsuario_UNIQUE` ON `MetaViews`.`Usuario` (`idUsuario` ASC) VISIBLE;

CREATE UNIQUE INDEX `email_UNIQUE` ON `MetaViews`.`Usuario` (`email` ASC) VISIBLE;

CREATE UNIQUE INDEX `nome_UNIQUE` ON `MetaViews`.`Usuario` (`nome` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Genero`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Genero` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Genero` (
  `idGenero` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idGenero`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Nome_UNIQUE` ON `MetaViews`.`Genero` (`Nome` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Plataforma`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Plataforma` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Plataforma` (
  `idPlataforma` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idPlataforma`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Nome_UNIQUE` ON `MetaViews`.`Plataforma` (`Nome` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Diretor`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Diretor` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Diretor` (
  `idDiretor` INT NOT NULL AUTO_INCREMENT,
  `Nome` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDiretor`))
ENGINE = InnoDB;

CREATE UNIQUE INDEX `Nome_UNIQUE` ON `MetaViews`.`Diretor` (`Nome` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Avalia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Avalia` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Avalia` (
  `Usuario_idUsuario` INT NOT NULL,
  `Midia_idMidia` INT NOT NULL,
  `Nota` INT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `Midia_idMidia`),
  CONSTRAINT `fk_Usuario_has_Midia_Usuario1`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `MetaViews`.`Usuario` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Usuario_has_Midia_Midia2`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `MetaViews`.`Midia` (`idMidia`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Usuario_has_Midia_Midia2_idx` ON `MetaViews`.`Avalia` (`Midia_idMidia` ASC) VISIBLE;

CREATE INDEX `fk_Usuario_has_Midia_Usuario1_idx` ON `MetaViews`.`Avalia` (`Usuario_idUsuario` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Dirige`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Dirige` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Dirige` (
  `Midia_idMidia` INT NOT NULL,
  `Diretor_idDiretor` INT NOT NULL,
  PRIMARY KEY (`Midia_idMidia`, `Diretor_idDiretor`),
  CONSTRAINT `fk_Midia_has_Diretor_Midia1`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `MetaViews`.`Midia` (`idMidia`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Midia_has_Diretor_Diretor1`
    FOREIGN KEY (`Diretor_idDiretor`)
    REFERENCES `MetaViews`.`Diretor` (`idDiretor`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Midia_has_Diretor_Diretor1_idx` ON `MetaViews`.`Dirige` (`Diretor_idDiretor` ASC) VISIBLE;

CREATE INDEX `fk_Midia_has_Diretor_Midia1_idx` ON `MetaViews`.`Dirige` (`Midia_idMidia` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Possui`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Possui` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Possui` (
  `Midia_idMidia` INT NOT NULL,
  `Plataforma_idPlataforma` INT NOT NULL,
  PRIMARY KEY (`Midia_idMidia`, `Plataforma_idPlataforma`),
  CONSTRAINT `fk_Midia_has_Plataforma_Midia1`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `MetaViews`.`Midia` (`idMidia`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Midia_has_Plataforma_Plataforma1`
    FOREIGN KEY (`Plataforma_idPlataforma`)
    REFERENCES `MetaViews`.`Plataforma` (`idPlataforma`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Midia_has_Plataforma_Plataforma1_idx` ON `MetaViews`.`Possui` (`Plataforma_idPlataforma` ASC) VISIBLE;

CREATE INDEX `fk_Midia_has_Plataforma_Midia1_idx` ON `MetaViews`.`Possui` (`Midia_idMidia` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Pertence`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Pertence` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Pertence` (
  `Midia_idMidia` INT NOT NULL,
  `Genero_idGenero` INT NOT NULL,
  PRIMARY KEY (`Midia_idMidia`, `Genero_idGenero`),
  CONSTRAINT `fk_Midia_has_Genero_Midia1`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `MetaViews`.`Midia` (`idMidia`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Midia_has_Genero_Genero1`
    FOREIGN KEY (`Genero_idGenero`)
    REFERENCES `MetaViews`.`Genero` (`idGenero`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Midia_has_Genero_Genero1_idx` ON `MetaViews`.`Pertence` (`Genero_idGenero` ASC) VISIBLE;

CREATE INDEX `fk_Midia_has_Genero_Midia1_idx` ON `MetaViews`.`Pertence` (`Midia_idMidia` ASC) VISIBLE;


-- -----------------------------------------------------
-- Table `MetaViews`.`Usuario_has_Midia`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `MetaViews`.`Usuario_has_Midia` ;

CREATE TABLE IF NOT EXISTS `MetaViews`.`Usuario_has_Midia` (
  `Usuario_idUsuario` INT NOT NULL,
  `Midia_idMidia` INT NOT NULL,
  PRIMARY KEY (`Usuario_idUsuario`, `Midia_idMidia`),
  CONSTRAINT `fk_Usuario_has_Midia_Usuario2`
    FOREIGN KEY (`Usuario_idUsuario`)
    REFERENCES `MetaViews`.`Usuario` (`idUsuario`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_Usuario_has_Midia_Midia1`
    FOREIGN KEY (`Midia_idMidia`)
    REFERENCES `MetaViews`.`Midia` (`idMidia`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;

CREATE INDEX `fk_Usuario_has_Midia_Midia1_idx` ON `MetaViews`.`Usuario_has_Midia` (`Midia_idMidia` ASC) VISIBLE;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
