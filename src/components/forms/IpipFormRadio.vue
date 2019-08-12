<template>
	<div>
		<section>
			<h2 class="subtitle has-text-centered">
				<strong>Progresso</strong>
			</h2>
			<progress class="progress is-warning is-large" :value="countItems" max="100">{{ countItems }}</progress>
		</section>

		<section>
			<div v-for="(question, index) in ipip100" :key="index" class="radioquestion">
				<div :class="{ 'validator-error': question.value != 0 }">

					<div class="box question">
						<h4 class="title is-size-4">{{ index + 1 }} - {{ question.label }}</h4>
						<div class="control">

							<div id="regularcoded" v-if="question.reversed">
								<!-- Regular coded options -->
								<div class="columns">
									<div class="column">
										<b-radio v-model="question.value" native-value="1">Discordo Totalmente</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="2">Discordo em Parte</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="3">Não Concordo, nem discordo</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="4">Concordo em Parte</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="5">Concordo Totalmente</b-radio>
									</div>
								</div>
							</div>

							<div id="reverse-coded" v-else>
								<!-- Reverse coded options -->
								<div class="columns">
									<div class="column">
										<b-radio v-model="question.value" native-value="5">Discordo Totalmente</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="4">Discordo em Parte</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="3">Não Concordo, nem discordo</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="2">Concordo em Parte</b-radio>
									</div>
									<div class="column">
										<b-radio v-model="question.value" native-value="1">Concordo Totalmente</b-radio>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</section>

		<section>
			<center>
				<div v-if="countItems >= 1">
					<br>
					<b-button type="is-primary" size="is-large" @click="submit">Avaliar Personalidade</b-button>
				</div>
			</center>
		</section>
	</div>


</template>

<script>
export default {
	props: ['ipip100', 'countItems'],
	methods: {
		submit() {
			this.$http.post('https://open-bigfive-ipip100.firebaseio.com/ipip100.json', this.ipip100)
				.then(response => {
					const formId = response.body.name;
					this.$emit('sendId', formId);
				}, error => {
				});
		}
	}
};
</script>

<style scoped>
div {
	margin-top: 1em;
}

.question {
	margin-top: 1em !important;
}

.validator-error {
	border-radius: 6px;
	-webkit-box-shadow: 0 1px 2px #7957d5, 0 0 0 1px #7957d5!important;
	box-shadow: 0 1px 2px #7957d5, 0 0 0 1px #7957d5!important;


}
</style>
