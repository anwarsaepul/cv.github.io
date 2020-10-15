// memanggil element 
const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
// menambahkan event click
container.addEventListener('click', function(e) {
	// mengecek class yang di klik
	if (e.target.className == 'thumb' ){
		// mengganti src nya
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');

	}
});