<template>
    <div class="py-2">
        <div class="container flex justify-between items-center mx-auto">
            <router-link to="/" class="text-3xl  font-bold">
                Text Based Adventure
            </router-link>
            <nav class="flex justify-end gap-2 w-1/4">
                <button class="btn">
                    <router-link to="/"> Home </router-link>
                </button>
                <button class="btn">
                    <router-link to="game"> New Game </router-link>
                </button>
                <button class="btn">
                    <router-link to="editor">Create Game</router-link>
                </button>
                <button class="btn">
                    <router-link to="SignIn">
                        Log In
                    </router-link>
                </button>
            </nav>
        </div>
    </div>
</template>