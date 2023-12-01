<script setup lang="ts">
        const userObj = useUserObj().value;
        const isLoggedIn = ref(false);
        console.log(userObj.name );
        if (userObj.name) {
            console.log("this is called");  
            isLoggedIn.value = true;
        }
        const name = ref("");
        function login() {
            useUserObj().value = {name:name.value};
            isLoggedIn.value = true;
        }
</script>
<template>
    <div class="container mx-auto">
        <div class="text-center py-4 font-bold ">
            Cart and Tell Live Streaming Prototype
        </div>
        <div>
            <button class="px-4 py-2 font-bold border-2">Start Live Stream</button>
        </div>
        <div>
            <p class="my-4">Number of livestreams: </p>
            <NuxtLink to="/1">
                <button class="px-4 py-2 font-bold border-2">Watch LiveStreams</button>
            </NuxtLink>
        </div>
        <div v-if="!isLoggedIn" class="flex gap-4 my-4">
            <p>Enter name:</p>
            <input v-model="name" class="border-2" type="text">
            <button @click="login" class="login">login</button>
        </div>
    </div>
</template>