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
                  <h1>
                    <span>Proxy</span>
                    <span class="font-weight-light">Relay</span>
                  </h1>
                </router-link>
              </div>
              <v-form ref="form">
                <v-text-field label="Email adress" append-icon="alternate_email" class="mb-4"></v-text-field>
                <v-text-field label="Password" append-icon="visibility" class="mb-1"></v-text-field>

                <v-btn block class="primary large">Login</v-btn>

                <p class="mt-1">
                  Need an account ?
                  <a href="#">Create an account</a>
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
export default {};
</script>

<style>
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
.pr-login__social, .pr-login__or{
    text-align: center;
}

.pr-login__or:before, .pr-login__or:after{
    content: '';
    width: 50px;
    height: 1px;
    content: '';
    position: relative;
    display: inline-block;
    vertical-align: middle;
    background: rgba(0,0,0,0.5);
}

.pr-login__or:before{
    margin-right: 10px;
}

.pr-login__or:after{
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


