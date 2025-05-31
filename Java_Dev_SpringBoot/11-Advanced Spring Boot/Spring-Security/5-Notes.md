Adding Roles in the Spring Boot / Adding Authorization in the flow

- Authorization Filter will be placed at the last
- There will be Authorization Manager as well


- add a String role; in the Entity



- First change this configuration class 

@Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth->
                        auth.requestMatchers("/authenticate").permitAll()
                                .requestMatchers(HttpMethod.GET,"/weather/**").hasAuthority(Permissions.WEATHER_READ.name())
                                .requestMatchers(HttpMethod.POST,"/weather/**").hasAuthority(Permissions.WEATHER_WRITE.name())
                                .requestMatchers(HttpMethod.DELETE,"/weather/**").hasAuthority(Permissions.WEATHER_DELETE.name())
                                .anyRequest().authenticated());
        http.addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class);
        return http.build();
}