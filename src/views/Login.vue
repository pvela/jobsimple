<template>
<div id="wrapper">
    <div class="container page">
    <div class="row">
      <div class="col-xl-5 offset-xl-3">

        <br/>
        <div class="login-register-page">
          <!-- Welcome Text -->
          <div class="welcome-text">
            <h3>We're glad to see you again!</h3>
          </div>
            <br/>
          <!-- Form -->
          <!--<form method="post" id="login-form">
            <div class="input-with-icon-left">
              <i class="icon-material-baseline-mail-outline"></i>
              <input type="text" class="input-text with-border" name="emailaddress" id="emailaddress" placeholder="Email Address" required/>
            </div>

            <div class="input-with-icon-left">
              <i class="icon-material-outline-lock"></i>
              <input type="password" class="input-text with-border" name="password" id="password" placeholder="Password" required/>
            </div>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </form>-->
          
          <!-- Button -->
          <button  @click.prevent="init" class="button full-width button-sliding-icon ripple-effect margin-top-10"  form="login-form">Log In <i class="icon-material-outline-arrow-right-alt"></i></button>
          <!-- Social Login -->
          <!--<div class="social-login-separator"><span>or</span></div>
          <div class="social-login-buttons">
            <button class="facebook-login ripple-effect"><i class="icon-brand-facebook-f"></i> Log In via Facebook</button>
                <button @click.prevent="signInWithGoogle">Log in with Google</button>

          </div>-->
        </div>

      </div>
    </div>
  </div>
  <Footer></Footer>
  </div>
  <!-- Wrapper / End -->
</template>

<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import firebase from 'firebase/app';
import 'firebase/auth';
import Fortmatic from 'fortmatic';
const fm = new Fortmatic('pk_test_80863C4FA1028899');
window.web3 = new Web3(fm.getProvider());

export default {
  name: 'Login',
  props: {
    
  },
  methods: {
    init() {
      web3.currentProvider.enable();
    },
    send() {
      const toAddress = '0xb159752065EA68Ef0B22249Df25864E624fec45D';
      const sendValue = web3.utils.toWei('0.1', 'ether'); // Convert 1 ether to wei
        
      // Get user account wallet address first
      web3.eth.getAccounts().then((accounts) => {
        // Send Ether transaction with web3
        web3.eth.sendTransaction({
          from: accounts[0],
          to: toAddress,
          value: sendValue
        })
        .once('transactionHash', (hash) => { console.log(hash); })
        .once('receipt', (receipt) => { console.log(receipt); });
      });
    },
    signInWithGoogle() {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider);
    }
  }
}

fm.user.login().then(() => {
  if (web3.eth.accounts != undefined && web3.eth.accounts.length > 0) {
    firebase.auth().signInAnonymously().then(() => {
      this.$router.push('Home');
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  }
});

</script>

<style>
</style>