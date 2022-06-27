DROP VIEW lotto45;
CREATE VIEW v_lotto45 AS
SELECT b.seq
,case when a.n1 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n1 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n1
,case when a.n2 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n2 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n2
,case when a.n3 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n3 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n3
,case when a.n4 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n4 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n4
,case when a.n5 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n5 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n5
,case when a.n6 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n6 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n6
,case when a.n7 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n7 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n7
,case when a.n8 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n8 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n8
,case when a.n9 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n9 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n9
,case when a.n10 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n10 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n10
,case when a.n11 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n11 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n11
,case when a.n12 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n12 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n12
,case when a.n13 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n13 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n13
,case when a.n14 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n14 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n14
,case when a.n15 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n15 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n15
,case when a.n16 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n16 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n16
,case when a.n17 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n17 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n17
,case when a.n18 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n18 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n18
,case when a.n19 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n19 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n19
,case when a.n20 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n20 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n20
,case when a.n21 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n21 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n21
,case when a.n22 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n22 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n22
,case when a.n23 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n23 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n23
,case when a.n24 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n24 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n24
,case when a.n25 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n25 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n25
,case when a.n26 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n26 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n26
,case when a.n27 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n27 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n27
,case when a.n28 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n28 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n28
,case when a.n29 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n29 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n29
,case when a.n30 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n30 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n30
,case when a.n31 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n31 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n31
,case when a.n32 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n32 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n32
,case when a.n33 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n33 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n33
,case when a.n34 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n34 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n34
,case when a.n35 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n35 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n35
,case when a.n36 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n36 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n36
,case when a.n37 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n37 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n37
,case when a.n38 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n38 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n38
,case when a.n39 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n39 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n39
,case when a.n40 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n40 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n40
,case when a.n41 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n41 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n41
,case when a.n42 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n42 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n42
,case when a.n43 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n43 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n43
,case when a.n44 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n44 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n44
,case when a.n45 IN (b.n1, b.n2, b.n3, b.n4, b.n5, b.n6 ) then 1 ELSE case when a.n45 IN (b.n7 ) then 0.5 ELSE 0 end END AS 45n45


FROM
(
SELECT seq, n1, n2, n3, n4, n5, n6, n7
FROM lottobase
) b
LEFT outer join
(
SELECT 1 n1 ,	2 n2 ,	3 n3 ,	4 n4 ,	5 n5 ,	6 n6 ,	7 n7 ,	8 n8 ,	9 n9 ,	10 n10 ,	11 n11 ,	12 n12 ,	13 n13 ,	14 n14 ,	15 n15 ,	16 n16 ,	17 n17 ,	18 n18 ,	19 n19 ,	20 n20 ,	21 n21 ,	22 n22 ,	23 n23 ,	24 n24 ,	25 n25 ,	26 n26 ,	27 n27 ,	28 n28 ,	29 n29 ,	30 n30 ,	31 n31 ,	32 n32 ,	33 n33 ,	34 n34 ,	35 n35 ,	36 n36 ,	37 n37 ,	38 n38 ,	39 n39 ,	40 n40 ,	41 n41 ,	42 n42 ,	43 n43 ,	44 n44 ,	45 n45 
FROM dual
) a ON 1=1