Notes:

SQL : Module 12
    - Structured Query Language

    We are aiming to build a command line application to manage a comapny's employee database 

    What we will accomplish
        - Configure your Node.js application to connect to a MySQL database.

        - Create and drop databases and tables.

        - Use CRUD (create, read, update, and delete) methods to work with persistent data.

        - Create schema and seed files for the development of your application.

        - Write join statements to establish relations between data in three separate tables using primary and foreign keys.


    What You Will Learn
        By completing this module, you'll learn how to:

            - Configure a Node.js application to connect to a SQL instance.

            - Create and drop databases and tables.

            - Explain and execute CRUD methods.

            - Create schema and seed files for development and production.

            - Write join statements to establish relations between data in one or more tables using primary and foreign keys.

            - Explain the use and importance of prepared statements.


CRUD
Create - read - update - delete

Goals for this weeks challenge 

    Your Task
        Developers frequently have to create interfaces that allow non-developers to easily view and interact with information stored in databases. These interfaces are called content management systems (CMS). Your assignment this week is to build a command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

        Because this application won’t be deployed, you’ll also need to create a walkthrough video that demonstrates its functionality and all of the following acceptance criteria being met. You’ll need to submit a link to the video and add it to the README of your project.

        Content Management Systems (allows people to view data in an effective/ meaningful way.

        /user story
            AS A business owner
                I WANT to be able to view and manage the departments, roles, and employees in my company
                SO THAT I can organize and plan my business

        /Acceptance Criteria
            GIVEN a command-line application that accepts user input
            WHEN I start the application
            THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
            WHEN I choose to view all departments
            THEN I am presented with a formatted table showing department names and department ids
            WHEN I choose to view all roles
            THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
            WHEN I choose to view all employees
            THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
            WHEN I choose to add a department
            THEN I am prompted to enter the name of the department and that department is added to the database
            WHEN I choose to add a role
            THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
            WHEN I choose to add an employee
            THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
            WHEN I choose to update an employee role
            THEN I am prompted to select an employee to update and their new role and this information is updated in the database
            

            Following steps for this lesson
        
                1. Set up the project files. We'll start by creating a GitHub repository and setting up the folder structure.
                2. Create the database and candidates table. We’ll connect to MySQL and create the first database. We’ll then add a table to the database to hold the data for the candidates.
                3. Populate candidates table with data. The next step is to add data about the candidates to the table.
                4. Save queries in schema and seed files. Create schema and seed files so that other developers can automatically create the database structure and pre-populate it with data from the command line. 

                Any "db" folders will be representative of a "database" 

                    A database is a collection of interrelated data. This data is stored in one or more tables that are related to one another.

                    A table is composed of rows and columns. A column represents a field. A row represents a record.

                    A query is a request for data from a database table or a combination of tables.

                    1. Given the following channels table, answer the questions:

                        name	subject	subscribers	total_views	post_frequency	sponsors	id
                        2K4U	gaming	434,924	1,323,424	weekly	EA	1
                        Home Tech	home	23,524	228,797	monthly	Amazon	2
                        Pinnacle Point	tech	38,671	428,797	weekly	Skins	3
                        Goose	bouldering	7,827	83,126	monthly	NULL	4
                        15 min Keto	food	523,342	1,826,826	weekly	Amazon	5 
                    2. Which SQL query would return records for Home Tech and Goose?


                        SELECT * FROM channels WHERE subscribers > 20000;

                        SELECT * FROM channels WHERE subscribers > 20000;

                        SELECT * FROM channels WHERE sponsor = "Amazon";

                        SELECT * FROM channels WHERE sponsor = "Amazon";

                        SELECT * FROM channels WHERE post_frequency = "monthly";

                        SELECT * FROM channels WHERE post_frequency = "monthly";

                        SELECT * FROM channels WHERE id = 2;

                        SELECT * FROM channels WHERE id = 2;
                        Yes, only Home Tech and Goose have a post_frequency value of "monthly".
                    3. What would be the best syntax to use to update 2K4U's subscriber count?


                        UPDATE channels SET subscribers = 500000 WHERE id = 1;

                        UPDATE channels SET subscribers = 500000 WHERE id = 1;

                        UPDATE channels SET subscribers = 500000 WHERE name = "2K4U";

                        UPDATE channels SET subscribers = 500000 WHERE name = "2K4U";

                        UPDATE channels SET subscribers = 500000 WHERE subject = "gaming";

                        UPDATE channels SET subscribers = 500000 WHERE subject = "gaming";
                        Yes, updating by id would ensure that only one record is changed.
                    4. How would the sponsors column have most likely been defined in the schema?


                        sponsors VARCHAR(30) NOT NULL

                        sponsors VARCHAR(30) NOT NULL

                        sponsors VARCHAR(5) NOT NULL

                        sponsors VARCHAR(5) NOT NULL

                        sponsors VARCHAR(30)

12.2

    In this lesson, we'll achieve the following:

        Connect to a MySQL database with a Node.js application.

        Execute SQL queries in the Express.js routes using MySQL methods.

        Test the API endpoint using Insomnia and the browser.


        Which of the following gameplans do you think is the best way to tackle this lesson?

            1. Set up the Node.js application with MySQL. Connect to the MySQL database in the Node.js application.
            2. Build the database calls. Use mysql2 to make calls to the database to execute the SQL queries.
            3. Create the GET routes. Use Express.js to build the GET routes to perform the read operations.
            4. Create the DELETE route. Use Express.js to build the DELETE routes to perform the delete operations.
            5. Create the POST route. Use Express.js to build the POST routes to perform the create operations.
            6. Save your progress with Git. Finally, we’ll need to close the corresponding GitHub issue.\

            mysql2 : allows us to connect to the MySql database and execute the SQL commands on the database.

            to exit mysql : quit; or exit; 

12.2

    Questions:
        1. Which SQL query will return all of the candidates who are not industry connected?


            SELECT * FROM candidates where industry_connected;.

            CORRECT : SELECT * FROM candidates WHERE industry_connected = 0;

            SELECT * FROM candidates WHERE industry_connected = 1;

        2. Which code block is the correct way to set up a SQL query with ? placeholders?


            const sql = `INSERT INTO pets (?, ?) VALUES(?, ?)`;
            const params = {name: 'Whiskers', age: 7};

            const sql = `INSERT INTO pets (?, ?) VALUES(?, ?)`; 
            const params = {name: 'Whiskers', age: 7};

            const sql = `INSERT INTO pets (?, ?) VALUES(?, ?)`;
            const params = ['Whiskers', 7];

            CORRECT :       const sql = `INSERT INTO pets (name, age) VALUES(?, ?)`;
                            const params = {name: 'Whiskers', age: 7};


        3. What's wrong with the following code?

            app.delete('/api/candidate/:id', (req, res) => {
            const sql = `DELETE FROM candidates WHERE id = ?`;

            db.query(sql, req.params.id, (err, result) => {
                if (err) {
                res.status(400).json({ error: res.message });
                }
                res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
                });
            });
            });


            The status code should be 500 .

            CORRECT : There's nothing preventing the deletion of a candidate that doesn't exist.

            It's missing the params variable that would allow the prepared statement to work correctly.
