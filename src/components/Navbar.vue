<script>
import Homepage from "./Homepage.vue";
import Events from "./Events.vue";
import AboutUs from "./AboutUs.vue";
import Alumni from "./Alumni.vue";
import Library from "./Library.vue";
import Contactus from "./ContactUs.vue";
import Course from "./Courses.vue";
import Patnership from "./Patnership.vue";

</script>

<template>
    <v-app-bar color="blue">
        <div>
            <v-btn to="/" color="#333333" dark><strong>Home</strong></v-btn>
        </div>
        <div>
            <v-btn to="/events" color="#333333" dark>events</v-btn>
        </div>
        <div>
            <v-btn to="/courses" color="white" dark>courses</v-btn>
        </div>
        <div>
            <v-btn to="/library" color="white" dark>library</v-btn>
        </div>
        <div>
            <v-btn to="/contactus" color="white" dark>contactus</v-btn>
        </div>
        <div>
            <v-btn to="/alumni" color="white" dark>alumni</v-btn>
        </div>
        <div>
            <v-btn to="/aboutus" color="white" dark>aboutus</v-btn>
        </div>
        <div>
            <v-btn to="/partnership" color="white" dark>partnership</v-btn>
        </div>
    </v-app-bar>
</template>