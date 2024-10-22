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

