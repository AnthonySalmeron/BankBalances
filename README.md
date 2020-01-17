### BankBalances
## Goal: keep track of multiple bank accounts and update, add, or delete them
![home page](public/Capture.PNG)
## How it's made: h
- Server is set up to be able to handle requests that come from browser side JS and forms
- Index.ejs page is made that links to login and sign up pages
- Log in page has fields for email and password, once entered, a password check is made against the database using a passport module
- If successful the user is taken to the main page
- If not, the user is asked to try again 
- Sign up page has similar operations to check if a user exists, if not it will create an encrypted password for them and a spot in a users collection
- Main page has form for creating accounts and sections for updating or deleting accounts, as well as list of account off to the side that it got from the server when it loaded
- Form makes post request to server, server creates a document in collection that will hold the name of the account, the current balance, and an array that contains the transaction history (an array of name/reason for transaction and value of transaction)
- Both put request types (withdrawal and deposit) are handled through the same handler in the server, it will determine which type of request is coming in by searching for either a "deposit" or "withdrawal" property in the body of the request
- Depending on which it receives, it will increment the current value of the given account by the deposit or by the withdrawal(which is a negative number)
- Lastly it will push another array into the transaction history array to keep track of what occured and send back a result to the browser js which will reload the page
- Delete requests happen in 3 steps
  - First a get request is made using the name of the one that you want to delete as search parameters
  - Then an array is returned holding the current value of the bank account you want to delete
  - This value is used to make a put request that will increment the value of the account you want to transfer money to
  - When this operation is complete a final delete request is made, when the browser receives a positive response, the page is reloaded
# Installation

1. Clone repo
2. run `npm install`

# Usage

1. run `node server.js`
2. Navigate to `localhost:8080`
