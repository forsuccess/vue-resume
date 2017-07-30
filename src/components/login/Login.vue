<template>
  <div class="login-wrap">
    <div class="login">
      <h2>Vue简历编辑器</h2>
      <div v-if="hasUser">
        <login-form>
          <input type="button" @click="signUp" value="注册">
        </login-form>
      </div>
      <div v-else>
        <sign-up-form>
          <input type="button" @click="cancel" value="取消">
        </sign-up-form>
      </div>
    </div>
  </div>
</template>

<script>
import loginForm from './LoginForm'
import signUpForm from './SignUpForm'
export default {
  name: 'login',
  data() {
    return {
      hasUser: true
    }
  },
  methods: {
    signUp() {
      this.hasUser = false
    },
    cancel() {
      this.hasUser = true
    }
  },
  components: {
    loginForm,
    signUpForm
  }
}
</script>

<style lang="scss" scoped>
.login-wrap {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ebecee;
}

.login {
  box-shadow: 3px 3px 3px #ccc;
  width: 350px;
  background-color: #fff;
  >h2 {
    color: #fff;
    border-radius:10px;
    font-size: 24px;
    font-family: 'Microsofe YaHei';
    text-align: center;
    background-color: #15222f;
    padding: 25px 15px;
    ;
  }
}
</style>
