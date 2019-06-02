<template>
    <span>
        <v-navigation-drawer app v-model="drawer" class="darken-2" dark disable-resize-watcher>
            <v-list>
                <template v-for="(item, index) in items">
                    <v-list-tile :key="index">
                        <v-list-tile-content>
                            <router-link class="drawer-link" :to="item.route">
                                {{item.title}}
                            </router-link>
                        </v-list-tile-content>
                    </v-list-tile>
                    <v-divider :key="`divider-${index}`"></v-divider>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app color="white darken-2" dark>
            <v-toolbar-side-icon light class="hidden-md-and-up" @click="drawer = !drawer" />
            <v-spacer class="hidden-md-and-up"></v-spacer>
            <v-img contain :src="images.logo" max-height="42px" max-width="40px" alt="Logo"></v-img>
            <router-link to="/">
                <v-toolbar-title class="half-em-space">{{appTitle}}</v-toolbar-title>
            </router-link>
            <v-spacer class="hidden-sm-and-down"></v-spacer>
            <div v-if="!isAuthenticated" class="hidden-sm-and-down">
                <v-btn flat color="primary" to="/login">Log In</v-btn>
                <v-btn color="primary lighten-3" to="/register">Register</v-btn>
            </div>
            <v-btn v-else outline color="primary" @click="logout">Log Out</v-btn>

        </v-toolbar>
    </span>
</template>

<script>
export default {
    name: 'Navigation',
    data() {
        return {
            appTitle: 'JobSimple',
            drawer: false,
            items: [
                { title: 'Log In', route: 'login' },
                { title: 'Register', route: 'register' }
            ],
            images: {
                logo: require('../assets/logo.4c97eb63.png')
            }
        };
    },
    computed: {
        isAuthenticated() {
            return this.$store.getters.isAuthenticated;
        }
    },
    methods: {
        logout() {
            this.$store.dispatch('logout');
        }
    }
};
</script>

<style scoped>
.half-em-space {
    margin-left: 0.5em;
}
a {
    color: black;
    text-decoration: none;
}
.drawer-link {
    color: white;
}
</style>