let directionName = document.querySelector('.direction-name');
let getDegrees = document.querySelector('.text-degrees');
let getCompassCoorination = document.querySelector('.compass-body');

function updateDirectionName (stringDirection) {
	directionName.innerHTML = stringDirection;
}

function updateDegreesText (degree) {
	getDegrees.innerHTML = Math.round(degree);
}


function getDirectionName (degree) {

	if (degree >= 337.5 && degree <= 45) {
		updateDirectionName('N');
		updateDegreesText(degree);
	}
	else if (degree > 45 && degree <= 135) {
		updateDirectionName('E');
		updateDegreesText(degree);
	}
	else if (degree > 225 && degree <= 315) {
		updateDirectionName('S');
		updateDegreesText(degree);
	}
	else if (degree > 315 && degree < 337.5) {
		updateDirectionName('W');
		updateDegreesText(degree);
	}
	else {
		updateDirectionName('N');
		updateDegreesText(degree);
	}
}

window.addEventListener('deviceorientation', function (event) {
	getCompassCoorination.style.transform = `rotate(${event.alpha}deg)`;

	getDirectionName(event.alpha);
}, false);