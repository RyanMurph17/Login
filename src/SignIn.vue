<template>

    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h3>Login</h3>
                <button class="btn btn-primary"
                    @click="signIn">
                    <i class="fa fa-twitter"></i>
                    Sign In with Twitter
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        signIn () {
          //action is triggered through vuex Vuex is a state management pattern + library for Vue.js applications.
          //https://medium.com/@okpalachuks/twitter-authentication-with-vue-vuex-and-firebase-1f65f68dc0b0
            this.$store.dispatch('signIn')
        }
    }
}
</script>

<style scoped>
h3 {
    font-weight: 700;
}
button {
    background-color: #1dcaff;
    border: 1px solid  #1dcaff;
}
div button:hover {
    background-color: #00aced;
    border: 1px solid  #00aced;
}
</style>
