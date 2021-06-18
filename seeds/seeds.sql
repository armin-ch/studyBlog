CREATE TABLE user (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  username VARCHAR(40) NOT NULL,
  email VARCHAR(40) NOT NULL,
  password 
);

CREATE TABLE category (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  name VARCHAR(40) NOT NULL
);

CREATE TABLE post (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  title VARCHAR(40) NOT NULL,
  body VARCHAR(500000) NOT NULL,
  score INT NOT NULL,
  user_id INT NOT NULL,
  FOREIGN KEY (user_id) REFERENCES user (id),
  category_id INT NOT NULL,
  FOREIGN KEY (category_id) REFERENCES category (id)
);