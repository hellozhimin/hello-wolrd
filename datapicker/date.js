(function(){
	var datapicker = {};
	datapicker.getMonthData = function(year,month){
		var ret = [],
			_year = year,
			_month = month,
			today,
			firstDay,
			firstDayWeekDay,
			lastDayOfLastMonth,
			lastDateOfLastMonth,
			lastDayOfThisMonth,
			lastDateOfThisMonth,
			preMonthDayCount = firstDayWeekDay -1;
		if(!year||!month){
			 today = new Date();
			 _year = today.getFullYear();
			 _month = today.getMonth() + 1;
		}
		firstDay = new Date(_year,_month-1,1);
		firstDayWeekDay = firstDay.getDay();
		if(firstDayWeekDay === 0) {
			firstDayWeekDay = 7;
		}
		preMonthDayCount = firstDayWeekDay -1;
		lastDayOfLastMonth = new Date(_year,_month-1,0);
		lastDateOfLastMonth = lastDayOfLastMonth.getDate();
		lastDayOfThisMonth = new Date(_year,_month,0);
		lastDateOfThisMonth = lastDayOfThisMonth.getDate();

		for(var i=0;i<7*6;i++){
			var date = i + 1 - preMonthDayCount;
			console.log("date是：" + date)
			console.log("lastDateOfThisMonth 是： " + lastDateOfThisMonth)
			var showDate = date;
			var thisMonth = _month;
			//上一月
			if(date<=0){
				thisMonth = month -1;
				showDate = lastDateOfLastMonth + date;
			}else if(date>lastDateOfThisMonth){
				//下一个月

				thisMonth = _month + 1;
				showDate = showDate - lastDateOfThisMonth;
				console.log("showDate是: "+ showDate) ;
			}
			if(thisMonth === 0){
				thisMonth = 12;
			}
			if(thisMonth === 13){
				thisMonth = 1;
			}
			ret.push({
				month:thisMonth,
				date:date,
				showDate:showDate
			})
		}
		return ret;
	}
	window.datapicker = datapicker;
})()