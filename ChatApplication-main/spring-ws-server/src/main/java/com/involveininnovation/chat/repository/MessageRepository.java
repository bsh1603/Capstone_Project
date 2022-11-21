package com.involveininnovation.chat.repository;

import com.involveininnovation.chat.entity.MessageEntity;
import org.springframework.data.jpa.repository.JpaRepository;
public interface MessageRepository extends JpaRepository<MessageEntity,Integer> {

}
