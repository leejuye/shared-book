package com.ideer.sharedbook.domain.users;

import com.ideer.sharedbook.domain.BaseTimeEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Getter
@NoArgsConstructor
@Entity
public class Users extends BaseTimeEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userNo;

    @Column(length = 500, nullable = false)
    private String email;

    @Column(length = 500, nullable = false)
    private String password;

    @Column(nullable = false)
    private String name;

    @Builder
    public Users(String email, String password, String name) {
        this.email = email;
        this.password = password;
        this.name = name;
    }
}

