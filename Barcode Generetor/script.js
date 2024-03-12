let input = document.getElementById("input");
let btn = document.getElementById("btn-Barcode-Generator");
btn.addEventListener("click", () => {
    JsBarcode("#Barcode", input.Value, {
        format: "code128",
        displayValue: true,
        fontSize: 24,
        linecolor: "#000",
    });
});

window.onload = (event) => {
    input.value = "";
};