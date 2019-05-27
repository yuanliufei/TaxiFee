module.exports = function main(input) {
    // write your code here...
    var distance=input.distance;	//注意输入是对象形式
	var parkTime=input.parkTime;
	if(distance<2){
		return round(case1(parkTime));
	}
	else if(distance<=8){
		return round(case2(distance,parkTime));
	}
	else if(distance>8){
		return round(case3(distance,parkTime));
	}
};
function case1(parkTime){
	return 6+parkTime*0.25;
}
function case2(distance,parkTime){
	return case1(parkTime)+(distance-2)*0.8;
}
function case3(distance,parkTime){
	return case2(8,parkTime)+(distance-8)*0.8*1.5;
}
function round(cost){
	return Math.round(cost);
}
