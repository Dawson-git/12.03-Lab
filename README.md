# CS208 Full Stack Final Project - Donut Shop Application

- Name: Dawson Gardels
- GitHub: [https://github.com/Dawson-git/12.03-Lab](https://github.com/Dawson-git/12.03-Lab)
- Term: Spring 2026

## Project Description

This is my full-stack application for CS208, built with Node.js, Express, and
MariaDB (MySQL). It is a simple TODO application that allows users to manage
tasks online. The base features include the ability to add and remove tasks.
The features I added include the ability to edit tasks, mark tasks as complete
or incomplete, reject blank task inputs, and CSS styling to enhance the
appearance of the web page.

## Install the Database

To set up the database, run the `install_db.sh` script in the setup_scripts
directory. This script will install MariaDB and start the server running. You
only need to run this script once per Codespace.

```bash
./setup_scripts/install_db.sh
```

## Create the Database Tables

Create the initial tables by running the following command:

```bash
sudo mysql -u root -p < ./setup_scripts/create_demo_table.sql
```

## Install Dependencies

Install the required dependencies using npm:

```bash
npm install
```

## Run the Application

Start the application using the following command:

```bash
npm start
```

## Access the Application

On Codespaces, you can access the application by forwarding port 3000. Open the
forwarded port in your browser to view the application.