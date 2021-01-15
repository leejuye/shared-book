package com.ideer.sharedbook.domain.posts;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;


@Getter
@NoArgsConstructor
@Entity
public class Posts {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postNo;

    @Column(length = 500, nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT", nullable = false)
    private String content;

    @Column(length = 500, nullable = false)
    private String bookName;

    @Temporal(value = TemporalType.TIMESTAMP)   // TIMESTAMP: date+time 의 timestamp(datetime) 타입
    private Date recruitEndDate;                // Date: 년-월-일 의 date 타입
                                                // Time: 시:분:초 의 time 타입

    @Builder
    public Posts(String title, String content, String bookName, Date recruitEndDate) {
        this.title = title;
        this.content = content;
        this.bookName = bookName;
        this.recruitEndDate = recruitEndDate;
    }
}
