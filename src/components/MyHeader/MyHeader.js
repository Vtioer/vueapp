export default {
    name: "MyHeader",
    props: {
        showBack: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        handleBack() {
            this.$router.go(-1)
        }
    }
};