package caps.testing.domain.stock;

import caps.testing.domain.Team;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.security.Timestamp;

@Entity(name = "stock")
@NoArgsConstructor
@Getter
@Setter
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "STOCK_ID")
    @JsonIgnore
    private Long id;

    @OneToOne
    @JoinColumn(name = "TEAM_ID")
    @JsonBackReference
    private Team team;

    @Column(name = "STOCK_DATE")
    private Timestamp date;

    @Column(name = "STOCK_NAME")
    private String name;

    @Column(name = "STOCK_PRICE")
    private int price;

    @Column(name = "STOCK_QUANTITY")
    private int quantity;

    @Builder
    public Stock(Long id, Team team, Timestamp date, String name, int price, int quantity) {
        this.id = id;
        this.team = team;
        this.date = date;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

