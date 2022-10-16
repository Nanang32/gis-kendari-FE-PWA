<template>
    <div class="intro-y news  p-5 box m-8">
        <!-- BEGIN: Blog Layout -->
        <div class="intro-y mt-6">
            <div class="news__preview image-fit">
                <img alt="Enigma Tailwind HTML Admin Template" class="object-cover" src="@/assets/images/tugasfungsi.png" />
            </div>
        </div>
        <div class="intro-y text-justify leading-relaxed">
            <h1 class="font-medium text-xl sm:text-2xl  text-center">Tugas pokok</h1>
            <p class="mb-5">{{ $f()[1].news[0].content }}</p>
            <h1 class="font-medium text-xl sm:text-2xl  text-center">Fungsi</h1>
            <p class="mb-5">{{ $f()[2].news[0].content }}</p>
            <h1 class="font-medium text-xl sm:text-2xl  text-center">Wewenang</h1>
            <p>{{ $f()[3].news[0].content }}</p>
        </div>
    </div>
</template>