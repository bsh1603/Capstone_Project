package caps.testing.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.sql.Time;
import java.sql.Timestamp;
import java.time.LocalDateTime;

@Entity(name = "work")
@Data
@NoArgsConstructor
@Getter @Setter
public class Work {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "WORK_ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    @JsonBackReference
    private Member member;

    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH-mm", timezone = "Asia/Seoul")
//    @DateTimeFormat(pattern = "yyyy-MM-DD-HH-mm")
    @Column(name = "WORK_START_TIME", updatable = false)
    private Timestamp work_start_time;

    @JsonFormat(pattern = "yyyy-MM-dd'T'HH-mm", timezone = "Asia/Seoul")
    @Column(name = "WORK_END_TIME", updatable = false)
    private Timestamp work_end_time;

    @JsonFormat(pattern = "yyyy-MM-dd'T'-HH-mm", timezone = "Asia/Seoul")
    @Column(name = "WORK_TIME", updatable = false)
    private Timestamp work_time;

    @Builder
    public Work(Long id, Member member, Timestamp work_start_time, Timestamp work_end_time, Timestamp work_time) {
        this.id = id;
        this.member = member;
        this.work_start_time = work_start_time;
        this.work_end_time = work_end_time;
        this.work_time = work_time;
    }
}
