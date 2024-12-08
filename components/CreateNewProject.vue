<template>
  <ElButton type="primary" @click="centerDialogVisible = true"
    >Novo Projeto</ElButton
  >

  <el-dialog
    v-model="centerDialogVisible"
    title="Criar Novo Projeto"
    width="500"
    align-center
  >
    <ElText style="margin-bottom: 2px">Nome do Projeto </ElText>
    <ElInput />

    <ElText style="margin-bottom: 2px">Descrição </ElText>
    <ElInput type="textarea" />

    <ElText style="margin-bottom: 2px">Tipo de Projeto </ElText>
    <ElSelect>
      <ElOption
        v-for="project in projects"
        :key="project.name"
        :label="project.name"
        :value="project.name"
      />
    </ElSelect>

    <div class="flex">
      <div>
        <ElText>Data de Inicio</ElText>
        <ElDatePicker></ElDatePicker>
      </div>

      <div>
        <ElText>Data Final</ElText>
        <ElDatePicker></ElDatePicker>
      </div>
    </div>

    <template #footer>
      <div class="dialog-footer">
        <el-button @click="centerDialogVisible = false">Cancelar</el-button>
        <el-button type="primary" @click="centerDialogVisible = false">
          Confirmar
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { ref } from "vue";

const centerDialogVisible = ref(false);

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
</script>
