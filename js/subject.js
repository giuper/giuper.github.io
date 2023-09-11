status=0;

function toggle_all(){
	if (status){
		hide_all();
		status=0;
	} else
	{ 
		show_all();
		status=1;
	}
}

function hide_all(){
	for (i=1;i<=26;i++)
		hide("abstract"+i);
}
function hide(DivId) {
	var ele = document.getElementById(DivId);
		ele.style.display = "none";
} 

function show_all(){
	for (i=1;i<=26;i++)
		show("abstract"+i);
}

function show(DivId) {
	var ele1=document.getElementById("lowerbounds");
		ele1.style.display="none";
	var ele2=document.getElementById("anamorphic");
		ele2.style.display="none";
	var ele = document.getElementById(DivId);
		ele.style.display = "block";
} 



function toggle(DivId) {
	var ele = document.getElementById(DivId);
	if(ele.style.display == "none") 
		ele.style.display = "block";
	else 
   		ele.style.display = "none";
} 

