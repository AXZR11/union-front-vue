<template>
    <div class="flex flex-col justify-center font-display mx-3">
        <div class="text-white w-20px">
            <div class="flex justify-between py-6 mx-4">
                <div class="flex">
                    <img @click="goToMain" class="w-[60px] h-[60px] rounded-full" 
                         src="./icons/arrow.svg" alt="">
                    <div class="flex flex-col pt-[0.625rem] mt-1 pl-3">
                        <h1 class="text-dark-green font-display font-semibold text-2xl">Контакты</h1>
                    </div>
                </div>
                <div class="mt-1 cursor-pointer w-12 h-12 rounded-full flex justify-center">
                    <img src="../../public/logo.png" alt="" class="">
                </div>
            </div>
        </div>

        <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

        <div class="flex flex-col justify-center mx-4 py-6">
            <div class="flex justify-between h-[65px] text-white bg-green mb-4 rounded-lg">
                <div class="flex flex-col justify-center pb-[2px] pl-2">
                    <span class="max-[350px]:text-[15px] font-semibold">
                        Губарь Л.Н.
                    </span>
                    <span class="max-[350px]:text-[10px] text-xs font-thin">
                        Председатель
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="max-[375px]:text-[10px] text-[12px] px-[2px] py-[8px] bg-dark-green rounded-[8px]">
                        +7(912)863-68-78
                    </button>
                    <a href="https://vk.com/im?media=&sel=119978193" class="max-[350px]:text-[12px] text-[14px] px-[2px] py-[6px] mx-2 bg-dark-green rounded-[8px]">
                        Написать
                    </a>
                </div>
            </div>
            <div class="flex justify-between h-[65px] text-white bg-green rounded-lg">
                <div class="flex flex-col justify-center pb-[2px] pl-2">
                    <span class="max-[350px]:text-[14px] font-semibold">
                        Павлова Н.И.
                    </span>
                    <span class="max-[350px]:text-[10px] text-xs font-thin">
                        Председатель
                    </span>
                </div>
                <div class="flex items-center justify-center">
                    <button class="max-[375px]:text-[10px] text-[12px] px-[2px] py-[8px] bg-dark-green rounded-[8px]">
                        +7(904)223-76-20
                    </button>
                    <a href="https://vk.com/im?media=&sel=3847040" class="max-[350px]:text-[12px] text-[14px] px-[2px] py-[6px] mx-2 bg-dark-green rounded-[8px]">
                        Написать
                    </a>
                </div>
            </div>
        </div>

        <hr class="mx-4 rounded-full border-[0.5px] border-green border-opacity-[30%]">

        <div class="flex flex-col justify-center mx-4">
            <div class="py-4">
                <h1 class="text-xl font-semibold text-dark-green">
                    Кабинеты
                </h1>
            </div>
            <div class="flex justify-between">
                <div class="w-[47%] flex flex-col pl-3 pr-10 py-3 text-white bg-green rounded-lg">
                    <span class="text-[16px] font-semibold">
                        Губарь <br> Л.Н.
                    </span>
                    <span class="text-xs font-thin">
                        Председатель
                    </span>
                    <span class="text-sm">
                        Адрес: <br>
                        Октябрьский <br>
                         пр-кт, 55
                    </span>
                    <span class=" pt-2 text-[24px] font-bold">
                        228/230
                    </span>
                </div>
                <div class="w-[47%] flex flex-col pl-3 pr-10 py-3 text-white bg-green rounded-lg">
                    <span class="text-[16px] font-semibold">
                        Павлова <br> Н.И.
                    </span>
                    <span class="text-xs font-thin">
                        Заместитель
                    </span>
                    <span class="text-sm">
                        Адрес: <br>
                        Октябрьский <br>
                         пр-кт, 55
                    </span>
                    <span class="pt-2 text-[24px] font-bold">
                        341
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Contacts',
    methods: {
        goToMain() {
            this.$router.push('/');
        }
    }
}
</script>
