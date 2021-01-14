package com.ideer.sharedbook;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@EnableJpaAuditing
@SpringBootApplication
public class SharedBookApplication {

    public static void main(String[] args) {
        SpringApplication.run(SharedBookApplication.class, args);
    }

}
