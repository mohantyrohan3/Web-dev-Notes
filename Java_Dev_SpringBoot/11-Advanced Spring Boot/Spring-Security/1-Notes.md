Using Custom Filters

- Filters
- Filter Chain

@WebFilter(urlPatterns = "/*") // Apply to all URLs
public class CustomLoggingFilter implements Filter {

    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        // Optional initialization logic
        System.out.println("Initializing CustomLoggingFilter");
    }

    @Override
    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
            throws IOException, ServletException {

        HttpServletRequest req = (HttpServletRequest) request;
        HttpServletResponse res = (HttpServletResponse) response;

        // Log request details
        System.out.println("Request: " + req.getMethod() + " " + req.getRequestURI());

        // Continue filter chain
        chain.doFilter(request, response);

        // Log response status
        System.out.println("Response Status: " + res.getStatus());
    }

    @Override
    public void destroy() {
        // Optional cleanup logic
        System.out.println("Destroying CustomLoggingFilter");
    }
}


- @ServletComponentScan add it at the main function