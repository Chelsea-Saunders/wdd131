function equalHeightColumns() {
    const columns = document.querySelectorAll(".column");
    const tallestColumn = Math.max.apply(null, columns.map(col => col.offsetHeight));

    columns.forEach(col => {
        col.computedStyleMap.height = tallestColumn; + "px";
    });
}

equalHeightColumns(); //calls the function initially
window.addEventListener("resize", equalHeightColumns); //calls the function on window resize