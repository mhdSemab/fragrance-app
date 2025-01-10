<!-- resources/views/admin/dashboard.blade.php -->
<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Admin Dashboard') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 text-gray-900">
                    <h3 class="text-lg font-medium mb-4">Welcome to Admin Dashboard</h3>
                    
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div class="bg-white p-6 rounded-lg shadow">
                            <h4 class="font-semibold mb-2">Properties</h4>
                            <p class="text-sm text-gray-600">Manage property listings</p>
                            <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800">View Properties →</a>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow">
                            <h4 class="font-semibold mb-2">Users</h4>
                            <p class="text-sm text-gray-600">Manage user accounts</p>
                            <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800">View Users →</a>
                        </div>

                        <div class="bg-white p-6 rounded-lg shadow">
                            <h4 class="font-semibold mb-2">Settings</h4>
                            <p class="text-sm text-gray-600">Configure system settings</p>
                            <a href="#" class="mt-4 inline-block text-blue-600 hover:text-blue-800">View Settings →</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>