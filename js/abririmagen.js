
	var cambiarderecha=function(urlimagen,i){
 		$("#imagenderecha").click(function(){
 		console.log("derecha");
 		if(i<4){
 		i++;	
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		else{
 		i=1;
 		urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		
 		});
 	};

 	var cambiarizquierda=function(urlimagen,i){
 		$("#imagenizquierda").click(function(){
 		console.log("izquierda");
 		if(i>1){
 		i--;	
 		var urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		else{
 			i=4;
 		urlimagen2="images/zapatos/"+urlimagen+"/foto"+i+".jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		}
 		
 		});
 	};
	


	//Haces click en la imagen y te abre el modal
	var abririmagen=function(i){
	$(".openimg").click(function() {
 		console.log("abriendo imagen");
 		$(".modal").css("display","block");	
 		var urlimagen=$(this).attr("id")
  		var urlimagen2= "images/zapatos/"+urlimagen+"/foto1.jpg";
 		$("#urlimagen").attr("src",urlimagen2);
 		cambiarderecha(urlimagen,i);
 		cambiarizquierda(urlimagen,i);
	});
		
	};

	//Para cerrar la imagen
	$("#closeimagen").click(function(){
		$(".modal").css("display","none");
	});


	abririmagen(1);
