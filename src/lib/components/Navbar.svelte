<script lang="ts">
    import '@fortawesome/fontawesome-free/css/all.min.css';
    import { onMount } from 'svelte';

    let searchQuery = '';
    let isMenuOpen = false;
    let activePath = '';

    onMount(() => {
        activePath = window.location.pathname;
    });
</script>

<nav class="bg-white shadow-md px-8 md:px-16 lg:px-16 py-2 flex justify-between items-center sticky top-0 z-50">
    <!-- SEARCH BAR -->
    <div class="flex items-center border border-white rounded-2xl px-2 bg-white shadow-sm">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search..."
            class="bg-transparent outline-none w-full px-2 text-gray-700 placeholder-gray-500"
        />
        <button
            class="text-gray-600 px-4 py-2 rounded-full hover:text-blue-500 transition"
            aria-label="Search"
        >
            <i class="fas fa-search"></i>
        </button>
    </div>

    <!-- NAVIGATION -->
    <div class="hidden md:flex items-center space-x-6">
        <a href="/" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            Home
        </a>
        <a href="/stories" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/stories' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            Stories
        </a>
        <a href="/about" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/about' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            About
        </a>
        <div class="font-bold text-lg text-blue-600">BAYANIHUB</div>
    </div>

    <!-- MOBILE MENU TOGGLE -->
    <button
        class="md:hidden text-gray-700 focus:outline-none"
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label="Toggle Menu"
    >
        <i class="fas fa-bars text-xl"></i>
    </button>

    <!-- MOBILE DROPDOWN MENU -->
    {#if isMenuOpen}
        <div class="absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden">
            <a href="/" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                Home
            </a>
            <a href="/stories" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/stories' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                Stories
            </a>
            <a href="/about" class="text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/about' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                About
            </a>
        </div>
    {/if}
</nav>
