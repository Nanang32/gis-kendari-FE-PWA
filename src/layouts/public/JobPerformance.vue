<template>
    <div class="bg-gray-50 py-6">
        <Navbar />
        <div class="xl:container mx-auto px-3 sm:px-4 xl:px-2">
            <div class="flex flex-row flex-wrap">
                <!-- Left -->
                <div class="flex-shrink max-w-full w-full lg:w-3/3 mt-10 overflow-hidden">
                    <div class="w-full py-3">
                        <h2 class="text-gray-800 text-3xl font-bold">
                            <span class="inline-block h-5 border-l-3 border-red-600 mr-2"></span>Kinerja pekerjaan
                        </h2>
                    </div>
                    <div class="flex flex-row flex-wrap -mx-3">
                        <div class="flex-shrink max-w-full w-full px-3 pb-5">
                            <div class="relative hover-img max-h-full overflow-scroll">
                                <div class="intro-y block sm:flex items-center h-10 mb-3">
                                    <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500 rounded-lg border">
                                        <select class="form-select mt-2 sm:mr-2">
                                            <option>--Pilih salah satu--</option>
                                            <option value="Nasional tol">2022</option>
                                            <option value="Nasional non tol">2023</option>
                                            <option value="Provinsi">2024</option>
                                            <option value="Kabupaten/Kota">2025</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="intro-y box p-5 mt-2">
                                    <!-- component -->
                                    <div class="py-16 bg-white">
                                        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                                            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                                                <div class="md:7/12 lg:w-12/12">
                                                    <div class="flex flex-col">
                                                        <h2 class="mb-4 text-2xl font-bold capitalize">Bidang pelaksanaan jaringan pemanfaatan air</h2>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-bold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Irigasi</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-emerald-600">1823 </h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Bendung</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-blue-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Air Baku</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-none">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-3xl text-center text-green-600">574 <a class="text-2xl">On Going 2022</a></h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Persiapan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-emerald-600">1823</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Pelaksanaan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-blue-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Selesai</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-orange-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500 ">Tanpa status</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="border-b border-black mt-5"></div>
                                                    <div class="flex flex-col mt-5">
                                                        <h2 class="mb-4 text-2xl font-bold capitalize">Bidang pelaksanaan jaringan sumber air</h2>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-bold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Normalisasi sungai</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="ont-semibold text-2xl text-emerald-600">1823</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Pengaman pantai</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-blue-600">548 </h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Bronjong/Talud/DLL</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-none">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-3xl text-center text-green-600">574 <a class="text-2xl">On Going 2022</a></h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Persiapan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-emerald-600">1823</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Pelaksanaan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-blue-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Selesai</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-orange-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500 ">Tanpa status</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="border-b border-black mt-5"></div>

                                                    <div class="flex flex-col mt-5">
                                                        <h2 class="mb-4 text-2xl font-bold capitalize">Bidang bina marga</h2>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Jalan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-green-600">1823</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Jembatan</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-none">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                               
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-3xl text-center text-green-600">574 <a class="text-2xl">On Going 2022</a></h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-yellow-600">574</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Persiapan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-emerald-600">1823</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Pelaksanaan</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-blue-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500">Selesai</p>
                                                                </div>
                                                            </div>
                                                            <div class="flex items-start rounded-xl bg-white p-4 shadow-lg">
                                                                <div class="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                    </svg>
                                                                </div>
                                                                <div class="ml-4">
                                                                    <h2 class="font-semibold text-2xl text-orange-600">548</h2>
                                                                    <p class="mt-2 text-sm text-gray-500 ">Tanpa status</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="intro-y box col-span-12 lg:col-span-6 mt-5">
                                <div class="flex items-center px-5 py-5 sm:py-3 border-b border-slate-200/60 dark:border-darkmode-400">
                                    <h2 class="font-medium text-base mr-auto">Laporan kinerja (LAKIP)</h2>
                                </div>
                                <div class="p-5">
                                    <div class="flex items-center">
                                        <div class="overflow-y-auto rounded-lg border shadow-2xl">
                                        <table class="table table-hover">
                                            <thead class="table-dark">
                                                <tr>
                                                    <th class="whitespace-nowrap">Nama berkas</th>
                                                    <th class="whitespace-nowrap">Tanggal upload</th>
                                                    <th class="whitespace-nowrap text-center">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td class="whitespace-nowrap">Laporan kinerja LAKIP 2022
                                                    </td>
                                                    <td class="whitespace-nowrap">1 jan 2022</td>
                                                    <td class="whitespace-nowrap">
                                                        <button class="btn btn-sm btn-primary w-24 m-2">
                                                            <EyeIcon class="w-4 h-4 mr-2" /> Lihat
                                                        </button>
                                                        <button class="btn btn-sm btn-success w-24 text-white">
                                                            <DownloadIcon class="w-4 h-4 mr-2" /> Unduh
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script setup>
import "./theme.js";
import "./scripts.js";
import Navbar from "../../components/navbar-menu/Main.vue";
import Footer from "../../components/footer-public/Main.vue";
import hcSticky from "hc-sticky";
import glightbox from "glightbox";
import splide from "@splidejs/splide";
// import splideExtensionVideo from "@splidejs/splide-extension-video";
</script>
<style>
@import "./style.css";
</style>