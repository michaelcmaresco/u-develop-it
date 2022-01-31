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