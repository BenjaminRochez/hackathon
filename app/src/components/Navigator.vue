<template>
      <v-card>
        <v-list>
          <v-list-group
            v-for="item in items"
            :key="item.title"
            v-model="item.active"
            
            no-action
          >
            <template v-slot:activator>
              <v-list-tile>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </template>

            <v-list-tile
              v-for="subItem in item.items"
              :key="subItem.title"
              @click=""
            >
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>

              <v-list-tile-action>
                <v-icon>{{ subItem.action }}</v-icon>
              </v-list-tile-action>
            </v-list-tile>
          </v-list-group>
        </v-list>
      </v-card>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {
            action: 'local_activity',
            title: 'Légumes',
            items: [
              { title: 'Pomme de terre' },
              { title: 'Oignons, echalotes, ail' },
              { title: 'Herbes fraîches/Germes' },
              { title: 'Légumes racines' }
            ]
          },
          {
            action: 'restaurant',
            title: 'Fruits',
            active: false,
            items: [
              { title: 'Pommes' },
              { title: 'Poires' },
              { title: 'Banane' }
            ]
          }
        ]
      }
    }
  }
</script>