
const openModalBtn = document.getElementById("open-modal-btn");
const modal = document.getElementById("modal");
const cancelBtn = document.getElementById("cancel-btn");
const saveBtn = document.getElementById("save-btn");

openModalBtn.addEventListener("click", () => {
    modal.style.display = "flex"; 
});

cancelBtn.addEventListener("click", () => {
    modal.style.display = "none"; 
});

saveBtn.addEventListener("click", () => {
    const orcamento = document.getElementById("orcamento").value;
    if (orcamento) {
        alert(`Orçamento definido: R$ ${orcamento}`);
        modal.style.display = "none";
    } else {
        alert("Por favor, insira um valor.");
    }
});

window.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});