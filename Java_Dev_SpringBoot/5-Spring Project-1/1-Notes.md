For chaning the port

In Application.properties file
- server.port = 8000



@ComponentScan(basePackages = {"controller"})
- If you are rest apis are written outside the main package


@RequestBody -- For getting details from the body on post requsts
@ResponseBody -- Sending string html content to the browser as it is


Spring Boot will automatically convert the incoming JSON into a Map<String, Object>.

@PostMapping("/createUser")
    public String createUser(@RequestBody Map<String, Object> requestData) {
        String name = (String) requestData.get("name");
        String username = (String) requestData.get("username");

        return "Received name: " + name + ", username: " + username;
    }


- Another Approach is using predefined class

@PostMapping("/createUser")
    public String createUser(@RequestBody UserRequest userRequest) {
        // You can now access userRequest.getName() and userRequest.getUsername()
        return "Received name: " + userRequest.getName() + ", username: " + userRequest.getUsername();
    }


----------------------------------------------------------------------------------------------------------------------------------


Using JSP (I dont need it because I will be using React)

Create all jsp in (/src/main/resources/META-INF/resources/WEB-INF/jsp/) folder

now in application.properties

spring.mvc.view.prefix = /src/main/resources/META-INF/resources/WEB-INF/jsp/
spring.mvc.view.suffix = .jsp



@RequestMapping("say-hello-html")
	public String sayHelloHtml() {
		return "sayHello";
	}


<dependency>
	<groupId>org.apache.tomcat.embed</groupId>
	<artifactId>tomcat-embed-jasper</artifactId>
	<scope>provided</scope>
</dependency>

for intellije remove scope


--------------------
# Passing Query params
    @RequestMapping("login")
	public String gotoLoginPage(@RequestParam String name, ModelMap model) {
		model.put("name", name);
		System.out.println("Request param is " + name); //NOT RECOMMENDED FOR PROD CODE
		return "login";
	}


Welcome to the login page ${name}!   in jsp file


---------------------------

private Logger logger = LoggerFactory.getLogger(getClass());

logger.debug();  // If in applicatio.properties it is set to debug
logger.info();