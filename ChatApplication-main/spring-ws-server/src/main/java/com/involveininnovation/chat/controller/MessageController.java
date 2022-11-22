package com.involveininnovation.chat.controller;


import com.involveininnovation.chat.entity.MessageEntity;
import com.involveininnovation.chat.entity.RoomEntity;
import com.involveininnovation.chat.model.Message;
import com.involveininnovation.chat.model.MessagePacket;
import com.involveininnovation.chat.model.RoomPacket;
import com.involveininnovation.chat.service.MessageService;
import com.involveininnovation.chat.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RequiredArgsConstructor
@RestController
public class MessageController {
    private final RoomService roomService;
    private final MessageService messageService;


    @PostMapping("/api/room/{roomId}")
    public String createMessage(@RequestBody MessagePacket messagePacket){
        RoomEntity roomEntity = this.roomService.getRoom(messagePacket.getRoomId());
        //message 저장
        this.messageService.create(roomEntity,messagePacket.getSender() ,messagePacket.getContent());

        return "message communication success";
    }

    @PostMapping("/api/message/{roomId}")
    public MessagePacket callMessage(@RequestBody RoomPacket roomPacket){
        //메세지 보내기 성공
        
        MessagePacket m1 = new MessagePacket();
        m1.setSender("heo");
        m1.setContent("hi");
        m1.setRoomId(1);
        return m1;
    }
}
