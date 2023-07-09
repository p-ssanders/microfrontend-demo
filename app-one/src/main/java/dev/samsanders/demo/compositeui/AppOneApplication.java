package dev.samsanders.demo.compositeui;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class AppOneApplication {

    public static void main(String[] args) {
        SpringApplication.run(AppOneApplication.class, args);
    }

    @Configuration
    static class AppOneApplicationWebConfiguration implements WebMvcConfigurer {
        @Override
        public void addCorsMappings(CorsRegistry registry) {
            registry.addMapping("/**");
        }
    }
}