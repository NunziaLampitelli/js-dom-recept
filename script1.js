// 1 recipe's name

const recipeName = document.getElementsByClassName("logo-text");
console.log(recipeName);

// 2 recipe name tag

        document.addEventListener("DOMContentLoaded", function () {
					const recipeNameCollection =
						document.getElementsByClassName("logo-text");

					if (recipeNameCollection.length > 0) {
						const recipeName = recipeNameCollection[0];
						console.log(recipeName.tagName); 
					} else {
						console.log("Nessun elemento trovato con la classe 'logo-text'.");
					}
				});

// 3 What is the font size of the paragraph tag with the class "description".

 document.addEventListener("DOMContentLoaded", function () {
		// Selezionare gli elementi con la classe "logo-text"
		const descriptionCollection = document.getElementsByClassName("description");

		if (descriptionCollection.length > 0) {
			const descriptionFontSize = descriptionCollection[0];
			console.log(descriptionFontSize.computedStyleMap());
		} else {
			console.log("Nessun elemento trovato con la classe 'description'.");
		}
 });

 // 4 What is the value of the alt atrribute on the image?
 document.addEventListener("DOMContentLoaded", function () {
 let altValue = document.getElementsByTagName("img")[0].alt;
 console.log(altValue);
 });

 // 5 What is the dimensions and the url of the image? Create an object that looks like this, and log it to the console:
document.addEventListener("DOMContentLoaded", function () {
	const imgElements = document.getElementsByTagName("img");
	if (imgElements.length > 0) {
		const imgElement = imgElements[0];

		imgElement.onload = function () {
			const url = imgElement.src;

			// Ottieni le dimensioni effettive dell'immagine
			const naturalWidth = imgElement.naturalWidth;
			const naturalHeight = imgElement.naturalHeight;

			// Creazione dell'oggetto con le proprietà desiderate
			const imageDetails = {
				url: url,
				height: naturalHeight,
				width: naturalWidth,
			};

			console.log(imageDetails);
		};

		// Verifica se l'immagine è già stata caricata (browser caching)
		if (imgElement.complete) {
			imgElement.onload();
		}
	}
});

// 6 quanti li ci sono in ul paste?
       document.addEventListener('DOMContentLoaded', function() {
      const ulElement = document.getElementsByClassName('ingredients-list-paste')[0];
      
      const liCount = ulElement.getElementsByTagName('li').length;
      
      console.log(liCount);
    });
		
// 7 find the forth element li
  document.addEventListener('DOMContentLoaded', function() {
      const ulElementTwo = document.getElementsByClassName(
				"ingredients-list-paste"
			)[0];

      const liElements = ulElementTwo.getElementsByTagName('li');      
      if (liElements.length >= 4) {
        console.log(liElements[3].textContent);
      } else {
        console.log('');
      }
    });


// 8
 document.addEventListener('DOMContentLoaded', function() {
      // Seleziona il tag ol con la classe specificata
      const olElement = document.getElementsByClassName('instructions-list')[0];
      
      // Seleziona tutti gli elementi li all'interno del tag ol
      const liElements = olElement.getElementsByTagName('li');
      
      // Crea un array di oggetti con le proprietà desiderate
      const instructionsArray = Array.from(liElements).map((li, index) => ({
        order: index + 1,
        text: li.textContent.trim()
      }));
      
      // Stampa il risultato nella console
      console.log(instructionsArray);
		});