DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_reshow`(seq int, seq1 int, seq2 int)
BEGIN
select a.seq, a.n1, a.n2, a.n3, a.n4, a.n5, a.n6, a.n7
		, sum( case when a.n1 = b.n1 or a.n1 = b.n2 or a.n1 = b.n3 or a.n1 = b.n4 or a.n1 = b.n5 or a.n1 = b.n6 or a.n1 = b.n7 then 1 else 0 end) as n1re
		, sum( case when a.n2 = b.n1 or a.n2 = b.n2 or a.n2 = b.n3 or a.n2 = b.n4 or a.n2 = b.n5 or a.n2 = b.n6 or a.n2 = b.n7 then 1 else 0 end) as n2re
		, sum( case when a.n3 = b.n1 or a.n3 = b.n2 or a.n3 = b.n3 or a.n3 = b.n4 or a.n3 = b.n5 or a.n3 = b.n6 or a.n3 = b.n7 then 1 else 0 end) as n3re
		, sum( case when a.n4 = b.n1 or a.n4 = b.n2 or a.n4 = b.n3 or a.n4 = b.n4 or a.n4 = b.n5 or a.n4 = b.n6 or a.n4 = b.n7 then 1 else 0 end) as n4re
		, sum( case when a.n5 = b.n1 or a.n5 = b.n2 or a.n5 = b.n3 or a.n5 = b.n4 or a.n5 = b.n5 or a.n5 = b.n6 or a.n5 = b.n7 then 1 else 0 end) as n5re
		, sum( case when a.n6 = b.n1 or a.n6 = b.n2 or a.n6 = b.n3 or a.n6 = b.n4 or a.n6 = b.n5 or a.n6 = b.n6 or a.n6 = b.n7 then 1 else 0 end) as n6re
		, sum( case when a.n7 = b.n1 or a.n7 = b.n2 or a.n7 = b.n3 or a.n7 = b.n4 or a.n7 = b.n5 or a.n7 = b.n6 or a.n7 = b.n7 then 1 else 0 end) as n1re
  from tb_lotto a
  join tb_lotto b
    on b.seq between a.seq - seq2 and a.seq - seq1
 where a.seq = caolesce(seq , a.seq)
  group by a.seq, a.n7, a.n2, a.n3, a.n4, a.n5, a.n6, a.n7
  order by a.seq desc;
END$$
DELIMITER ;
