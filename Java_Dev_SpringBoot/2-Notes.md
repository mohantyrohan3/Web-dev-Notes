Loose Coupling using Spring Framework

GamingConsole m = new MarioGame();  -One Object creation
GameRunner g = new GameRunner(m);  - One object creating + wiring of dependencies

- here m is a depedency of GamerRunner
- Injecting the dependency

Creation of objects and wiring was done manually , lets do it using spring framework

