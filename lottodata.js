﻿
var lottdata = null;
var lottodata2 = 
[[1032,0,0,0,0,0,0,0]
,[1031,6,7,22,32,35,36,19]
,[1030,2,5,11,17,24,29,9]
,[1029,12,30,32,37,39,41,24]
,[1028,5,7,12,13,18,35,23]
,[1027,14,16,27,35,39,45,5]
,[1026,5,12,13,31,32,41,34]
,[1025,8,9,20,25,29,33,7]
,[1024,9,18,20,22,38,44,10]
,[1023,10,14,16,18,29,35,25]
,[1022,5,6,11,29,42,45,28]
,[1021,12,15,17,24,29,45,16]
,[1020,12,27,29,38,41,45,6]
,[1019,1,4,13,17,34,39,6]
,[1018,3,19,21,25,37,45,35]
,[1017,12,18,22,23,30,34,32]
,[1016,15,26,28,34,41,42,44]
,[1015,14,23,31,33,37,40,44]
,[1014,3,11,14,18,26,27,21]
,[1013,21,22,26,34,36,41,32]
,[1012,5,11,18,20,35,45,3]
,[1011,1,9,12,26,35,38,42]
,[1010,9,12,15,25,34,36,3]
,[1009,15,23,29,34,40,44,20]
,[1008,9,11,30,31,41,44,33]
,[1007,8,11,16,19,21,26,40]
,[1006,8,11,15,16,17,37,36]
,[1005,8,13,18,24,27,29,17]
,[1004,7,5,30,37,39,44,18]
,[1003,1,4,29,39,43,45,31]
,[1002,17,25,33,35,38,45,15]
,[1001,6,10,12,14,20,42,15]
,[1000,2,8,19,22,32,42,39]
,[999,1,3,9,14,18,28,34]
,[998,13,17,18,20,42,45,41]
,[997,4,7,14,16,24,44,20]
,[996,6,11,15,24,32,39,28]
,[995,1,4,13,29,38,39,7]
,[994,1,3,8,24,27,35,29]
,[993,6,14,16,18,24,42,44]
,[992,12,20,26,33,44,45,24]
,[991,13,18,25,31,33,44,38]
,[990,2,4,25,26,36,37,28]
,[989,17,18,21,27,29,33,26]
,[988,2,13,20,30,31,41,27]
,[987,2,4,15,23,29,38,7]
,[986,7,10,16,28,41,42,40]
,[985,17,21,23,30,34,44,19]
,[984,3,10,23,35,36,37,18]
,[983,13, 23, 26, 31, 35, 43,15]
,[982,5,7,13,20,21,44,33]
,[981,27,36,37,41,43,45,32]
,[980,3,13,16,23,24,35,14]
,[979,7,11,16,21,27,33,24]
,[978,1,7,15,32,34,42,8]
,[977,2,9,10,14,22,44,16]
,[976,4,12,14,25,35,37,2]
,[975,7,8,9,17,22,24,5]
,[974,1,2,11,16,39,44,32]
,[973,22,26,31,37,41,42,24]
,[972,3,6,17,23,37,39,26]
,[971,2,6,17,18,21,26,7]
,[970,9,11,16,21,28,36,5]
,[969,3,9,10,29,40,45,7]
,[968,2,5,12,14,24,39,33]
,[967,1,6,13,37,38,40,9]
,[966,1,21,25,29,34,37,36]
,[965,2,13,25,28,29,36,34]
,[964,6,21,36,38,39,43,30]
,[963,6,12,19,23,34,42,35]
,[962,1,18,28,31,34,43,40]
,[961,11,20,29,31,33,42,43]
,[960,2,18,24,30,32,45,14]
,[959,1,14,15,24,40,41,35]
,[958,2,9,10,16,35,37,1]
,[957,4,15,24,35,36,40,1]
,[956,10,11,20,21,25,41,40]
,[955,4,9,23,26,29,33,8]
,[954,1,9,26,28,30,41,32]
,[953,7,9,22,27,37,42,34]
,[952,4,12,22,24,33,41,38]
,[951,2,12,30,31,39,43,38]
,[950,3,4,15,22,28,40,10]
,[949,14,21,35,36,40,44,30]
,[948,13,18,30,31,38,41,5]
,[947,3,8,17,20,27,35,26]
,[946,9,18,19,30,34,40,20]
,[945,9,10,15,30,33,37,26]
,[944,2,13,16,19,32,33,42]
,[943,1,8,13,36,44,45,39]
,[942,10,12,18,35,42,43,39]
,[941,12,14,25,27,39,40,35]
,[940,3,15,20,22,24,41,11]
,[939,4,11,28,39,42,45,6]
,[938,4,8,10,16,31,36,9]
,[937,2,10,13,22,29,40,26]
,[936,7,11,13,17,18,29,43]
,[935,4,10,20,32,38,44,18]
,[934,1,3,30,33,36,39,12]
,[933,23,27,29,31,36,45,37]
,[932,1,6,15,36,37,38,5]
,[931,14,15,23,25,35,43,32]
,[930,8,21,25,38,39,44,28]
,[929,7,9,12,15,19,23,4]
,[928,3,4,10,20,28,44,30]
,[927,4,15,22,38,41,43,26]
,[926,10,16,18,20,25,31,6]
,[925,13,24,32,34,39,42,4]
,[924,3,11,34,42,43,44,13]
,[923,3,17,18,23,36,41,26]
,[922,2,6,13,17,27,43,36]
,[921,5,7,12,22,28,41,1]
,[920,2,3,26,33,34,43,29]
,[919,9,14,17,18,42,44,35]
,[918,7,11,12,31,33,38,5]
,[917,1,3,23,24,27,43,34]
,[916,6,21,22,32,35,36,17]
,[915,2,6,11,13,22,37,14]
,[914,16,19,24,33,42,44,27]
,[913,6,14,16,21,27,37,40]
,[912,5,8,18,21,22,38,10]
,[911,4,5,12,14,32,42,35]
,[910,1,11,17,27,35,39,31]
,[909,7,24,29,30,34,35,33]
,[908,3,16,21,22,23,44,30]
,[907,21,27,29,38,40,44,37]
,[906,2,5,14,28,31,32,20]
,[905,3,4,16,27,38,40,20]
,[904,2,6,8,26,43,45,11]
,[903,2,15,16,21,22,28,45]
,[902,7,19,23,24,36,39,30]
,[901,5,18,20,23,30,34,21]
,[900,7,13,16,18,35,38,14]
,[899,8,19,20,21,33,39,37]
,[898,18,21,28,35,37,42,17]
,[897,6,7,12,22,26,36,29]
,[896,5,12,25,26,38,45,23]
,[895,16,26,31,38,39,41,23]
,[894,19,32,37,40,41,43,45]
,[893,1,15,17,23,25,41,10]
,[892,4,9,17,18,26,42,36]
,[891,9,13,28,31,39,41,19]
,[890,1,4,14,18,29,37,6]
,[889,3,13,29,38,39,42,26]
,[888,3,7,12,31,34,38,32]
,[887,8,14,17,27,36,45,10]
,[886,19,23,28,37,42,45,2]
,[885,1,3,24,27,39,45,31]
,[884,4,14,23,28,37,45,17]
,[883,9,18,32,33,37,44,22]
,[882,18,34,39,43,44,45,23]
,[881,4,18,20,26,27,32,9]
,[880,7,17,19,23,24,45,38]
,[879,1,4,10,14,15,35,20]
,[878,2,6,11,16,25,31,3]
,[877,5,17,18,22,23,43,12]
,[876,5,16,21,26,34,42,24]
,[875,19,22,30,34,39,44,36]
,[874,1,15,19,23,28,42,32]
,[873,3,5,12,13,33,39,38]
,[872,2,4,30,32,33,43,29]
,[871,2,6,12,26,30,34,38]
,[870,21,25,30,32,40,42,31]
,[869,2,6,20,27,37,39,4]
,[868,12,17,28,41,43,44,25]
,[867,14,17,19,22,24,40,41]
,[866,9,15,29,34,37,39,12]
,[865,3,15,22,32,33,45,2]
,[864,3,7,10,13,25,36,32]
,[863,16,21,28,35,39,43,12]
,[862,10,34,38,40,42,43,32]
,[861,11,17,19,21,22,25,24]
,[860,4,8,18,25,27,32,42]
,[859,8,22,35,38,39,41,24]
,[858,9,13,32,38,39,43,23]
,[857,6,10,16,28,34,38,43]
,[856,10,24,40,41,43,44,17]
,[855,8,15,17,19,43,44,7]
,[854,20,25,31,32,36,43,3]
,[853,2,8,23,26,27,44,13]
,[852,11,17,28,30,33,35,9]
,[851,14,18,22,26,34,44,40]
,[850,16,20,24,28,36,39,5]
,[849,5,13,17,29,34,39,3]
,[848,1,2,16,22,38,39,34]
,[847,12,16,26,28,30,42,22]
,[846,5,18,30,41,43,45,13]
,[845,1,16,29,33,40,45,6]
,[844,7,8,13,15,33,45,18]
,[843,19,21,30,33,34,42,4]
,[842,14,26,32,36,39,42,38]
,[841,5,11,14,30,33,38,24]
,[840,2,4,11,28,39,43,27]
,[839,3,9,11,12,13,19,35]
,[838,9,14,17,33,36,38,20]
,[837,2,25,28,30,33,45,6]
,[836,1,9,11,14,26,28,19]
,[835,9,10,13,28,38,45,35]
,[834,6,8,18,35,42,43,3]
,[833,12,18,30,39,41,42,19]
,[832,13,14,19,26,40,43,30]
,[831,3,10,16,19,31,39,9]
,[830,5,6,16,18,37,38,17]
,[829,4,5,31,35,43,45,29]
,[828,4,7,13,29,31,39,18]
,[827,5,11,12,29,33,44,14]
,[826,13,16,24,25,33,36,42]
,[825,8,15,21,31,33,38,42]
,[824,7,9,24,29,34,38,26]
,[823,12,18,24,26,39,40,15]
,[822,9,18,20,24,27,36,12]
,[821,1,12,13,24,29,44,16]
,[820,10,21,22,30,35,42,6]
,[819,16,25,33,38,40,45,15]
,[818,14,15,25,28,29,30,3]
,[817,3,9,12,13,25,43,34]
,[816,12,18,19,29,31,39,7]
,[815,17,21,25,26,27,36,4]
,[814,2,21,28,38,42,45,30]
,[813,11,30,34,35,42,44,27]
,[812,1,3,12,14,16,43,10]
,[811,8,11,19,21,36,45,25]
,[810,5,10,13,21,39,43,11]
,[809,6,11,15,17,23,40,39]
,[808,15,21,31,32,41,43,24]
,[807,6,10,18,25,34,35,33]
,[806,14,20,23,31,37,38,27]
,[805,3,12,13,18,31,32,42]
,[804,1,10,13,26,32,36,9]
,[803,5,9,14,26,30,43,2]
,[802,10,11,12,18,24,42,27]
,[801,17,25,28,37,43,44,2]
,[800,1,4,10,12,28,45,26]
,[799,12,17,23,34,42,45,33]
,[798,2,10,14,22,32,36,41]
,[797,5,22,31,32,39,45,36]
,[796,1,21,26,36,40,41,5]
,[795,3,10,13,26,34,38,36]
,[794,6,7,18,19,30,38,13]
,[793,10,15,21,35,38,43,31]
,[792,2,7,19,25,29,36,16]
,[791,2,10,12,31,33,42,32]
,[790,3,8,19,27,30,41,12]
,[789,2,6,7,12,19,45,38]
,[788,2,10,11,19,35,39,29]
,[787,5,6,13,16,27,28,9]
,[786,12,15,16,20,24,30,38]
,[785,4,6,15,25,26,33,40]
,[784,3,10,23,24,31,39,22]
,[783,14,15,16,17,38,45,36]
,[782,6,18,31,34,38,45,20]
,[781,11,16,18,19,24,39,43]
,[780,15,17,19,21,27,45,16]
,[779,6,12,19,24,34,41,4]
,[778,6,21,35,36,37,41,11]
,[777,6,12,17,21,34,37,18]
,[776,8,9,18,21,28,40,20]
,[775,11,12,29,33,38,42,17]
,[774,12,15,18,28,34,42,9]
,[773,8,12,19,21,31,35,44]
,[772,5,6,11,14,21,41,32]
,[771,6,10,17,18,21,29,30]
,[770,1,9,12,23,39,43,34]
,[769,5,7,11,16,41,45,4]
,[768,7,27,29,30,38,44,4]
,[767,5,15,20,31,34,42,22]
,[766,9,30,34,35,39,41,21]
,[765,1,3,8,12,42,43,33]
,[764,7,22,24,31,34,36,15]
,[763,3,8,16,32,34,43,10]
,[762,1,3,12,21,26,41,16]
,[761,4,7,11,24,42,45,30]
,[760,10,22,27,31,42,43,12]
,[759,9,33,36,40,42,43,32]
,[758,5,9,12,30,39,43,24]
,[757,6,7,11,17,33,44,1]
,[756,10,14,16,18,27,28,4]
,[755,13,14,26,28,30,36,37]
,[754,2,8,17,24,29,31,32]
,[753,2,17,19,24,37,41,3]
,[752,4,16,20,33,40,43,7]
,[751,3,4,16,20,28,44,17]
,[750,1,2,15,19,24,36,12]
,[749,12,14,24,26,34,45,41]
,[748,3,10,13,22,31,32,29]
,[747,7,9,12,14,23,28,17]
,[746,3,12,33,36,42,45,25]
,[745,1,2,3,9,12,23,10]
,[744,10,15,18,21,34,41,43]
,[743,15,19,21,34,41,44,10]
,[742,8,10,13,36,37,40,6]
,[741,5,21,27,34,44,45,16]
,[740,4,8,9,16,17,19,31]
,[739,7,22,29,33,34,35,30]
,[738,23,27,28,38,42,43,36]
,[737,13,15,18,24,27,41,11]
,[736,2,11,17,18,21,27,6]
,[735,5,10,13,27,37,41,4]
,[734,6,16,37,38,41,45,18]
,[733,11,24,32,33,35,40,13]
,[732,2,4,5,17,27,32,43]
,[731,2,7,13,25,42,45,39]
,[730,4,10,14,15,18,22,39]
,[729,11,17,21,26,36,45,16]
,[728,3,6,10,30,34,37,36]
,[727,7,8,10,19,21,31,20]
,[726,1,11,21,23,34,44,24]
,[725,6,7,19,21,41,43,38]
,[724,2,8,33,35,37,41,14]
,[723,20,30,33,35,36,44,22]
,[722,12,14,21,30,39,43,45]
,[721,1,28,35,41,43,44,31]
,[720,1,12,29,34,36,37,41]
,[719,4,8,13,19,20,43,26]
,[718,4,11,20,23,32,39,40]
,[717,2,11,19,25,28,32,44]
,[716,2,6,13,16,29,30,21]
,[715,2,7,27,33,41,44,10]
,[714,1,7,22,33,37,40,20]
,[713,2,5,15,18,19,23,44]
,[712,17,20,30,31,33,45,19]
,[711,11,15,24,35,37,45,42]
,[710,3,4,9,24,25,33,10]
,[709,10,18,30,36,39,44,32]
,[708,2,10,16,19,34,45,1]
,[707,2,12,19,24,39,44,35]
,[706,3,4,6,10,28,30,37]
,[705,1,6,17,22,28,45,23]
,[704,1,4,8,23,33,42,45]
,[703,10,28,31,33,41,44,21]
,[702,3,13,16,24,26,29,9]
,[701,3,10,14,16,36,38,35]
,[700,11,23,28,29,30,44,13]
,[699,4,5,8,16,21,29,3]
,[698,3,11,13,21,33,37,18]
,[697,2,5,8,11,33,39,31]
,[696,1,7,16,18,34,38,21]
,[695,4,18,26,33,34,38,14]
,[694,7,15,20,25,33,43,12]
,[693,1,6,11,28,34,42,30]
,[692,3,11,14,15,32,36,44]
,[691,15,27,33,35,43,45,16]
,[690,24,25,33,34,38,39,43]
,[689,7,17,19,30,36,38,34]
,[688,5,15,22,23,34,35,2]
,[687,1,8,10,13,28,42,45]
,[686,7,12,15,24,25,43,13]
,[685,6,7,12,28,38,40,18]
,[684,1,11,15,17,25,39,40]
,[683,6,13,20,27,28,40,15]
,[682,17,23,27,35,38,43,2]
,[681,21,24,27,29,43,44,7]
,[680,4,10,19,29,32,42,30]
,[679,3,5,7,14,26,34,35]
,[678,4,5,6,12,25,37,45]
,[677,12,15,24,36,41,44,42]
,[676,1,8,17,34,39,45,27]
,[675,1,8,11,15,18,45,7]
,[674,9,10,14,25,27,31,11]
,[673,7,10,17,29,33,44,5]
,[672,8,21,28,31,36,45,43]
,[671,7,9,10,13,31,35,24]
,[670,11,18,26,27,40,41,25]
,[669,7,8,20,29,33,38,9]
,[668,12,14,15,24,27,32,3]
,[667,15,17,25,37,42,43,13]
,[666,2,4,6,11,17,28,16]
,[665,5,6,11,17,38,44,13]
,[664,10,20,33,36,41,44,5]
,[663,3,5,8,19,38,42,20]
,[662,5,6,9,11,15,37,26]
,[661,2,3,12,20,27,38,40]
,[660,4,9,23,33,39,44,14]
,[659,7,18,19,27,29,42,45]
,[658,8,19,25,28,32,36,37]
,[657,10,14,19,39,40,43,23]
,[656,3,7,14,16,31,40,39]
,[655,7,37,38,39,40,44,18]
,[654,16,21,26,31,36,43,6]
,[653,5,6,26,27,38,39,1]
,[652,3,13,15,40,41,44,20]
,[651,11,12,16,26,29,44,18]
,[650,3,4,7,11,31,41,35]
,[649,3,21,22,33,41,42,20]
,[648,13,19,28,37,38,43,4]
,[647,5,16,21,23,24,30,29]
,[646,2,9,24,41,43,45,30]
,[645,1,4,16,26,40,41,31]
,[644,5,13,17,23,28,36,8]
,[643,15,24,31,32,33,40,13]
,[642,8,17,18,24,39,45,32]
,[641,11,18,21,36,37,43,12]
,[640,14,15,18,21,26,35,23]
,[639,6,15,22,23,25,32,40]
,[638,7,18,22,24,31,34,6]
,[637,3,16,22,37,38,44,23]
,[636,6,7,15,16,20,31,26]
,[635,11,13,25,26,29,33,32]
,[634,4,10,11,12,20,27,38]
,[633,9,12,19,20,39,41,13]
,[632,15,18,21,32,35,44,6]
,[631,1,2,4,23,31,34,8]
,[630,8,17,21,24,27,31,15]
,[629,19,28,31,38,43,44,1]
,[628,1,7,12,15,23,42,11]
,[627,2,9,22,25,31,45,12]
,[626,13,14,26,33,40,43,15]
,[625,3,6,7,20,21,39,13]
,[624,1,7,19,26,27,35,16]
,[623,7,13,30,39,41,45,25]
,[622,9,15,16,21,28,34,24]
,[621,1,2,6,16,19,42,9]
,[620,2,16,17,32,39,45,40]
,[619,6,8,13,30,35,40,21]
,[618,8,16,25,30,42,43,15]
,[617,4,5,11,12,24,27,28]
,[616,5,13,18,23,40,45,3]
,[615,10,17,18,19,23,27,35]
,[614,8,21,25,39,40,44,18]
,[613,7,8,11,16,41,44,35]
,[612,6,9,18,19,25,33,40]
,[611,2,22,27,33,36,37,14]
,[610,14,18,20,23,28,36,33]
,[609,4,8,27,34,39,40,13]
,[608,4,8,18,19,39,44,41]
,[607,8,14,23,36,38,39,13]
,[606,1,5,6,14,20,39,22]
,[605,1,2,7,9,10,38,42]
,[604,2,6,18,21,33,34,30]
,[603,2,19,25,26,27,43,28]
,[602,13,14,22,27,30,38,2]
,[601,2,16,19,31,34,35,37]
,[600,5,11,14,27,29,36,44]
,[599,5,12,17,29,34,35,27]
,[598,4,12,24,33,38,45,22]
,[597,8,10,23,24,35,43,37]
,[596,3,4,12,14,25,43,17]
,[595,8,24,28,35,38,40,5]
,[594,2,8,13,25,28,37,3]
,[593,9,10,13,24,33,38,28]
,[592,2,5,6,13,28,44,43]
,[591,8,13,14,30,38,39,5]
,[590,20,30,36,38,41,45,23]
,[589,6,8,28,33,38,39,22]
,[588,2,8,15,22,25,41,30]
,[587,14,21,29,31,32,37,17]
,[586,2,7,12,15,21,34,5]
,[585,6,7,10,16,38,41,4]
,[584,7,18,30,39,40,41,36]
,[583,8,17,27,33,40,44,24]
,[582,2,12,14,33,40,41,25]
,[581,3,5,14,20,42,44,33]
,[580,5,7,9,11,32,35,33]
,[579,5,7,20,22,37,42,39]
,[578,5,12,14,32,34,42,16]
,[577,16,17,22,31,34,37,33]
,[576,10,11,15,25,35,41,13]
,[575,2,8,20,30,33,34,6]
,[574,14,15,16,19,25,43,2]
,[573,2,4,20,34,35,43,14]
,[572,3,13,18,33,37,45,1]
,[571,11,18,21,26,38,43,29]
,[570,1,12,26,27,29,33,42]
,[569,3,6,13,23,24,35,1]
,[568,1,3,17,20,31,44,40]
,[567,1,10,15,16,32,41,28]
,[566,4,5,6,25,26,43,41]
,[565,4,10,18,27,40,45,38]
,[564,14,19,25,26,27,34,2]
,[563,5,10,16,17,31,32,21]
,[562,4,11,13,17,20,31,33]
,[561,5,7,18,37,42,45,20]
,[560,1,4,20,23,29,45,28]
,[559,11,12,25,32,44,45,23]
,[558,12,15,19,26,40,43,29]
,[557,4,20,26,28,35,40,31]
,[556,12,20,23,28,30,44,43]
,[555,11,17,21,24,26,36,12]
,[554,13,14,17,32,41,42,6]
,[553,2,7,17,28,29,39,37]
,[552,1,10,20,32,35,40,43]
,[551,3,6,20,24,27,44,25]
,[550,1,7,14,20,34,37,41]
,[549,29,31,35,38,40,44,17]
,[548,1,12,13,21,32,45,14]
,[547,6,7,15,22,34,39,28]
,[546,8,17,20,27,37,43,6]
,[545,4,24,25,27,34,35,2]
,[544,5,17,21,25,36,44,10]
,[543,13,18,26,31,34,44,12]
,[542,5,6,19,26,41,45,34]
,[541,8,13,26,28,32,34,43]
,[540,3,12,13,15,34,36,14]
,[539,3,19,22,31,42,43,26]
,[538,6,10,18,31,32,34,11]
,[537,12,23,26,30,36,43,11]
,[536,7,8,18,32,37,43,12]
,[535,11,12,14,15,18,39,34]
,[534,10,24,26,29,37,38,32]
,[533,9,14,15,17,31,33,23]
,[532,16,17,23,24,29,44,3]
,[531,1,5,9,21,27,35,45]
,[530,16,23,27,29,33,41,22]
,[529,18,20,24,27,31,42,39]
,[528,5,17,25,31,39,40,10]
,[527,1,12,22,32,33,42,38]
,[526,7,14,17,20,35,39,31]
,[525,11,23,26,29,39,44,22]
,[524,10,11,29,38,41,45,21]
,[523,1,4,37,38,40,45,7]
,[522,4,5,13,14,37,41,11]
,[521,3,7,18,29,32,36,19]
,[520,4,22,27,28,38,40,1]
,[519,6,8,13,16,30,43,3]
,[518,14,23,30,32,34,38,6]
,[517,1,9,12,28,36,41,10]
,[516,2,8,23,41,43,44,30]
,[515,2,11,12,15,23,37,8]
,[514,1,15,20,26,35,42,9]
,[513,5,8,21,23,27,33,12]
,[512,4,5,9,13,26,27,1]
,[511,3,7,14,23,26,42,24]
,[510,12,29,32,33,39,40,42]
,[509,12,25,29,35,42,43,24]
,[508,5,27,31,34,35,43,37]
,[507,12,13,32,33,40,41,4]
,[506,6,9,11,22,24,30,31]
,[505,7,20,22,25,38,40,44]
,[504,6,14,22,26,43,44,31]
,[503,1,5,27,30,34,36,40]
,[502,6,22,28,32,34,40,26]
,[501,1,4,10,17,31,42,2]
,[500,3,4,12,20,24,34,41]
,[499,5,20,23,27,35,40,43]
,[498,13,14,24,32,39,41,3]
,[497,19,20,23,24,43,44,13]
,[496,4,13,20,29,36,41,39]
,[495,4,13,22,27,34,44,6]
,[494,5,7,8,15,30,43,22]
,[493,20,22,26,33,36,37,25]
,[492,22,27,31,35,37,40,42]
,[491,8,17,35,36,39,42,4]
,[490,2,7,26,29,40,43,42]
,[489,2,4,8,15,20,27,11]
,[488,2,8,17,30,31,38,25]
,[487,4,8,25,27,37,41,21]
,[486,1,2,23,25,38,40,43]
,[485,17,22,26,27,36,39,20]
,[484,1,3,27,28,32,45,11]
,[483,12,15,19,22,28,34,5]
,[482,1,10,16,24,25,35,43]
,[481,3,4,23,29,40,41,20]
,[480,3,5,10,17,30,31,16]
,[479,8,23,25,27,35,44,24]
,[478,18,29,30,37,39,43,8]
,[477,14,25,29,32,33,45,37]
,[476,9,12,13,15,37,38,27]
,[475,1,9,14,16,21,29,3]
,[474,4,13,18,31,33,45,43]
,[473,8,13,20,22,23,36,34]
,[472,16,25,26,31,36,43,44]
,[471,6,13,29,37,39,41,43]
,[470,10,16,20,39,41,42,27]
,[469,4,21,22,34,37,38,33]
,[468,8,13,15,28,37,43,17]
,[467,2,12,14,17,24,40,39]
,[466,4,10,13,23,32,44,20]
,[465,1,8,11,13,22,38,31]
,[464,6,12,15,34,42,44,4]
,[463,23,29,31,33,34,44,40]
,[462,3,20,24,32,37,45,4]
,[461,11,18,26,31,37,40,43]
,[460,8,11,28,30,43,45,41]
,[459,4,6,10,14,25,40,12]
,[458,4,9,10,32,36,40,18]
,[457,8,10,18,23,27,40,33]
,[456,1,7,12,18,23,27,44]
,[455,4,19,20,26,30,35,24]
,[454,13,25,27,34,38,41,10]
,[453,12,24,33,38,40,42,30]
,[452,8,10,18,30,32,34,27]
,[451,12,15,20,24,30,38,29]
,[450,6,14,19,21,23,31,13]
,[449,3,10,20,26,35,43,36]
,[448,3,7,13,27,40,41,36]
,[447,2,7,8,9,17,33,34]
,[446,1,11,12,14,26,35,6]
,[445,13,20,21,30,39,45,32]
,[444,11,13,23,35,43,45,17]
,[443,4,6,10,19,20,44,14]
,[442,25,27,29,36,38,40,41]
,[441,1,23,28,30,34,35,9]
,[440,10,22,28,34,36,44,2]
,[439,17,20,30,31,37,40,25]
,[438,6,12,20,26,29,38,45]
,[437,11,16,29,38,41,44,21]
,[436,9,14,20,22,33,34,28]
,[435,8,16,26,30,38,45,42]
,[434,3,13,20,24,33,37,35]
,[433,19,23,29,33,35,43,27]
,[432,2,3,5,11,27,39,33]
,[431,18,22,25,31,38,45,6]
,[430,1,3,16,18,30,34,44]
,[429,3,23,28,34,39,42,16]
,[428,12,16,19,22,37,40,8]
,[427,6,7,15,24,28,30,21]
,[426,4,17,18,27,39,43,19]
,[425,8,10,14,27,33,38,3]
,[424,10,11,26,31,34,44,30]
,[423,1,17,27,28,29,40,5]
,[422,8,15,19,21,34,44,12]
,[421,6,11,26,27,28,44,30]
,[420,4,9,10,29,31,34,27]
,[419,2,11,13,14,28,30,7]
,[418,11,13,15,26,28,34,31]
,[417,4,5,14,20,22,43,44]
,[416,5,6,8,11,22,26,44]
,[415,7,17,20,26,30,40,24]
,[414,2,14,15,22,23,44,43]
,[413,2,9,15,23,34,40,3]
,[412,4,7,39,41,42,45,40]
,[411,11,14,22,35,37,39,5]
,[410,1,3,18,32,40,41,16]
,[409,6,9,21,31,32,40,38]
,[408,9,20,21,22,30,37,16]
,[407,6,7,13,16,24,25,1]
,[406,7,12,21,24,27,36,45]
,[405,1,2,10,25,26,44,4]
,[404,5,20,21,24,33,40,36]
,[403,10,14,22,24,28,37,26]
,[402,5,9,15,19,22,36,32]
,[401,6,12,18,31,38,43,9]
,[400,9,21,27,34,41,43,2]
,[399,1,2,9,17,19,42,20]
,[398,10,15,20,23,42,44,7]
,[397,12,13,17,22,25,33,8]
,[396,18,20,31,34,40,45,30]
,[395,11,15,20,26,31,35,7]
,[394,1,13,20,22,25,28,15]
,[393,9,16,28,40,41,43,21]
,[392,1,3,7,8,24,42,43]
,[391,10,11,18,22,28,39,30]
,[390,16,17,28,37,39,40,15]
,[389,7,16,18,20,23,26,3]
,[388,1,8,9,17,29,32,45]
,[387,1,26,31,34,40,43,20]
,[386,4,7,10,19,31,40,26]
,[385,7,12,19,21,29,32,9]
,[384,11,22,24,32,36,38,7]
,[383,4,15,28,33,37,40,25]
,[382,10,15,22,24,27,42,19]
,[381,1,5,10,12,16,20,11]
,[380,1,2,8,17,26,37,27]
,[379,6,10,22,31,35,40,19]
,[378,5,22,29,31,34,39,43]
,[377,6,22,29,37,43,45,23]
,[376,1,11,13,24,28,40,7]
,[375,4,8,19,25,27,45,7]
,[374,11,13,15,17,25,34,26]
,[373,15,26,37,42,43,45,9]
,[372,8,11,14,16,18,21,13]
,[371,7,9,15,26,27,42,18]
,[370,16,18,24,42,44,45,17]
,[369,17,20,35,36,41,43,21]
,[368,11,21,24,30,39,45,26]
,[367,3,22,25,29,32,44,19]
,[366,5,12,19,26,27,44,38]
,[365,5,15,21,25,26,30,31]
,[364,2,5,7,14,16,40,4]
,[363,11,12,14,21,32,38,6]
,[362,2,3,22,27,30,40,29]
,[361,5,10,16,24,27,35,33]
,[360,4,16,23,25,35,40,27]
,[359,1,10,19,20,24,40,23]
,[358,1,9,10,12,21,40,37]
,[357,10,14,18,21,36,37,5]
,[356,2,8,14,25,29,45,24]
,[355,5,8,29,30,35,44,38]
,[354,14,19,36,43,44,45,1]
,[353,11,16,19,22,29,36,26]
,[352,5,16,17,20,26,41,24]
,[351,5,25,27,29,34,36,33]
,[350,1,8,18,24,29,33,35]
,[349,5,13,14,20,24,25,36]
,[348,3,14,17,20,24,31,34]
,[347,3,8,13,27,32,42,10]
,[346,5,13,14,22,44,45,33]
,[345,15,20,23,29,39,42,2]
,[344,1,2,15,28,34,45,38]
,[343,1,10,17,29,31,43,15]
,[342,1,13,14,33,34,43,25]
,[341,1,8,19,34,39,43,41]
,[340,18,24,26,29,34,38,32]
,[339,6,8,14,21,30,37,45]
,[338,2,13,34,38,42,45,16]
,[337,1,5,14,18,32,37,4]
,[336,3,5,20,34,35,44,16]
,[335,5,9,16,23,26,45,21]
,[334,13,15,21,29,39,43,33]
,[333,5,14,27,30,39,43,35]
,[332,16,17,34,36,42,45,3]
,[331,4,9,14,26,31,44,39]
,[330,3,4,16,17,19,20,23]
,[329,9,17,19,30,35,42,4]
,[328,1,6,9,16,17,28,24]
,[327,6,12,13,17,32,44,24]
,[326,16,23,25,33,36,39,40]
,[325,7,17,20,32,44,45,33]
,[324,2,4,21,25,33,36,17]
,[323,10,14,15,32,36,42,3]
,[322,9,18,29,32,38,43,20]
,[321,12,18,20,21,25,34,42]
,[320,16,19,23,25,41,45,3]
,[319,5,8,22,28,33,42,37]
,[318,2,17,19,20,34,45,21]
,[317,3,10,11,22,36,39,8]
,[316,10,11,21,27,31,39,43]
,[315,1,13,33,35,43,45,23]
,[314,15,17,19,34,38,41,2]
,[313,9,17,34,35,43,45,2]
,[312,2,3,5,6,12,20,25]
,[311,4,12,24,27,28,32,10]
,[310,1,5,19,28,34,41,16]
,[309,1,2,5,11,18,36,22]
,[308,14,15,17,19,37,45,40]
,[307,5,15,21,23,25,45,12]
,[306,4,18,23,30,34,41,19]
,[305,7,8,18,21,23,39,9]
,[304,4,10,16,26,33,41,38]
,[303,2,14,17,30,38,45,43]
,[302,13,19,20,32,38,42,4]
,[301,7,11,13,33,37,43,26]
,[300,7,9,10,12,26,38,39]
,[299,1,3,20,25,36,45,24]
,[298,5,9,27,29,37,40,19]
,[297,6,11,19,20,28,32,34]
,[296,3,8,15,27,30,45,44]
,[295,1,4,12,16,18,38,8]
,[294,6,10,17,30,37,38,40]
,[293,1,9,17,21,29,33,24]
,[292,17,18,31,32,33,34,10]
,[291,3,7,8,18,20,42,45]
,[290,8,13,18,32,39,45,7]
,[289,3,14,33,37,38,42,10]
,[288,1,12,17,28,35,41,10]
,[287,6,12,24,27,35,37,41]
,[286,1,15,19,40,42,44,17]
,[285,13,33,37,40,41,45,2]
,[284,2,7,15,24,30,45,28]
,[283,6,8,18,31,38,45,42]
,[282,2,5,10,18,31,32,30]
,[281,1,3,4,6,14,41,12]
,[280,10,11,23,24,36,37,35]
,[279,7,16,31,36,37,38,11]
,[278,3,11,37,39,41,43,13]
,[277,10,12,13,15,25,29,20]
,[276,4,15,21,33,39,41,25]
,[275,14,19,20,35,38,40,26]
,[274,13,14,15,26,35,39,25]
,[273,1,8,24,31,34,44,6]
,[272,7,9,12,27,39,43,28]
,[271,3,8,9,27,29,40,36]
,[270,5,9,12,20,21,26,27]
,[269,5,18,20,36,42,43,32]
,[268,3,10,19,24,32,45,12]
,[267,7,8,24,34,36,41,1]
,[266,3,4,9,11,22,42,37]
,[265,5,9,34,37,38,39,12]
,[264,9,16,27,36,41,44,5]
,[263,1,27,28,32,37,40,18]
,[262,9,12,24,25,29,31,36]
,[261,6,11,16,18,31,43,2]
,[260,7,12,15,24,37,40,43]
,[259,4,5,14,35,42,45,34]
,[258,14,27,30,31,38,40,17]
,[257,6,13,27,31,32,37,4]
,[256,4,11,14,21,23,43,32]
,[255,1,5,6,24,27,42,32]
,[254,1,5,19,20,24,30,27]
,[253,8,19,25,31,34,36,33]
,[252,14,23,26,31,39,45,28]
,[251,6,7,19,25,28,38,45]
,[250,19,23,30,37,43,45,38]
,[249,3,8,27,31,41,44,11]
,[248,3,8,17,23,38,45,13]
,[247,12,15,28,36,39,40,13]
,[246,13,18,21,23,26,39,15]
,[245,9,11,27,31,32,38,22]
,[244,13,16,25,36,37,38,19]
,[243,2,12,17,19,28,42,34]
,[242,4,19,20,21,32,34,43]
,[241,2,16,24,27,28,35,21]
,[240,6,10,16,40,41,43,21]
,[239,11,15,24,39,41,44,7]
,[238,2,4,15,28,31,34,35]
,[237,1,11,17,21,24,44,33]
,[236,1,4,8,13,37,39,7]
,[235,21,22,26,27,31,37,8]
,[234,13,21,22,24,26,37,4]
,[233,4,6,13,17,28,40,39]
,[232,8,9,10,12,24,44,35]
,[231,5,10,19,31,44,45,27]
,[230,5,11,14,29,32,33,12]
,[229,4,5,9,11,23,38,35]
,[228,17,25,35,36,39,44,23]
,[227,4,5,15,16,22,42,2]
,[226,2,6,8,14,21,22,34]
,[225,5,11,13,19,31,36,7]
,[224,4,19,26,27,30,42,7]
,[223,1,3,18,20,26,27,38]
,[222,5,7,28,29,39,43,44]
,[221,2,20,33,35,37,40,10]
,[220,5,11,19,21,34,43,31]
,[219,4,11,20,26,35,37,16]
,[218,1,8,14,18,29,44,20]
,[217,16,20,27,33,35,39,38]
,[216,7,16,17,33,36,40,1]
,[215,2,3,7,15,43,44,4]
,[214,5,7,20,25,28,37,32]
,[213,2,3,4,5,20,24,42]
,[212,11,12,18,21,31,38,8]
,[211,12,13,17,20,33,41,8]
,[210,10,19,22,23,25,37,39]
,[209,2,7,18,20,24,33,37]
,[208,14,25,31,34,40,44,24]
,[207,3,11,14,31,32,37,38]
,[206,1,2,3,15,20,25,43]
,[205,1,3,21,29,35,37,30]
,[204,3,12,14,35,40,45,5]
,[203,1,3,11,24,30,32,7]
,[202,12,14,27,33,39,44,17]
,[201,3,11,24,38,39,44,26]
,[200,5,6,13,14,17,20,7]
,[199,14,21,22,25,30,36,43]
,[198,12,19,20,25,41,45,2]
,[197,7,12,16,34,42,45,4]
,[196,35,36,37,41,44,45,30]
,[195,7,10,19,22,35,40,31]
,[194,15,20,23,26,39,44,28]
,[193,6,14,18,26,36,39,13]
,[192,4,8,11,18,37,45,33]
,[191,5,6,24,25,32,37,8]
,[190,8,14,18,30,31,44,15]
,[189,8,14,32,35,37,45,28]
,[188,19,24,27,30,31,34,36]
,[187,1,2,8,18,29,38,42]
,[186,4,10,14,19,21,45,9]
,[185,1,2,4,8,19,38,14]
,[184,1,2,6,16,20,33,41]
,[183,2,18,24,34,40,42,5]
,[182,13,15,27,29,34,40,35]
,[181,14,21,23,32,40,45,44]
,[180,2,15,20,21,29,34,22]
,[179,5,9,17,25,39,43,32]
,[178,1,5,11,12,18,23,9]
,[177,1,10,13,16,37,43,6]
,[176,4,17,30,32,33,34,15]
,[175,19,26,28,31,33,36,17]
,[174,13,14,18,22,35,39,16]
,[173,3,9,24,30,33,34,18]
,[172,4,19,21,24,26,41,35]
,[171,4,16,25,29,34,35,1]
,[170,2,11,13,15,31,42,10]
,[169,16,27,35,37,43,45,19]
,[168,3,10,31,40,42,43,30]
,[167,24,27,28,30,36,39,4]
,[166,9,12,27,36,39,45,14]
,[165,5,13,18,19,22,42,31]
,[164,6,9,10,11,39,41,27]
,[163,7,11,26,28,29,44,16]
,[162,1,5,21,25,38,41,24]
,[161,22,34,36,40,42,45,44]
,[160,3,7,8,34,39,41,1]
,[159,1,18,30,41,42,43,32]
,[158,4,9,13,18,21,34,7]
,[157,19,26,30,33,35,39,37]
,[156,5,18,28,30,42,45,2]
,[155,16,19,20,32,33,41,4]
,[154,6,19,21,35,40,45,20]
,[153,3,8,11,12,13,36,33]
,[152,1,5,13,26,29,34,43]
,[151,1,2,10,13,18,19,15]
,[150,2,18,25,28,37,39,16]
,[149,2,11,21,34,41,42,27]
,[148,21,25,33,34,35,36,17]
,[147,4,6,13,21,40,42,36]
,[146,2,19,27,35,41,42,25]
,[145,2,3,13,20,27,44,9]
,[144,4,15,17,26,36,37,43]
,[143,26,27,28,42,43,45,8]
,[142,12,16,30,34,40,44,19]
,[141,8,12,29,31,42,43,2]
,[140,3,13,17,18,19,28,8]
,[139,9,11,15,20,28,43,13]
,[138,10,11,27,28,37,39,19]
,[137,7,9,20,25,36,39,15]
,[136,2,16,30,36,41,42,11]
,[135,6,14,22,28,35,39,16]
,[134,3,12,20,23,31,35,43]
,[133,4,7,15,18,23,26,13]
,[132,3,17,23,34,41,45,43]
,[131,8,10,11,14,15,21,37]
,[130,7,19,24,27,42,45,31]
,[129,19,23,25,28,38,42,17]
,[128,12,30,34,36,37,45,39]
,[127,3,5,10,29,32,43,35]
,[126,7,20,22,27,40,43,1]
,[125,2,8,32,33,35,36,18]
,[124,4,16,23,25,29,42,1]
,[123,7,17,18,28,30,45,27]
,[122,1,11,16,17,36,40,8]
,[121,12,28,30,34,38,43,9]
,[120,4,6,10,11,32,37,30]
,[119,3,11,13,14,17,21,38]
,[118,3,4,10,17,19,22,38]
,[117,5,10,22,34,36,44,35]
,[116,2,4,25,31,34,37,17]
,[115,1,2,6,9,25,28,31]
,[114,11,14,19,26,28,41,2]
,[113,4,9,28,33,36,45,26]
,[112,26,29,30,33,41,42,43]
,[111,7,18,31,33,36,40,27]
,[110,7,20,22,23,29,43,1]
,[109,1,5,34,36,42,44,33]
,[108,7,18,22,23,29,44,12]
,[107,1,4,5,6,9,31,17]
,[106,4,10,12,22,24,33,29]
,[105,8,10,20,34,41,45,28]
,[104,17,32,33,34,42,44,35]
,[103,5,14,15,27,30,45,10]
,[102,17,22,24,26,35,40,42]
,[101,1,3,17,32,35,45,8]
,[100,1,7,11,23,37,42,6]
,[99,1,3,10,27,29,37,11]
,[98,6,9,16,23,24,32,43]
,[97,6,7,14,15,20,36,3]
,[96,1,3,8,21,22,31,20]
,[95,8,17,27,31,34,43,14]
,[94,5,32,34,40,41,45,6]
,[93,6,22,24,36,38,44,19]
,[92,3,14,24,33,35,36,17]
,[91,1,21,24,26,29,42,27]
,[90,17,20,29,35,38,44,10]
,[89,4,26,28,29,33,40,37]
,[88,1,17,20,24,30,41,27]
,[87,4,12,16,23,34,43,26]
,[86,2,12,37,39,41,45,33]
,[85,6,8,13,23,31,36,21]
,[84,16,23,27,34,42,45,11]
,[83,6,10,15,17,19,34,14]
,[82,1,2,3,14,27,42,39]
,[81,5,7,11,13,20,33,6]
,[80,17,18,24,25,26,30,1]
,[79,3,12,24,27,30,32,14]
,[78,10,13,25,29,33,35,38]
,[77,2,18,29,32,43,44,37]
,[76,1,3,15,22,25,37,43]
,[75,2,5,24,32,34,44,28]
,[74,6,15,17,18,35,40,23]
,[73,3,12,18,32,40,43,38]
,[72,2,4,11,17,26,27,1]
,[71,5,9,12,16,29,41,21]
,[70,5,19,22,25,28,43,26]
,[69,5,8,14,15,19,39,35]
,[68,10,12,15,16,26,39,38]
,[67,3,7,10,15,36,38,33]
,[66,2,3,7,17,22,24,45]
,[65,4,25,33,36,40,43,39]
,[64,14,15,18,21,26,36,39]
,[63,3,20,23,36,38,40,5]
,[62,3,8,15,27,29,35,21]
,[61,14,15,19,30,38,43,8]
,[60,2,8,25,36,39,42,11]
,[59,6,29,36,39,41,45,13]
,[58,10,24,25,33,40,44,1]
,[57,7,10,16,25,29,44,6]
,[56,10,14,30,31,33,37,19]
,[55,17,21,31,37,40,44,7]
,[54,1,8,21,27,36,39,37]
,[53,7,8,14,32,33,39,42]
,[52,2,4,15,16,20,29,1]
,[51,2,3,11,16,26,44,35]
,[50,2,10,12,15,22,44,1]
,[49,4,7,16,19,33,40,30]
,[48,6,10,18,26,37,38,3]
,[47,14,17,26,31,36,45,27]
,[46,8,13,15,23,31,38,39]
,[45,1,10,20,27,33,35,17]
,[44,3,11,21,30,38,45,39]
,[43,6,31,35,38,39,44,1]
,[42,17,18,19,21,23,32,1]
,[41,13,20,23,35,38,43,34]
,[40,7,13,18,19,25,26,6]
,[39,6,7,13,15,21,43,8]
,[38,16,17,22,30,37,43,36]
,[37,7,27,30,33,35,37,42]
,[36,1,10,23,26,28,40,31]
,[35,2,3,11,26,37,43,39]
,[34,9,26,35,37,40,42,2]
,[33,4,7,32,33,40,41,9]
,[32,6,14,19,25,34,44,11]
,[31,7,9,18,23,28,35,32]
,[30,8,17,20,35,36,44,4]
,[29,1,5,13,34,39,40,11]
,[28,9,18,23,25,35,37,1]
,[27,1,20,26,28,37,43,27]
,[26,4,5,7,18,20,25,31]
,[25,2,4,21,26,43,44,16]
,[24,7,8,27,29,36,43,6]
,[23,5,13,17,18,33,42,44]
,[22,4,5,6,8,17,39,25]
,[21,6,12,17,18,31,32,21]
,[20,10,14,18,20,23,30,41]
,[19,6,30,38,39,40,43,26]
,[18,3,12,13,19,32,35,29]
,[17,3,4,9,17,32,37,1]
,[16,6,7,24,37,38,40,33]
,[15,3,4,16,30,31,37,13]
,[14,2,6,12,31,33,40,15]
,[13,22,23,25,37,38,42,26]
,[12,2,11,21,25,39,45,44]
,[11,1,7,36,37,41,42,14]
,[10,9,25,30,33,41,44,6]
,[9,2,4,16,17,36,39,14]
,[8,8,19,25,34,37,39,9]
,[7,2,9,16,25,26,40,42]
,[6,14,15,26,27,40,42,34]
,[5,16,24,29,40,41,42,3]
,[4,14,27,30,31,40,42,2]
,[3,11,16,19,21,27,31,30]
,[2,9,13,21,25,32,42,2]
,[1,10,23,29,33,37,40,16]
 ];
