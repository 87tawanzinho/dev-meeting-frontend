interface user {
  name: string;
  email: string;
  created_at: string;
  id: number;
}
export const useUserStore = defineStore("user", {
  state: () => ({
    user: {} as user,
  }),
  actions: {
    setUser(user: user) {
      this.user = user;
    },
  },
});
