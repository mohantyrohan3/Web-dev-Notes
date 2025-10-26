Authorization ROLES

- Step 1 
@Document(collection = "users")
public class User {
    @Id
    private String id;
    private String name;
    private String email;
    private String password;
    private String role; // e.g. "ADMIN" or "USER"
}



- Step 2 - add Role claim inside JWT
public String generateToken(UserDetails userDetails, String role) {
    return Jwts.builder()
            .setSubject(userDetails.getUsername())
            .claim("role", role)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 1000 * 60 * 60))
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
}

String token = jwtUtils.generateToken(userDetails, user.getRole());



- Step 3  - Extract Role from Token during Validation
public String extractRole(String token) {
    return (String) Jwts.parser()
            .setSigningKey(jwtSecret)
            .parseClaimsJws(token)
            .getBody()
            .get("role");
}


Then attach this role to the Spring Security context:
String role = jwtUtils.extractRole(jwt);
SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_" + role);
UsernamePasswordAuthenticationToken authToken =
    new UsernamePasswordAuthenticationToken(userDetails, null, List.of(authority));
SecurityContextHolder.getContext().setAuthentication(authToken);



- Step 4 - Configure Role-Based Access Rules
http.csrf().disable()
    .authorizeHttpRequests()
    .requestMatchers("/api/auth/**").permitAll()
    .requestMatchers("/api/admin/**").hasRole("ADMIN")
    .requestMatchers("/api/user/**").hasAnyRole("USER", "ADMIN")
    .anyRequest().authenticated()
    .and()
    .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);



- In Frontend adjust that , during the store role along with jwt token