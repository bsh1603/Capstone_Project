package com.involveininnovation.chat.entity;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.ManyToOne;

import lombok.Getter;
import lombok.Setter;
import org.springframework.web.bind.annotation.MatrixVariable;


@Getter
@Setter
@Entity
public class MessageEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    @Column(length = 200)
    private String sender;


    @Column(length = 200)
    private String content;


    @ManyToOne
    private RoomEntity roomEntity;

}
