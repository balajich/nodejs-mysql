# Node.js and MySQL
In this tutorial we are going to start MySQL database instance using docker-compose. Perform basic operations like create database, create table, insert data , delete data and drop table etc using Node.js .
# Install MySQL server using docker-compose
Clone the repo

    https://github.com/balajich/Node.js-mysql.git
Run MySQL database using docker-compose. The below command runs MySQL in detached mode. Details are

Property|value
---|---
username|root
password|rootpass
port|3306
volume|/var/lib/mysql

# Install MySQL Driver for node js
    npm install mysql
# Node.js Scripts 

Script| Usage 
---|---
0_db_connection.js| Test connection to database
1_show_db.js| Lists databases
2_create_db.js| Create database named companydb
3_create_table.js| Create Table
4_db_insert.js | Insert data into table
5_db_select.js | Run select query
6_db_delete.js | Delete row
7_db_drop_table.js | Drop table
# Stop and delete database
    docker-compose down -v
# References
    https://www.w3schools.com/Node.js/Node.js_mysql.asp