interface user {
  name: string;
  email: string;
  created_at: string;
  id: number;
  projects: Array<any>;
}
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as user,
  }),
  actions: {
    setUser(user: user) {
      this.user = user;
    },
    setProjects(projects: any) {
      this.user.projects = projects;
    },
  },
});
