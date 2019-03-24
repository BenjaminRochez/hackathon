<template>
    <v-dialog max-width="600px" v-model="dialog">
        <v-btn flat slot="activator" class="success">Add new product</v-btn>
        <v-card>
            <v-card-title>
                <h2>Adder</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model='name' prepend-icon="folder"></v-text-field>
                    <v-text-field label="Image URL" v-model='image_url' prepend-icon="folder"></v-text-field>
                    <v-text-field label="Productor" v-model='productor' prepend-icon="folder"></v-text-field>
                    <v-text-field label="Location" v-model='location' prepend-icon="folder"></v-text-field>
                    <v-text-field label="Price" v-model='price' prepend-icon="folder"></v-text-field>

                    <v-spacer></v-spacer>

                    <v-btn flat class="success mx-0 mt-3" @click='AddProduct' :loading='loading'>Add product</v-btn>
                </v-form>
            </v-card-text>
            
        </v-card>
    </v-dialog>
</template>
<script>

import db from '@/main.js';
import slugify from 'slugify'
export default {
    name: 'Popup',
    data(){
        return{
            another: null,
            name: null,
            location: null,
            productor: null,
            image_url: null,
            price: null,
            feedback: null,
            slug: null,
            dialog: false,
            loading: false,
        }
    },
    methods: {
        AddProduct(){
            console.log("yo");
            if(this.name){
                this.feedback = null
                // create a slug
                this.slug = slugify(this.name, {
                    replacement: '-',
                    remove: /[$*_+~.()'"!\-:@]/g,
                    lower: true
                })
                // Add smoothie to the Firebase 
                db.collection('product').add({
                    name: this.name,
                    slug: this.slug,
                    location: this.location,
                    productor: this.productor,
                    price: this.price,
                    image_url: this.image_url
                }).then(()=>{
                    // when pushed to the db, redirect to the index
                    this.dialog = false;
                    this.$router.push('/dashboard')
                }).catch(err =>{
                    console.log(err)
                })
            } else {
                this.feedback = "You must enter a Smoothie Title"
            }
        },
    }
}
</script>
