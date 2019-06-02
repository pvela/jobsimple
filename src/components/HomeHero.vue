<template>
    <v-container fluid fill-height class="home-hero" style="max-height: 100vh;">
        <v-layout justify-center align-center column pa-5>
            <div class="display-4 font-weight-black black--text text-xs-center">
                <h1>JobSimple</h1>
                <v-img contain class="logo" :src="images.logo" alt="JobSimple"></v-img>
            </div>
            <div class="display-1 font-weight-bold black--text text-xs-center">
                Find your next job / Hire a worker
            </div>
            <v-btn fab class="mt-5 blue darken-4">
                <v-icon large color="white">expand_more</v-icon>
            </v-btn>
            <div class="btns">
                <router-link class="btns__user" to="/worker">
                    <div large class="btns__user__box" style="background-color: rgb(0, 123, 255)">
                        <span class="btns__user__subtitle">Looking for a job?</span><br>
                        <span class="btns__user__label">Worker</span>
                    </div>
                </router-link>
                &nbsp;
                <router-link class="btns__user" to="/sponsor">
                    <div large class="btns__user__box" style="background-color: rgb(40, 167, 69)">
                        <span class="btns__user__subtitle">Need to hire someone?</span><br>
                        <span class="btns__user__label">Sponsor</span>
                    </div>
                </router-link>
            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'HomeHero',
    data() {
        return {
            images: {
                logo: require('../assets/logo_jobsimple.4c97eb63.png')
            }
        };
    },
    methods: {
        next() {
            console.log("next");
        }
    }
};
</script>

<style scoped>
.home-hero {
    background-size: cover;
    width: 100%;
    height: 100%;
}

h1 {
    border: 1px solid black;
    visibility: hidden;
}

.logo {
    margin: -2em 0 0.25em 0;
    max-height: 91px;
}

.v-btn {
    min-width: 0;
}

.btns {
  /*border: 1px solid black;*/
    width: 100%;
}

.btns__user {
    display: inline-flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin: 32px;
    text-align: center;
    width: 40%;
}

.btns__user__subtitle {
    display: inline-block;
    font-size: 1.5em;
    margin-top: 2em;
}

.btns__user__label {
    display: inline-block;
    font-size: 3.2em;
    font-weight: 700;
}

.btns__user__box {
    border-radius: 6px;
    color: #FFF;
    height: 200px;
}

.cls {
    font-size: 2.5em;
    font-weight: 700;
}
</style>