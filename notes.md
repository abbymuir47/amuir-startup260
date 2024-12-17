# NOTES
## This is my notes file for the semester!
### Today I learned that md files have their own kind of syntax. I created my repository for my startup project!

### Web domain name notes:
- You can get the IP address for any domain name using the “dig” console function (one domain name can have multiple IP addresses in case the others don’t respond)
- Owner of the root domain can make as many subdomains as he/she wants
- “whois” console function gives you info about a domain/who owns it, etc
- DNS = domain name system, address(A)= domain name→ IP vs canonical name records (CNAME)= domain name → other domain name

###Simon HTML
used this command to deploy files: abbymuir@Abbys-Air-5 simon-html % ./deployFiles.sh -k /Users/abbymuir/Downloads/Inclass.pem -h abby-muir.click -s simon  

./deployFiles.sh -k ~//production.pem -h yourdomain.click -s startup


## NOTES FOR MIDTERM 1

<img width="458" alt="Screenshot 2024-10-21 at 6 48 15 PM" src="https://github.com/user-attachments/assets/f9c1e7b5-16e2-4280-a534-2964fd02c0c4">
<img width="331" alt="Screenshot 2024-10-21 at 6 50 38 PM" src="https://github.com/user-attachments/assets/60fffbf3-33a9-4b5d-aa0d-a1ea3d59164c">
<img width="342" alt="Screenshot 2024-10-21 at 6 51 05 PM" src="https://github.com/user-attachments/assets/f1aa0fde-2e54-4c1c-9ca1-65559177d730">
<img width="308" alt="Screenshot 2024-10-21 at 6 51 38 PM" src="https://github.com/user-attachments/assets/fddf120e-a638-43be-9112-896d66366fed">
<img width="332" alt="Screenshot 2024-10-21 at 6 52 46 PM" src="https://github.com/user-attachments/assets/0de3be60-8630-4262-8436-5516920342d9">
<img width="317" alt="Screenshot 2024-10-21 at 6 53 19 PM" src="https://github.com/user-attachments/assets/5195725e-dfe4-4d02-a900-96d209bc43cd">
<img width="269" alt="Screenshot 2024-10-21 at 6 53 42 PM" src="https://github.com/user-attachments/assets/98fb68af-03ef-4d05-8474-903651d528e8">
<img width="285" alt="Screenshot 2024-10-21 at 6 54 34 PM" src="https://github.com/user-attachments/assets/41a2f965-a6a1-4307-9050-26388b1161e3">
<img width="310" alt="Screenshot 2024-10-21 at 6 55 42 PM" src="https://github.com/user-attachments/assets/cc29d239-c0a0-4170-9759-af7a0d512883">
<img width="326" alt="Screenshot 2024-10-21 at 6 56 27 PM" src="https://github.com/user-attachments/assets/0c0800a1-beea-409c-8fc1-eed23d94eccb">
<img width="310" alt="Screenshot 2024-10-21 at 6 56 49 PM" src="https://github.com/user-attachments/assets/c4f0f565-e11a-4bc1-aba1-462855e82c7c">
<img width="318" alt="Screenshot 2024-10-21 at 6 57 26 PM" src="https://github.com/user-attachments/assets/f514c485-5295-437f-8707-06181f5c8c1b">
<img width="318" alt="Screenshot 2024-10-21 at 6 57 47 PM" src="https://github.com/user-attachments/assets/bbc5ecc8-b9cb-4f5c-a594-146d0dbc5a65">

# Questions

## 1. What does the link element do?
The `<link>` element is used to link external resources like stylesheets/favicons to an HTML document. It often defines the relationship between the current document and an external resource. It is an empty element, containing attributes only.

## 2. What does a div tag do?
The `<div>` tag is a block-level container used to group elements for styling or layout purposes. It doesn’t inherently have any semantic meaning.

## 3. What is the difference between the #title and .grid selector?
`#title` targets an element with the ID of "title" (unique, only applies to one element that has e.g., `<h1 id="title">...</h1>`), while `.grid` targets all elements with the class "grid" (multiple elements can share the same class, e.g., `<div class="grid">...</div>`).

