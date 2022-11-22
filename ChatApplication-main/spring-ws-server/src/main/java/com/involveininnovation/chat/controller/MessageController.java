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

import java.util.ArrayList;
import java.util.List;


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
    public List<MessagePacket> callMessage(@RequestBody RoomPacket roomPacket){
        //프론트엔드로 메세지 보내기 성공
        List<MessageEntity> mL = this.roomService.getAllMessage(roomPacket.getRoomId());
        //메세지 없으면 보내지 말자. (null인 경우)
        List<MessagePacket> mP = new ArrayList<MessagePacket>();

        //메세지 패킷으로 보내자.
        if(mL == null){
            return null;
        }else{
            //엔티티에 있는거 패킷에 다 집어넣기
            for(int i=0; i< mL.size() ; ++i){
                MessagePacket mp1 = new MessagePacket();
                mp1.setSender(mL.get(i).getSender());
                mp1.setContent(mL.get(i).getContent());

                mP.add(mp1);
            }

            return mP;
        }



    }
}
