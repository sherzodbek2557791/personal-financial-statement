<template>
  <div>
    <div>

      <div style="display: inline-block;">
        <div><!-- INCOME BEGIN -->
          <h1>INCOME</h1>
          <div><!-- Earned Income BEGIN-->
            <h2>Earned Income</h2>
            <button @click="addCashFlowEarnedIncome">Add</button>
            <div v-for="(item, index) in cashFlow.income.earnedIncome">
              <input type="text" v-model="item.name">
              <input type="text" v-model="item.amount">
            </div>
            <div>Earned Total: {{ cashFlowEarnedIncomeTotal }}</div>
          </div><!-- Earned Income END-->
          <div><!-- Passive Income BEGIN-->
            <h2>Passive Income</h2>
            <button @click="addCashFlowPassiveIncome">Add</button>
            <div v-for="(item, index) in cashFlow.income.passiveIncome">
              <input type="text" v-model="item.name">
              <input type="text" v-model="item.amount">
            </div>
            <div>Passive Total: {{ cashFlowPassiveIncomeTotal }}</div>
          </div><!-- Passive Income END-->
          <div><!-- Portfolio Income BEGIN-->
            <h2>Portfolio Income</h2>
            <button @click="addCashFlowPortfolioIncome">Add</button>
            <div v-for="(item, index) in cashFlow.income.portfolioIncome">
              <input type="text" v-model="item.name">
              <input type="text" v-model="item.amount">
            </div>
            <div>Portfolio Total: {{ cashFlowPortfolioIncomeTotal }}</div>
          </div><!-- Portfolio Income END-->

          <div><!-- TOTAL INCOME BEGIN-->
            TOTAL INCOME: {{ cashFlowIncomeTotal }}
          </div><!-- TOTAL INCOME END-->
        </div><!-- INCOME BEGIN -->

        <div><!-- EXPENSES BEGIN -->
          <h1>EXPENSES</h1>
          <div><!-- Earned Income BEGIN-->
            <h2>Expenses</h2>
            <button @click="addCashFlowExpenses">Add</button>
            <div v-for="(item, index) in cashFlow.expenses">
              <input type="text" v-model="item.name">
              <input type="text" v-model="item.amount">
            </div>
          </div><!-- Earned Income END-->

          <div><!-- TOTAL EXPENSES BEGIN-->
            TOTAL EXPENSES: {{ cashFlowExpensesTotal }}
          </div><!-- TOTAL EXPENSES END-->
        </div><!-- EXPENSES BEGIN -->

        <div><!--  MONTHLY CASH FLOW BEGIN-->
          NET MONTHLY CASH FLOW: {{ cashFlowTotal }}
        </div><!--  MONTHLY CASH FLOW END-->

      </div>


      <div style="display: inline-block;">Right</div>
    </div>
    <div>
      <div style="display: inline-block;">Left</div>
      <div style="display: inline-block;">Right</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
    return {
      cashFlow: {
        income: {
          earnedIncome: [{ name: '', amount: 0 }],
          passiveIncome: [{ name: '', amount: 0 }],
          portfolioIncome: [{ name: '', amount: 0 }]
        },
        expenses: [{ name: '', amount: 0 }]
      }
    };
  },
  computed: {
    cashFlowEarnedIncomeTotal() {
      return this.calculateTotal(this.cashFlow.income.earnedIncome);
    },
    cashFlowPassiveIncomeTotal() {
      return this.calculateTotal(this.cashFlow.income.passiveIncome);
    },
    cashFlowPortfolioIncomeTotal() {
      return this.calculateTotal(this.cashFlow.income.portfolioIncome);
    },
    cashFlowIncomeTotal() {
      return this.cashFlowEarnedIncomeTotal + this.cashFlowPassiveIncomeTotal + this.cashFlowPortfolioIncomeTotal;
    },
    cashFlowExpensesTotal() {
      return this.calculateTotal(this.cashFlow.expenses);
    },
    cashFlowTotal() {
      return this.cashFlowIncomeTotal - this.cashFlowExpensesTotal;
    }
  },
  methods: {
    addCashFlowEarnedIncome() {
      let {earnedIncome} = this.cashFlow.income;
      let len = earnedIncome.length;
      if(len === 0 || !earnedIncome[len - 1].name)return;

      this.cashFlow.income.earnedIncome.push({ name:'', amount: 0 });
    },
    addCashFlowPassiveIncome() {
      let {passiveIncome} = this.cashFlow.income;
      let len = passiveIncome.length;
      if(len === 0 || !passiveIncome[len - 1].name)return;

      this.cashFlow.income.passiveIncome.push({ name:'', amount: 0 });
    },
    addCashFlowPortfolioIncome() {
      let {portfolioIncome} = this.cashFlow.income;
      let len = portfolioIncome.length;
      if(len === 0 || !portfolioIncome[len - 1].name)return;

      this.cashFlow.income.portfolioIncome.push({ name:'', amount: 0 });
    },
    addCashFlowExpenses() {
      let {expenses} = this.cashFlow;
      let len = expenses.length;
      if(len === 0 || !expenses[len - 1].name)return;

      this.cashFlow.income.expenses.push({ name:'', amount: 0 });
    },
    calculateTotal(items, func){
      let sum = 0;
      for (let item of items) {
        if(func)
          sum = func(sum, item);
        else
          sum += Number(item.amount);
      }
      return sum;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
