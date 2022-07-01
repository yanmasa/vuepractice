<template>
    <div>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
        >
            <v-text-field
            v-model="title"
            :counter="400"
            :rules="titleRules"
            label="本のタイトル"
            required
            ></v-text-field>

            <v-textarea
            v-model="memo"
            label="本のメモ"
            ></v-textarea>

            <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="regist"
            >
            登録する
            </v-btn>

        </v-form>
    </div>
</template>

<script>
    export default {
        props:{
            books: Array
        },
        data(){
            return{
                valid: true,
                title: '',
                titleRules: [
                    v => !!v || 'タイトルは必須入力です。',
                    v => (v && v.length <= 400) || 'タイトルが長すぎます。400文字以内で入力してください',
                ],
                memo: '',
            }
        },
        methods: {
            regist () {
                this.$refs.form.validate()
                if(this.$refs.form.validate()){
                    this.$store.state.books.push(
                        {id: this.$store.state.id,
                        title: this.title,
                        memo:this.memo
                        }
                    )
                    // window.location.reload()
                    this.$router.push(`/books/${this.$store.state.id}`)
                    console.log(this.$store.state.books)
                    this.$store.commit('idCount')
                }
            },
        },
    }
</script>

<style>

</style>