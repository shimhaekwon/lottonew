
SELECT aa.seq
		, aa.n1 
		, sum(case when aa.n1 = bb.nn then 1 ELSE 0 END) n1cnt
		, aa.n2 
		, sum(case when aa.n2 = bb.nn then 1 ELSE 0 END) n2cnt
		, aa.n3 
		, sum(case when aa.n3 = bb.nn then 1 ELSE 0 END) n3cnt
		, aa.n4 
		, sum(case when aa.n4 = bb.nn then 1 ELSE 0 END) n4cnt
		, aa.n5 
		, sum(case when aa.n5 = bb.nn then 1 ELSE 0 END) n5cnt
		, aa.n6 
		, sum(case when aa.n6 = bb.nn then 1 ELSE 0 END) n6cnt
FROM lottobase aa
JOIN v_lotto1 bb
ON bb.seq < aa.seq AND  bb.seq > aa.seq - 9 AND bb.ntype = 1
WHERE aa.seq > 1000
GROUP BY aa.seq, aa.n1, aa.n2, aa.n3, aa.n4, aa.n5, aa.n6
ORDER BY seq desc