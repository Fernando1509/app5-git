// JavaScript 

$(document).ready(funtion(e){
	document.addEventListener("deviceready" , function(){
		
		$('#beep').tap(fuction(){
			navigator.notification.Beep(1);
		});//tap Beep
		
		$('#vibrar').tap(fuction(){
			navigator.notification.Vibrate(1000);
		});//tap Vibrar
		
	},false); //deviceready
}); //ready