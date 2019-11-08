<template>
	<div class="main">
		<div class="chart-container is-flex is-horizontal-center ">
			<bar-chart 
         v-if="loaded"
         :chart-data="datacollection" 
				:options="options"></bar-chart>
		</div>


		<section>
			<!-- Factor Extraversion -->
			<div class="container">
				<h1 class="title">Extroversão</h1>
				<p>Uma explicação simples é que extrovertidos ganham energia se associando com outras pessoas e perdem energia quando estão sozinhos em qualquer período de tempo. Já o introvertido ganha energia fazendo atividades individuais como vendo filmes e lendo, e perde energia, às vezes no ponto de exaustão, ao engajar em atividades sociais.</p> <br>

				<div v-if="SumFacOne > ipipReference.f_one.upper">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/extrovert.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Você é extrovertido!</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacOne }} / 100</h2>
					<p>Extrovertidos se divertem com a companhia de outras pessoas, são cheios de energia e frequentemente têm experiência com emoções positivas. Você é conhecido por seu entusiasmo, é orientado para ação e tem maior probabilidade de dizer "Sim", "Bora lá" para oportunidades. Em grupos, tende a falar bastante e chamar atenção para si.</p> <br>
				</div>

				<div v-else-if="SumFacOne >= ipipReference.f_one.lower">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/extrovert.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Um pouco de cada</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacOne }} / 100</h2>
					<br>
					<p>Nem tão extrovertido, nem tão introvertido. Você ganha energia e se diverte na companhia de outras pessoas. No entanto, pode passar um bom tempo vendo uma série ou lendo um livro sem sentir falta de convívio social. Assim como o autor deste site.</p><br>
				</div>

				<div v-else>
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/introvert.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Você é introvertido!</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacOne }} / 100</h2>
					<br>
					<p>Introvertidos possuem menor energia e níveis de atividades dos extrovertidos. Você tende a ser quieto, não chamar atenção e é menos dependente do mundo social. Sua falta de envolvimento social pode ser interpretado como timidez e depressão. Você tende a necessitar menor estimulação e mais tempo sozinho para recarregar suas baterias.</p> <br>
				</div>
			</div>

			<!-- factor Agreebleness -->
			<div class="container">
				<h1 class="title">Agradabilidade</h1>
				<p>Agradabilidade reflete as diferenças pessoais no que se refere a cooperação e harmonia social. É um fator para conseguir e manter a popularidade. Por outro lado, agradabilidade não é útil em situações que requerem soluções duras e absolutamente objetivas.</p> <br>

				<div v-if="SumFacTwo > ipipReference.f_two.upper">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/aggradable.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Você é agradável</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacTwo }} / 100</h2>
					<br>
					<p>Pessoas como você valorizam estar bem com outras pessoas e são geralmente consideradas amigáveis, generosas e estão sempre dispostas a ajudar ao próximo. Você também tende achar que as pessoas são honestas, decentes e confiáveis.</p> <br>
				</div>

				<div v-else-if="SumFacTwo > ipipReference.f_two.lower">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/aggradable.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Nem agradável, nem desagradável</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua pontuação: {{ SumFacTwo }} / 100</h2>
					<p>Você tem características de pessoas agradáveis e desagráveis. Você valoriza os interesses de outras pessoas, mas sem se esquecer dos seus interesses. Em alguns momentos você prefere tomar ações levando em consideração os sentimentos de outras pessoas, mas também consegue tomar decisões puramente racionais. </p><br>
				</div>

				<div v-else>
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f608.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Desagradável</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua pontuação: {{ SumFacTwo }} / 100</h2>
					<br>
					<p>Pessoas como você colocam o interesse pessoal acima do interesse coletivo. Às vezes, sua desconfiança faz com você tenda a ver as ações das outras pessoas com suspeita. Você é a pessoa certa para tomar decisões difíceis que precisam ser tomadas, mas que desagradam as pessoas. pessoas com este traço se tornam ótimos cientistas, críticos e soldados.</p><br>
				</div>
			</div>

			<!-- factor Conscientiousness -->
			<div class="container">
				<h1 class="title">Conscienciosidade</h1>
				<p>Consciensiosidade é a característica associada a forma que controlamos e direcionamos nossos impulsos. Impulsos não necessariamente são ruins, às vezes reagir rapidamente e melhor que não reagir de forma satisfatória. </p> <br>
				<div v-if="SumFacThree > ipipReference.f_three.upper">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/consciousness.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Alta conscienciosidade</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacThree }} / 100</h2>
					<br>
					<p>Você tende a fugir de situações de despreparo e pode atingir grande sucesso através de sua tendência de planejar suas atividades e persistir. As pessoas com alto nível de conscienciosidade são consideradas inteligentes e confiáveis. No entanto, tendem a ser perfeccionistas e workaholics. Também são consideradas chatas e entediantes por outras pessoas.</p> <br>
				</div>

				<div v-else-if="SumFacThree > ipipReference.f_three.lower">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/consciousness.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Nível médio de conscienciosidade</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacThree }} / 100</h2>
					<br>
					<p>Você tem níveis de conscienciosidade da maioria das pessoas. Você consegue planejar diversos aspectos de sua vida, no entanto consegue também tomar decisões impulsivas e aproveitar pequenos prazeres.</p><br>
				</div>

				<div v-else>
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f939.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Baixa conscienciosidade</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacThree }} / 100</h2>
					<br>
					<p>Você tende a seguir seus impulsos. Pessoas como você são consideradas como espontâneas e impulsivas - aproveitam os pequenos prazeres da vida - e são geralmente consideradas como divertidas e ótima companhia. No entanto, podem ser consideradas por sua falta de ambição, falha em seguir as normas e não confiáveis.</p><br>
				</div>
			</div>

			<!-- factor Neuroticism-->
			<div class="container">
				<h1 class="title">Estabilidade Emocional</h1>
				<p>Também conhecida como neuroticismo, a estabilidade emocional se refere a tendência de sentir emoções negativas tais como ansiedade, raiva, depressão.</p> <br>
				<div v-if="SumFacFour > ipipReference.f_four.upper">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f631.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Instabilidade emocional</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFour }} / 100</h2>
					<br>
					<p>Pessoas com instabilidade emocional são reagem a eventos que a maioria das pessoas não reagem. A intensidade das reações costuma ser também maior. Você tende a interpretar reações normais como ameaçadoras e tem dificuldade em lidar com pequenas frustrações. Essa tendência tende a diminuir sua capacidade de pensar claramente, tomar decisões e se adaptar a reações de estresse.</p> <br>
				</div>

				<div v-else-if="SumFacFour > ipipReference.f_four.lower">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f642.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Nem estável, nem instável</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFour }} / 100</h2>
					<br>
					<p>Você tende a reagir assim como a maioria das pessoas a situações da vida; dependendo da situação acaba reagindo de forma excessiva a eventos estressantes, embora não tenha muita dificuldade em lidar com esses eventos. Suas reações emocionais tendem a não atrapalhar sua capacidade de pensar claramente e tomar decisões.</p><br>
				</div>

				<div v-else>
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f642.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Estabilidade Emocional</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFour }} / 100</h2>
					<br>
					<p>Estabilidade. Essa uma característica forte sua. Pessoas como você dificilmente se irritam e possuem reações emocionais intensas e a qualquer estímulo. Também tendem a ser calmas e livres de sentimentos negativos duradouros. Liberdade desses sentimentos negativos não necessarimante excluem sentimentos positivos.</p><br>
				</div>
			</div>

			<!-- factor Openness -->
			<div class="container">
				<div v-if="SumFacFive > ipipReference.f_five.upper">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f929.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Aberto a novas experiências</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFive }} / 100</h2>
					<br>
					<p>Pessoas abertas tendem a curiosidade intelectual, apreciam arte e são sensíveis à beleza. Comparado com pessoas fechadas, elas tendem a estar mais conscientes de seus sentimentos.</p> <br>
				</div>

				<div v-else-if="SumFacFive > ipipReference.f_five.lower">
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f929.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Abertura normal a experiências</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFive }} / 100</h2>
					<br>
					<p>Sua abertura a nova experiências é semelhante a maioria das pessoas. Você tende a ter características das pessoas com abertura, isto é, apreciar arte e possuir curiosidade intelectual. No entanto, a quantidade de interesses é mais restrita do que as pessoas com maior nível de abertura. </p><br>
				</div>
				<div v-else>
					<div id="emoji-block" class="is-flex is-horizontal-center">
						<figure class="image is-128x128">
							<img src="./../../assets/1f928.svg" alt="">
						</figure>
					</div>
					<h2 class="is-size-4 has-text-centered has-text-weight-bold">Fechado a novas experiências</h2>
					<h2 class="is-size-6 has-text-centered has-text-weight-bold">Sua Pontuação: {{ SumFacFive }} / 100</h2>
					<br>
					<p>Pessoas fechadas como você possuem menor quantidade de interesses. Elas preferem coisas simples e diretas. Podem ver a ciência e as artes com suspeita, classificando-as como abstratas ou sem uso prático. Pessoas fechadas preferem familiaridade não novidades. De maneira geral, são conservadoras e resistentes à mudança.</p><br>
				</div>
			</div>
		</section>

		<section>
			Fonte: Conteúdo adaptado de <a href="https://psychology.wikia.org/wiki/Five_factor_personality_model">Wiki Psychology </a>
		</section>

	</div>
