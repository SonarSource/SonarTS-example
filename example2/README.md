# Sample multi-module project using gradle and TypeScript 

This project contains two modules, backend written in Java and 
frontend written in TypeScript. It uses gradle multi-module build, where
frontend module is built using [gradle-node-plugin](https://github.com/srs/gradle-node-plugin)

Frontend module handles its dependencies with yarn and is compiled with TypeScript compiler. During SonarQube analysis started by `gradle sonarqube` 
we set the `sonar.typescript.node` property to use NodeJS installation managed with gradle plugin, so build is not depending
on Node being preinstalled.
 

