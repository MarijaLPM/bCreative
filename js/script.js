

function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
	  x.className += " responsive";
	} else {
	  x.className = "topnav";
	}
  }

  let list = document.querySelectorAll('.list');
let itemBox = document.querySelectorAll('.itemBox');

for (let i = 0; i < list.length; i++) {
	list[i].addEventListener('click', function () {
		for (let j = 0; j < list.length; j++) {
			list[j].classList.remove('active');
		}
		this.classList.add('active');

		let dataFilter = this.getAttribute('data-filter');

		for (let k = 0; k < itemBox.length; k++) {
			itemBox[k].classList.remove('active');
			itemBox[k].classList.add('hide');

			if (itemBox[k].getAttribute('data-item') == dataFilter || dataFilter == "all") {
				itemBox[k].classList.remove('hide');
				itemBox[k].classList.add('active');
			}
		}

	})
}


  function startCounter(){
	const counters = document.querySelectorAll('.counter');
	const speed = 500; // The lower the slower
	
	counters.forEach(counter => {
		const updateCount = () => {
			const target = +counter.getAttribute('data-target');
			const count = +counter.innerText;
	
			// 
			const inc = target / speed;
	
			// console.log(inc);
			// console.log(count);
	
			// Check if target is reached
			if (count < target) {
				// Add inc to count and output in counter
				counter.innerText = Math.ceil( count + inc);
				// Call function every ms
				setTimeout(updateCount, 1);
			} else {
				counter.innerText = target;
			}
		};
	
		updateCount();
	});
	}