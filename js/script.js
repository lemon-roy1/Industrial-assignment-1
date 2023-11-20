
// all

const itemsCart = document.getElementsByClassName('items')
for (const items of itemsCart) {
  items.addEventListener('click', function (e) {
    console.log(e.target.innerText);
    fetch(`https://restcountries.com/v3.1/${e.target.innerText}`)
      .then(res => res.json())
      .then((data) => {
        const DisplayData = document.getElementById('dataShow')
        DisplayData.innerHTML = ''
        displsydata(data)
      })
    function displsydata(item) {
      item.map(items => {
        const DisplayData = document.getElementById('dataShow')
        const div = document.createElement('div')
        div.innerHTML = `
          <div class="card card-compact bg-base-100 shadow-xl">
            <figure><img src=${items.flags.png} alt="Shoes" class="h-[10rem]"/></figure>
            <div class="card-body">
              <h2 class="card-title">${items.name.common}</h2>
              <p>${items.capital}</p>
              <div class="flex justify-between">
                <div class="badge badge-outline badge-primary">${items.latlng[0]}</div>
                <div class="badge badge-primary badge-outline">${items.latlng[1]}</div>
              </div>
            </div>
          </div>
          `

        DisplayData.appendChild(div)
      })
    }
  })
}


const itemCart = document.getElementsByClassName('item')
for (const items of itemCart) {
  items.addEventListener('click', function (e) {
    console.log(e.target.innerText);
    fetch(`https://restcountries.com/v3.1/region/${e.target.innerText}`)
      .then(res => res.json())
      .then((data) => {
        const DisplayData = document.getElementById('dataShow')
        DisplayData.innerHTML = ''
        displsydata(data)
      })
    function displsydata(item) {
      item.map(items => {
        const DisplayData = document.getElementById('dataShow')
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="card card-compact bg-base-100 shadow-xl">
        <figure><img src=${items.flags.png} alt="Shoes" class="h-[10rem]"/></figure>
        <div class="card-body">
          <h2 class="card-title">${items.name.common}</h2>
          <p>${items.capital}</p>
          <div class="flex justify-between">
            <div class="badge badge-outline badge-primary">${items.latlng[0]}</div>
            <div class="badge badge-primary badge-outline">${items.latlng[1]}</div>
          </div>
        </div>
      </div>
                `
        DisplayData.appendChild(div)
      })
    }
  })
}
