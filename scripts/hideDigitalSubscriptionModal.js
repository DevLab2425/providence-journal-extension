(function(){
	var elementsToHideById = [
		'pressplusOverlay',
		'ppUI'
	];
	
	for(var i = 0; i < elementsToHideById.length; i++){
		var element = document.getElementById( elementsToHideById[i] );
		if(!element) {
			continue;
		}
		
		element.style.display = "none";
	}
})();
