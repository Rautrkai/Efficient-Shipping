CREATE TABLE cities (
	    id INT PRIMARY KEY AUTO_INCREMENT,
	    city_name VARCHAR(255) NOT NULL,
	    latitude DOUBLE(9, 6) NOT NULL,
	    longitude DOUBLE(9, 6) NOT NULL
	);



INSERT INTO cities (city_name, latitude, longitude)
VALUES
    ('Mumbai', 19.0760, 72.8777),
    ('Pune', 18.5204, 73.8567),
    ('Nagpur', 21.1458, 79.0882),
    ('Nashik', 20.0059, 73.7798),
    ('Kolhapur', 16.7050, 74.2433),
    ('Dhule', 20.9042, 74.7748);