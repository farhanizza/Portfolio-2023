const firebaseConfig = {
	apiKey: 'AIzaSyDQsh4Vx3t7Dy36HH5qSPF_INEp8EKf0EM',
	authDomain: 'fir-js-1b4be.firebaseapp.com',
	databaseURL:
		'https://fir-js-1b4be-default-rtdb.asia-southeast1.firebasedatabase.app',
	projectId: 'fir-js-1b4be',
	storageBucket: 'fir-js-1b4be.appspot.com',
	messagingSenderId: '579408382737',
	appId: '1:579408382737:web:d03d555591aa128a595ab0',
};
firebase.initializeApp(firebaseConfig);
// ready data
var name, email, phone, comment;
function Ready() {
	names = document.getElementById('name').value;
	email = document.getElementById('email').value;
	phone = document.getElementById('phone').value;
	comment = document.getElementById('comment').value;
}
// insert
document.getElementById('insert').onclick = function () {
	Ready();
	if (names == null || names === '') {
		alert('Name Must be filled clearly');
		return false;
	}

	if (!validateEmail(email)) {
		alert('Invalid email you can use @');
		return false;
	}

	if (!validateNumber(phone)) {
		alert('Invalid phone number you can use numbers');
		return false;
	}

	if (comment.length < 5 || comment.length > 100) {
		alert('Minimum 5, Maximum 100 on message filling');
		return false;
	}

	firebase
		.database()
		.ref('person/' + names)
		.set({
			Name: names,
			Email: email,
			Phone: phone,
			Comment: comment,
		});
	alert('Thank you for contacting me!');
};

function validateEmail(email) {
	const regexs =
		/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return regexs.test(email);
}

function validateNumber(phone) {
	const regexPhone =
		/(\+62 ((\d{3}([ -]\d{3,})([- ]\d{4,})?)|(\d+)))|(\(\d+\) \d+)|\d{3}( \d+)+|(\d+[ -]\d+)|\d+/;
	return regexPhone.test(phone);
}
