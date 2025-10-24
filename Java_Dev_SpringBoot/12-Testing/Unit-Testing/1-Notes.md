Start making same packages as in main folder , for testing 

Press - Command + Shift + T - It will create the test file 


@Test
void myFirsttest(){
    //
}


use Mock Annotation incase we want to mock the creating of any object

@Mock
ProductService productService;


also add
@ExtendWith(MockitoExtension.class);





@Mock
ProductRepo productRepo;

@InjectMocks
ProductService productService;

- InjectMocks will wire the dependencies


- Since we are using Mock Repositories , no data will go and be saved in database , so we have to use Mock operation to test 


@Test
void myFirsttest(){
    Product pr = new Product();
    Mockito.when(productrepo.save(product)).thenReturn(product);

    

    Assertions.assertEquals(expected , actual); 
    assertNotNull
}

