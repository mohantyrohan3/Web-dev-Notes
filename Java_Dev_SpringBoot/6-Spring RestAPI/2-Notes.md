Versioning
Variety of Options to Implement
- URL
- Request Parameter
- Header
- Media Type



-------------------------------------------------------------------------------------------------------------------------------------

For custom exception handleing 

First make a customExceptionClass 

- then extend ResponseEnityExceptionHandler.class
- override the ResponseEntity<> handleException() method





@ControllerAdvice
public class GlobalExceptionHandler {

    // Handle all exceptions
    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleAllExceptions(Exception ex, WebRequest request) {

        // Even we can create an additional exceptionclass for sending custom messages
        ErrorDetails e = new ErrorDetails(); // Custom class
        ex.printStackTrace(); // Optional: for logging
        return new ResponseEntity<>("Something went wrong: " + ex.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
    }

    // (Optional) Handle specific exceptions if you want
    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<String> handleNullPointerException(NullPointerException ex, WebRequest request) {
        ex.printStackTrace();
        return new ResponseEntity<>("Null value encountered: " + ex.getMessage(), HttpStatus.BAD_REQUEST);
    }
}


- More better way of doing it


@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleAllExceptions(Exception ex, HttpServletRequest request) {
        ex.printStackTrace(); // Logging purpose

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.INTERNAL_SERVER_ERROR.value(),
                HttpStatus.INTERNAL_SERVER_ERROR.getReasonPhrase(),
                ex.getMessage(),
                request.getRequestURI()
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @ExceptionHandler(NullPointerException.class)
    public ResponseEntity<ErrorResponse> handleNullPointerException(NullPointerException ex, HttpServletRequest request) {
        ex.printStackTrace();

        ErrorResponse errorResponse = new ErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                "Null Pointer Exception",
                ex.getMessage(),
                request.getRequestURI()
        );

        return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
    }
}