## 4. What is the difference between padding and margin?
Padding is the space between an element's content and its border, pushing the content away from the edges of the element’s box. Margin is the space outside the border of the element, separating it from other elements, and pushes elements away from each other.

## 5. How will the images be displayed using flex?
Flexbox allows for responsive layouts. Images will be arranged according to the defined flex properties (e.g., `flex-direction`, `justify-content`, etc.). `flex: 0 50px` means it won’t grow, with a height of 50px. `flex: 1` means it will grow.

## 6. What does the following padding CSS do?
It specifies the inner space around an element's content. For example, `padding: 10px;` adds 10 pixels of space on all sides. 
- `padding: 10px 20px;` → 10px padding to top/bottom, 20px padding on left/right.
- `padding: 10px 20px 30px;` → 10 top, 20 left/right, 30 bottom.
- `padding: 10px 20px 30px 40px;` → top, right, bottom, left (clockwise). 
You can use various units like `20px`, `2em` (2x font size), `10%` (10% parent width), `5rem` (based on root size), `3vw` (based on viewport width).

## 7. What does the following code using arrow syntax function declaration do?
Arrow functions provide a concise syntax for writing function expressions. They also lexically bind `this`, meaning they do not have their own `this` context. Instead of writing `function() { ... }`, you can write `() => { ... }`. 
Example:
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
function debounce(delay, func) { let timeout; // To keep track of the timeout return function() { clearTimeout(timeout); // Clear previous timeout timeout = setTimeout(() => func(), delay); // Set new timeout }; } // Usage with scroll event window.addEventListener('scroll', debounce(500, () => { console.log('Executed an expensive calculation'); }));
```

## 8. What does the following code using map with an array output?
The map() function creates a new array populated with the results of calling a provided function on every element in the calling array. ex) console.log(a.map(i => i + i));

## 9. What does the following code output using getElementByID and addEventListener?
`This code typically sets up an event listener on an element, which will execute a specified function when a specific event (like a click) occurs. getElementById gets an HTML element by its ID and returns it as a JavaScript object - ex) const element = document.getElementById('myElement');         addEventListener - element.addEventListener('click', function() { console.log('Element was clicked!'); });`

## 10. What does the following line of Javascript do using a # selector?
A # selector typically selects an element by its ID. commonly used w. querySelector() - returns the element as an object if it exists, or if it doesn’t, returns null. Also getElementById(). For example, const element = document.querySelector('#myElement');

## 11. Which of the following are true? (mark all that are true about the DOM)
DOM = hierarchical representation of elements/their relationships in a web page. You can manipulate it using JavaScript. DOM is dynamic, can be modified after the page is loaded using JavaScript. All elements in the DOM are represented as objects. CSS styles aren’t part of the DOM structure itself, but they can be manipulated through the DOM. Events in the DOM can trigger Javascript functions. DOM isn’t the same as an HTML document, it’s an object-oriented model/representation of the HTML. You can access the DOM using the document object in JavaScript. DOM organizes HTML elements into tree structure-all elements in an HTML doc correspond to nodes in the DOM tree, document node at the top. You can also select elements using CSS selectors with querySelectorAll and access their text content with textContent or HTML content with innerHTML. Use insertChild() and appendChild() to create/append new elements. Also removeChild()

## 12. By default, the HTML span element has a default CSS display property value of:
Inline. (not a new line, only takes up as much width as necessary)

## 13. How would you use CSS to change all the div elements to have a background color of red?
div {background-color: red;}

## 14. How would you display an image with a hyperlink in HTML?
`<a href="url"><img src="image.jpg" alt="Description"></a>`

## 15. In the CSS box model, what is the ordering of the box layers starting at the inside and working out?
Content → Padding → Border → Margin.

## 16. Given the following HTML, what CSS would you use to set the text "trouble" to green and leave the "double" text unaffected?
You can use a class or ID to target "trouble" specifically. For example: `<p>This is a <span class="green-text">trouble</span> with double.</p> THEN .green-text {color: green;} OR .trouble {color: green;}`

## 17. What will the following code output when executed using a for loop and console.log?

## 18. How would you use JavaScript to select an element with the id of “byu” and change the text color of that element to green?
`document.getElementById("byu")  → if(element){element.style.color = "green";}`

## 19. What is the opening HTML tag for a paragraph, ordered list, unordered list, second level heading, first level heading, third level heading?
Paragraph: `<p> Ordered List: <ol> Unordered List: <ul> Second Level Heading: <h2> First Level Heading: <h1> Third Level Heading: <h3>`

## 20. How do you declare the document type to be HTML?
`<!DOCTYPE html>`

## 21. What is valid JavaScript syntax for if, else, for, while, switch statements?
`If statement: if (condition) { /* code */ } else { /* code */ }
For loop: for (let i = 0; i < 10; i++) { /* code */ }
While loop: while (condition) { /* code */ }
Switch statement:switch (expression) {case value1: break; case value2: break; default:}?`

## 22. What is the correct syntax for creating a JavaScript object?
`const obj = new Object({ a: 3 }); obj['b'] = 'fish'; obj.c = [1, 2, 3];`

## 23. Is it possible to add new properties to JavaScript objects?
Yes, you can add new properties dynamically.

## 24. If you want to include JavaScript on an HTML page, which tag do you use?
`<script> `

## 25. Given the following HTML, what JavaScript could you use to set the text "animal" to "crow" and leave the "fish" text unaffected?
`const element = document.getElementById("text"); // Replace the text "animal" with "crow" if (element) { element.textContent = element.textContent.replace("animal", "crow"); }`

