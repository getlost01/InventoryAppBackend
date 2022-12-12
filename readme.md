<p align="center">
  <a href="https://inventoryapp-aagam.netlify.app/">
    <img src="https://user-images.githubusercontent.com/79409258/206977250-b4c26b0d-1d8f-4422-834f-97df20580ad3.png" height="96">
    <h3 align="center">Inventory App</h3>
  </a>
</p>


----
This is the backend of inventory management application which is for managing dynamic inventory, on the Product page.
</br>
This is the assignment given by wendor for a fullstack intern. - (detail of the task updated here when the assignment submission period is completed). </br> 
Visit my app  <a href="https://inventoryapp-aagam.netlify.app/">here</a>

----
### 🔗 APIs
```
  GET : Product details
    https://courageous-sun-hat-bee.cyclic.app/api/product
    
  POST : Upload product details on DB
    https://courageous-sun-hat-bee.cyclic.app/api/product/create
  
  POST : User Authentication by JWT
    https://courageous-sun-hat-bee.cyclic.app/api/auth

  POST : Password reset request
    https://courageous-sun-hat-bee.cyclic.app/api/password-reset
  
  POST : Password reset link
    https://courageous-sun-hat-bee.cyclic.app/api/password-reset/:id/:token
    
  POST : Sign In
    https://courageous-sun-hat-bee.cyclic.app/api/users

  POST : Login
    https://courageous-sun-hat-bee.cyclic.app/api/users/:id/verify/:token
  ```

-----

### :wrench: Tools Used
- NodeJS
- React
- Mongoose
- CORS, JWT and BCRYPT
- Javascript / CSS

-----

### 🔎 Preview
<img width="500" alt="Screenshot 2022-12-11 at 10 40 17 PM" src="https://user-images.githubusercontent.com/79409258/206976406-41799d3b-445d-4f34-9d55-aabbb7a0faa0.png">
<img width="500" alt="Screenshot 2022-12-11 at 10 40 24 PM" src="https://user-images.githubusercontent.com/79409258/206976410-40ef8f23-ee86-4a33-978b-ccc0eb2fa55d.png">
<img width="500" alt="Screenshot 2022-12-11 at 10 39 35 PM" src="https://user-images.githubusercontent.com/79409258/206976374-e4bc19b3-b53d-4d32-bcff-7518350e714b.png">
<img width="500" alt="Screenshot 2022-12-11 at 10 39 46 PM" src="https://user-images.githubusercontent.com/79409258/206976399-418164b0-0f84-4375-809e-6bf3183afdaf.png">
<img width="500" alt="Screenshot 2022-12-11 at 10 40 02 PM" src="https://user-images.githubusercontent.com/79409258/206976403-f2402280-fd23-4e10-ad30-4375ca6363d4.png">



-----

### :v: Contributing
Great!, after cloning & setting up the local project you can push the changes to your github fork and make a pull request.

#### Step 1: Clone The Repo

Fork the repository and then clone the repo locally by -
```bash
git clone https://github.com/getlost01/InventoryAppFrontend.git
```
#### Step 2: Install Dependencies
jump into the directory
```bash
cd InventoryAppFrontend
```
install all the dependencies
```bash
npm install
```
start the local server by
```
npm start
```
#### Step 3: Start Development Server
before starting the development Server</br>
create .env file and add mongoDB url
```bash
MONGO_CONNECTION_URL= mongodb+srv://${ username }:${ password }@cluster0.auyyt.mongodb.net/MealPlanner?retryWrites=true&w=majority
JWTPRIVATEKEY = 
SALT = 
BASE_URL = 
SMTP_HOST = 
SMTP_PORT = 
MAIL_USER = 
MAIL_PASSWORD = 
```
start the local server by
```
npm start
```
or start the local server on nodemon by
```
npm test
```

After running the development server the site should be running on https://localhost:8080
-----

<p align="center">
Give the project a :star: if you liked it.<br>
Made with :heart: and nodeJS.
