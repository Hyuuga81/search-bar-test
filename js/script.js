const filterInput = document.querySelector(".filter-input");
const englishGrammar = document.querySelectorAll("li");

englishGrammar.forEach(function (grammar) {
	grammar.classList.add("widget");
})

filterInput.addEventListener("input", function(e) {
	const search = e.target.value;
  console.log(search);
  
  for (let item of englishGrammar) {
  	const grammarTitle = item.innerText.toLowerCase();
    if (grammarTitle.includes(search)) {
    	item.classList.remove("hide");
    } else {
    	item.classList.add("hide");
    }
  }
});