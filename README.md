# Nodejs and MySQL
In this tutorial we are going to start MySQL database instance using docker-compose. Perfrom basic opertaions like create database, create table, insert data , delete data and drop table etc.
# Install MySQL server using docker-compose
Clone the repo

    https://github.com/balajich/nodejs-mysql.git
Run MySQL database using docker-compose. The below command runs MySQL in detached mode. Details are

Proptert|value
---|---
username|root
passwor|rootpass
port|3306
volume|/var/lib/mysql

# Install MySQL Driver for node js
    npm install mysql
# Nodje Scripts to 
# Refernces
    https://www.w3schools.com/nodejs/nodejs_mysql.asp