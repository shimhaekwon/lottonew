SELECT * 
  FROM lotto.tb_lotto;
select *
  from vw_lotto45;  
;;;;;;;;;;;;;;;;

SET @gg = 30;
# SELECT * FROM v_lotto45;
# 
SELECT @gg FROM DUAL;

SELECT a.seq, a.n1, a.n2, a.n3, a.n4, a.n5, a.n6, a.n7
, SUM(b.45n1)
, SUM(b.45n2)
, SUM(b.45n3)
, SUM(b.45n4)
, SUM(b.45n5)
, SUM(b.45n6)
, SUM(b.45n7)
, SUM(b.45n8)
, SUM(b.45n9)
, SUM(b.45n10)
, SUM(b.45n11)
, SUM(b.45n12)
, SUM(b.45n13)
, SUM(b.45n14)
, SUM(b.45n15)
, SUM(b.45n16)
, SUM(b.45n17)
, SUM(b.45n18)
, SUM(b.45n19)
, SUM(b.45n20)
, SUM(b.45n21)
, SUM(b.45n22)
, SUM(b.45n23)
, SUM(b.45n24)
, SUM(b.45n25)
, SUM(b.45n26)
, SUM(b.45n27)
, SUM(b.45n28)
, SUM(b.45n29)
, SUM(b.45n30)
, SUM(b.45n31)
, SUM(b.45n32)
, SUM(b.45n33)
, SUM(b.45n34)
, SUM(b.45n35)
, SUM(b.45n36)
, SUM(b.45n37)
, SUM(b.45n38)
, SUM(b.45n39)
, SUM(b.45n40)
, SUM(b.45n41)
, SUM(b.45n42)
, SUM(b.45n43)
, SUM(b.45n44)
, SUM(b.45n45)
FROM tb_lotto a
 JOIN vw_lotto45 b ON b.seq BETWEEN a.seq - (5 + 1) AND a.seq - 1
GROUP BY a.seq, a.n1, a.n2, a.n3, a.n4, a.n5, a.n6, a.n7
ORDER BY a.seq desc  
;
CREATE VIEW 	lotto.vw_lotto3g as 
SELECT SEQ, CASE WHEN N1 BETWEEN 1 AND 15 THEN 1 ELSE 0 END +
          CASE WHEN N2 BETWEEN 1 AND 15 THEN 1 ELSE 0 END +
          CASE WHEN N3 BETWEEN 1 AND 15 THEN 1 ELSE 0 END +
          CASE WHEN N4 BETWEEN 1 AND 15 THEN 1 ELSE 0 END +
          CASE WHEN N5 BETWEEN 1 AND 15 THEN 1 ELSE 0 END +
          CASE WHEN N6 BETWEEN 1 AND 15 THEN 1 ELSE 0 END AS 3G1
		, CASE WHEN N1 BETWEEN 16 AND 30 THEN 1 ELSE 0 END +
          CASE WHEN N2 BETWEEN 16 AND 30 THEN 1 ELSE 0 END +
          CASE WHEN N3 BETWEEN 16 AND 30 THEN 1 ELSE 0 END +
          CASE WHEN N4 BETWEEN 16 AND 30 THEN 1 ELSE 0 END +
          CASE WHEN N5 BETWEEN 16 AND 30 THEN 1 ELSE 0 END +
          CASE WHEN N6 BETWEEN 16 AND 30 THEN 1 ELSE 0 END AS 3G2
		, CASE WHEN N1 BETWEEN 31 AND 45 THEN 1 ELSE 0 END +
          CASE WHEN N2 BETWEEN 31 AND 45 THEN 1 ELSE 0 END +
          CASE WHEN N3 BETWEEN 31 AND 45 THEN 1 ELSE 0 END +
          CASE WHEN N4 BETWEEN 31 AND 45 THEN 1 ELSE 0 END +
          CASE WHEN N5 BETWEEN 31 AND 45 THEN 1 ELSE 0 END +
          CASE WHEN N6 BETWEEN 31 AND 45 THEN 1 ELSE 0 END AS 3G3
FROM LOTTO.tb_lotto a
ORDER BY SEQ DESC
;


3	2	1
2	2	2
2	3	1
1	0	5
1	3	2
1	2	3
0	4	2
3	1	2
2	2	2
2	1	3
2	2	2
1	1	4
3	1	2
2	1	3
1	2	3
3	1	2
3	2	1
2	1	3
0	3	3
;
select seq, concat ( '[', 3g1, ',', 3g2, ',', 3g3, '],')
  from lotto.vw_lotto3g
--  where 3g1 = 6
--     or 3g2 = 6
--     or 3g3 = 6
 order by seq asc 
;
select seq, concat( '[', n1,',',n2,',',n3,',',n4,',',n5,',',n6,'],')
FROM LOTTO.tb_lotto a
where n1 = 6
and n2 = 13
and n3 = 19
;


