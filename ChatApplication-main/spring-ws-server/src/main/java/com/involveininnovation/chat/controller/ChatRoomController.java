package com.involveininnovation.chat.controller;


import com.involveininnovation.chat.model.RoomPacket;
import com.involveininnovation.chat.service.MessageService;
import com.involveininnovation.chat.service.RoomService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;



@RestController
@RequiredArgsConstructor
public class ChatRoomController {

    private final MessageService messageService;
    private final RoomService roomService;

    @PostMapping("/api/room")
    public String rooms(@RequestBody RoomPacket roomPacket){
        roomService.create(roomPacket.getRoomId());

        return roomPacket.getRoomId().toString();
    }
}
