<template>
  <ElButton type="primary" @click="centerDialogVisible = true"
    >Novo Projeto</ElButton
  >

  <el-dialog
    v-model="centerDialogVisible"
    title="Criar Novo Projeto"
    width="500"
    class=""
    align-center
  >
    <ElText style="margin-bottom: 2px">Nome do Projeto </ElText>
    <ElInput v-model:model-value="nameOfProject" />

    <ElText style="margin-bottom: 2px">Descrição </ElText>
    <ElInput type="textarea" v-model:model-value="descriptionOfProject" />

    <ElText style="margin-bottom: 2px">Tipo de Projeto </ElText>
    <ElSelect v-model:model-value="typeOfProject" :default-first-option="true">
      <ElOption
        v-for="project in projects"
        :key="project.name"
        :label="project.name"
        :value="project.name"
      />
    </ElSelect>

    <div class="flex pt-2">
      <div>
        <ElText>Data de Inicio</ElText>
        <ElDatePicker v-model:model-value="dateStartOfProject"></ElDatePicker>
      </div>

      <div class="">
        <ElText>Data Final</ElText>
        <ElDatePicker v-model:model-value="dateEndOfProject"> </ElDatePicker>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closingModal">Cancelar</el-button>
        <el-button type="primary" @click="createProject"> Confirmar </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "~/store/user.store";
const projects = [
  {
    name: "Agil",
  },
  {
    name: "Kanban",
  },
  {
    name: "Scrum",
  },
];

const centerDialogVisible = ref(false);
const nameOfProject = ref();
const descriptionOfProject = ref();
const typeOfProject = ref();
const dateStartOfProject = ref();
const dateEndOfProject = ref();

const userStore = useUserStore();

async function createProject() {
  try {
    await axios.post("http://localhost:8000/api/createproject", {
      name: nameOfProject.value,
      description: descriptionOfProject.value,
      user_id: userStore.user.id,
      start_date: dateStartOfProject.value,
      end_date: dateEndOfProject.value,
    });
    ElMessage("Você criou um novo projeto");
    centerDialogVisible.value = false;
  } catch (err) {
    console.log(err);
  }
}

const closingModal = () => {
  ElMessage("Você não criou um novo projeto.");
  centerDialogVisible.value = false;
};
</script>
