package com.involveininnovation.chat.service;

import com.involveininnovation.chat.controller.MessageController;
import com.involveininnovation.chat.entity.MessageEntity;
import com.involveininnovation.chat.entity.RoomEntity;
import com.involveininnovation.chat.repository.MessageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@RequiredArgsConstructor
@Service
public class MessageService {

    private final MessageRepository messageRepository;

    public void create(RoomEntity roomEntity,String sender ,String content){
        MessageEntity message =new MessageEntity();
        message.setSender(sender);
        message.setContent(content);
        message.setRoomEntity(roomEntity);
        this.messageRepository.save(message);


    }

}
