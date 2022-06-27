SET @gg = 30;
# SELECT * FROM v_lotto45;
# SELECT @gg FROM DUAL;

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
, SUM(b.45n27)mytest
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
FROM lottobase a
left JOIN v_lotto45 b ON b.seq BETWEEN a.seq - (@gg + 1) AND a.seq - 1
GROUP BY a.seq, a.n1, a.n2, a.n3, a.n4, a.n5, a.n6, a.n7
ORDER BY a.seq desc