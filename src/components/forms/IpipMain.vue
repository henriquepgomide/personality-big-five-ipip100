<template>
	<div>
		<div class="container">
			<div class="main-title"></div>
			<h1 class="title has-text-centered">Teste de Personalidade</h1>
			<h2 class="subtitle has-text-centered">
				<em>International Personality Item Pool 100-item (IPIP)</em>
			</h2>
			<Instructions />
		</div>

		<div class="main-application">
			<b-tabs type="is-toggle" expanded>
				<b-tab-item label="Teste" icon="google-photos">
					<Test :ipip100="ipip100" :countItems="countItems"/>
				</b-tab-item>

				<b-tab-item label="Resultados" icon="library-music">

					<div v-if="countItems > 100">
						<br>
						<div class="chart-container is-flex is-horizontal-center ">
							<bar-chart :chart-data="datacollection" :options="options"></bar-chart>
						</div>

						<div class="is-flex is-horizontal-center">
							<b-button type="is-primary" @click="fillData" outlined>Avaliar Personalidade</b-button>
						</div>

						<Results :ipip100="ipip100" :SumFacOne="SumFacOne" :SumFacTwo="SumFacTwo" :SumFacThree="SumFacThree" :SumFacFour="SumFacFour" :SumFacFive="SumFacFive"/>
					</div>

					<div v-else >
						<div id="emoji-block" class="is-flex is-horizontal-center">
							<figure class="image is-128x128">
								<img src="./../../assets/1f62c.svg" alt="">
							</figure>
						</div>
						<br>
						<h1 class="title has-text-centered">Não está se esquecendo de nada?</h1>
						<h2 class="subtitle has-text-centered">Você ainda não respondeu todas questões. Faltam {{ 100 - countItems }}.</h2>
					</div>

				</b-tab-item>

			</b-tabs>
		</div>
	</div>
</template>

<script>
import Test from './IpipFormRadio.vue'
import Instructions from './IpipInstructions.vue'
import Results from './IpipResults.vue'
import IpipChart from './IpipChart.vue'

import ipip100 from '../../assets/ipip100.json'

function convertToAnswered(value){
	return value > 0 ? 1 : 0;
}

export default {
	components: {
		Test,
		Instructions,
		Results,
		'bar-chart': IpipChart,
	},
	data() {
		return {
			ipip100,
			datacollection: null,
			options:
			{
				scales: {
					yAxes: [
						{
							ticks: {
								suggestedMin:20,
								suggestedMax:100,
								stepSize: 20
							}
						}
					]
				},
				responsive: false,
				maintainAspectRatio: false
			},
			filledForm: this.countItems,
		}
	},
	mounted () {
		this.fillData()
	},
	methods: {
		fillData() {
			this.datacollection = {
				labels: ['Extroversão', 'Amabilidade', 'Conscienciosidade',
					'Estabilidade Emocional', 'Intelecto/Imaginação'],
				datasets: [
					{
						label: 'Sua soma',
						backgroundColor: '#7957d5',
						data: [this.SumFacOne, this.SumFacTwo, this.SumFacThree,
							this.SumFacFour, this.SumFacFive],
					},
					{
						label: 'Ponto Médio',
						backgroundColor: 'hsl(48, 100%, 67%)',
						data: [60, 60, 60, 60, 60]
					}
				]
			}
		}
	},
	computed: {
		countItems() {
			return this.ipip100
				.map(item => convertToAnswered(item.value))
				.reduce( (Sum, item) => item + Sum, 0)
		},
		SumFacOne() {
			return this.ipip100
				.filter(item => item.factor == 1)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0);
		},
		SumFacTwo() {
			return this.ipip100
				.filter(item => item.factor == 2)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacThree() {
			return this.ipip100
				.filter(item => item.factor == 3)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacFour() {
			return this.ipip100
				.filter(item => item.factor == 4)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacFive() {
			return this.ipip100
				.filter(item => item.factor == 5)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
	},
}
</script>

<style scoped>
.question {
	margin-top: 2em
}

.main-application {
	padding-top: 1.5em;
}

.main-title {
	margin-top: 3em;
}

.is-horizontal-center {
	justify-content: center;
}

#emoji-block {
	margin-top:2em;
}

</style>
