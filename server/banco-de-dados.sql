SET NAMES utf8mb4;
DROP DATABASE IF EXISTS neo_turismo;
CREATE DATABASE neo_turismo CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE neo_turismo;

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  descricao TEXT NOT NULL,
  icone VARCHAR(50) DEFAULT 'mapa'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE atracoes (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(120) NOT NULL,
  descricao TEXT NOT NULL,
  localizacao VARCHAR(150) NOT NULL,
  categoria VARCHAR(100) NOT NULL,
  imagem VARCHAR(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE mensagens (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(120) NOT NULL,
  mensagem TEXT NOT NULL,
  criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO categorias (nome, descricao, icone) VALUES
('Patrimônio Histórico', 'Igrejas centenárias, casarões e monumentos que contam a história de Neópolis.', 'historico'),
('Natureza e Rio', 'Mirantes, praias fluviais e passeios às margens do Rio São Francisco.', 'natureza'),
('Cultura e Festas', 'Tradições populares, artesanato local e manifestações culturais ribeirinhas.', 'cultura');

INSERT INTO atracoes (nome, descricao, localizacao, categoria, imagem) VALUES
(
  'Orla do Rio São Francisco',
  'Espaço de lazer às margens do Velho Chico com vista panorâmica, quiosques e passeios de barco.',
  'Centro Ribeirinho, Neópolis - SE',
  'Natureza e Rio',
  '/imagem/orla.jpg'
),
(
  'Igreja Matriz de Santo Antônio',
  'Templo histórico no coração da cidade, marco arquitetônico e religioso da região do Baixo São Francisco.',
  'Praça Monsenhor José Moreno, Centro - Neópolis',
  'Patrimônio Histórico',
  '/imagem/igreja.jpg'
),
(
  'Mirante do Alto da Matriz',
  'Ponto elevado com vista privilegiada para o encontro das águas, ilhas fluviais e o pôr do sol.',
  'Alto da Matriz, Neópolis - SE',
  'Natureza e Rio',
  '/imagem/mirante.jpg'
),
(
  'Festa de Santo Antônio e Tradições',
  'Celebração tradicional que reúne música, gastronomia típica e manifestações folclóricas locais.',
  'Centro Histórico, Neópolis - SE',
  'Cultura e Festas',
  '/imagem/festa.jpg'
);