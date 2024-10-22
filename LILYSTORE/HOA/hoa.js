function SaveItem(name,data) {
		
	 for (i = 0; i <= localStorage.length-1; i++) {
	 	if(localStorage.key(i) == name){
	 		data = Number(data) +  Number(localStorage.getItem(localStorage.key(i)))
		}
	
	}
	localStorage.setItem(name, data);
	
}