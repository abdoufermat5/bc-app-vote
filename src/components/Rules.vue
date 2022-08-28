<template>
  <v-main>
    <router-view />
    <v-card height="100%" width="100%">
      <section>
        <v-card class="my-10">
          <v-card-text>
            <div
              class="text-uppercase text-h6 mt-6 primary--text party_name-box"
            >
              DISPOSITIONS COMMUNES A L’ELECTION DU PRESIDENT DE LA REPUBLIQUE
              ET AUX ELECTIONS DES DEPUTES, DES CONSEILLERS REGIONAUX,
              MUNICIPAUX ET RURAUX
            </div>
          </v-card-text>
        </v-card>
        <v-expansion-panels v-model="panel" multiple popout>
          <v-expansion-panel v-for="item in rules" :key="item.title">
            <v-expansion-panel-header>
              {{ item.title }}

              <template v-slot:actions>
                <v-icon color="primary"> mdi-lightbulb-on-90 </v-icon>
              </template>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.content }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </section>
    </v-card>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      panel: [0, 1],
      rules: [
        {
          title: "Article L premier",
          content: `Le Ministère chargé des Elections est, dans les conditions et modalités déterminées par le présent code, compétent pour la préparation et l’organisation des opérations électorales et référendaires. Toutefois, à l’Etranger, cette compétence est
                    exercée par le Ministère chargé des Affaires Etrangères, en rapport avec le Ministère chargé des Elections, dans les conditions et modalités déterminées par le présent code.
                    Le Ministère chargé des Sénégalais de l’Extérieur participe à l’information et à la sensibilisation des Sénégalais résidant à l’étranger.`,
        },
        {
          title: "Article L2",
          content: `Le Ministère chargé des Elections assure la gestion des listes électorales et du fichier général des électeurs.`,
        },
        {
          title: "Article L3",
          content: `Sous l’autorité du Ministre chargé des Elections, les services centraux en relation avec les Autorités Administratives assurent la mise en œuvre des prérogatives indiquées dans les articles premier et deux ci-dessus.
                    A l’étranger, les prérogatives prévues à l’article premier alinéa 2 sont mises en œuvre par les Ambassades et Consulats sous l’autorité du Ministre chargé des Affaires Etrangères.`,
        },
        {
          title: "Article L.4",
          content: `Il est créé une commission électorale nationale autonome, en abrégé C.E.N.A. Elle a son siège à Dakar. La C.E.N.A est une structure permanente, dotée de la personnalité juridique et de l’autonomie financière.`,
        },
        {
          title: "Article L5",
          content: `La C.E.N.A contrôle et supervise l’ensemble des opérations électorales et référendaires. Elle veille, en particulier, à leur bonne organisation matérielle
                    et apporte les correctifs nécessaires à tout dysfonctionnement constaté. La C.E.N.A fait respecter la loi électorale de manière à assurer la régularité, la transparence, la sincérité des scrutins en garantissant aux électeurs,
                    ainsi qu’aux candidats en présence, le libre exercice de leurs droits.`,
        },
        {
          title: "Article L6",
          content: `La C.E.N.A est obligatoirement présente à tous les niveaux de conception, d’organisation, de prise de décision et d’exécution depuis l’inscription sur les listes électorales jusqu’à la proclamation provisoire des
                    résultats. En cas de non-respect des dispositions législatives et réglementaires relatives aux élections ou référendums par une autorité administrative, la C.E.N.A,
                    après une mise en demeure, peut prendre des décisions immédiatement exécutoires d’injonction, de rectification, de dessaisissement, de substitution d’action dans le cadre des opérations électorales et référendaires, nonobstant son pouvoir de saisine des juridictions compétentes.`,
        },
        {
          title: "Article L.7",
          content: `La C.E.N.A comprend douze (12) membres nommés par décret. Ils sont choisis parmi les personnalités
                    indépendantes exclusivement de nationalité sénégalaise, connues pour leur intégrité morale, leur honnêteté
                    intellectuelle, leur neutralité et leur impartialité, après consultation d’institutions, d’associations et d’organismes tels que ceux qui regroupent Avocats, Universitaires, Défenseurs des Droits de l’Homme, Professionnels de
                    la communication ou toute autre structure.
                    La C.E.N.A est dirigée par un Président, assisté d’un Vice-président et d’un Secrétaire Général nommés par décret.
                    Les membres de La C.E.N.A sont nommés pour un mandat de six (06) ans renouvelable par tiers tous les trois (03) ans.
                    Dans l’exercice de leurs fonctions, les membres de La C.E.N.A ne doivent solliciter ni recevoir d’instructions ou d’ordre d’aucune autorité publique ou privée.
                    Dans l’accomplissement de sa mission, La C.E.N.A peut, en cas de besoin, recourir aux services d’experts indépendants.`,
        },
        {
          title: "Article L.8",
          content: `La C.E.N.A met en place dans les régions,
                    les départements et les ambassades ou consulats,
                    des structures correspondantes dont la composition et le fonctionnement sont déterminés par décret sur proposition de la C.E.N.A.`,
        },
      ],
    };
  },
};
</script>

<style>
</style>vue