//Composant : <fiche-produit></fiche-produit>
Vue.component('fiche-produit', {
    template : `
    <div class="col-lg-3 col-md-6 px-0 p-2 px-md-3 bg-primary text-white mx-1 my-1">
        <p class="text-lowercase">{{ produit }}</p>
        <button @click="ok_commande(produit)" class="btn btn-dark">Commander</button>
    </div>  
    `,
    props: ['produit', 'role'],
    methods: {
        ok_commande(produit) {
            this.$emit('commande', produit);
        }
    }
})

Vue.component('fiche-detail', {
    template : `
    <li class="list-group-item" >{{ commande }}</li>
    `,
    props: ['commande', 'role']
})

//instance
const app = new Vue({
    el: "#app",
    data: {
        user: "louis",
        produits: ['pizzas', 'burger', 'tacos', 'sandwich'],
        commandes: []
    },
    methods:{
        commander(produit) {
            this.commandes.push(produit)
        }
    }
})