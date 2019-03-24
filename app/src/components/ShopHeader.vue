<template>
    <div class="oa-shopheader">
        <v-container>
            <v-layout>
                <v-text-field solo label="Search" append-icon="search" :v-model="props.filteredProd"></v-text-field>
            </v-layout>
        </v-container>
        
    </div>
</template>

<script>
export default {
    props: ['filteredProd']
}
</script>


<style>
.oa-shopheader{
    background: linear-gradient(87deg,#5e72e4 0,#825ee4 100%)!important;
    padding: 20px 0 0;
}
</style>
