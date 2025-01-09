JUnit is a popular testing library


Steps

- Create a java class and a method for sum of array integers

public class MyMath{
    public int findSum(int [] arr){
        int sum = 0;
        for(int num : arr){
            sum += num;
        }

        return sum;
    }
}


- Now create a new test folder for creating unit tests
- Create a new JUnit test case

Naming Convention classNameTest
MyMathTest


class MyMathTest{

    @Test
    void test(){
        // fail("Not Yet Implemented");

        MyMath math = new MyMath();
        int ans = math.findSum(arr);
        int expeans = 6;

        assertEquals(expeans , ans);
    }
}