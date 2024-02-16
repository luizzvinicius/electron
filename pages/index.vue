<template>
  <div class="d-flex h-screen justify-center align-center bg-blue">
    <div
      class="d-flex justify-center align-between flex-column align-center bg-white w-50 h-75 pa-5"
    >
      <div class="d-none">
        <v-file-input id="input" :multiple="true" v-model="files"
          >input</v-file-input
        >
      </div>
      <div class="text-center">
        <label for="input"
          ><svg-icon
            type="mdi"
            class="text-blue"
            :size="60"
            :path="mdiCloudUpload"
          ></svg-icon
        ></label>
        <label for="input" class="text-grey-darken-1 d-block"
          >Envie seus arquivos para a rede IPFS!</label
        >
        <div class="d-flex text-grey-darken-1 justify-between caption ga-4">
          <div class="w-100"><p class="fontSize">Arquivos a enviar:</p></div>
          <div class="w-100">
            <p v-for="(file, i) in files" class="text-left fontSize elipsis">
              {{ i + 1 }}- {{ file.name }}
            </p>
          </div>
        </div>
      </div>
      <div>
        <v-btn class="bg-light-blue-lighten-2 text-white" @click="onSend"
          >Enviar</v-btn
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiCloudUpload } from "@mdi/js";
import {uploadFile} from '../electron/ipfs/func'

const files = ref<File[]>([]);

const onSend = () => {
  const upload = uploadFile(files.value[0])
};
</script>

<style>
.fontSize {
  font-size: 12px;
}

.elipsis {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: keep-all;
  text-wrap: nowrap;
}
</style>
