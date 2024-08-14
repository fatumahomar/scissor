Scissor: An URL Shortener App 

What’s This App About?

Ever had a super long URL that’s hard to share or remember? This app helps you turn that into a short, easy-to-share link. It also lets you create a QR code for the link, track how many times it’s been clicked, and even customise the shortened link if you like. We are not using any frontend library like React to keep it simple, because it's just a one page app and there is not much that React can help with, instead we are using EJS template library to handle frontend.

The Tools Behind the Scene
1. Node.js: 
It is a server side JS runtime. Think of this as the core engine that powers the app. It lets you run JavaScript on the server, handling everything behind the scenes.
2. Express: 
This is a node js framework that makes it easy to build the app's routes, managing how data moves around.
3. TypeScript: 
This adds some extra structure to the JavaScript code, helping catch mistakes early and making your code more predictable.
4. Mongoose: 
Mongoose is a js library that connects the app to a MongoDB database, making it simple to save, find, and update your data.
5. MongoDB: 
It is a NoSql database. This is where all the data lives. It stores everything in a flexible, document-based format, which works great for apps like this.
6. EJS: 
This template engine helps turn data into HTML, which is what the browser understands. It mixes JavaScript with HTML to create dynamic pages.
7. jQuery: 
It is a famous Js library that adds interactivity to web pages. This library simplifies JavaScript, especially when handling user interactions on the web page.
8. DataTables: 
It is Js library to handle tables on the webpage. When you’ve got a table of data, DataTables makes it interactive—letting users sort, search, and paginate easily.
9. QR Code Generator: 
This small library creates QR codes, which can be scanned to open a URL directly on a smartphone.

How It All Works
1. The Homepage:
 You’ll land on a straightforward page where you can paste in a long URL. If you want, you can add a custom domain to make the link more personal.
 After clicking the button, the app shortens the URL and generates a QR code, making it easy to share the link.
 Below the form, you’ll see a table showing all the links you’ve shortened, along with details like when they were last used and how many times they’ve been clicked.
2. The Server:
 The app runs on a server powered by Node.js and Express. This server handles all the incoming requests, serving up pages and data as needed.
 It’s connected to a MongoDB database, which stores all the URLs and related data.
3. Validating URLs:
 Before creating a short link, the app checks to make sure the URL is valid and accessible.
 If everything checks out, it generates a short version of the URL. You can also add a custom domain to make the link more unique.
4. Using a Shortened URL:
 When someone clicks on your shortened link, the app looks it up in the database to figure out where it should redirect.
 The app tracks how often the link is used and might even rate limit if the link is clicked too frequently.
 Otherwise, the app quickly redirects the user to the original, longer URL.

Setting Up and Running the App on Your Machine
1. Prerequisites:
 Node.js: You’ll need Node.js installed on your machine. You can download it from here.
 MongoDB: Make sure MongoDB is installed and running on your machine. If you need to install it, follow the instructions here.
/src folder contains the source code in typescript.
/dist folder contains the files after compilation from TS to Js that will run on the server.
2. Getting the Code:
 Clone the app’s code from the repository. If you have Git installed, you can do this by running:
     
     git clone https://github.com/fatumahomar/scissor.git
   
3. Installing Dependencies:
 Open your terminal or command prompt, navigate to the project’s root directory, and run the following command to install the necessary packages:
     
     npm install
     
4. Configuring the Database:
 Ensure your MongoDB server is running. You can start it using:
     
     sudo systemctl start mongod
     
 By default, the app will connect to a MongoDB instance running on `localhost` with the default port `27017`. You can change this in the configuration file if needed.
5. Running the App:
 Once everything is set up, you can start the app by running:
     
     npm start
     
 The server should now be running on `http://localhost:8000`.
6. Accessing the App:
 Open your web browser and go to `http://localhost:8000`. You should see the homepage where you can start shortening URLs!

The Big Picture
This app makes sharing long URLs easier, adding features like tracking and customization to give you more control. It’s built using a combination of modern tools and technologies, making it efficient and user-friendly. Whether you’re looking to shorten a link, customise it, or just keep track of how often it’s used, this app has everything you need.

