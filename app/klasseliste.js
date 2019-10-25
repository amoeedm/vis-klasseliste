//Authored by John/Jane Doe.

(function() {

    const elevDiv = document.querySelectorAll(".attendance-card-header");
    const elevGrid = document.createElement("div");
    for (const elev of elevDiv) {
        elevGrid.innerHTML += `
			<div class="elev">
				<img src="${elev.children[0].src}">
				<p>${elev.children[1].innerText}</p>
			</div>
		`;
    };
    elevGrid.style.display = "grid";
    elevGrid.style.gridTemplateColumns = "1fr 1fr 1fr 1fr 1fr";
    document.body.innerHTML = "";
    document.body.appendChild(elevGrid);

})();
