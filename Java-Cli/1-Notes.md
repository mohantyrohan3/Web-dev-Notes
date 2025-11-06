PicoCLI - Java based cli tool cration Library

- First make a simple Java + Maven Project

- Add the Dependency
<dependency>
  <groupId>info.picocli</groupId>
  <artifactId>picocli</artifactId>
  <version>4.7.7</version>
</dependency>


@CommandLine.Command(name="hello")
class HelloCommand implements Runnable {

    @Override
    public void run(){
        System.out.println("Hello World");
    }
}


public static void main(String [] args){
    new CommandLine(new HelloCommand()).execute(args);
}


- Use CommandLine.Option for providing command line arguments



@CommandLine.Command(name="hello")
class HelloCommand implements Runnable {

    @CommandLine.Option(names={"-u" , "--user"})
    String user;


    @Override
    public void run(){
        System.out.println("Hello World");
    }
}



- To Print the Help / Print all the commands present


@CommandLine.Option(names={"-h" , "--help"} , usageHelp=true)
boolean help;



@CommandLine.Command(name="hello" , version = "" , mixinStandardHelpOptions=true , requiredOptionMarker = '*' , header="" , optionsListHeading = "%nOptions are below %n")

@CommandLine.Option(names={"-u" , "--user"} , required = true , description = "" , paramLabel="")
String user;