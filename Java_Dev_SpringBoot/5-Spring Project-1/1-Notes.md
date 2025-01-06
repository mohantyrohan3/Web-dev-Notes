For chaning the port

In Application.properties file
- server.port = 8000


@RequestBody -- For getting details from the body on post requsts
@ResponseBody -- Sending string html content to the browser as it is



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