<script setup>
import { RouterView } from 'vue-router';
import { ref } from "vue";
import Navbar from "./components/Navbar.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import store from "@/stores";
import { activeClientIDListener } from "./utils";


const useStore = store();
const activeClientID = ref(useStore.activeClientID);
const clients = useStore.getClients;
activeClientIDListener();
</script>

<template>
  <div class="container bg-light vh-100">
    <Navbar/>

    <div class="mb-5 mt-5">
      <label class="form-label">Select Client</label>
      <CustomSelect
          :options="clients"
          :initialValue="activeClientID"
          @change="useStore.changeActiveClientID"/>
    </div>

    <RouterView/>
  </div>


</template>
