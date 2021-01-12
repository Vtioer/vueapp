export default {
    name: "MyInput",
    data() {
        return {};
    },
    props: {
        type: {
            type: String,
            default: 'text'
        },
        value: [String, Number],
        label: String,
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: String,
        showAllBorder: Boolean,
        showBottomBorder: {
            type: Boolean,
            default: true
        },
        round: Boolean,
        borderColor: {
            type: String,
            default: '#e9e9e9'
        },
        activeBorderColor: {
            type: String,
            default: '#4e6ef2'
        }
    },
    model: {
        prop: 'value',
        event: 'input'
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        handleFocus(e) {
            if (this.showAllBorder || this.showBottomBorder) {
                this.$refs.input.style.borderColor = this.activeBorderColor
            }
            this.$emit('focus', e.target.value)
        },
        handleBlur(e) {
            if (this.showAllBorder || this.showBottomBorder) {
                this.$refs.input.style.borderColor = this.borderColor
            }
            this.$emit('blur', e.target.value)
        },
    },
    computed: {
        style() {
            if (this.showAllBorder) {
                return {
                    border: `1px solid ${this.borderColor}`,
                    borderRadius: this.round ? '0.42rem' : `0.1rem`
                }
            }
            if (this.showBottomBorder) {
                return {
                    borderBottom: `1px solid ${this.borderColor}`
                }
            }
        }
    }
};