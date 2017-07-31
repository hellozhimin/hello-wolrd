(function(){
	var datapicker = window.datapicker;
	datapicker.buildUi = function(year,month){
		//得到一个月的数据
		var monthData = datapicker.getMonthData(year,month);
		var html = '<div class="ui-datapicker-header">' + 
						'<a href="#" class="ui-datapicker-btn ui-datapicker-prev-btn">&lt;</a>'+
						'<a href="#" class="ui-datapicker-btn ui-datapicker-next-btn">&gt;</a>'+
						'<span class="ui-datapicker-curr-month">2016-12</span>'+
					'</div>'+
					'<div class="ui-datapicker-body">'+
						'<table>'+
							'<thead>'+
								'<tr>'+
									'<th>一</th>'+
									'<th>二</th>'+
									'<th>三</th>'+
									'<th>四</th>'+
									'<th>五</th>'+
									'<th>六</th>'+
									'<th>日</th>'+
								'</tr>'+
							'</thead>'+
							'<tbody>';
			for(var i=0;i<monthData.length;i++){
				var date = monthData[i];
				if(i%7 === 0){
					html += '<tr>';
				}
				html += '<td>' + date.showDate + '</td>';
				if(i%7 === 6){
					html += '</tr>';
				}
			}
			html +=  '</tbody>'+
						'</table>'+
					 '</div>';
		return html;
	};
	datapicker.init = function($dom){
		var html = datapicker.buildUi();
		$dom.innerHTML = html;
	}
	datapicker.logText = function(){
		console.log("hhhh");
	}
})()