import Vue from "vue";


Vue.config.productionTip = false;

const newComp = {
  name: 'newComp',
  data() {
    return{
      myColor: {
        color: 'hsl(130, 45%, 50%)',
      },
    };
  },
  template: `
    <div> 
      <h2 :style='myColor'>Nowy komponent</h2>
      <label for="inp">Change color:</label>
      <input name="inp" id="inp" v-model="myColor.color" />
    </div>
  `,
};

new Vue({
  el: "#app",
  components: {
    newComp,
  },
  data:{
    name: 'Bodo',
    myStyle:{
      color: 'red',
      fontSize: '4em',
    },
  },
    methods:{
      handleClick() {
        alert("hello")
        
      },
    },

  template: `
    <div> 
    <h1 :style='myStyle'> Hello {{name}}!</h1>
    <newComp />
    <label for="changeName">Zmień imię: </label>
    <input name="changeName" id="changeName" v-on:input="name = $event.target.value" v-bind:value="name"/>
    <br>
    <label for="size">Zmień rozmiar: </label>
    <input name="size" id="size" v-on:input="myStyle.fontSize = $event.target.value" v-bind:value="myStyle.fontSize"/>
    <br>
    <button @click="handleClick">hello</button><br>
    </div>
  `,
});