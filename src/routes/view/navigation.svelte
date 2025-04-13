<script lang="ts">
    export let gotoSection: (link: string) => void;
</script>

<div class="bg-yellowish2 p-3 rounded-lg shadow-sm sticky top-0 z-10">
	<nav class="flex justify-center space-x-16 text-yellowish5 text-xs md:text-sm font-medium">
		<button
			class="flex flex-col items-center space-y-1 group"
			on:click={() => gotoSection('support')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 group-hover:text-gray-800 transition"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M12 8c-2.209 0-4 1.791-4 4v4h8v-4c0-2.209-1.791-4-4-4z"
				/>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 12a6 6 0 1112 0v4H6v-4z"
				/>
			</svg>
			<span class="group-hover:text-gray-800 transition">Support</span>
		</button>

		<button
			class="flex flex-col items-center space-y-1 group"
			on:click={() => gotoSection('story')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 group-hover:text-gray-800 transition"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
				/>
			</svg>
			<span class="group-hover:text-gray-800 transition">Story</span>
		</button>

		<button
			class="flex flex-col items-center space-y-1 group"
			on:click={() => gotoSection('progress')}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 group-hover:text-gray-800 transition"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16m-7 6h7"
				/>
			</svg>
			<span class="group-hover:text-gray-800 transition">Progress</span>
		</button>
	</nav>
</div>
