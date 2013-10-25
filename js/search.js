// Elijah Moran
// MIU 1310

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

    var Main = {
	    //Search
	    var search = ds('searchBtn');
	    console.log(search);

	        var getSearch = function(){
		        var term = ds('search').value;
                // Search by  category
                if (category !="--Choose A Platform--" && term==" ") {
		            for(i=0, j=localStorage.length; i<j; i++){
			        var key = localStorage.key(i);
			        var value = localStorage.getItem(key);
			        var item = JSON.parse(value);
			        if category === item.group[1];
			            for (n in item) {
			                console.log(item[n][0]+": "+item[n][1]);
				        }
			        }
		        }
	        }
        }
	    search.addEventListener("click", getSearch);
    };

});


// Search //
var search = ds('searchBtn');
search.addEventListener("click", getSearch);
 
function getSearch = function(){
    var category = ds("platforms").value; 
    var term = ds('search').value;

    // Search by  category     
    if (category !="--Choose A Platform--" && term==" ") {
    	 var makeDiv =document.createElement('div');
    	 makeDiv.setAttribute("id", "items");
    	 var makelist =document.createElement('ul');
    	 makeDiv.appendChild(makeList);
    	 document.body.appendChild(makeDiv);
    	 for(i=0, len=localStorage.length; i<len; i++){
    	 	var makeli =document.createElement('li');
    	 	makeList.appendChild(makeli);
    	 	var key = localStorage.key(i);
    	 	var value = localStorage.getItem(key);
		    var item = JSON.parse(value);
            var makeSubList = document.createElement('ul');
            makeli.appendChild(makeSubList);
            if category === item.group[1];
			    for (n in item) {
                var makeSubli.createElement(makeSubli);
                makeSubList.appendChild(makeSubli);
                var optSubText = item[n[0]+" "+item[n][1]];
                makeSubli.innerHTML = optSubText;
                }
            }    
        }
    }    
}
             





