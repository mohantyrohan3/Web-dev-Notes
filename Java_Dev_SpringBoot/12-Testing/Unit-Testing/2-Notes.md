- Should be Executed before all the test cases

@BeforeAll
public static void some(){

}

@BeforeEach - before each test case it will be run
@AfterEach - After each test case
@AfterAll - Static method , end of test lifecycle



For Void methods 


@Test
public void delete(){
    doNothing().when(productRepository).deleteById(1);
    productService.deleteProduct(1);
    Mockito.verify(productRepository , times(1) ).deleteById(1);
}


----------------------------------------------------------------------------------------------------------------------


Java Reflection is a built-in feature that lets your code inspect and modify classes, fields, methods, and annotations at runtime — even if they’re private or normally unreachable.



1️⃣ Inject mock into a private field
@InjectMocks
private MyService myService;

@Mock
private Dependency dependency;

@BeforeEach
void setup() {
    ReflectionTestUtils.setField(myService, "dependency", dependency);
}



2️⃣ Access private method
Method method = MyService.class.getDeclaredMethod("calculate", int.class);
method.setAccessible(true);
Object result = method.invoke(myService, 5);




3️⃣ Get value of a private field
Object token = ReflectionTestUtils.getField(userService, "token");





For Runtime exceptions
- add assertThrows();


