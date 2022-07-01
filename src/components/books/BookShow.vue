<template>
    <div>

    <button @click='confirm'></button>
    </div>
</template>

<script>
export default {
    data(){
        return {
            books: this.$store.state.books
        }
    },
    methods:{
        confirm(){
            console.log(this.books)
            console.log(this.$store.state.books)
        }
    }
}
</script>

<style>

</style>