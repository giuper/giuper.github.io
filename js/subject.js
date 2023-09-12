function hide_all(){
    hide("lowerbounds");
	hide("anamorphic");
	hide("nizk");
}

function hide(DivId) {
	var ele = document.getElementById(DivId);
		ele.style.display = "none";
} 

function toggle(DivId){
	var ele = document.getElementById(DivId);
	if(ele.style.display == "none") {
        hide_all();
		ele.style.display = "block";
    } else {
   		ele.style.display = "none";
    }
} 

