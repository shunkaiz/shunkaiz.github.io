function expandBtnHandler(elem){
	var parent = elem.parentNode;
	parent.style.setProperty('max-height', 'none');
	var collapsBtn = parent.getElementsByClassName('collapse-button')[0];
	// console.log(parent.style);
	console.log(collapsBtn);
	elem.style.setProperty('visibility', 'hidden');	
	collapsBtn.style.setProperty('visibility', 'visible');
}

function collapseBtnHandler(elem){
	var parent = elem.parentNode;
	parent.style.setProperty('max-height', '300px');
	var expandableBtn = parent.getElementsByClassName('expandable-button')[0];	
	elem.style.setProperty('visibility', 'hidden');	
	expandableBtn.style.setProperty('visibility', 'visible');
}

window.onload = function() {
  init();
};


function init(){
	console.log(1111);
}