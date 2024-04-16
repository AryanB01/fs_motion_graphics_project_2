// this is my version of professor code for tabs. 
$(document).ready(function(){
	// this is for the box of paragaphs selecting 
	let tabContainer = $('.tabs div');
	
	//this is for the top of the tab button that is clicked to render the pargraph
	let tabLinks = $('.tabNavigation li a');
	// hides all the tab container
	tabContainer.hide();

	// shows the first tab container only: jquery .show() effect adde
	$(tabContainer).filter(':first').show();

	//assigning class selected to the first element/tab
	$('.tabs .tabNavigation a:first').addClass('selected');

	// removing hte default use of click here and adding an onClick on evry anchor tag inside tabNavigation
	tabLinks.on('click', function(event){
		event.preventDefault();

		//hides all the element at first: used jquery effect hide().
		tabContainer.hide();	

		// using the slideDown() method for the tabs to come sliding down: added jquery slideDown and toggle effect for better UI
		tabContainer.filter(this.hash).slideDown(1000);
        tabContainer.filter(this.hash).toggle();

		// only shows hte hashed element: for eg: if the id is #first then the hased value will be first 
		tabContainer.filter(this.hash).show();

		// remove the selected class from the anchor tag 
		$('div.tabs ul.tabNavigation a').removeClass('selected');
		
		// add the selected class in the new selected anchor element 
		$(this).addClass('selected');

		return false;

	})
	
})