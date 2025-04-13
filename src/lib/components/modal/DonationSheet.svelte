<script lang="ts">
	import { writable, derived } from 'svelte/store';
	import { fly } from 'svelte/transition';

	let search = writable('');
	export let onClose: any;

	const donations = writable([
		{ name: 'Alice Johnson', amount: 200, date: '2024-03-10' },
		{ name: 'Bob Smith', amount: 150, date: '2024-03-12' },
		{ name: 'Charlie Lee', amount: 250, date: '2024-03-08' },
		{ name: 'David Kim', amount: 100, date: '2024-03-14' }
	]);

	const filteredDonations = derived([donations, search], ([$donations, $search]) => {
		return $donations.filter((d) => d.name.toLowerCase().includes($search.toLowerCase()));
	});
</script>

<div
	class="fixed top-0 right-0 h-full w-96 bg-white shadow-lg z-50"
	transition:fly={{ x: 300, duration: 300 }}
>
	<div class="p-4 flex justify-between items-center">
		<input
			type="text"
			placeholder="Search donor..."
			bind:value={$search}
			class="rounded border border-gray-100 p-2 w-2/3"
		/>
	</div>

	<div class="p-4 space-y-4 overflow-auto h-[calc(100%-56px)]">
		{#each $filteredDonations as donor (donor.name)}
			<div
				class="p-4 rounded-xl shadow bg-white hover:shadow-lg transition-shadow duration-200 flex justify-between items-center"
			>
				<div>
					<div class="text-lg font-medium text-gray-800">{donor.name}</div>
					<div class="text-sm text-gray-500">{donor.date}</div>
				</div>
				<div class="text-lg text-green-600 font-semibold">₱{donor.amount}</div>
			</div>
		{/each}
	</div>

	<button
		on:click={onClose}
		class="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full shadow-lg"
	>
		✕
	</button>
</div>
