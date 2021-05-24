//QUIZ START
let quiz_form = document.querySelector('.quiz__form');
if (quiz_form) {
	let PrevBtn = document.querySelector('.btnPrev');
	let nextBtn = document.querySelector('.btnNext');
	let quizAll = document.querySelectorAll('.quiz__block');
	let currentQ = document.querySelector('.currentQ');
	let progressQ = document.querySelector('.progress');
	let progress = 0;
	let count = 0;
	let progressPercent = 100 / (quizAll.length - 1);
	console.log(progressPercent)

	initProgress();
	removeBtn();

	document.querySelector('.allQ').textContent = `${quizAll.length}`;

	nextBtn.addEventListener('click', function () {
		currentQ.textContent++;
		count++
		progress += Number(progressPercent.toFixed(3));
		console.log(progress)
		initQuiz();
		initProgress();
		removeBtn();
	})


	PrevBtn.addEventListener('click', function () {
		count--
		currentQ.textContent--;
		progress -= Number(progressPercent.toFixed(3));
		console.log(progress)
		initQuiz();
		initProgress();
		removeBtn();
	})

	function initQuiz() {
		quizAll.forEach((element, i) => {
			element.classList.remove('active')
			if (i === count) {
				element.classList.add('active')
			}
		})
	}

	function initProgress() {
		progressQ.style.width = `${progress}%`;
	}

	function removeBtn() {
		if (count === 0) {
			PrevBtn.style.display = 'none'
		} else if (count !== 0) {
			PrevBtn.style.display = 'block'
		}
		if (count === quizAll.length - 1) {
			nextBtn.style.display = 'none'
		} else if (count !== quizAll.length) {
			nextBtn.style.display = 'block'
		}
	}
}
// QUIZ THE END




