INSERT INTO department (id, dept_name)
VALUES ('1','Sales'),('2','Engineering'),('3','Finance'),('4','Legal');

INSERT INTO roles (title, salary, department_id)
VALUES ('Sales Lead','100000','1'),
('Sales Rep','80000','1'),
('Sales Engineer','90000','1'),
('Lead Engineer','150000','2'),
('Senior Engineer','120000','2'),
('Associate Engineer','100000','2'),
('Account Manager','160000','3'),
('Accountant','125000','3'),
('Legal Team Lead','250000','4'),
('Lawyer','190000','4');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Claude','Giroux','1', NULL),
('Travis','Konecny','2', 1),
('Sam','Morin','3', 1),
('Oskar','Lindblom','4', NULL),
('Travis','Sanheim','5', 4),
('Joel','Farabee','6', 4),
('Chuck','Fletcher','7', NULL),
('Morgan','Frost','8', 7),
('Kevin','Hayes','9', NULL),
('Melissa','Ungvary','10', 9);
