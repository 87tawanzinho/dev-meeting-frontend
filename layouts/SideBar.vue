<template>
  <el-tabs :tab-position="tabPosition" style="height: 100vh" class="demo-tabs">
    <el-tab-pane label="Projetos"> <Projects /> </el-tab-pane>
    <el-tab-pane label="Configuração">Conteúdo de Configuração</el-tab-pane>
    <el-tab-pane label="Papel">Conteúdo de Papel</el-tab-pane>
    <el-tab-pane label="Tarefas">Conteúdo de Tarefas</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { TabsInstance } from "element-plus";
import Projects from "../components/Projects.vue";

const tabPosition = ref<TabsInstance["tabPosition"]>("left");
</script>

<style>
.demo-tabs {
  display: flex;
  height: 100vh;
}

.el-tabs__nav {
  width: 200px; /* Ajuste para a largura do menu lateral */
}

.el-tabs__content {
  flex-grow: 1;
  padding: 32px;
  color: #6b778c;
  font-size: 32px;
  font-weight: 600;
}

.el-tabs--left .el-tabs__content {
  height: 100%;
  padding-left: 80px; /* Ajuste opcional para aumentar o espaço */
}
</style>
