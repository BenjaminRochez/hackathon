<template>
  <div class="login fill-height">
    <v-layout fill-height>
      <v-flex xs6>
        <div class="relative">
          <v-img class="pr-login__illu" :src="require('../assets/login.jpg')"></v-img>
        </div>
      </v-flex>
      <v-flex xs6 fill-height>
        <div class="relative fill-height">
          <div class="pr-login__form">
            <div class="oa-login__form-wrapper text-md-left">
              <div class="oa-login__header">
                <router-link class="oa-login__logo" to="/">
                  <div class="logo__container">
                    <v-img :src="require('../assets/logo/proxyrelay.png')"></v-img>
                  </div>
                </router-link>
              </div>
              <v-form @submit.prevent="login" ref="form" class="mt-5">
                <v-text-field
                  label="Email adress"
                  v-model="email"
                  append-icon="alternate_email"
                  class="mb-4"
                  :rules="[rules.required]"
                ></v-text-field>
                <v-text-field
                  type="password"
                  label="Password"
                  v-model="password"
                  append-icon="visibility"
                  class="mb-1"
                ></v-text-field>

                <v-btn block type="submit" class="primary large" @click="login()">Login</v-btn>

                <p class="mt-1">
                  Need an account ?
                  <router-link to="/signup">Create an account</router-link>
                </p>
              </v-form>
              <div class="pr-login__or mb-2">OR</div>
              <div class="pr-login__social">
                <button class="loginBtn loginBtn--facebook">Login with Facebook</button>
                <button class="loginBtn loginBtn--google">Login with Google</button>
              </div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>

import firebase from 'firebase'
export default {
  name: 'Login',
   data(){
        return{
          rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          }
          },
            email: '',
            password: '',
        }
    },
    methods: {
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
                (user) => {
                
                this.$router.replace('/dashboard');
            },
            (err) =>{
                // eslint-disable-next-line
                console.log('Error: ', err)
            });
        }
    }
};
</script>

<style>
.logo__container {
  width: 60%;
  margin: 0 auto;
}
.pr-login__illu {
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  top: 0;
}
.relative {
  position: relative;
}
.pr-login__social,
.pr-login__or {
  text-align: center;
}

.pr-login__or:before,
.pr-login__or:after {
  content: "";
  width: 50px;
  height: 1px;
  content: "";
  position: relative;
  display: inline-block;
  vertical-align: middle;
  background: rgba(0, 0, 0, 0.5);
}

.pr-login__or:before {
  margin-right: 10px;
}

.pr-login__or:after {
  margin-left: 10px;
}
.pr-login__form {
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  padding: 0 150px;
}
</style>


