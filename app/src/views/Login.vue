<template>
  <div class="login">
    <v-layout>
      <v-flex xs6>
          <div class="pr-relative">
            <v-img class="pr-login__illu" :src="require('../assets/login.jpg')"></v-img>
        </div>
      </v-flex>
      <v-flex xs6>
        <div class="pr-login__form">
          <div class="oa-login__form-wrapper text-md-left">
            <div class="oa-login__header">
              <router-link class="oa-login__logo" to="/">
                <h1>
                  <span>Proxy</span>
                  <span class="font-weight-light">Relay</span>
                </h1>
              </router-link>
            </div>
            <v-form ref="form">
              <v-text-field label="Email adress" append-icon="alternate_email" class="mb-4"></v-text-field>
              <v-text-field
                
                label="Password"
                append-icon="visibility"
                
                class="mb-5"
              ></v-text-field>

              <v-btn block class="primary v-btn--xl">Login</v-btn>

              <p class="mt-5">
                Need an account ?
                <a href="#">Create an account</a>
              </p>
            </v-form>
            <div class="pr-login__or">OR</div>
            <div class="pr-login__social">
              <v-btn class="pr-facebbok">Facebook</v-btn>
              <v-btn class="pr-google">Google</v-btn>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
};
</script>

<style>
    .pr-login__illu{
        width: 100%;
        height: 100vh;
        position: absolute;
        left: 0;
        top: 0;
    }
    .pr-relative{
        position: relative;
    }
</style>


