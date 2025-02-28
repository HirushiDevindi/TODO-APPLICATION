# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the Maven Wrapper files to the container
COPY .mvn/ .mvn/
COPY mvnw .
COPY pom.xml .

# Download dependencies
RUN ./mvnw dependency:go-offline

# Copy the project files to the container
COPY src ./src

# Package the application, skipping tests
RUN ./mvnw package -DskipTests

# List the contents of the target directory to verify the JAR file is present
RUN ls -l target

# Copy the built JAR file to the working directory
COPY target/Todos-0.0.1-SNAPSHOT.jar /app/Todos-0.0.1-SNAPSHOT.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "/app/Todos-0.0.1-SNAPSHOT.jar"]