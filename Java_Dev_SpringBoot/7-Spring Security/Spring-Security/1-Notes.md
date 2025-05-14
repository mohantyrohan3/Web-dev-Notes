Dependency - Spring Boot Starter Security

Once the dependecy is added , Spring boot auto configuration feature will automatically apply security to the application and all the endpoints

- The client sends an Authorization header  , the server decodes the string , extracts the username and password , and verifies them , If they are correct access is granted , othewise unautorized access will be sent back


Spring Secutiy provides an in built controller that hanldes the /login path. This controller is responsible for rendering the default login form when a GET request is made to /login


By Default -  Spring Security also provides logout functionality , when .logout() is configured a post Request to /logout will log the user out

