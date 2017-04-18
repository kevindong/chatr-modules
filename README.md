# Modules
A repository of modules for Chatr

# Adding a Module
Modules are simply a function body with the following api

    /**
     * @param user The ID of the user sending the message
     * @param message The message they sent. It will start with your @bot-name if
     *                this is the first message of the exchange, or not if it isn't
     *
     * @return String the message to return to the user
     */
     
## Remarks
- The code you write is wrapped in a function with those parameters passed in.
- You may use NPM modules or your own ES6 modules, run your code through webpack, then use `bundle.js` as your module's code
