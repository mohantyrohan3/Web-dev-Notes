Making Spring Framework create objects for us

Just copy the config classes to the launcher class and make the laucher class as Configuration



@Configuration
public class FirstProjectApplication {

    @Bean
    public GamingConsole gamingConsole() {
        return new MarioGame();
    }


    @Bean
    public GameRunner gameRun(GamingConsole gamingConsole) {
        return new GameRunner(gamingConsole);
    }

	public static void main(String[] args) {
		var context = new AnnotationConfigApplicationContext(FirstProjectApplication.class);
		GameRunner temp = context.getBean("gameRun" , GameRunner.class);
		temp.run();
	}
}


Instead of Writing beans manually we can write annotation in MarioGame class to make automatically objects

@Component
public class MarioGame implements GamingConsole{

}


We can directly remove the first bean of making MarioGame , we have to explicitly say the package name to be searched in

@Configuration
@ComponentScan("")


Now it will run directly
GameRunner temp = context.getBean(GameRunner.class);
temp.run();


--------------------------------------------------------------------------------------------------------------------------------


Creating Multiple component of same types (PacMan , MarioGame etc)

- To resolve this add @Primary
- To give priority to other add @Qualifier("SuperContraGameQualifier")
- Qualifier should be only used when we want to inject specific class
- @Qualifier has more priority than @Primary

Now in GameRunner class


// Constructor Injecting
public GameRunner(@Qualifier("SuperContraGameQualifier")  GamingConsole game){

}

