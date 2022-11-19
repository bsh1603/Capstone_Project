package caps.testing.repository;

import caps.testing.domain.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long>{

    Optional<Member> findByEmail(String email);

    @Query(value = "select * from member m where m.authentication_code = ?1", nativeQuery = true)
    List<Member> findAllByCodeLike(String authentication_code);

    @Query(value = "select m.authentication_code from member m")
    HashSet<String> findAllCode();

    @Query(value = "select * from member m where m.team_id = ?1", nativeQuery = true)
    List<Member> findAllMyTeam(Long team_id);

    @Query(value = "select m.team_id from member m where m.member_id = ?1", nativeQuery = true)
    Long findMyTeamId(Long member_id);

}
