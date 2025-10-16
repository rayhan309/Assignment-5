// new id
function newId (id) {
    const news = document.getElementById(id);
    return news;
}
// heard handler
newId('card-container').addEventListener('click', function (e) {
    if (e.target.className.includes('heard')) {
        const targets = e.target;
        const heardBtn = newId('heards').innerText;
        const no1 = 1;
        const totale = Number(heardBtn) + no1;
        newId('heards').innerText = totale;
    }
})

// copy handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.closest('.copys')) {
    const targets = e.target;

    const number = targets.parentNode.parentNode.children[2].children[0].innerText;
    
    // acses the cpoy navber btn
    const copyBtn = newId('copy-btn').innerText;
    const no1 = 1;
    const totale = Number(copyBtn) + no1;
    newId('copy-btn').innerText = totale;
    alert("Number copied successfully!" + number)
    // copy the number
    navigator.clipboard.writeText(number)
  }
})
