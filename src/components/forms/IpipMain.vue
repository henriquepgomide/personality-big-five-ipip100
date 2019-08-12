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
			<b-tabs type="is-toggle"  v-model="activeTab" expanded>
				<b-tab-item label="Teste" icon="google-photos">
					<Test :ipip100="ipip100"
								:countItems="countItems"
								v-on:sendId="fillFormId"/>
				</b-tab-item>

				<b-tab-item label="Resultados" icon="library-music">

					<div v-if="!!formName && countItems == 100">
						<Results :formName="formName"/>
					</div>

					<div v-else >
						<div id="emoji-block" class="is-flex is-horizontal-center">
							<figure class="image is-128x128">
								<img src="./../../assets/1f62c.svg" alt="">
							</figure>
						</div>
						<br>
						<h1 class="title has-text-centered">Não está se esquecendo de nada?</h1>
						<h2 class="is-size-3 has-text-weight-medium has-text-centered">Faltam {{ 100 - countItems }} questões.</h2>
						<h2 class="subtitle has-text-centered">Você ainda não respondeu todas questões. </h2>
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

import ipip100 from '../../assets/ipip100.json'

function convertToAnswered(value){
	return value > 0 ? 1 : 0;
}

export default {
	components: {
		Test,
		Instructions,
		Results,
	},
	data() {
		return {
			ipip100,
			formName: null,
			activeTab: 0,
			filledForm: this.countItems,
		}
	},
	methods: {
		fillFormId(formId) {
			this.formName = formId;
			this.activeTab = 1;
		},
	},
	computed: {
		countItems() {
			return this.ipip100
				.map(item => convertToAnswered(item.value))
				.reduce( (Sum, item) => item + Sum, 0)
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
