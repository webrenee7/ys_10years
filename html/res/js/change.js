var _currentTab = 0, picWidth = 208,len = 5;

function switchVouch(value){
	_currentTab = value;
	$('.point_list li').removeClass('on');
	if(_currentTab>=5){
		_currentTab=0;
	}
	$('#point' + _currentTab).addClass('on');
	$('.list_body').animate({
		left : (-1-value) * picWidth + 'px'
		},0,function(){		
		if(value >= len){
			$('.list_body').css('left',(-1) * picWidth + 'px');
			_currentTab = 0;
		}
	});
}

function clearAuto() {
	clearInterval(autoStart);
}

function setAuto() {
	autoStart = setInterval("auto(_currentTab)", 2000);
}

function auto() {
	_currentTab++;
	switchVouch(_currentTab);
} 
 
setAuto(); 	

function leftScr(){
	_currentTab--;
	if(_currentTab < 0){
		$('.list_body').css('left',(-1)*(len+1)*picWidth + 'px');
		_currentTab = len - 1;
	}
	switchVouch(_currentTab);	
}

function rightScr(){
	_currentTab++;
	if(_currentTab >= len){
		$('.list_body').css('left','0px');
		_currentTab = 0;
	}
	switchVouch(_currentTab);	
}

