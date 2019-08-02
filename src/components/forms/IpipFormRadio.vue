<template>
	<div>
		<section>
			<h2 class="subtitle has-text-centered">
				<strong>Progresso</strong>
			</h2>

			<progress class="progress is-warning is-large" :value="countItems" max="100">{ countItems }}</progress>
		</section>

		<section>
			<div v-for="(question, index) in ipip100" :key="index" class="radioquestion">
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
		</section>
	</div>
</template>

<script>

export default {
	props: ['ipip100', 'countItems'],
};
</script>

<style scoped>
div {
	margin-top: 1em;
}

.question {
	margin-top: 1em !important;
}
</style>
