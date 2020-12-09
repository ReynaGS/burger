
USE beq5rfkcnxwc7yta ;

CREATE TABLE burgers (
  -- TABLE CODE TO GO HERE
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(255) NOT NULL,
  devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);
