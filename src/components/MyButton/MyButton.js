export default {
    name: "MyButton",
    data() {
        return {
            bgcColorList: ['primary', 'success', 'info', 'warning', 'danger']
        }
    },
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        round: Boolean,
        type: {
            type: String,
            default: 'primary'
        }
    },
    computed: {
        style() {
            if (this.round) {
                return {
                    borderRadius: '0.42rem'
                }
            }
        }
    },
    methods: {
        handleClick() {
            this.$emit('click')
        }
    }
};