

// function submitData(targetURL) {
// 	//Marshelling into JSON
// 	var dataToBeSent = "{";
// 	if(typeof(document.forms[0]) == 'undefined' || document.forms[0] == null){
// 		alert("HTML form element is not defined.");
// 		return;
// 	}
// 	var x = document.forms[0].elements;
// 	for (var i = 0; i < x.length; i++) {
// 		if((x[i].getAttribute("type") != null) &&
// 			(x[i].getAttribute("type").toLowerCase() == 'submit' || x[i].getAttribute("type").toLowerCase() == 'button')) continue;

// 		if(i > 0) dataToBeSent += ",";
// 		dataToBeSent += "\""+ x[i].getAttribute("name") +"\":\""+ x[i].value +"\"";
// 	}
// 	na = document.forms[0].name
// 	dataToBeSent = JSON.stringify(dataToBeSent);
// 	console.log(dataToBeSent);
// 	//Sending HTTP request to server
// 	sendRequest(targetURL, dataToBeSent);

// 	return false;
// }

// function sendRequest(targetURL, jsonData){
// 	var xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			showOutput(this.responseText);
// 		} else if (this.readyState == 4){
// 			alert("Error occurred with status code: "+this.status);
// 		}
// 	};
// 	xhttp.open("POST", targetURL, true);
// 	xhttp.setRequestHeader("Content-type", "application/json");
// 	xhttp.send(jsonData);

// }

// function showOutput(output){
// 	var division = document.getElementById("output_div");
// 	if(division === null || division == 'undefined'){
// 		division = document.createElement("div");
// 		division.setAttribute("id", "output_div");
// 		division.setAttribute("style", "text-align:center");
// 		division.style.color = "blue";
// 		var element = document.getElementsByTagName("body");
// 		element[0].appendChild(division);
// 	}
// 	division.innerHTML = output
// }


// function cambiar_login() {
// 	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
//   document.querySelector('.cont_form_login').style.display = "block";
//   document.querySelector('.cont_form_sign_up').style.opacity = "0";               
  
//   setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
	
//   setTimeout(function(){    
//   document.querySelector('.cont_form_sign_up').style.display = "none";
//   },200);  
// 	}
  
//   function cambiar_sign_up(at) {
// 	document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
// 	document.querySelector('.cont_form_sign_up').style.display = "block";
//   document.querySelector('.cont_form_login').style.opacity = "0";
	
//   setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
//   },100);  
  
//   setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
//   },400);  
  
  
//   }    
  
  
  
//   function ocultar_login_sign_up() {
  
//   document.querySelector('.cont_forms').className = "cont_forms";  
//   document.querySelector('.cont_form_sign_up').style.opacity = "0";               
//   document.querySelector('.cont_form_login').style.opacity = "0"; 
  
//   setTimeout(function(){
//   document.querySelector('.cont_form_sign_up').style.display = "none";
//   document.querySelector('.cont_form_login').style.display = "none";
//   },500);  
	
// 	}

function submitData() {
	var obj = {};
	obj.secret_key = $("#secret_key").val();
	obj.audio_ = $("#audio_").val();

	var json = JSON.stringify(obj);
	var xhr = new XMLHttpRequest();

	xhr.open("POST", "/submitJSON1_", true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.onload = function () {
		$("#output_div").append(xhr.response);
		// // $('#output_div').val(xhr.response)
		window.scrollBy(0, 700);

		if (xhr.readyState == 4 && xhr.status == "200") {
		} else {
		console.log("not ok");
		}
		
	};
	xhr.send(json);
}

function submitData1() {
	var obj = {};
	obj.secret_key = $("#secret_key").val();
	obj.encrypted_text = $("#encrypted_text").val();
	obj.par_text = $("#par_text").val();

	var json = JSON.stringify(obj);
	var xhr = new XMLHttpRequest();

	xhr.open("POST", "/submitJSON2_", true);
	xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
	xhr.onload = function () {
		$("#output_div").append(xhr.response);
		// // $('#output_div').val(xhr.response)
		window.scrollBy(0, 700);

		if (xhr.readyState == 4 && xhr.status == "200") {
		} else {
		console.log("not ok");
		}
		
	};
	xhr.send(json);
}