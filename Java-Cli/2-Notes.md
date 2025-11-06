Even we Can Implement a Callable Interface

public class TodoCommand implements Callable<Integer> {
    final Integer SUCCESS = 0;
    final Integer FAILURE = 0;

    @Override
    public Integer call() throws Exception{

        return SUCCESS;
    }
}



- We can provide Alliases
@CommandLine.Command( 
    aliases={"create" , "plus"},
    name="hello" , version = "" , mixinStandardHelpOptions=true , requiredOptionMarker = '*' , header="" , optionsListHeading = "%nOptions are below %n")



- We can also provide Sub Commands


@CommandLine.Command( 
    name="hello" , version = "" , mixinStandardHelpOptions=true , requiredOptionMarker = '*' , header="" , optionsListHeading = "%nOptions are below %n",
    subcommands={
        AddToDoCommand.class
    }
)

- can Add Footer Heading



- To pass list/array of messages

@CommandLine.Option(names={"-u" , "--user"} , required = true , description = "" , paramLabel="")
String [] message;




- By making subcommandsRepeatable = true 
- we can provide multiple commands at a time