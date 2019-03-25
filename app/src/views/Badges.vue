<template>
    <div>
        <v-container align-content-center grid-list-xl>
            <h1>Vos badges</h1>
            <v-layout row wrap>
                <v-flex xs2 v-for="badge in badges" :key="badge.id">
                    <v-img :class="badge.status" :src="require(`../assets/badges/${badge.img}`)"></v-img>
                </v-flex>
            </v-layout>
        </v-container>
    </div>

</template>

<script>
export default {
    data(){
        return{
            badges: [
                {
                    id: 1,
                    name: '',
                    img: '1.png',
                    status: "active"
                },

                {
                    id: 2,
                    name: '',
                    img: '2.png',
                    status: "active"
                },

                {
                    id: 3,
                    name: '',
                    img: '3.png',
                    status: "inactive"
                },

                {
                    id: 4,
                    name: '',
                    img: '4.png',
                    status: "inactive"
                },

                {
                    id: 5,
                    name: '',
                    img: '5.png',
                    status: "active"
                },

                {
                    id: 6,
                    name: '',
                    img: '6.png',
                    status: "active"
                },

                {
                    id: 7,
                    name: '',
                    img: '7.png',
                    status: "inactive"
                },
                {
                    id: 8,
                    name: '',
                    img: '8.png',
                    status: "inactive"
                }
            ]
        }
    },
}
</script>


<style>
.inactive{
    -webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  filter: grayscale(100%);
  opacity: 0.5;
}
</style>

