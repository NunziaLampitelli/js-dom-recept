// 1 change logo color
document.addEventListener('DOMContentLoaded', (event) => {
            const logoTextElement = document.querySelector('.logo-text');

            logoTextElement.style.color = '#384241';
});

// 2 e 3

 document.addEventListener("DOMContentLoaded", (event) => {
		const headerElement = document.querySelector("header");

		headerElement.style.justifyContent = "unset";

		headerElement.style.borderBottomColor = "lightgray";
 });

 // 4

  document.addEventListener("DOMContentLoaded", (event) => {
    let recipeName = "Forzen Cheesecake"
  document.getElementById('recipe-name').innerText = recipeName;
  });

// 5 e 6
     document.addEventListener("DOMContentLoaded", (event) => {
				const spans = document.querySelectorAll(".time-container span");
				const firstSpan = spans[0];
				const secondSpan = spans[1];

				firstSpan.classList.add("material-icons");

				secondSpan.textContent = "60+ min";
			});

// 7
  document.addEventListener("DOMContentLoaded", (event) => {
		const imageContainer = document.querySelector(".image-container");

		const imgElement = imageContainer.querySelector("img");

		imgElement.src = "assets/frozen-cheesecake-slice.jpg";
	});

  // 8 ingredients list background color
    document.addEventListener("DOMContentLoaded", (event) => {
			const ingredientsContainer = document.querySelector(".ingredients-container"
			);

			ingredientsContainer.style.backgroundColor = "#f9f9f9";
		});

  //  modify inside text of till botten 
     document.addEventListener("DOMContentLoaded", (event) => {

        let data = ["15st digestivetex", "Lite smör"];
        let list = document.getElementsByClassName(".to-bottom");
        for (i = 0; i < data.length; ++i) {
            let li = document.createElement('li');
            li.innerText = data[i];
            list.appendChild(li);
        }
      });

   //  third element in ingredients is wrong, add the correct one
  document.addEventListener("DOMContentLoaded", (event) => {
		const ulElement = document.querySelector(".ingredients-list-paste");

		const oldLiElement = ulElement.children[2];

		const newLiElement = document.createElement("li");
		newLiElement.textContent = "3tsk vaniljsocker";

		ulElement.replaceChild(newLiElement, oldLiElement);

		const lastLiElement = document.createElement("li");
		lastLiElement.textContent = "400g naturell philadelphiaost";
		ulElement.appendChild(lastLiElement);
	});

// remove instructions shadow

    document.addEventListener("DOMContentLoaded", (event) => {
			const shadowElement = document.querySelector(".instructions.shadow");

			shadowElement.style.boxShadow = "none";
		});


// replace two wrong instructions 
        document.addEventListener("DOMContentLoaded", (event) => {
					const olElement = document.querySelector(".instructions-list");

					const secondLiElement = olElement.children[1];
					const ninthLiElement = olElement.children[8];

					const newSecondLiElement = document.createElement("li");
					newSecondLiElement.innerHTML =
						"Separera ägggulor och äggvitor. Äggvitorna lägger du i en stor bunke, äggulorna i en liten bunke.";

					const newNinthLiElement = document.createElement("li");
					newNinthLiElement.innerHTML = "Ställ in i frysen över natten.";

					olElement.replaceChild(newSecondLiElement, secondLiElement);
					olElement.replaceChild(newNinthLiElement, ninthLiElement);
				});