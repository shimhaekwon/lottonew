
var allnum2 = [4,7,8,18,25,34,37];
var allnum = [1,2,3,5,7];
var newnum = [];
var movenum = 0;
var newnumlist = [[]];
var aa = 0;
var bb = 0;
var cc = 6;
var exCnt = 2;
var goCnt=0;


var getArrayList = {
    arrList:Array(),
    func:function(){
        var array = allnum.slice();
        var visited = new Array(array.length);
        var cnt = exCnt;
        this.combination(array, visited, 0, array.length, cnt);
        console.log("this.arrList=",this.arrList);
    },
    combination:function(arr, visited, startPos, arrLength, combiCount){
        // console.log("arr=",arr);
        // console.log("visited=",visited);
        // console.log("startPos=",startPos);
        // console.log("arrLength=",arrLength);
        // console.log("combiCount=",combiCount);

        console.log("arr=",arr,", visited=",visited, ", startPos=",startPos, ", arrLength=",arrLength, ", combiCount=",combiCount);

        var arrSet = new Array();
        if (combiCount===0){
            for (var i=0; i<arr.length; i++){
                //console.log("i=",i);
                if(visited[i]){
                    console.log(arr[i] + ", ");
                    arrSet.push(arr[i]);
                }
            }
            console.log("");
            this.arrList.push(arrSet);
            return;
        }
        for(var i=startPos; i<arrLength; i++){
            visited[i] = true;
            this.combination(arr,visited, i+1, arrLength, combiCount-1);
            visited[i] = false;
        }
    }
} 

var getNumberExtract = {

	func:function(){
		while(newnum.length < cc){
			aa = Math.floor(Math.random() * allnum.length);
			console.log("Math.floor(Math.random() * allnum.length):"+aa);
			movenum = allnum.splice(aa,1)[0];
			console.log("allnum.splice(aa,6)[0]:"+movenum);
			newnum.push(movenum);
		}
		console.log ( newnum );
	}
}

var getNumberExtract2 = {

	func:function(){
		while(newnum.length <= cc){
			movenum = allnum.splice(Math.floor(Math.random() * allnum.length),7)[0];
			console.log("allnum.splice(aa,6)[0]:"+movenum);
			newnum.push(movenum);
		}
		console.log ( newnum );
	}
}

