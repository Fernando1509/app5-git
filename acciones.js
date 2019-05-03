// JavaScript 

$(document).ready(funtion(e){
	document.addEventListener("deviceready" , function(){
		
		$('#beep').tap(fuction(){
			navigator.notification.beep(1);
		});//tap beep
		
		$('#vibrar').tap(fuction(){
			navigator.notification.vibrate(5000);
		});//tap vibrar
		
	},false); //deviceready
}); //ready