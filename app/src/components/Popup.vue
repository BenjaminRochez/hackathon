<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="success">Add new product</v-btn>
        <v-card>
            <v-card-title>
                <h2>Adder</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model='title' prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click='submit()' :loading='loading'>Add product</v-btn>
                </v-form>
            </v-card-text>
            
        </v-card>
    </v-dialog>
</template>
<script>
export default {
    name: 'Popup',
    data(){
        return{
            title: '',
            content: '',
            loading: false,
            dialog: false,
            inputRules: [
                v => v.length >= 3 || 'Minimum length is 3 characters'
            ]
        }
    }
}
</script>
