package com.involveininnovation.chat.entity;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;


@Getter
@Setter
@Entity
public class RoomEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Id;

    @Column(length = 200)
    private String Roomname;

    @Column
    private Integer teamnumber;

    @OneToMany(mappedBy = "roomEntity",cascade = CascadeType.REMOVE)
    private List<MessageEntity> messageEntityList;
}
