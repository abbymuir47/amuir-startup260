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

## What does the link element do?
The `<link>` element is used to link external resources like stylesheets/favicons to an HTML document. It often defines the relationship between the current document and an external resource. It is an empty element, containing attributes only.

## What does a div tag do?
The `<div>` tag is a block-level container used to group elements for styling or layout purposes. It doesn’t inherently have any semantic meaning.

## What is the difference between the #title and .grid selector?
`#title` targets an element with the ID of "title" (unique, only applies to one element that has e.g., `<h1 id="title">...</h1>`), while `.grid` targets all elements with the class "grid" (multiple elements can share the same class, e.g., `<div class="grid">...</div>`).

## What is the difference between padding and margin?
Padding is the space between an element's content and its border, pushing the content away from the edges of the element’s box. Margin is the space outside the border of the element, separating it from other elements, and pushes elements away from each other.

## How will the images be displayed using flex?
Flexbox allows for responsive layouts. Images will be arranged according to the defined flex properties (e.g., `flex-direction`, `justify-content`, etc.). `flex: 0 50px` means it won’t grow, with a height of 50px. `flex: 1` means it will grow.

## What does the following padding CSS do?
It specifies the inner space around an element's content. For example, `padding: 10px;` adds 10 pixels of space on all sides. 
- `padding: 10px 20px;` → 10px padding to top/bottom, 20px padding on left/right.
- `padding: 10px 20px 30px;` → 10 top, 20 left/right, 30 bottom.
- `padding: 10px 20px 30px 40px;` → top, right, bottom, left (clockwise). 
You can use various units like `20px`, `2em` (2x font size), `10%` (10% parent width), `5rem` (based on root size), `3vw` (based on viewport width).

## What does the following code using arrow syntax function declaration do?
Arrow functions provide a concise syntax for writing function expressions. They also lexically bind `this`, meaning they do not have their own `this` context. Instead of writing `function() { ... }`, you can write `() => { ... }`. 
Example:
```javascript
const add = (a, b) => a + b;
const square = x => x * x;
