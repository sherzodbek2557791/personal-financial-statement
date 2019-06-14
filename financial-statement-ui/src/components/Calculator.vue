<template>
  <div>
    <div>
      <div style="display: inline-table; width:50%;">
        <div class="border_new">
          <!-- INCOME BEGIN -->
          <h1>INCOME</h1>
          <div>
            <!-- Earned Income BEGIN-->
            <h2 class="newtext">Earned Income</h2>
            <button @click="addCashFlowEarnedIncome">Add</button>
            <div class="new_line1">
              <div
                :key="`earnedIncome-${index}`"
                v-for="(item, index) in cashFlow.income.earnedIncome"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.income.earnedIncome.length > 1"
                  @click="removeItem(cashFlow.income.earnedIncome, item, index)"
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                Earned Total: {{ cashFlowEarnedIncomeTotal }}
              </div>
            </div>
          </div>
          <!-- Earned Income END-->
          <div>
            <!-- Passive Income BEGIN-->
            <h2 class="newtext">Passive Income</h2>
            <button @click="addCashFlowPassiveIncome">Add</button>
            <div class="new_line1">
              <div
                :key="`passiveIncome-${index}`"
                v-for="(item, index) in cashFlow.income.passiveIncome"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.income.passiveIncome.length > 1"
                  @click="
                    removeItem(cashFlow.income.passiveIncome, item, index)
                  "
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                Passive Total: {{ cashFlowPassiveIncomeTotal }}
              </div>
            </div>
          </div>
          <!-- Passive Income END-->
          <div>
            <!-- Portfolio Income BEGIN-->
            <h2 class="newtext">Portfolio Income</h2>
            <button @click="addCashFlowPortfolioIncome">Add</button>
            <div class="new_line1">
              <div
                :key="`portfolioIncome-${index}`"
                v-for="(item, index) in cashFlow.income.portfolioIncome"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.income.portfolioIncome.length > 1"
                  @click="
                    removeItem(cashFlow.income.portfolioIncome, item, index)
                  "
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                Portfolio Total: {{ cashFlowPortfolioIncomeTotal }}
              </div>
            </div>
          </div>
          <!-- Portfolio Income END-->
          <div class="newsubtext">
            <!-- TOTAL INCOME BEGIN-->
            TOTAL INCOME: {{ cashFlowIncomeTotal }}
          </div>
          <!-- TOTAL INCOME END-->
        </div>
        <!-- INCOME BEGIN -->

        <div class="border_new">
          <!-- EXPENSES BEGIN -->
          <h1>EXPENSES</h1>
          <div>
            <!-- Earned Income BEGIN-->
            <h2 class="newtext">Expenses</h2>
            <button @click="addCashFlowExpenses">Add</button>
            <div class="new_line1">
              <div
                :key="`expenses-${index}`"
                v-for="(item, index) in cashFlow.expenses"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.expenses.length > 1"
                  @click="removeItem(cashFlow.expenses, item, index)"
                >
                  -
                </button>
              </div>
            </div>
          </div>
          <!-- Earned Income END-->

          <div class="newsubtext">
            <!-- TOTAL EXPENSES BEGIN-->
            TOTAL EXPENSES: {{ cashFlowExpensesTotal }}
          </div>
          <!-- TOTAL EXPENSES END-->

          <div class="newsubtext">
            <!--  MONTHLY CASH FLOW BEGIN-->
            NET MONTHLY CASH FLOW: {{ cashFlowTotal }}
          </div>
          <!--  MONTHLY CASH FLOW END-->
        </div>
        <!-- EXPENSES BEGIN -->
      </div>

      <div style="display: inline-table; width: 50%;">
        <div class="border_new">
          <h1>ANALYSIS</h1>

          <el-carousel :interval="4000" arrow=never height="50px" indicator-position=none>
            <el-carousel-item v-for="item in app.quotes" :key="item" style="text-align: center;">
              <h3 class="medium" style="border: 1px solid red;">{{ item.text }}</h3>
            </el-carousel-item>
          </el-carousel>

          <div>
            <!--          <apexchart width="500" type="bar" :options="chartOptions" :series="series"></apexchart>-->
            <apexchart
                    style="display: inline-table; width: 50%;"
                    type="donut"
                    :options="chartOptions"
                    :series="chartOptions.series"
            ></apexchart>

            <div style="display: inline-table; width: 50%;">
              <span>TOTAL INCOME: {{ cashFlowIncomeTotal }}</span> <br />
              <span>TOTAL CONSUMPTION: {{ cashFlowExpensesTotal }}</span> <br />
              <span>----------------------</span> <br />
              <span>TOTAL COMMON: {{ cashFlowTotal }}</span> <br />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div style="display: inline-table; width: 50%;">
        <div class="border_new">
          <h1>ASSETS</h1>
          <div>
            <!-- ASSETS BEGIN-->
            <h2 class="newtext">ASSETS</h2>
            <button @click="addCashFlowAssets">Add</button>
            <div class="new_line1">
              <div
                :key="`assets-${index}`"
                v-for="(item, index) in cashFlow.assets.assets"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.assets.assets.length > 1"
                  @click="removeItem(cashFlow.assets.assets, item, index)"
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                ASSETS TOTAL: {{ cashFlowAssetsTotal }}
              </div>
            </div>
          </div>
          <!-- ASSETS END-->
          <div>
            <!-- DOODADS BEGIN-->
            <h2 class="newtext">DOODADS</h2>
            <button @click="addCashFlowDoodads">Add</button>
            <div class="new_line1">
              <div
                :key="`doodads-${index}`"
                v-for="(item, index) in cashFlow.assets.doodads"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.assets.doodads.length > 1"
                  @click="removeItem(cashFlow.assets.doodads, item, index)"
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                DOODADS TOTAL: {{ cashFlowDoodadsTotal }}
              </div>
            </div>
          </div>
          <!-- DOODADS END-->

          <div class="newsubtext">
            <!--  TOTAL ASSETS per Banker BEGIN-->
            TOTAL ASSETS per Banker (Assets Total + Doodads):
            {{ cashFlowTotalAssetsPerBanker }}
          </div>
          <!--  TOTAL ASSETS per Banker END-->

          <div class="newsubtext">
            <!--  TOTAL ASSETS per Rich Dad BEGIN-->
            TOTAL ASSETS per Rich Dad (Assets Total Only, No Doodads):
            {{ cashFlowTotalAssetsPerRichDad }}
          </div>
          <!--  TOTAL ASSETS per Rich Dad END-->
        </div>
      </div>
      <div style="display: inline-table; width: 50%;">
        <div class="border_new">
          <h1>LIABILITIES</h1>
          <div>
            <!-- LIABILITIES BEGIN-->
            <h2 class="newtext">LIABILITIES</h2>
            <button @click="addCashFlowLiabilities">Add</button>
            <div class="new_line1">
              <div
                :key="`liabilities-${index}`"
                v-for="(item, index) in cashFlow.liabilities"
              >
                <input class="newinput1" type="text" v-model="item.name" />
                <input class="newinput2" type="text" v-model="item.amount" />
                <button
                  v-if="cashFlow.liabilities.length > 1"
                  @click="removeItem(cashFlow.liabilities, item, index)"
                >
                  -
                </button>
              </div>
              <div class="newsubtext">
                TOTAL LIABILITIES: {{ cashFlowLiabilitiesTotal }}
              </div>
            </div>
          </div>
          <!-- LIABILITIES END-->

          <div class="newsubtext">
            <!--  	NET WORTH per Banker BEGIN-->
            NET WORTH per Banker (Total Assets per Banker minus Total
            Liabilities): {{ cashFlowTotalNetWorthPerBanker }}
          </div>
          <!--  	NET WORTH per Banker END-->

          <div class="newsubtext">
            <!--  	NET WORTH per Rich Dad BEGIN-->
            NET WORTH per Rich Dad (Total Assets per Rich Dad minus Total
            Liabilities): {{ cashFlowTotalNetWorthRichDad }}
          </div>
          <!--  	NET WORTH per Rich Dad END-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Calculator",
  data() {
    return {
      cashFlow: {
        income: {
          earnedIncome: [{ name: "", amount: 0 }],
          passiveIncome: [{ name: "", amount: 0 }],
          portfolioIncome: [{ name: "", amount: 0 }]
        },
        expenses: [{ name: "", amount: 0 }],
        assets: {
          assets: [{ name: "", amount: 0 }],
          doodads: [{ name: "", amount: 0 }]
        },
        liabilities: [{ name: "", amount: 0 }]
      },

      chartOptions: {
        chart: {
          id: "analysis",
          type: "donut"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ],
        series: [44, 55, 41, 17, 15],
        labels: ['Earned Income', 'Mango', 'Orange', 'Watermelon', 'Amel'],
        colors: ['#05fa00', '#66DA26', '#546E7A', '#E91E63', '#FF9800'],
        dataLabels: {
          enabled: true,
          formatter(val) {
            return val.toFixed(2) + " %"
          },
          dropShadow: {
            enabled: false,
            top: 1,
            left: 1,
            blur: 1,
            opacity: 0.45
          }
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                // name: {
                //   ...
                // },
                // value: {
                //   ...
                // }

                total: {
                  show: false,
                  label: 'Total',
                  color: '#373d3f',
                  formatter: function (w) {
                    return 99;
                  }
                }
              }
            }
          }
        }
      }
    };
  },
  computed: {
    cashFlowLiabilitiesTotal() {
      return this.calculateTotal(this.cashFlow.liabilities);
    },
    cashFlowDoodadsTotal() {
      return this.calculateTotal(this.cashFlow.assets.doodads);
    },
    cashFlowAssetsTotal() {
      return this.calculateTotal(this.cashFlow.assets.assets);
    },
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
      return (
        this.cashFlowEarnedIncomeTotal +
        this.cashFlowPassiveIncomeTotal +
        this.cashFlowPortfolioIncomeTotal
      );
    },
    cashFlowExpensesTotal() {
      return this.calculateTotal(this.cashFlow.expenses);
    },
    cashFlowTotal() {
      return this.cashFlowIncomeTotal - this.cashFlowExpensesTotal;
    },
    cashFlowTotalAssetsPerBanker() {
      return this.cashFlowAssetsTotal + this.cashFlowDoodadsTotal;
    },
    cashFlowTotalAssetsPerRichDad() {
      return this.cashFlowAssetsTotal;
    },
    cashFlowTotalNetWorthPerBanker() {
      return this.cashFlowTotalAssetsPerBanker - this.cashFlowLiabilitiesTotal;
    },
    cashFlowTotalNetWorthRichDad() {
      return this.cashFlowTotalAssetsPerRichDad - this.cashFlowLiabilitiesTotal;
    }
  },
  methods: {
    addCashFlowEarnedIncome() {
      let { earnedIncome } = this.cashFlow.income;
      earnedIncome.push({ name: "", amount: 0 });
    },
    addCashFlowPassiveIncome() {
      let { passiveIncome } = this.cashFlow.income;
      passiveIncome.push({ name: "", amount: 0 });
    },
    addCashFlowPortfolioIncome() {
      let { portfolioIncome } = this.cashFlow.income;
      portfolioIncome.push({ name: "", amount: 0 });
    },
    addCashFlowExpenses() {
      let { expenses } = this.cashFlow;
      expenses.push({ name: "", amount: 0 });
    },
    addCashFlowAssets() {
      let { assets } = this.cashFlow.assets;
      assets.push({ name: "", amount: 0 });
    },
    addCashFlowDoodads() {
      let { doodads } = this.cashFlow.assets;
      doodads.push({ name: "", amount: 0 });
    },
    addCashFlowLiabilities() {
      let { liabilities } = this.cashFlow;
      liabilities.push({ name: "", amount: 0 });
    },
    calculateTotal(items, func) {
      let sum = 0;
      for (let item of items) {
        if (func) sum = func(sum, item);
        else sum += Number(item.amount);
      }
      return sum;
    },
    removeItem(list, item, index) {
      list.splice(index, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  vertical-align: bottom;
  text-align: center;
  border-bottom: none #000000;
  border-top: 2px solid #4600a5 !important;
  border-left: none #000000;
  border-right: 2px solid #4600a5 !important;
  font-weight: bold;
  color: #ffffff;
  font-family: "Tahoma";
  margin-top: -1px;
  font-size: 10pt;
  background-color: #4600a5;
}
.border_new {
  border: 2px solid #4600a5 !important;
  margin-top: 10px;
  margin-left: 20px;
  margin-right: 20px;
  display: grid;
}
.newtext {
  font-weight: bold;
  color: #000000;
  font-family: "Tahoma";
  font-size: 10pt;
  width: 68%;
  display: -webkit-inline-box;
}
.new_line1 {
  width: 65%;
  float: right;
}
.newinput1 {
  width: 40%;
  margin-right: 10%;
}
.newinput2 {
  width: 40%;
  color: #000;
  font-family: "Tahoma";
  font-size: 10pt;
  background-color: silver;
  border: 0;
  text-align: end;
}
.newsubtext {
  font-weight: bold;
  color: #000000;
  font-family: "Tahoma";
  font-size: 10pt;
}
</style>
