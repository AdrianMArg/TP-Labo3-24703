$(document).ready(function(){

	// Función que detecta cambios en el container y activa el botón submit si las preguntas ya tienen algún valor	
	$( "#container" ).change(function() {

		var  pregunta1 = $("#pregunta1").val();
		var  pregunta2 = $("#pregunta2").val();
		var  pregunta3 = $("#pregunta3").val();
		var  pregunta4 = $("#pregunta4").val();
		
		if(pregunta1 != "" && pregunta2 != "" && pregunta3 != "" && pregunta4 != ""){
			$("#submit").prop('disabled', false);
		}
		else{
			$("#submit").prop('disabled', true);
		}
		});
	
	// Función que se ejecuta cuando hacen clic en el boton validar
	$("#submit").click(function(){
	
		var  pregunta1 = $("#pregunta1").val();
		if (pregunta1 == "1810-05-25"){
			var total1 = 25;
			document.getElementById("result").innerHTML="Opción correcta!";
			document.getElementById("result").style.color="green";
		}
		else{
			var total1 = 0;	
			document.getElementById("result").innerHTML="Opción incorrecta";
			document.getElementById("result").style.color="red";
		}
		
		var  pregunta2 = $("#pregunta2").val();
		var total2 = parseInt(pregunta2);
		if (pregunta2 == 25){
			document.getElementById("result2").innerHTML="Opción correcta!";
			document.getElementById("result2").style.color="green";
		}
		else{
			document.getElementById("result2").innerHTML="Opción incorrecta";
			document.getElementById("result2").style.color="red";
		}
		
		var  pregunta3 = $("#pregunta3").val();
		var total3 = parseInt(pregunta3);
		if (pregunta3 == 25){
			document.getElementById("result3").innerHTML="Opción correcta!";
			document.getElementById("result3").style.color="green";
		}
		else{
			document.getElementById("result3").innerHTML="Opción incorrecta";
			document.getElementById("result3").style.color="red";
		}	
		
		var  pregunta4 = $("#pregunta4").val();
		var total4 = parseInt(pregunta4);
		if (pregunta4 == 25){
			document.getElementById("result4").innerHTML="Opción correcta!";
			document.getElementById("result4").style.color="green";
		}
		else{
			document.getElementById("result4").innerHTML="Opción incorrecta";
			document.getElementById("result4").style.color="red";
		}
		
		resultado = total1+total2+total3+total4;
				document.getElementById("total").innerHTML= "Su resultado es de: " + resultado + "/100";
				$("#submit").hide();
				$("#total").css({'display':'block'});	
	});	
});