</template>

<script>

import IpipChart from './IpipChart.vue'
import IpipReferenceData from '../../assets/sample_features.json'

export default {
	components: {
		'bar-chart': IpipChart
	},
	props: ['formName'],
	data() {
    return {
      ipipReference: IpipReferenceData,
			formData: [],
			datacollection : null, 
			loaded: false,
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
		
		}
	},
	async mounted () {
		this.fetchData()
	},
	methods: {
		fetchData() {
			const database = 'https://open-bigfive-ipip100.firebaseio.com/ipip100/';
			const id = this.formName;
			const query = database + id + '.json';
			this.$http.get(query)
				.then(response => {
					return response.json()
				})
				.then(data => {
					this.formData = data;
					this.fillData();
					this.loaded = true;
				})
		},
		fillData() {
			this.datacollection = {
				labels: ['Extroversão', 'Agradabilidade', 'Conscienciosidade',
					'Estabilidade Emocional', 'Intelecto/Imaginação'],
				datasets: [
					{
						label: 'Sua soma',
						backgroundColor: '#7957d5',
						data: [this.SumFacOne, this.SumFacTwo, this.SumFacThree,
									this.SumFacFour, this.SumFacFive]
					},
					{
						label: 'Média dos respondentes',
						backgroundColor: 'hsl(48, 100%, 67%)',
            data: [this.ipipReference.f_one.mean,
              this.ipipReference.f_two.mean,
              this.ipipReference.f_three.mean,
              this.ipipReference.f_four.mean,
              this.ipipReference.f_five.mean]
					}
				]
			}
		},

	},
	computed: {
		SumFacOne() {
			return this.formData
				.filter(item => item.factor == 1)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0);
		},
		SumFacTwo() {
			return this.formData
				.filter(item => item.factor == 2)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacThree() {
			return this.formData
				.filter(item => item.factor == 3)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacFour() {
			return this.formData
				.filter(item => item.factor == 4)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
		SumFacFive() {
			return this.formData
				.filter(item => item.factor == 5)
				.reduce( (Sum, item) => parseInt(item.value,10) + Sum, 0)
		},
	}
}

</script>

<style scoped>
.main {
	margin-top:30px;
}

.is-horizontal-center {
	justify-content: center;
}

#emoji-block {
	margin-top:2em;
}


</style>
