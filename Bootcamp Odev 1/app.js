// HTML içinde bulunan başlıca elementleri değişken olarak atadım.

const members = document.querySelector("#members")
const btnContainer = document.querySelector(".btn-container")


// Data.js'den gelen "datayı" reduce metodu ile "members" olarak belirttiğim kişilerin gruplarını teke ingirgedim.
//reduce output = ["OrangeRed","DeepPink","AliceBlue"]
const reducesTeamColorForButtons = data.reduce((sum, item) => {
  if (!sum.includes(item.group)) {
    sum.push(item.group)
  }
  return sum;
},["All Members"])

// Reduce metodundan gelen output'u map metodu ile HTML'e yazdırmak için fonksiyon yazdım.
function btnCreatorForUI(btns) {
  btns.map(el => {
    return btnContainer.innerHTML += `<button class="btn-item" data-id="${el}">${el}</button>`
  })
}

btnCreatorForUI(reducesTeamColorForButtons) // Fonksiyonu invoke ettim.

// HTML'e eklenen butonlara işlev kazadırmak için değişkene atadım.
const allButtons = document.querySelectorAll(".btn-item")

allButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    const btnTarget = e.currentTarget.dataset.id   // dataset -> "btnCreatorForUI(btns)" fonksiyonundan map fonksiyonu ile geliyor.
    const teamCategory = data.filter(groups => {     // Butonlara tıkladığımda takım renklerine göre filtrelemesi için "filter" metodu kullandım.
      if (btnTarget == groups.group) {
        return groups;
      }
    })
    if (btnTarget === "All Members") {  // "All Members" array'ini yukarıda reduce metodu oluşturuyor. -> "reduce'un [sum] parametresi"
      menuList(data);
    } else {
      menuList(teamCategory);
    }
  })
})

// Grup üyelerinin map metodu ile HTML'e yansıtılması.
const menuList = (teamMembers) => {
  let displayMenu = teamMembers.map((item) => {                        //HTML'de görünmesini istediğim template.
    return `<div id="container">                                                                                        
      <img src="https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg">
      <span class="tag ${item.group}">${item.group}</span>
      <span class="tag ${item.assistant}">${item.assistant}</span>
        <div class="name">${item.name}</div>
    </div>`;
  });
  displayMenu = displayMenu.join(""); // objeden çıktı alırken elementlerin arasında virgül olduğu için .join("") metodu ile bunu düzeltiyoruz.
  members.innerHTML = displayMenu; // HTML'de bulunan members'a çıktımızı gönderiyoruz.
};
