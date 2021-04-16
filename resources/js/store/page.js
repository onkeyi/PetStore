const page = {
    state: {
        loading: false,
    },
    mutations: {
        setLoading(state, loading) {
            state.loading = loading;
        },
    },
    getters: {
        isLoading: (state) => state.loading,
    },
};
export default page;
