<template>
  <section
    class="login-container d-flex flex-row justify-content-center align-items-center w-100 h-100"
  >
    <section
      class="login d-flex flex-column justify-content-start align-items-center"
    >
      <img src="@/assets/images/logo.png" alt="" />
      <div class="login-header">Login to your account</div>
      <div class="login-username">
        <h6>Username</h6>
        <img src=@/assets/images/user.png alt="">
        <input
          class="form-control"
          type="email"
          v-model="form.email"
          placeholder="Username"
        />
      </div>

      <div class="login-password">
        <h6>Password</h6>
        <img src=@/assets/images/lock.png alt="">
        <input
          class="form-control"
          type="password"
          v-model="form.password"
          placeholder="Password"
        />
      </div>

      <b-button class="btn-sign-in">Sign In</b-button>
      <b-button class="btn-sign-in-foodics">Sign in with Foodics F5</b-button>
      <a href="" class="link-new-accnt">Create New Account</a>
    </section>
  </section>
</template>

<style lang="scss" scoped>
.login-container {
  background-image: url("~@/assets/images/bg.png");
  .login {
    background: #ffffff;
    box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.04),
      0px 16px 24px rgba(0, 0, 0, 0.04), 0px 4px 8px rgba(0, 0, 0, 0.04),
      0px 0px 1px rgba(0, 0, 0, 0.04);
    border-radius: 18px;
    padding-left: 46px;
    padding-right: 48px;
    padding-bottom: 27px;
    padding-top: 26px;

    img {
      width: 256.51px;
      margin-bottom: 24px;
    }
    .login-header {
      font-family: Almarai, Open Sans;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 100%;
      /* identical to box height, or 14px */

      color: #b8b8b8;
      margin-bottom: 31px;
    }
    .login-username {
      margin-bottom: 17px;
    }
    .login-password {
      margin-bottom: 27px;
    }
    .login-username,
    .login-password {
      position: relative;

      h6 {
        font-family: Almarai, Open Sans;
        font-style: normal;
        font-weight: bold;
        font-size: 12px;
        line-height: 100%;
        /* identical to box height, or 12px */

        color: #32394c;
      }
      img {
        width: 21px;
        height: 22px;
        position: absolute;
        top: 33px;
        left: 15px;
      }
      input {
        background: #ffffff;
        box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        border: none;
        width: 351px;
        height: 49px;
        padding-left: 47px;
      }
      // input::placeholder,
      // input::-webkit-input-placeholder,
      // input::-moz-placeholder,
      // input:-ms-input-placeholder,
      // input:-moz-placeholder {
      //   /* Chrome/Opera/Safari */
      //   font-family: Almarai;
      //   font-style: normal;
      //   font-weight: normal;
      //   font-size: 14px;
      //   line-height: 16px;
      //   /* identical to box height */

      //   color: rgba(173, 181, 189, 0.55);
      // }
    }
    .btn-sign-in {
      background: #ff6b00;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 100%;
      border: none;
      font-family: Almarai, Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */

      text-align: center;

      color: #ffffff;
      margin-bottom: 12px;
      width: 351px;
      height: 44px;
    }
    .btn-sign-in-foodics {
      background: #32394c;
      box-shadow: 0px 4px 26px rgba(0, 0, 0, 0.1);
      border-radius: 8px;
      width: 351px;
      height: 44px;
      font-family: Almarai, Open Sans;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      /* identical to box height */

      text-align: center;

      color: #ffffff;

      margin-bottom: 24px;
    }
    .link-new-accnt {
      font-family: Open Sans;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 19px;
      /* identical to box height */

      text-align: center;

      color: #ff6b00;
    }
  }
}
</style>

<script>
import { mapActions } from "vuex";
import { DO_LOGIN } from "../store/action-types";
export default {
  data() {
    return {
      form: {
        email: null,
        password: null
      }
    };
  },
  methods: {
    ...mapActions([DO_LOGIN]),
    onSignIn() {
      const payload = {
        email: this.form.email,
        password: this.form.password
      };
      this.DO_LOGIN(payload).then(() => {
        this.$router.push({ name: "Home" });
      });
    }
  }
};
</script>
