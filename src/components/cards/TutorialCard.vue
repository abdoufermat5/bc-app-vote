<template>
  <!-- <v-card
      bg-variant="dark"
      text-variant="white"
      :title="title"
      :sub-title="author"
      class="text-left mb-3"
    >
      <v-card-text class="">
        {{ content }}
      </v-card-text>
    </v-card> -->
  <v-card class="mx-auto" color="#26c6da" dark max-width="400">
    <v-card-title>
      <v-icon large left> mdi-twitter </v-icon>
      <span class="text-h6 font-weight-light">{{ title }}</span>
    </v-card-title>

    <v-card-text class="text-center">
      {{ content }}
    </v-card-text>

    <v-card-actions>
      <v-list-item class="grow">
        <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            alt=""
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{ author }}</v-list-item-title>
        </v-list-item-content>

        <v-row align="center" justify="end">
          <v-icon class="mr-1"> mdi-heart </v-icon>
          <span class="subheading mr-2">256</span>
          <span class="mr-1">·</span>
          <v-icon class="mr-1"> mdi-share-variant </v-icon>
          <span class="subheading">45</span>
        </v-row>
      </v-list-item>
    </v-card-actions>
  </v-card>
</template>
<script>
/* eslint-disable */
export default {
  props: { title: String, content: String, author: String },
  name: "TutorialCard",
};
</script>

<style>
</style>