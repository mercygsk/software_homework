
// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector("main")

mainEl.style.background='var(--main-bg)'
mainEl.innerHTML = "<h1>SEI Rocks!</h1>"
mainEl.classList.add('flex-ctr')

let topMenuEl = document.getElementById("top-menu")
topMenuEl.style.height = "100%"
topMenuEl.style.background='var(--top-menu-bg)'
topMenuEl.classList.add('flex-around')

for(i=0; i < menuLinks.length; i++)
{
    const newEl = document.createElement('a')
    newEl.setAttribute('href', menuLinks[i].href)
    newEl.append(menuLinks[i].text)
    document.getElementById('top-menu').appendChild(newEl)
}
console.log(mainEl)
console.log(topMenuEl)


