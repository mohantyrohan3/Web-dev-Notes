- Use Spring Intitalizer to set up Maven Project

Maven - A java dependency management tool - Downloads Spring Framework for us


------------------------------------------------------------------

Intro to Spring

- Just making a simple Gamerunner class
- Make Individual classes 

package com.mohantyrohan3.First_Project;

import com.mohantyrohan3.First_Project.game.GameRunner;
import com.mohantyrohan3.First_Project.game.MarioGame;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class FirstProjectApplication {

	public static void main(String[] args) {
		MarioGame m = new MarioGame();
		GameRunner g = new GameRunner(m);
		g.run();
	}

}


package com.mohantyrohan3.First_Project.game;

public class GameRunner {
    MarioGame m;
    public GameRunner(MarioGame m) {
        this.m = m;
    }

    public void run() {
        System.out.println("Mario Game is Running");
    }
}


package com.mohantyrohan3.First_Project.game;

public class MarioGame {
    public void up(){
        System.out.println("up");
    }
}


# New feature called var - Java 10 new feature

- This piece of code is Tightly coupled code because in GameRunner class we have defined Mariogame as constructor. But lets say if we want to make a superContra game it will give compilation error
- This is tightly coupled with MarioGame as to include superContra we need to make code changes inside GameRunner class

Coupling - How much work is involved in changing something
Tight Coupling is heavily dependent upon each classes making it difficult to make changes

--------------------------------------------------------------------------------------------------------------------------------------


To make it loosely coupled we will make a GamingConsole interface and games implemented. And in GameRunner class we will use this interface to make it lossely coupled

package com.mohantyrohan3.First_Project.game;

public interface GamingConsole {
    void up();
    void down();
}


package com.mohantyrohan3.First_Project.game;

public class MarioGame implements GamingConsole {
    public void up(){
        System.out.println("up for Mario");
    }
    public void down(){
        System.out.println("down for Mario");
    }
}




public static void main(String[] args) {
		GamingConsole m = new MarioGame();
		GameRunner g = new GameRunner(m);
		g.run();

		GamingConsole m2 = new SuperContra();
		GameRunner g2 = new GameRunner(m2);
		g2.run();
	}