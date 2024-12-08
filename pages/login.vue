<template>
  <div class="flex w-screen bg-[##EEEEEE] h-screen">
    <!--https://www.figma.com/design/7T1wkErczpMOBeqtpVjMSb/Login-Page-Design?node-id=6-920&node-type=canvas&t=bXCBDRY3wttdLmoM-0-->
    <div
      class="px-8 bg-white w-[34rem] h-full border-r shadow-2xl flex flex-col items-center pt-24 pb-24"
    >
      <p class="flex flex-row-reverse gap-2 text-xl text-blue-950">
        Reunião dos Devs
        <Icon name="logos:tomcat" size="24" class="text-green-900" />
      </p>
      <p class="text-black">Entre na sua conta</p>
      <div class="flex flex-col justify-center gap-2">
        <div>
          <ElText>E-mail</ElText>
          <ElInput type="text" v-model="email" />
        </div>
        <div>
          <ElText>Senha</ElText>
          <ElInput type="text" v-model="password" />
          <ElLink type="primary">Esqueceu a senha?</ElLink>
        </div>

        <ElButton type="success" @click="signIn">Entrar</ElButton>
      </div>

      <div class="mt-4 flex flex-col gap-2 items-center">
        <p>Ou</p>
        <ElButton type="success" plain>Se Registrar</ElButton>
      </div>
    </div>
    <div class="flex justify-center items-center w-full">
      <Icon name="logos:tomcat" size="240" class="text-green-900" />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { useAuthStore } from "~/store/auth.store";
import { useUserStore } from "~/store/user.store";

const email = ref();
const password = ref();

async function signIn() {
  try {
    const response = await axios.post("http://localhost:8000/api/login", {
      email: email.value,
      password: password.value,
    });

    if (response.data.user) {
      const userStore = useUserStore();
      const authStore = useAuthStore();
      localStorage.setItem("user", JSON.stringify(response.data.user));
      userStore.setUser(response.data.user);
      authStore.login();
      console.log(userStore.user);

      const projects = await axios.get(
        `http://localhost:8000/api/userprojects/${userStore.user.id}`
      );
      localStorage.setItem("projects", JSON.stringify(projects.data));
      userStore.setProjects(projects.data);
      return navigateTo("/home");
    }
  } catch (err) {
    console.log(err);
  }
}
</script>
