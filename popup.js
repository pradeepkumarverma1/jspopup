async function popup(args, positiveFunction) {


	//Popup container that will work as an overlay
	const popupContainer = document.createElement('div');
	popupContainer.setAttribute('id', 'jsPopupContainer');
	popupContainer.style.background = 'rgba(0,0,0,0.5)';
	popupContainer.style.position = 'fixed';
	popupContainer.style.height = '100vh';
	popupContainer.style.width = '100%';
	popupContainer.style.zIndex = '999';
	popupContainer.style.top = '0';
	popupContainer.style.left = '0';





	//The main Popup
	const popup = document.createElement('div');
	popup.setAttribute('id', 'jsPopup');
	popup.style.background = '#ffffff';
	popup.style.width = '300px';
	popup.style.maxWidth = '90%';
	popup.style.borderRadius = '10px';
	popup.style.left = '50%';
	popup.style.top = '30%';
	popup.style.transform = 'translate(-50%)';
	popup.style.position = 'absolute';





	//The Popup title area
	const popupTitle = document.createElement('div');
	popupTitle.setAttribute('id', 'popupTitle');
	popupTitle.style.padding = '10px';
	popupTitle.style.background = '#f3f3f3';
	popupTitle.style.borderRadius = '10px 10px 0px 0px';
	popupTitle.style.fontWeight = 'bold';

	popupTitle.innerHTML = args.title || "heading";





	//The popup message area
	const popupMessage = document.createElement('div');
	popupMessage.setAttribute('id', 'popupMessage');
	popupMessage.style.padding = '10px';

	popupMessage.innerHTML = args.message ||  "custom message";



	//The Actions area that will contain the action buttons
	const actions = document.createElement('div');
	actions.style.display = 'flex';
	actions.style.gap = '10px';
	actions.style.margin = '10px 10px';
	actions.style.justifyContent = 'space-between';



	//The postive action button
	const positiveButton = document.createElement('button');

	if(args.positiveButton == undefined) {

		positiveButton.setAttribute('id', 'positiveButton');
		positiveButton.style.background = 'green';
		positiveButton.style.border = 'none';
		positiveButton.style.borderRadius = '10px';
		positiveButton.style.color = '#ffffff';
		positiveButton.style.padding = '10px';
		positiveButton.innerHTML =  'Continue';


	} else {

		positiveButton.setAttribute('id', 'positiveButton');
		positiveButton.style.background = args.positiveButton.background || 'green';
		positiveButton.style.border = 'none';
		positiveButton.style.borderRadius = '10px';
		positiveButton.style.color = args.positiveButton.color ||  '#ffffff';
		positiveButton.style.padding = '10px';
		positiveButton.innerHTML = args.positiveButton.text ||  'Continue';


	}





	//Appending positive action button to actions div
	actions.append(positiveButton);




	//Function to be executed when positiveButton is pressed
	if(positiveFunction == undefined) {

		positiveButton.addEventListener('click', function() {

			popupContainer.remove();

		});

	} else {

		positiveButton.addEventListener('click', function(){

			positiveFunction();
			popupContainer.remove();

		});
	}

	//The negative action button
	const negativeButton = document.createElement('button');

	if(args.negativeButton == undefined) {

		negativeButton.setAttribute('id', 'negativeButton');
		negativeButton.style.background = 'tomato';
		negativeButton.style.border = 'none';
		negativeButton.style.borderRadius = '10px';
		negativeButton.style.color = '#ffffff';
		negativeButton.style.padding = '10px';
		negativeButton.innerHTML = 'Cancel';

	} else {


		negativeButton.setAttribute('id', 'negativeButton');
		negativeButton.style.background = args.negativeButton.background ||  'tomato';
		negativeButton.style.border = 'none';
		negativeButton.style.borderRadius = '10px';
		negativeButton.style.color = args.negativeButton.color || '#ffffff';
		negativeButton.style.padding = '10px';
		negativeButton.innerHTML = args.negativeButton.text ||  'Cancel';

	}




	//Appending positive action button to actions div
	actions.append(negativeButton);


	//Function to be executed when negativeButton is pressed
	negativeButton.addEventListener('click', function(){

		popupContainer.remove();

	});



	//Appending the popup title div to the main popup
	popup.append(popupTitle);


	//Appending the popup message div to the main popup
	popup.append(popupMessage);


	//Appending the actions div to the main popup
	popup.append(actions);



	//Appending the popup to the popupContainer 
	popupContainer.append(popup);


	//Appending popupContainer on the main document
	document.body.append(popupContainer);
}
