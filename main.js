function crossWord() {
  const words = document.querySelectorAll('.word');
  const answers = document.querySelectorAll('.answer');
  const modal = document.querySelector('.modal');
  let wordSelected = "";

  function isGameOver() {
    const matchedElements = document.querySelectorAll('.j-matched');
    return matchedElements.length === answers.length;
  }

  function selectWordToSearch(e) {
    const suffix = this.className.split('--')[1].split(' ')[0];
    wordSelected = suffix;
  }

  function selectAnswer(e) {
    const answerSelected = this.className.split('--')[1].split(' ')[0];
    const isAMatch = answerSelected == wordSelected; 

    if (isAMatch) {
      this.classList.add('j-matched');
    }

    if (isGameOver()) {
      modal.classList.add('show');
    }
  }

  words.forEach(word => word.addEventListener("click", selectWordToSearch));
  answers.forEach(answer => answer.addEventListener('click', selectAnswer));

}

crossWord();