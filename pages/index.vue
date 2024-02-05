<template>
  <div class="d-flex h-screen justify-center align-center bg-blue">
    <div
      class="d-flex justify-center flex-wrap align-center bg-white w-50 h-75 pa-5"
    >
      <div class="d-none">
        <v-file-input id="input" label="File input">input</v-file-input>
      </div>
      <div class="text-center">
        <label for="input"
          ><svg-icon
            type="mdi"
            class="text-blue"
            :path="mdiCloudUpload"
          ></svg-icon
        ></label>
        <p class="text-grey-darken-1">Envie seus arquivos para a rede IPFS!</p>
      </div>
      <div>
        <v-btn class="bg-light-blue-lighten-2 text-white">Enviar</v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloudUpload } from "@mdi/js";
</script>

<style></style>
