<script setup lang="ts">
    import {io} from "socket.io-client";
    interface message {
        user:{
            name:string;
        },
        message:string
    }
    const {id} = useRoute().params;
    const {name} = useUserObj().value;
    const socket = io('http://localhost:8080/')
    const messages = ref<Array<message>>([])
    const message = ref<string>("");
    const loggedIn = ref(false);
    console.log(name);
    if (name != null) {
        loggedIn.value = true;
    } 
    onBeforeMount( () => {
        socket.emit('findAllMessages',{},(response:[]) => {
            messages.value = response
        })
        socket.on('message',(message:message) => {
            console.log(message);
            messages.value.push(message);
        })
    })
    function sendMessage() {
        socket.emit('createMessage',{name,message:message.value},(response:[]) => {
        })
    }
</script>
<template>
    <div class="container mx-auto">
        <h1 class="text-center font-bold text-lg py-4">Live Stream Session: {{ id }}</h1>
        <div class="rounded-lg border-2 h-[80svh]">
        </div>
        <div class="">
            <p>Product:</p>
        </div>
        <div class="">
            <p>Number of Viewers: </p>
            <div>
                <p class="font-bold">Chats:</p>
                <div v-if="loggedIn">
                    <!-- <input type="text" placeholder="Name" /> -->
                    <input v-model="message" class="border-2 mr-2" type="text" placeholder="Message" />
                    <button @click="sendMessage" class="px-4 py-1 border-2">Send</button>
                </div>
                <div v-else>
                    <p>Please Log In to Comment</p>
                </div>
                <div>
                    <div class="flex" v-for="message in messages">
                        <p>{{ message.user.name }}: </p> 
                        <p>{{ message.message }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>