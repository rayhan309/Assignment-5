// new id
function newId (id) {
    const news = document.getElementById(id);
    return news;
}
// heard icons handler
newId('card-container').addEventListener('click', function (e) {
    if (e.target.className.includes('heard')) {
        const targets = e.target;
        const heardBtn = newId('heards').innerText;
        const no1 = 1;
        const totale = Number(heardBtn) + no1;
        newId('heards').innerText = totale;
    }
})

// emergency numbers copy btn handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.closest('.copys')) {
    const targets = e.target;

    const number = targets.parentNode.parentNode.children[2].children[0].innerText;
    
    // acses the cpoy navber btn
    const copyBtn = newId('copy-btn').innerText;
    const no1 = 1;
    const totale = Number(copyBtn) + no1;
    newId('copy-btn').innerText = totale;
    alert("Number copied successfully! ✅." + '  ' + number + '...')
    // copy the number
    navigator.clipboard.writeText(number)
  }
})

// call btn handler
newId('card-container').addEventListener('click', function (e) {
  if (e.target.closest('.calls')) {
    const targets = e.target;
    const coin = newId('coins').innerText;
    const maines = 20;
    if(Number(coin) <= 0) {
      alert ('❌ You dont have enough coins. You need at least 20 coins to make a call.')
      return;
    }
    const totale = coin - maines;
    newId('coins').innerText = totale
    // console.log(coin)
    const title = targets.parentNode.parentNode.children[1].children[0].innerText;
    const number = targets.parentNode.parentNode.children[2].children[0].innerText;
    alert ('📞  ' + title + ' .' + number + '...')
    // histori
    const container = newId('history-container');
    const time = new Date().toLocaleTimeString();
    const createDiv = document.createElement('div');
    createDiv.innerHTML = `
        <div class="flex justify-between items-center bg-[#fafafa] mt-4">
          <div>
            <h1 class="text-[180x] font-semibold">${title}</h1>
            <p class="text-[180x] font-normal text-gray-500">${number}</p>
          </div>
            <p class="text-[14px] font-normal">${time}</p>
        </div>
    `
    container.appendChild(createDiv)
  }
})