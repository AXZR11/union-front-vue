<template>
    <div class="flex flex-col justify-center font-display mx-3">
        <div class="text-white w-20px">
            <div class="flex justify-between py-6 mx-4">
                <div class="flex">
                    <img @click="goToMain" class="w-[60px] h-[60px] rounded-full" 
                         src="./icons/arrow.svg" alt="">
                    <div class="flex flex-col pt-[0.625rem] mt-1 pl-3">
                        <h1 class="text-dark-green font-display font-semibold text-2xl">О нас</h1>
                    </div>
                </div>
                <div class="mt-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                    <img src="../../public/logo.png" alt="" class="">
                </div>
            </div>
        </div>

        <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

        <div class="flex flex-col justify-center mx-4">
            <div class="py-4">
                <h1 class="text-2xl font-semibold text-dark-green">
                    Профсоюз
                </h1>
            </div>
            <div>
                <div class="flex h-[145px] max-[375px]:h-[160px] max-[350px]:h-[175px]  mb-4 bg-green rounded-lg">
                    <div class="w-[35%] overflow-hidden rounded-lg">
                        <img src="../../public/about1.jpg" class="w-full h-full object-cover bg-white">
                    </div>
                    <div class="flex flex-col justify-center px-2 w-[65%]">
                        <span class="text-white text-center text-xs">
                            <b>Профсоюз </b>- это объединение работников, работающих на одном предприятии. Они объединяются, чтобы совместными усилиями добиваться наилучших условий труда и его оплаты.
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

        <div class="flex flex-col justify-center mx-4">
            <div class="py-4">
                <h1 class="text-2xl font-semibold text-dark-green">
                    Зачем нам профсоюз?
                </h1>
            </div>
            <div>
                <div class="flex h-[145px] max-[375px]:h-[160px] max-[350px]:h-[175px] mb-4 bg-green rounded-lg">
                    <div class="w-[35%] overflow-hidden rounded-lg">
                        <img src="../../public/about2.jpg" class="w-full h-full object-cover bg-white">
                    </div>
                    <div class="flex flex-col justify-center px-2 w-[65%]">
                        <span class="text-white text-center text-xs">
                            <b>Профсоюз</b> сегодня является единственной организацией, имеющей право по закону и способной на деле представлять интересы и защищать права работников. 
                        </span>
                    </div>
                </div>
            </div>
        </div>

        <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

        <div class="flex flex-col justify-center mx-4">
            <div class="py-4">
                <h1 class="text-2xl font-semibold text-dark-green">
                    Задача профсоюза?
                </h1>
            </div>
            <div>
                <div class="flex h-[145px] max-[375px]:h-[160px] max-[350px]:h-[175px] mb-4 bg-green rounded-lg">
                    <div class="w-[35%] overflow-hidden rounded-lg">
                        <img src="../../public/about3.jpg" class="w-full h-full object-cover bg-white">
                    </div>
                    <div class="flex flex-col justify-center px-2 w-[65%]">
                        <span class="text-white text-center text-xs">
                            Главная задача <b>профсоюза</b> в условиях рыночной экономики - защита трудовых, социально-экономических, духовных прав и интересов членов профсоюза.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'About',
    methods: {
        goToMain() {
            this.$router.push('/');
        }
    }
}
</script>