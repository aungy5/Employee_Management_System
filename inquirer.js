const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const consoleTable = require("console.table");
const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "rootr00t!",
    database: "employee_db"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }

    initPrompt();
})

connection.query = util.promisify(connection.query);

const initPrompt = () => {
    return inquirer.prompt([
      {
        type: 'list',
        name: 'init',
        message: "What would you like to do?",
        choices: [
            "View All Employees",
            "View All Employees by Department",
            "View All Employees by Manager",
            "Add Employee",
            "Add Department",
            "Add Role",
            "Remove Employee",
            "Update Employee Role",
            "Update Employee Manager"
        ]
      }
    ]).then(answers => {
        if (answers.init === "View All Employees") {
          showAllEmployees();
        } 
        else if (answers.init === "View All Employees by Department") {
          showAllEmployeesByDept();
        }
        else if (answers.init === "View All Employees by Manager") {
          showAllEmployeesByManager();
        }
        else {
          generateHTML();
        }
      })
      .catch(err => {
        if (err) {
          console.log(err)
        }
      })
    };
    //initPrompt();
    
    // view all employees in the database
    const showAllEmployees = () => {
        let results = connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.dept_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id;",

        function (error, results) {
            if (error) throw error
            console.table(results)
        })
        //initPrompt();
    };

    const showAllEmployeesByDept = () => {
        let results = connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.dept_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY department.id;",

        function (error, results) {
            if (error) throw error
            console.table(results)
        })
        //initPrompt();
    };

    const showAllEmployeesByManager = () => {
        let results = connection.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.dept_name, roles.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id ORDER BY manager.id;",

        function (error, results) {
            if (error) throw error
            console.table(results)
        })
        //initPrompt();
    };