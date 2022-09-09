<template>
    <div class="intro-y flex items-center mt-8">
        <h2 class="text-lg font-medium mr-auto">Form pengaduan masyarakat</h2>
    </div>
    <div class="grid grid-cols-12 gap-6 mt-5">
        <div class="intro-y col-span-12 lg:col-span-6">
            <PreviewComponent class="intro-y box mt-5" v-slot="{ toggle }">
                <div class="flex flex-col sm:flex-row items-center p-5 border-b border-slate-200/60 dark:border-darkmode-400">
                    <h2 class="font-medium text-base mr-auto">Form pengaduan</h2>
                    <div class="form-check form-switch w-full sm:w-auto sm:ml-auto mt-3 sm:mt-0">
                    </div>
                </div>
                <div class="p-5">
                    <div class="form-inline">
                        <label for="horizontal-form-1" class="form-label sm:w-20">Nama</label>
                        <input id="horizontal-form-1" type="text" class="form-control" placeholder="example@gmail.com" />
                    </div>
                    <div class="form-inline mt-5">
                        <label for="horizontal-form-2" class="form-label sm:w-20">Lokasi kerusakan</label>
                        <input id="horizontal-form-2" type="password" class="form-control" placeholder="secret" />
                    </div>
                    <div class="form-inline mt-5">
                        <label for="horizontal-form-2" class="form-label sm:w-20">Keterangan</label>
                        <input id="horizontal-form-2" type="password" class="form-control" placeholder="secret" />
                    </div>
                    <div class="form-inline mt-5">
                        <label for="horizontal-form-2" class="form-label sm:w-20">Gambar</label>
                        <input id="horizontal-form-2" type="file" class="form-control"/>
                    </div>
                    <div class="sm:ml-20 sm:pl-5 mt-5">
                        <button class="btn btn-primary">Kirim</button>
                    </div>
                </div>
            </PreviewComponent>
        </div>
    </div>
</template>