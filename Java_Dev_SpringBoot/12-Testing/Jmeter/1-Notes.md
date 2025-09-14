Jmeter - A java based testing utility tool

Send Requests to target server -> Get statistics info of target server  ->  Generate test report in diff format


Download the binary from the website

-> Extract it into some folder
-> Go to bin and run  "sh jmeter.sh"
-> The UI will open


There are several elements in the jmeter

# Thread Group
- Collection of threads , each thread represents one user using the application under test
- Each thread simulates one real user request to the server
- Allows us to set the number of threads for each group


# Samplers
- Different types of requests send by the thread group
- It could be HTTP request , JDBC request etc


# Listeners 
- Shows the result of test execution
- They can show results in a different format such as tree , graph or log file


# Configuration Elements
- Set up defaults and variables use by samplers





---------------------------------------------------------------------------------------------------------------------------------------


Creating First Jmeter test

- Start Jmeter
- Create a test plan
- Create a thread group - Number of threads (no of users)   +  Ramp Up Period (After how much time the next thread should send request)
- Add a sampler    --->   Add a HTTP requst , specify the protocol , ip , port 
- Add listeners
- Run test plan
- Save test plan


