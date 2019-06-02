<template>
  <div id="wrapper">
    <div class="container page">
      <h2 class="page-header">Worker Matchup process</h2>

      <div class="btns">
        <button  @click.prevent="sendLendRequest" class="button full-width button-sliding-icon ripple-effect margin-top-10"  form="login-form">Request Loan from ETHLend<i class="icon-material-outline-arrow-right-alt"></i></button>
      </div>
    </div>
  </div>
</template>

<script>
//const MY_API_SECRET_KEY = "24183a163121aaec189ba29cc22e03136d475cf8096c311063";
//const marketplace = new Marketplace(MY_API_SECRET_KEY);

export default {
  name: 'WorkerMatchup',
  data() {
    return {
    };
  },
  methods: {
    sendLendRequest() {
      const borrowerAddress = web3.eth.accounts[0]; // The wallet that creates the request
      const collateralAmount = 10000;
      const collateralType = "LEND";
      const loanCurrency = "ETH";
      // We get the maximum loan amount, depending on the Loan-To-Value ratio allowed
      marketplace
        .requests
        .getMaxLoanAmountFromCollateral(
            collateralAmount, 
            collateralType, 
            loanCurrency).then((maxLoanAmount) => {
                    const loanRequestParams = {
                        loanAmount: maxLoanAmount,
                        moe: loanCurrency,
                        collateralAmount: collateralAmount,
                        collateralType: collateralType,
                        mpr: 1.5,
                        duration: 4
                    }
                    marketplace.requests.create(borrowerAddress,loanRequestParams).then((tx) => {
                      console.log(tx);
                      //tx.params[0].value = web3.toWei(tx.params[0].value);
                      web3.eth.sendTransaction(tx.params[0]);
                    } );
        });
    }
  }
}
</script>

<style scoped>
.container {
  padding-top: 1em;
}
</style>