## 26. Which of the following correctly describes JSON?
JSON (JavaScript Object Notation) is a lightweight data interchange format that is easy for humans to read and write and easy for machines to parse and generate. Easily convertible to and from JavaScript objects, usually an object of key-value pairs

## 27. What does the console command chmod, pwd, cd, ls, vim, nano, mkdir, mv, rm, man, ssh, ps, wget, sudo do?
These are Unix/Linux commands used for various file and system operations, such as changing permissions (chmod), displaying the current directory (pwd), navigating directories (cd), listing files (ls), editing files (vim/nano), creating directories (mkdir), moving files (mv), deleting files (rm), viewing manual pages (man), starting a remote shell (ssh), displaying processes (ps), downloading files (wget), and executing commands with elevated privileges (sudo).

## 28. Which of the following console command creates a remote shell session?
ssh.

## 29. Which of the following is true when the -la parameter is specified for the ls console command?
It lists all files (including hidden ones) in a detailed format (file type/permissions, #links, owner name, group name, file size, modification date/time, file/directory name)

## 30. Which of the following is true for the domain name banana.fruit.bozo.click, which is the top level domain, which is a subdomain, which is a root domain?
.click is the top-level domain (TLD), bozo.click = root domain, subdomain = any before the root - banana and fruit 

## 31. Is a web certificate necessary to use HTTPS?
Yes, a valid SSL/TLS certificate is required to establish an HTTPS connection.

## 32. Can a DNS A record point to an IP address or another A record?
A DNS A record points to an IP address, not to another A record.

## 33. Port 443, 80, 22 is reserved for which protocol?
Port 443 is for HTTPS (used for secure web traffic), port 80 is for HTTP (standard port for web traffic when using unsecured connections), and port 22 is for SSH (secure remote access/file transfer protocols like SCP and SFTP)

## 34. What will the following code using Promises output when executed?
pending, resolve to a value, reject with an error, or log the outcome based on how it is structured. Then, catch, and finally 



# NOTES FOR FINAL

# API Basics

### API
An **API** (Application Programming Interface) is like a function call that allows you to get data from another server.

### Endpoint
An **Endpoint** is the specific path where you send your API requests. For example, `/weather?city=NewYork`. Think of it as the URL of the service you're requesting.

### Request Methods
Common HTTP methods used in APIs are:

- **GET**: Retrieve data from the server (e.g., get weather data).
- **POST**: Send data to the server (e.g., create a new user).
- **PUT**: Update data on the server.
- **DELETE**: Remove data from the server.

### Parameters
You can send additional data with your request, often as part of the URL. For example: `?city=NewYork`.

### Response
The **Response** is the data or result you get back after making an API request. It is usually in a structured format like **JSON** or **XML**.

# 1 Default Ports for Protocols

- **HTTP**: Port 80
- **HTTPS**: Port 443
- **SSH**: Port 22

These are the default ports that these protocols use for communication unless otherwise specified.

### 2. What does an HTTP status code in the range of 300/400/500 indicate?

- **300–399 (Redirection):** Indicates that further action is required to fulfill the request (e.g., 301 Moved Permanently, 302 Found).
- **400–499 (Client Errors):** The request contains bad syntax or cannot be fulfilled due to client-side issues (e.g., 400 Bad Request, 404 Not Found).
- **500–599 (Server Errors):** The server failed to fulfill a valid request due to an error on the server side (e.g., 500 Internal Server Error, 502 Bad Gateway).

### 3. What does the HTTP header Content-Type allow you to do?

The **Content-Type** header informs the server or client about the type of data being sent. For example:
- **text/html** indicates the response is an HTML document.
- **application/json** indicates the data is in JSON format. This helps clients and servers interpret the data correctly.

HTTP headers tell the browser what kind of data is being sent (e.g., HTML, JSON) and how it should be processed or displayed.

Other HTTP headers:
- They help ensure secure connections, like forcing the browser to use HTTPS.
- They manage cookies for things like keeping you logged in and caching content to improve performance (`Cookie` header, `Set-Cookie`, `Cache-Control`).
- They also play a role in redirecting users when websites move to new locations (e.g., new URLs) with the `Location` header.

### 4. What does a "Secure cookie" / "Http-only cookie" / "Same-site cookie" do?

- **Secure cookie**: Ensures the cookie is only sent over HTTPS connections (encrypts the cookie during transit).
- **Http-only cookie**: Prevents client-side JavaScript from accessing the cookie (increases security against XSS attacks).
- **Same-site cookie**: Controls whether a cookie is sent along with cross-site requests. Can be set to **Strict**, **Lax**, or **None** to provide protection against Cross-Site Request Forgery (CSRF).

#### Same-site cookie options:
- **LAX**: If you're on `example.com` and click a link to `another-site.com`, the cookie from `example.com` would be sent because it's considered a "safe" cross-site request (e.g., normal navigation). But if a malicious website tried to send a request to `example.com` (a cross-site request), the cookie wouldn’t be sent.
- **STRICT**: If you're on `example.com` and click a link to `another-site.com`, the cookie will not be sent with the request, as it's considered a cross-site request.
- **NONE**: If you're using a service like Facebook Login or Google Analytics embedded on your site, the cookies related to these services will be sent even when users interact with different websites, so the service can remember the user across sites.

### 5. Express middleware: What will be the `console.log` output for an HTTP GET request with a URL path of `/api/document`?

Without the exact middleware code, it’s hard to be specific. But generally:

If the middleware logs the method and path (e.g., `console.log(req.method, req.path)`), the output for a **GET** request to `/api/document` would be:GET /api/document

#### Middleware:
Middleware is a layer that sits between the incoming request and the final response. It can modify data, perform actions, or make decisions about whether or not to allow the request to continue.

##### Typical middleware function structure:
javascript
function middleware(req, res, next) {
  // Perform something, modify req/res, or call next()
}
Built in function to serve static files: app.use(express.static('public'));
Example with curl:
If you run the following command to hit the route with curl:
Bash curl http://localhost:8080/store/provo The output in the terminal would be: json {"name":"provo"}

### 6. Express service: What does the following front-end JavaScript (fetch) return?

If the Express service is set up to return JSON or another response type, a fetch request will return the response data, which could be in various formats like JSON, text, or an error message.

Example: `fetch('/api/document')` may return a promise that resolves to the data from the Express API endpoint.

The `fetch` function makes HTTP requests from the frontend (browser) to the backend (server) and returns a Promise.

js
fetch(url, options)
  .then(response => response.json()) // Parse response body as JSON
  .then(data => console.log(data)) // Log the parsed JSON data
  .catch(error => console.error('Error:', error)); // Handle errors

GET request example: app.get('/api/data', (req, res) => { res.json({ message: 'Hello, world!' }); });       fetch('http://localhost:8080/api/data') .then(response => response.json()) .then(data => console.log(data)) // Expected output: { message: 'Hello, world!' } .catch(error => console.error('Error:', error));

Fetch function examples:
- GET request: Fetches data from the server (e.g., /api/data).
- POST request: Sends data to the server (e.g., creating or updating a resource).
- Error handling: Checks the response status to handle errors properly.
- Query parameters: Sends additional parameters in the URL to the server (e.g., /api/search?query=apple).
- DELETE request: Deletes a resource on the server.

### 7. MongoDB query: `{name: Mark}`

This query will find all documents where the `name` field is equal to `Mark`.

It would return all documents in the collection that match: {name: "Mark"}

### 8. How should user passwords be stored?

- **Hashing**: Store passwords in a **hashed** (not plain-text) format. Use a strong cryptographic hashing algorithm like **bcrypt**, **Argon2**, or **PBKDF2**.
  
- **Salting**: Add a **unique salt** (random value) to each password before hashing. This ensures that even identical passwords will have different hashes, making them harder to crack.

These practices protect user passwords by ensuring that even if the database is compromised, the actual passwords are not exposed.

### 9. WebSocket back-end and front-end code: What will the front-end log to the console?

**WebSocket** enables real-time two-way communication between the front-end (client) and back-end (server). Unlike HTTP, which follows a request-response model, WebSocket allows both the client and server to communicate independently and simultaneously after the connection is established.

In a WebSocket setup:

- The client can send messages to the server without waiting for the server to respond first.
- The server can also send messages to the client, and both can continue exchanging messages asynchronously.

#### Example:

**Client-side (Front-end) code:**
javascript
const socket = new WebSocket('ws://localhost:9900'); // Open WebSocket connection

// Event listener for when the client receives a message
socket.onmessage = (event) => { 
  console.log('received: ', event.data); // Log the message from the server 
};

// Send a message to the server
socket.send('I am listening'); // Client sends a message to the server

Server  side - connection event is triggered, and the server listens for messages from that client. When the server receives a message, it logs it and responds by sending a message back to the client ("I heard you say <message>"). The server also sends an initial greeting message to the client ('Hello WebSocket').
const { WebSocketServer } = require('ws');  // Import WebSocketServer from the 'ws' package

const wss = new WebSocketServer({ port: 9900 });  // Create WebSocketServer on port 9900

wss.on('connection', (ws) => {
  ws.on('message', (data) => {
    const msg = String.fromCharCode(...data);  // Decode the incoming message
    console.log('received: %s', msg);  // Log the message received from the client


    ws.send(`I heard you say "${msg}"`);  // Send a response to the client
  });


  ws.send('Hello WebSocket');  // Send a welcome message to the client
});
Example:
Front-end: socket.emit('message', 'Hello server');
Back-end: socket.on('message', (data) => { console.log(data); });
Front-end log: "Hello server"

### 10. What is the WebSocket protocol intended to provide?

The **WebSocket** protocol is designed to enable full-duplex (two-way) communication between a client (usually a browser) and a server. It is particularly suited for real-time, bidirectional communication, making it ideal for applications that require constant updates or interaction, such as:

- Chat applications
- Online games
- Live data updates

#### Main Features of WebSocket Protocol:

- **Full-Duplex Communication**:  
  Both the client and the server can send and receive messages simultaneously. This contrasts with the traditional request-response model of HTTP, where the client sends a request and waits for the server's response.

- **Persistent Connection**:  
  After the WebSocket connection is established, it remains open, enabling continuous communication between the client and server. This eliminates the need for repeated connection setups, which is typical with the stateless nature of HTTP.

- **Low Latency**:  
  WebSocket provides low-latency communication, which makes it perfect for real-time applications. This is essential in scenarios like:
  - Online gaming
  - Financial trading platforms
  - Live chat services

- **Bi-directional Communication**:  
  Both the client and server can independently send data to each other. This flexibility allows either party to initiate communication, making WebSockets a versatile choice for scenarios where both the client and server need to push updates to each other.

- **Efficiency**:  
  WebSockets minimize overhead by eliminating the need for headers, cookies, and multiple round trips. After the initial WebSocket handshake, the communication between client and server is streamlined and efficient. This is in contrast to techniques like polling, where the client frequently requests updates from the server.

#### Summary:
The WebSocket protocol is optimized for real-time, low-latency, bi-directional communication with a persistent connection, making it ideal for dynamic, interactive applications that require frequent data exchange between the client and server.

### 11. What do the following acronyms stand for?

- **JSX**:  
  *JavaScript XML* - A syntax extension for JavaScript, primarily used with React to describe the structure of the UI.

- **JS**:  
  *JavaScript* - A programming language used for both front-end and back-end web development.

- **AWS**:  
  *Amazon Web Services* - A cloud computing platform that provides a wide range of infrastructure services, including compute power, storage, and databases.

- **NPM**:  
  *Node Package Manager* - A tool used to manage JavaScript packages and dependencies, commonly used with Node.js projects.

- **NVM**:  
  *Node Version Manager* - A tool for managing multiple versions of Node.js on a single machine, allowing you to switch between versions as needed.

### 12. React component with parameters: What text content will the following React component generate?

If the React component uses props, the output depends on how the parameters (props) are passed into the component. Example:

function Welcome({ name }) {
  return <h1>Hello, {name}!</h1>;
}
If you render <Welcome name="John" />, the output will be:
Hello, John!

import React from 'react';

export default function NavButton({ text, url }) {
  return (
    <Button variant="primary" onClick={() => navigate(url)}>
      {text}
    </Button>
  );
}

### 13. What will be generated by a set of React components that include each other?

React components are often nested. The final rendered output is the combination of all the components, as they pass data and render child elements.

**Example:**
<App> (Root Component) 
├── <Header> (Child of App) 
├── <Main> (Child of App) 
│ └── <Content> (Child of Main) 
└── <Footer> (Child of App)

### 14. What does a React component with React.useState do?

`React.useState` is a hook that lets you add state to functional components.  
It allows you to create a state variable and provides a function to update that variable.
const [count, setCount] = useState(0); <- This creates a state variable count initialized to 0, and setCount is the function to update it
### How does useState work?

- **Initialization:** `useState(initialState)` initializes the state. The argument passed to `useState` is the initial value for the state variable.
- **Accessing State:** You can access the current value of the state variable by referencing `state`.
- **Updating State:** To update the state, you call the `setState` function. This triggers a re-render of the component with the updated state.

### 15. What are React Hooks used for?

React hooks allow you to use state and other React features in functional components (previously only possible in class components).

Common hooks include:
- `useState` for state management.
- `useEffect` for side effects (like fetching data).
- `useContext` for context API.

#### Class Components:
Class components are defined using JavaScript classes that extend from `React.Component`. They require a `render()` method to return JSX (or React elements).

#### Functional Components:
Functional components are simply JavaScript functions that return JSX. They are simpler and shorter in syntax than class components.

### 16. What do the State Hook/Context Hook/Ref Hook/Effect Hook/Performance Hook do?

- **State Hook (`useState`)**: 
  - Manages state in functional components. 
  - Returns an array: the first element is the current state, and the second is a function to update the state.

- **Context Hook (`useContext`)**: 
  - Accesses context values in a component tree. 
  - React Context provides a way to share data globally across your component tree without having to pass props manually at every level. 
  - It's great for things like themes, authentication status, or any global state that many components need access to.

- **Ref Hook (`useRef`)**: 
  - Persists values between renders, useful for accessing DOM elements or keeping mutable values.

- **Effect Hook (`useEffect`)**: 
  - Lets you perform side effects in your functional components, such as fetching data, subscribing to events, setting timers, or manually changing the DOM. 
  - It runs after the component renders and can optionally clean up after itself when the component is unmounted or before the next effect is run. 
  - You can control when the effect should run by providing a dependency array as a second argument.

- **Performance Hook (`useMemo` / `useCallback`)**: 
  - Optimizes performance by memoizing (caching but for function results, not just any data) values and functions, preventing unnecessary recalculations or re-renders.

### 17. React Router: Which statements are true?

- **React Router** is used to handle routing in React apps.
- The **Route** component maps a URL path to a specific component.
- The **Link** component is used to navigate between routes without a full page reload.
- **Declarative Routing**: React Router provides a declarative way of defining routes. You define routes using JSX, and React Router takes care of managing the navigation and rendering the correct components.
<BrowserRouter> <Routes> <Route path="/" element={<Home />} /> <Route path="/about" element={<About />} /> </Routes> </BrowserRouter>
Here, we declare that when the user navigates to /, the Home component should be displayed, and when the user navigates to /about, the About component should be shown.
### BROWSERROUTER / HASHROUTER

React Router provides different types of routers for different environments. The most commonly used ones are:

- **BrowserRouter**: Works with modern browsers and uses the HTML5 history API for clean, URL-based routing without page reloads. It’s typically used when your app is hosted on a server that supports routing (e.g., React apps deployed to servers or platforms that use history-based routing).
- **HashRouter**: Uses a hash (`#`) in the URL to simulate different routes. This is often used when the app is deployed on environments where you cannot configure the server for URL routing (e.g., static file hosting platforms). URLs will look like `/#!about`.

### Dynamic Routes / Route Parameters

- **Dynamic routes/route parameters**: `<Route path="/user/:id" element={<UserProfile />} />` where `:id` is an indication of a dynamic element/parameter. That element gets accessed using the `useParams()` function.

### Nested Routes

- **Nested routes**: React Router allows for nested routes, meaning you can render child components inside a parent component by using nested `<Route>` elements.

### Nav and NavLink Components

- In React Router, you use the `<Link>` or `<NavLink>` component to navigate between different routes instead of traditional `<a>` tags.
  - **`<Link>`**: Used to navigate between routes without triggering a full page reload.
  - **`<NavLink>`**: Similar to `<Link>`, but it provides additional styling capabilities when the link is active (e.g., when it matches the current route).

### Navigate / Redirect

- **`<Navigate>`**: Used to programmatically redirect users from one route to another. It's typically used when you need to automatically send the user to a different route after a certain action (like logging in).

### Protected Routes (using `authState`)

- **Protected routes** (using `authState`): You can use a conditional to check if a user is authenticated and redirect them accordingly. Example:
  <Route {...rest} element={isAuthenticated ? element : <Navigate to="/login" />} />

### 18. What does the `package.json` file do?

The `package.json` file manages dependencies and scripts in a Node.js project. It includes:

- **Project Metadata**: Information such as the project's name, version, description, and author.
- **Dependencies**: A list of libraries or packages the project needs (e.g., `express`, `react`, `mongodb`).
- **Scripts**: Defines custom scripts for running tasks, such as `npm start`. For example:
  ```json
  "start": "node index.js"

### 19. What does the `fetch` function do?

`fetch` is a built-in JavaScript function for making network/HTTP requests (such as fetching data from an API or sending data to a server). It returns a Promise that resolves to the response from the request, allowing you to handle the result asynchronously.

#### Key Features:
- **Make HTTP Requests**: `fetch` is used to send GET, POST, PUT, DELETE, and other types of HTTP requests.
- **Promise-Based**: It returns a Promise, so you can use `.then()` and `.catch()` to handle the response or errors, or use `async/await` for a cleaner, more readable syntax.
- **Response Object**: The response from `fetch` is a `Response` object, which contains data from the request. You can access things like:
  - `response.status`: HTTP status code (e.g., 200, 404)
  - `response.json()`: Parse the response as JSON
  - `response.text()`: Get the raw response text
### Example of a GET request

Using the `fetch` function to make a GET request:

javascript
// Using .then() method
fetch('https://api.example.com/data')
  .then(response => response.json())  // Parse JSON response
  .then(data => console.log(data))    // Use the data
  .catch(error => console.log('Error:', error));  // Handle errors

//async + await
async function getData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);  // Handle errors
  }
}

### 20. What does Node.js do?

Node.js is a runtime environment for executing JavaScript on the server side. It allows developers to use JavaScript for back-end programming and provides built-in libraries for file system operations, networking, and more. 

**NPM** (Node Package Manager) comes built into Node.js and helps manage project dependencies.

#### Benefits of Node.js:
- **Fast and Scalable**: Node.js uses a non-blocking, event-driven architecture, making it fast and efficient for handling many simultaneous connections.
- **Single Language for Full Stack**: With Node.js, developers can use JavaScript both on the client side (in the browser) and on the server side (with Node.js), making full-stack development easier.
- **Large Ecosystem**: With npm, there's a huge ecosystem of open-source packages and libraries that help you build applications faster.
- **Active Community**: Node.js has an active, growing community with lots of resources (tutorials, documentation, etc.) for developers.

### 21. What does PM2 do?

PM2 is a process manager for Node.js applications, enabling them to run as background services (daemons) that continue running even after a terminal session is closed or the system restarts. It is typically used to manage and keep web services running on a server. PM2 simplifies the management and scaling of web services by keeping them running persistently in the background, offering an easy-to-use interface for monitoring and controlling processes.

#### Key Features:
- **Daemon Process**: PM2 allows web services to run as background processes (daemons), ensuring they persist after the terminal or system restarts.
- **Process Management**: You can start, stop, restart, and monitor processes easily with PM2 commands.
- **Auto-Restart**: PM2 can automatically restart processes if they crash or if the server reboots.
- **Logging**: PM2 provides easy access to logs for monitoring application performance and debugging.

#### Common Commands:
- `pm2 ls`: Lists all running processes.
- `pm2 monit`: Displays a visual monitor of processes.
- `pm2 start <file> -n <name>`: Starts a new process with a specified name.
- `pm2 stop <name>`: Stops a process.
- `pm2 restart <name>`: Restarts a process.
- `pm2 save`: Saves the current process list for automatic restart after a reboot.
- `pm2 logs <name>`: Displays logs for a specific process.

#### Registering a New Web Service:
To add a new web service:
1. **Modify the Caddyfile**: Update the Caddy server configuration to route requests to the new web service (by setting a port).
2. **Create the Web Service**: Create a new service directory and code for the web service (e.g., `index.js`).
3. **Start the Web Service**: Run the service using `node index.js <port>`.
4. **Configure PM2**: Use PM2 to run the web service as a background process, ensuring it persists even after you close the SSH session (`pm2 start index.js -n <name>`).
5. **Save the Process**: Use `pm2 save` to ensure the web service will automatically restart if the server reboots.


### 22. What does Vite do?

Vite is a modern build tool for web development. It provides:

- **Fast Development Server**: Vite comes with a fast development server that includes **Hot Module Replacement (HMR)**, allowing for instant updates and a smoother development experience.
  
- **Optimized Bundling**: Vite uses **esbuild** for bundling, which is significantly faster than traditional bundlers like Webpack.

In simple terms, Vite provides a super-fast development experience by using **ES Modules** in the browser during development, enabling instant reloads and extremely fast start times. It optimizes builds using **Rollup** for production, making it an ideal choice for modern web apps and front-end development.
