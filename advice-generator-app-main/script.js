function getAdvice() {
			fetch('https://api.adviceslip.com/advice')
				.then(response => response.json())
				.then(data => {
                    
                    document.getElementById('advice').innerHTML = `"${data.slip.advice}"`
                    document.getElementById('ad').innerHTML = data.slip.id
                })

				.catch(error => console.error(error))
		}

		getAdvice();

if(window.innerWidth <= 700){
    document.getElementById('line').src = './images/pattern-divider-mobile.svg'
}