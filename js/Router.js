export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()
    console.log(event.target.href)
    
    const divapp=document.querySelector("body")
    const home=document.querySelector(".home")
    const universe=document.querySelector(".universe")
    const exploration=document.querySelector(".exploration")
    const divcorreta = document.querySelector("#app")
    if(event.target == exploration){
        divapp.style.backgroundImage ='url(/assets/moutains2.png)'
        divcorreta.style.left="8%"
        divcorreta.style.top="25%"
    }else if(event.target == universe){
        divapp.style.backgroundImage ='url(/assets/mountains3.png)'
        divcorreta.style.left="8%"
        divcorreta.style.top="25%"
    }else if(event.target == home){
        divapp.style.backgroundImage ='url(/assets/mountains.png)'
        divcorreta.style.left="50%"
        divcorreta.style.top="50%" 
    } 
    
    window.history.pushState({}, "", event.target.href)
     this.handle()
   
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]
    
    fetch(route)
      .then(data => data.text())
      .then(html => {
        document.querySelector('#app').innerHTML = html
      })
     
 } 
}

