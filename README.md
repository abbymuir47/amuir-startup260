# amuir-startup260
## Specification Deliverable 
### Elevator Pitch
Do you feel like a jack of all trades, master of none? Me too. I have always wanted a space to record or display my various creative endeavors or adventures, but a social media page doesn’t quite cut it. There are different outlets, such as music, resin art, or crochet projects which I would like to display in a more organized portfolio. For my startup project I am going to create a personal portfolio website which can function as a sort of blog as well. I will add functionality so that those who visit the website can create a profile and leave likes, comments, and messages. This way, they can leave feedback or ask for details on a certain project or excursion. The website can be a collaborative space for people who love to create and explore like me.
### Design 
Here is a sketch of what my home page and an example project page might look like on my website:

![IMG_6362](https://github.com/user-attachments/assets/5fb41194-fb61-4e21-9c41-7bae62229dce)

Here is a diagram of how users will interact with the backend of the webpage:

<img width="556" alt="Diagram" src="https://github.com/user-attachments/assets/a8704a2b-a033-4bc2-9550-699e4bb49345">

### Key Features 
- Secure profile and login over HTTPS
- Ability to edit user profile
- Website navigation to select projects through dropdowns
- Ability to leave a like on projects
- Ability to leave comments on projects
- Ability to save a project
- Chat feature to directly message me

### Technologies 
- **HTML** - Use HTML to create multiple pages. My portfolio will have various dropdown menus and pages to navigate between, so I will structure these with HTML
- **CSS** - Apply CSS with design principles so that my web page is visually pleasing as a portfolio. Create art collages, use whitespace to differentiate between projects.
- **JavaScript** - Allow for user interaction. Ability to click buttons, enter text.
- **React** - Enable user login, ability to “like” a project or leave a comment, and send messages.
- **Service** - Use endpoints to listen for login info, likes, comments, saves, messages, and changes to user data
- **Authentication** - Enable username and password so that users can visit the site and save their data repeatedly.
- **Database data** - Store user data such as login information, profile pictures, likes, comments, saves, and messages. Secure data storage for safe, repeated access.
- **WebSocket** - Enables like count and comments to be displayed to all users. Like count and comments are updated for all users.

## HTML deliverable

I created and wrote html files for 5 different pages on my site: index, about, profile, projects, and chat. Created an "images" folder in my files to store images I will display on my website. 

- [x] **HTML pages** - 5 HTML pages for a home page, about me, user profiles, my projects, and a chat page.
- [x] **Links** - All of my html pages contain links to the other pages - later, I will put these in a menu at the top using CSS. The user login links to the profile page.
- [x] **Text** - My home page has a welcome message, my about page has text that introduces me to a user, and my projects page has brief text descriptions under each project.
- [x] **Images** - I have images on my about page, as well as on my projects page.
- [x] **DB/Login** - Input box and submit button for login, found on home page. On the projects page, there is the ability for a user to like and comment. On the profile page, the user can access their like/comment history, as well as see and change their profile photo and username. On the chat page, users will be able to see their chat history.
- [x] **WebSocket** - The like count and comment display will update in real time as different users contribute. Additionally, the chat feature will use websocket for real-time messaging.

## CSS deliverable

I used CSS here to style my website into what I want it to ultimately look like.

- [x] **Header, footer, and main content body** - added css tags to style these different elements
- [x] **Navigation elements** - justified my navigation menu to the right of the screen
- [x] **Responsive to window resizing** - my app works on all sizes of screens
- [x] **Application elements** - chose a color scheme for the app based on my icon/logo, and kept that theme consistent
- [x] **Application text content** - updated font family and consistent font color throughout application
- [x] **Application images** - added my images as flex elements as well so that they are styled correctly when the screen is resized

## React deliverable

Here I used JavaScript and React so that now, the application works with a single webpage for a single user. I also added placeholders for future technology.

- [x] **Bundled and transpiled using vite** - done!
- [x] **Components** - Home, about, profile, and projects are all components with mocks for profile login, WebSocket.
  - [x] **login/profile** - profile page will let a user login and use database authentication.
  - [x] **database** - displays quote from a 3rd party service on the about page, will also use a database later to authenticate users.
  - [x] **WebSocket** - like count and comments will be displayed on the projects page later using WebSocket.
  - [x] **application logic** - previous comments and chats will change based on current logged in user profile
- [x] **Router** - Router in the app.jsx file to route between home, about, profile, and project pages
- [x] **Hooks** - Created index.jsx to hook the index.html into the main App Component

## Service deliverable

I added backend endpoints for this deliverable that get quotes from a 3rd party database.

- [x] **Node.js/Express HTTP service** - done!
- [x] **Static middleware for frontend** - done!
- [ ] **Calls to third party endpoints** - done! Random quotes get displayed on my about page
- [x] **Backend service endpoints** - placeholders for login that will store user info/authentication
- [x] **Frontend calls service endpoints** - used the fetch function to call service endpoints, as in the about.jsx file