var getNumberExtract3 = {
    setArList:function(arrExl){
        
        console.log("getNumberExtract3.setArList");
        debugger;
        var arrAdd = [];
        var arrRet = arrExl;    // 리턴할 배열목록

        if(arrExl.length>0){
            arrAdd = this.setArr(arrExl);
        }
        else{
            // 최초 배열 조합 생성 exCnt 갯수만큼 차례로 배열조합 만들어서 배열목록에 추가.
            for (var i=0; i<exCnt; i++){                
                arrAdd.push(allnum[i]);
            }
            arrRet = [];
        }

        console.log("arrAdd=",arrAdd);
        arrRet.push(arrAdd);
        return arrRet;
    },
    setNumber:function(arrAddGroup,idx){

    },
    setArr:function(arrExl){

        console.log("getNumberExtract3.setArr");
        var arrFn = []; // 배열목록의 최종 배열조합
        var arrAdd = [];    // 추가할 배열조합
        var jj = allnum.length; // 원 배열의 length
        var ii = exCnt; // 비교대상 배열의 length
        var preIndex = false;   // 이전 인덱스로 이동 필요 여부.
        var addFlag = true; // 배열조합 추가 이전 여부
        var arrRet = arrExl;    // 리턴할 배열목록
        var arrCmpl = new Array(exCnt);
        var i=0;
        var j=0;

        // arrExl 의 최종 배열조합을 arrFn에 넣는다.
        for (var i=0; i<exCnt; i++){
            arrFn.push(arrExl[arrExl.length-1][i]);
            arrCmpl.push(false);
        }

        debugger;
        arrAdd = arrFn.slice();

        while (addFlag){   

            goCnt++;
            if (goCnt > 20){break;}

            debugger;
            //arrFn 의 인자값들을 allnum 의 값들과 비교
            for (var i=0; i<arrFn.length-1; i++){         
                
                if(!addFlag){break;}

                console.log("arrFn[ii-1-i]",arrFn[ii-1-i]);

                // 비교대상 final index - i 인자값을 원배열 findal index - i 인자 값과 비교한다.
                for (var j=0; j<allnum.length-1-i; j++){

                    console.log("allnum[jj-1-j]",allnum[jj-1-j]);

                    // 비교대상 의 인자값과 원배열 의 인자값을 비교
                    if (arrFn[ii-1-i] == allnum[jj-1-j]){
                        
                        // 비교대상 배열의 최종인자 값이 원배열 최종인자 값과 같으면 그 이전 인자를 비교
                        if(j===0){ 
                            break;
                        }

                        // 비교대상 배열의 최종인자 값이 원배열 최종인자 값과 같지 않으면. 원배열의 다음 인자값을 부여.
                        else{                            
                            arrAdd[ii-1-i]=allnum[jj-1-j+1];
                            if ((ii-1-i) == 0){
                                for (var k=0; k<exCnt;k++){
                                    arrAdd[ii-1-i+k]=allnum[jj-1-j+1+k];
                                }                                
                            }
                            addFlag = false;
                            break;
                        }
                    } else    {
                        continue;
                    }        
            
                }
            }
        }

        return arrAdd;

        // 1,2,3,5,7  5개 원본 배열에서 추출한 exCnt (3개로 가정) 배열조합의 최종 조합은
        // 3, 5, 7 >> 완료, 아니면 그 이전 조합을 생성하여 배열목록에 추가.

        // 1,2,3 >> 3이 원배열의 최종값이 아니므로 다음 인자값으로 바꾸고 배열조합 생성 후 배열목록에 추가
        // 1,2,5 >> 5가 원배열의 최종값이 아니므로 다음 인자값으로 바꾸고 배열조합 생성 후 배열목록에 추가
        // 1,2,7 >> 7이 원배열의 최종값이므로 직전 인덱스 값을 확인 >> 원배열의 다음값으로 바꾸고 3번째 값은 그 다음값.

        // 1,3,5
        // 1,3,7
        // 1,5,7
        // 2,3,5
        // 2,3,7
        // 2,5,7
        // 3,5,7       

    },
    func:function(){

        console.log("getNumberExtract3.func");
    ///////////////////////////////////////////////////////////////////////////////////////
        var goFlag = true;    
        var lt = 0;
        var idx = 0;
        var arrEx = new Array(0);
        var arrChck = new Array(0);
        var arrExl = new Array(0);
        var chkCnt = 0;

        debugger;

        // goFlag 가 true 일 때 실행한다.
        while (goFlag){

            goCnt++;
            if (goCnt > 20){break;}
            // arrExl 의 마지막 배열값이 allnum 의 마지막 exCnt 갯수 만큼의 인자 값들과 같으면 종료한다.
            if (arrExl.length>0){

                console.log ("arrExl:"+arrExl);
                console.log ("arrExl[arrExl.length-1]:"+arrExl[arrExl.length-1]);

                // arrExl 의 마지막 배열값의 exCnt 인자들 값을 allnum 마지막 exCnt 인자들 값과 비교.
                for (var arrChck of arrExl[arrExl.length-1]){
                    for (var i=0; i<arrChck.length; i++){
                        if(arrChck[i] = allnum[allnum.length-exCnt]){                    
                            chkCnt ++;
                        }
                    }
                }

                // exCnt 갯수만큼 동일하면 최종 조합값이 배열목록에 포함되었으므로 종료. 아니면 배열목록에 배열조합을 추가.
                if(chkCnt===exCnt){
                    goFlag = false;
                    break;
                }
                else{
                    arrExl = this.setArList(arrExl);
                }

            }
            else{
                // arrExl 인자가 없거나, 마지막 인자의 값이 allnum의 마지막 exCnt 만큼 인자 값들과 같지 않다면, 값을 등록하고 추가.
                arrExl = this.setArList(arrExl);
            }
        }
        console.log("arrExl=",arrExl);
    ///////////////////////////////////////////////////////////////////////////////////////
    }
}

getArrayList.func();
//getNumberExtract3.func();