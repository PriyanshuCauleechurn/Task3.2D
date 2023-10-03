<script setup>

import { useRouter } from 'vue-router'

const router = useRouter()

const click = () => {
    router.push({
        path: 'SecondPage'
    })
}

</script>

<template>
    <div id="openingPage" v-on:click="click">
        <div class="waviy">
            <span style="--i:1"><strong>P</strong></span>
            <span style="--i:2"><strong>r</strong></span>
            <span style="--i:3"><strong>i</strong></span>
            <span style="--i:4"><strong>y</strong></span>
            <span style="--i:5"><strong>a</strong></span>
            <span style="--i:6"><strong>n</strong></span>
            <span style="--i:7"><strong>s</strong></span>
            <span style="--i:8"><strong>h</strong></span>
            <span style="--i:9"><strong>u</strong></span>
            <span style="--i:10"><strong>'</strong></span>
            <span style="--i:11"><strong>s</strong></span>
            <span style="--i:12"><strong>P</strong></span>
            <span style="--i:13"><strong>o</strong></span>
            <span style="--i:14"><strong>r</strong></span>
            <span style="--i:15"><strong>t</strong></span>
            <span style="--i:16"><strong>f</strong></span>
            <span style="--i:17"><strong>o</strong></span>
            <span style="--i:18"><strong>l</strong></span>
            <span style="--i:19"><strong>i</strong></span>
            <span style="--i:20"><strong>o</strong></span>
        </div>
        <br><br><br><br><br>
        <div class="openingContent">
            <p> A look into my projects and achievements in web development</p>
            <button>Start Reading</button>
        </div>
        
    </div>

</template>

