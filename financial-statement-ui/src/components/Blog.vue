<template>
  <div>
    <div>
      <div style="display: inline-block;">
        <h1>INCOME</h1>
        <div>
          <h2>Earned Income</h2>
          <button @click="addCashFlowEarnedIncome">Add</button>
          <div v-for="(item, index) in cashFlow.income.earnedIncome">
            <input type="text" v-model="item.name">
            <input type="text" v-model="item.amount">
          </div>
          <div>Earned Total: {{ cashFlowEarnedIncomeTotal }}</div>
        </div>
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
          earnedIncome: [{ name: '', amount: 0 }]
        }
      }
    };
  },
  computed: {
    cashFlowEarnedIncomeTotal() {
      let sum = 0;
      for (let item of this.cashFlow.income.earnedIncome) {
        sum += Number(item.amount);
      }

      return sum;
    }
  },
  methods: {
    addCashFlowEarnedIncome() {
      let {earnedIncome} = this.cashFlow.income;
      let len = earnedIncome.length;
      if(len === 0 || !earnedIncome[len - 1].name)return;

      this.cashFlow.income.earnedIncome.push({ name:'', amount: 0 });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
