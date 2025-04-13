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

<nav class="bg-yellowish2 shadow-md px-8 md:px-16 lg:px-16 py-2 flex justify-between items-center sticky top-0 z-50">
    <div class="flex items-center border border-yellowish2 rounded-2xl px-2 bg-yellowish shadow-sm">
        <input
            type="text"
            bind:value={searchQuery}
            placeholder="Search..."
            class="bg-transparent outline-none w-full px-2 text-gray-700 placeholder-gray-500"
        />
        <button
            class="text-yellowish4 px-4 py-2 rounded-full hover:text-yellowish5 transition cursor-pointer"
            aria-label="Search"
        >
            <i class="fas fa-search"></i>
        </button>
    </div>

    <div class="hidden md:flex items-center space-x-6">
        <a href="/" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            <img src="/Icon/home.png" alt="Home Icon" class="w-8 h-8" />
            <span>Home</span>
        </a>
        <a href="/stories" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/stories' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            <img src="/Icon/story.png" alt="Story Icon" class="w-8 h-8" />
            <span>Stories</span>
        </a>
        <a href="/about" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/about' ? 'text-blue-600 font-bold border-blue-600' : ''}">
            <img src="/Icon/about.png" alt="About Icon" class="w-8 h-8" />
            <span>About</span>
        </a>
        <div class="font-bold text-lg text-yellowish4">BAYANIHUB</div>
    </div>

    <button
        class="md:hidden text-gray-700 focus:outline-none cursor-pointer"
        on:click={() => isMenuOpen = !isMenuOpen}
        aria-label="Toggle Menu"
    >
        <i class="fas fa-bars text-xl"></i>
    </button>

    {#if isMenuOpen}
        <div class="absolute top-16 right-4 bg-white shadow-md rounded-lg p-4 flex flex-col space-y-4 md:hidden">
            <a href="/" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                <img src="/Icon/home.png" alt="Home Icon" class="w-5 h-5" />
                <span>Home</span>
            </a>
            <a href="/stories" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/stories' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                <i class="fas fa-book-open"></i>
                <span>Stories</span>
            </a>
            <a href="/about" class="flex items-center space-x-2 text-gray-700 hover:text-blue-500 font-medium transition border-b-2 border-transparent {activePath === '/about' ? 'text-blue-600 font-bold border-blue-600' : ''}">
                <i class="fas fa-info-circle"></i>
                <span>About</span>
            </a>
        </div>
    {/if}
</nav>
