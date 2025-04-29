Intro to Gradle
Gradle is a cross platform tool

dependencies{
    implementation 'package name'
}

Top 3 plugins in Gradle
- Java Plugin - java compilation + testing + bundling capabilities


To run java scripts inside build.gradle file

tasks.register("helloWorld"){
    doLast{
        System.out.println("Hello World");
    }
}

- Then simply run a new gradle command using helloWorld