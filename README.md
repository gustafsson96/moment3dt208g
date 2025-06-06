# Moment3dt208g

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8 and makes up my work for Moment 3 - Angular I in the course "Programmering i TypeScript" (DT208G) at Mittuniversitet.
<br><br>
Link to the live site: **[Moment3 DT208G](https://dt208gmoment3.netlify.app/home)**

## Description
This project is a simple website created to fulfill the requirements for this assignment. It is an Angular site with a component structure that consists of three pages. One page is dedicated to converting values. There are three images on the site, a functioning navigation bar created using Angulars router module and additional components have been created and inserted (the tools to convert values for example). The design is responsive and has been created using CSS both in the general styles.css file and in the individual components. 

## Features
* Home: Three images of cats.
* Convert: Temperature conversion (Fahrenheit ↔ Celsius).
* Convert: Length conversion (Feet ↔ Meters).
* Convert: Two-way data binding.
* About: Information about the assignment and my work (in Swedish).
* Component based structure.
* Responsive design.

## Technologies Used

* Angular (with standalone components)
* HTML
* CSS
* TypeScript

## Run Locally
1. Clone the repository: git clone https://github.com/gustafsson96/moment3dt208g.git 
2. Install necessary dependencies by running: npm install
3. To start a local development server, run: ng serve

## Deployment
This site has been deployed using **[Netlify](https://www.netlify.com)** using the steps presented below and a link to the live site can be found here: **[Moment3 DT208G](https://dt208gmoment3.netlify.app/home)**. 

1. Build the Angular app by running the command: ng build
2. Add a file called netlify.toml to the root of the project to set redirects from = "/*" to ="/index.html".
3. Ensure the /dist catalouge is not included in .gitignore.
4. Navigate to Netlify and log in or sign up. 
5. Click "Add new site" > "Import an existing project" > Select GitHub and the projects repository. 
6. Set the following:
* Site name (optional)
* Branch to deploy = master
* Build command = ng build
* Publish directory = dist/moment3dt208g/browser
7. Click on the deploy button. 