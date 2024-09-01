document.addEventListener("DOMContentLoaded", () => {
    let buttonsPopolare = document.querySelectorAll(".catPop");
    let buttonsCalorie = document.querySelectorAll(".catCal");
    let recipeContainerPopolare = document.getElementById("ingredientiContainer");
    let recipeContainerCalorie = document.getElementById("ingredientiContainerCal");

    buttonsPopolare.forEach(button => {
        button.addEventListener("click", () => {
            let category = button.getAttribute("data-category");
            displayRecipes(category, recipeContainerPopolare);
        });
    });

    buttonsCalorie.forEach(button => {
        button.addEventListener("click", () => {
            let category = button.getAttribute("data-category");
            displayRecipes(category, recipeContainerCalorie);
        });
    });

    function displayRecipes(category, container) {
        container.innerHTML = `<button class='btn' onclick='mostrameno("${container.id}")'>Mostra meno</button>`;
        
        let filteredRecipes = recipes.filter(recipe => recipe.category === category);

        filteredRecipes.forEach(recipe => {
            let recipeElement = document.createElement("div");
            recipeElement.classList.add("divs");
            recipeElement.innerHTML = `
                <h3><button class="recipesBtn" onclick="aggiungi(${recipe.id})">+</button> ${recipe.name}</h3>
                <div class="catRoba">Ingredients: ${recipe.ingredients.join(", ")}</div>
                <div class="catRoba">Calories: ${recipe.calories}</div>
            `;
            container.appendChild(recipeElement);
        });
    }
});

function mostrameno(containerId){
    document.getElementById(containerId).innerHTML = " ";
}

function aggiungi(id) {
    let ricettaSel = recipes.find(recipe => recipe.id === id);
    if (ricettaSel) {
        let recipeData = {
            name: ricettaSel.name,
            ingredients: ricettaSel.ingredients
        };

        let listaStorage = localStorage.getItem("shoppingList");
        console.log("Contenuto di listaStorage:", listaStorage);

        let lista = listaStorage ? JSON.parse(listaStorage) : [];

        lista.push(recipeData);

        localStorage.setItem("shoppingList", JSON.stringify(lista));
    }
}

function apriLista(){
    window.location.href = "lista.html"
}

function cerca() {
    let searchQuery = document.getElementById("cerca").value.toLowerCase();
    
    let filteredRecipes = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(searchQuery) || 
        recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchQuery))
    );
    localStorage.setItem("risultatiRic", JSON.stringify(filteredRecipes));

    window.location.href = "ricerca.html";
}

document.getElementById("img").addEventListener("click", () => {
    window.location.href = "index.html"
});
