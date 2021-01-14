package com.ideer.sharedbook.domain.users;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.time.LocalDateTime;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class UsersRepositoryTest {

    @Autowired
    UsersRepository usersRepository;

    @AfterEach
    public void cleanup() {
        usersRepository.deleteAll();
    }

    @Test
    public void 회원정보_불러오기() {
        //given
        String email = "qkdwn0313@naver.com";
        String password = "ideer";
        String name = "빵";

        LocalDateTime now = LocalDateTime.of(2020,1,14,0,0,0);

        usersRepository.save(Users.builder()
                .email(email)
                .password(password)
                .name(name)
                .build());

        //when
        List<Users> usersList = usersRepository.findAll();

        //then
        Users users = usersList.get(0);

        System.out.println(">>>>>>>>>>>>>>>>>> regDate="+users.getRegDate()+", modDate="+users.getModDate());

        assertThat(users.getEmail()).isEqualTo(email);
        assertThat(users.getPassword()).isEqualTo(password);
        assertThat(users.getName()).isEqualTo(name);
        assertThat(users.getRegDate()).isAfter(now);
        assertThat(users.getModDate()).isAfter(now);


    }
}
