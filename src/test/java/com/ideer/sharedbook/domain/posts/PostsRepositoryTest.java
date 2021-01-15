package com.ideer.sharedbook.domain.posts;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@SpringBootTest
public class PostsRepositoryTest {

    @Autowired
    PostsRepository postsRepository;

    @AfterEach
    public void cleanup() {
        postsRepository.deleteAll();
    }

    @Test
    public void 게시글저장_불러오기() throws ParseException {
        //given
        String title = "테스트 게시글";
        String content = "테스트 본문";
        String bookName = "테스트 책이름";

        //Date recruitEndDate = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss").parse("2021-01-15 21:00:00");

        postsRepository.save(Posts.builder()
                .title(title)
                .content(content)
                .bookName(bookName)
                //.recruitEndDate(recruitEndDate)
                .build());

        //when
        List<Posts> postsList = postsRepository.findAll();

        //then
        Posts posts = postsList.get(0);

        System.out.println(">>>>>>>>>> recruitEndDate="+posts.getRecruitEndDate());

        assertThat(posts.getTitle()).isEqualTo(title);
        assertThat(posts.getContent()).isEqualTo(content);
        assertThat(posts.getBookName()).isEqualTo(bookName);
        //assertThat(posts.getRecruitEndDate()).isEqualTo(recruitEndDate);
    }
}
