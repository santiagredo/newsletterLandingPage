//NO BORRAR
//@ts-check
//NO BORRAR

const openMenuIcon = document.getElementById("openMenuIcon");
const headerNavDiv = document.getElementById("headerNavDiv");
const closeMenuIcon = document.getElementById("closeMenuIcon");

openMenuIcon?.addEventListener("click", () => {
  if (headerNavDiv) {
    headerNavDiv.style.display = "flex";
  };
});

closeMenuIcon?.addEventListener("click", () => {
  if (headerNavDiv) {
    headerNavDiv.style.display = "none";
  };
});
