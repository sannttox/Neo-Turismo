USE neo_turismo;

CREATE TABLE categorias (
  id INT AUTO_INCREMENT PRIMARY KEY,
  titulo VARCHAR(100) NOT NULL,
  descricao VARCHAR(255) NOT NULL,
  imagem VARCHAR(255) NOT NULL
);

INSERT INTO categorias (titulo, descricao, imagem) VALUES
(
  'Como Chegar',
  'Informações para planejar a chegada a Neópolis.',
  '/imagem/como-chegar.jpg'
),
(
  'Onde Ir',
  'Conheça locais históricos e paisagens da cidade.',
  '/imagem/onde-ir.jpg'
),
(
  'O que Fazer',
  'Descubra passeios, cultura e experiências locais.',
  '/imagem/oque-fazer.jpg'
),
(
  'Saiba Mais',
  'Explore outras informações sobre o destino.',
  '/imagem/saiba-mais.jpg'
);
