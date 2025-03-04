<script>
    import { onMount } from 'svelte';
    
    let showTopDonors = false;

    onMount(() => {
        setTimeout(() => {
            showTopDonors = true;
        }, 100);
    });

    export let story;
</script>

<div 
    class="bg-white p-4 rounded-lg shadow-md"
>
    <h3 class="text-lg font-semibold text-gray-800 mb-3">🌟 Top Donors 🌟</h3>
    <ul class="space-y-2">
        {#each story.donors.slice(0, 3) as donor, i}
            <li 
                class="flex justify-between items-center bg-gray-50 p-3 rounded-md shadow-sm transform transition-all duration-500 ease-in-out"
                style="transition-delay: {i * 200}ms;" 
                class:translate-x-0={showTopDonors} class:-translate-x-10={!showTopDonors}
            >
                <span class="text-md font-medium text-gray-700">{donor.name}</span>
                <span class="text-lg font-bold text-green-600">₱{donor.amount}</span>
            </li>
        {/each}
    </ul>

    <a 
        href="/all-donations" 
        class="block w-full text-center mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
    >
        See More Donations
    </a>

    <p class="text-center text-gray-600 mt-3 text-sm">
        Want to see your name here? <span class="text-blue-600 font-semibold cursor-pointer">Donate now!</span>
    </p>
</div>
