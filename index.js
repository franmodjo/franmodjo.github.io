var objPeople = [

{

username: "najoua.ghrieb@bdeb.qc.ca"
password: "najoua"

}

]
function getInfo(){
	var username = document.getElementById("username").value
	var username = document.getElementById("password").value
	for(i = 0; i < objPeople.length; i++){
		if (username ==objPeople[i].username && password ==objPeople[i].password){
			console.log(username + "is logged in")
		}
	}

}   

	<script language="javascript" type="text/javascript"></script>
function alertpopup()

{
alert:("this is alert.popup, it is like an output dialogue box")

}
function promptpopup()
{
	var st = prompt ("Enter any string")
	alert(hello);
}
function confirmpopup()
{
	var c=confirm("Do you wish to continue?")
	if(c==true)
	alert("You pressed ok")
	else
	alert("You press Cancel")
}
