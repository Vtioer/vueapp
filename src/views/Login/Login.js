export default {
    name: "Login",
    data() {
        return {
            userCode: '',
            userPassword: ''
        };
    },
    methods: {
        handleLogin() {
            console.log('login')
            this.$router.replace({ name: 'Home' })
        }
    }
};