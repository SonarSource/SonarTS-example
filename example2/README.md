# Sample Gradle multi-module project using TypeScript and Java 

This project contains two modules, backend written in Java and 
frontend written in TypeScript. It uses Gradle multi-module build, where
frontend module is built with Yarn and TypeScript using Node.js managed by [gradle-node-plugin](https://github.com/srs/gradle-node-plugin)

To run SonarQube analysis execute
```
./gradlew sonarqube 
```

We make use of the [`sonar.typescript.node`](https://github.com/SonarSource/SonarTS-example/blob/gradle-multimodule/example2/ts-frontend/build.gradle#L15) 
property to use Node.js installation managed with Gradle plugin, so build is not depending on Node.js being preinstalled.
This property is available since SonarTS version 1.2.0 .
 
Analysis should raise an issue on line 7 in [greeter.ts](https://github.com/SonarSource/SonarTS-example/blob/gradle-multimodule/example2/ts-frontend/greeter.ts#L7)
that array content is not used [RSPEC-4030](https://rules.sonarsource.com/typescript/RSPEC-4030). 
