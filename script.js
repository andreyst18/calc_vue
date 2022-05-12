Vue.component('wrapper', {
  props: {
    name: String
  },
  template: `<div class="wrapper">
                <app-section :title="sectionTitle[0]"></app-section>
                <app-section :title="sectionTitle[1]"></app-section>
              </div>`
  ,data() {
    return {
      sectionTitle: ['Калькулятор', 'Расчеты'],
    }
  }
})

Vue.component('app-section', {
  props: {
    title: String
  },
  template: `<div class="app-section">
                <h2 class="title">{{title}}</h2>
                <section-main></section-main>
              </div>`,
})

Vue.component('section-main', {
  template: `<div class="section-main">main</div>`
})



const app = new Vue({
  el: '#app',
  data: {
      test: 'www'  
  },
})

//eee




