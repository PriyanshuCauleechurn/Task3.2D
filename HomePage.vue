<script setup>

import {ref} from 'vue'

const name = ref('')
const email = ref('')
const message = ref('')
const submitted = ref(false)

const submitForm = ()=>{
    submitted.value = true;
}


</script>

<template>
    <nav>
        <ul class="menu">
            <li class="item"><a href="#">Home</a></li>
            <li class="item"><a href="#bio">Bio</a></li>
            <li class="item"><a href="#creations">Creations</a></li>
            <li class="item"><a href="#Contact">Contact</a></li>
            <li class="item"><router-link to="/login">LoginPage</router-link></li>
            <li class="item"><router-link to="/register">RegisterPage</router-link></li>
            <li class="item"><router-link to="/blogs">Blog</router-link></li>
            <li class="toggle"><span class="bars"></span></li>
        </ul>
    </nav>

    <div id="scroller">
        <section id="bio">
            <div class="content">
                <h1 class="title">Bio</h1>
                <h1 class="title">Bio</h1>
            </div>
            <br><br><br><br><br><br>
            <p>Hey there internet surfer! And welcome to my website where I will be showcasing my newly learnt web development skills.</p>
            <p>After embarking in my computer science course at Deakin University in Australia, in my first semester I had to choose an elective unit.</p>
            <p>That's when I came upon the unit on responsive web development which immediately caught my attention.</p>
            <p>This journey has been without a doubt very enriching while difficult at times. But through it, I came to master the fundamentals of web programming using html, css and vuejs</p>
            <p>Let's look at some of my creations, shall we?</p>
        </section>
    
        <br>
    
        <section id="creations">
            <div class="content">
                <h1 class="title">My Creations</h1>
                <h1 class="title">My Creations</h1>
            </div>
            <br><br><br><br><br><br>
            <p>Till now, I have built a few websites but none of them were fully operational or up to the level. Apart from my one main project</p>
            <br><br><br>
            <div class="flexbox">
                <img src="../assets/photo1.png" width="400rem">
                <img src="../assets/photo2.png" width="400rem">
                <img src="../assets/photo3.png" width="400rem">
            </div>
            <br><br><br><br>
            <p>In this website, I created a website for my father's company. It is still fairly simple but reflects core concepts of html, css and vue.</p>
            <div class="ollist">
                <ol>
                    <li>It has a beautiful opening page made with CSS transitions.</li>
                    <li>It is responsive and adapts to different platforms and screen sizes.</li>
                    <li>The nav bar turns into a drop down box in smaller screen sizes.</li>
                    <li>It has a form which takes in feedbacks from users which can be saved in a database on the backend.</li>
                    <li>It has an automatic bot for any query the user might have.</li>
                    <li>The github repository for this website is available at </li>
                </ol>
            </div>
            
        </section>
        <section id="Contact">
            <div class="content">
                <h1 class="title">Contact Me</h1>
                <h1 class="title">Contact Me</h1>
            </div>
            <br><br>
            <div class="contactmethod">
                <p>You can contact me on the following: </p>
                <ul>
                    <li>Email: priyanshu110603@gmail.com</li>
                    <li>LinkedIn: Priyanshu Cauleechurn</li>
                </ul>
            </div>

            <div class="feedbackwrap">
                <form class="feedback" @submit.prevent="submitForm" method="POST">
                    <label for="name">Name:</label>
                    <input type="text" id="name" v-model="name" name="name" required><br><br>
        
                    <label for="email">Email:</label><br>
                    <input type="email" id="email" v-model="email" name="email" required><br><br>
        
                    <label for="message">Message:</label><br>
                    <textarea id="message" v-model="message" row="4" cols="50" name="message" required></textarea><br><br>
        
                    <button class="btn btn-primary" type="submit" name="submit">Submit</button>
                </form>
        
                <div v-if="submitted">
                    <p>Thank you for your feedback</p>
                </div>
            </div>
            
        </section>

        <footer class="footer">
            <div class="waves">
              <div class="wave" id="wave1"></div>
              <div class="wave" id="wave2"></div>
              <div class="wave" id="wave3"></div>
              <div class="wave" id="wave4"></div>
            </div>
            <div class="centericon">
                <ul class="social-icon">
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                      <i class="fa-brands fa-instagram"></i>
                      </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                      <i class="fa-brands fa-linkedin"></i>
                      </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <i class="fa-brands fa-github"></i>
                      </a></li>
                    <li class="social-icon__item"><a class="social-icon__link" href="#">
                        <i class="fa-brands fa-facebook"></i>
                      </a></li>
                  </ul>
            </div>
            
            
            <p>&copy;2023 Priyanshu Cauleechurn | All Rights Reserved</p>
        </footer>
        
    </div>
    

   

</template>