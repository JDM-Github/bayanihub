<script lang="ts">
	export let onClose: () => void;
	export let onDonate: (donorName: string, donationAmount: string, message: string) => void;

	let donorName = '';
	let message = '';
	let selectedAmount = '100';
	let customAmount = '';

	const presetAmounts = ['100', '500', '1000', '5000'];

	function handlePresetSelect(amount: string) {
		selectedAmount = amount;
		customAmount = '';
	}

	function handleCustomInput() {
		selectedAmount = '';
	}

	function submitDonation() {
		const donationAmount = selectedAmount || customAmount;

		if (!donationAmount || Number(donationAmount) < 1) {
			alert('Please enter a valid donation amount (minimum ₱1).');
			return;
		}

		onDonate(donorName, donationAmount, message);
		onClose();
	}
</script>

<div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
	<div class="bg-yellowish rounded-lg shadow-lg w-[90%] max-w-md p-6 relative">
		<button
			type="button"
			class="absolute top-3 right-3 text-gray-600 hover:text-red-500 transition"
			on:click={onClose}
			aria-label="Close donation form"
		>
			&times;
		</button>

		<h2 class="text-2xl font-bold text-gray-800 text-center mb-4">Make a Donation</h2>

		<form on:submit|preventDefault={submitDonation} class="space-y-5">
			<div>
				<label for="donorName" class="block text-sm font-medium text-gray-700">Your Name</label>
				<input
					type="text"
					id="donorName"
					bind:value={donorName}
					required
					placeholder="Enter your name"
					class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-transparent border-yellowish3 focus:outline-none"
				/>
			</div>

			<div>
				<label class="block text-sm font-medium text-gray-700">Donation Amount (₱)</label>
				<div class="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
					{#each presetAmounts as amount}
						<button
							type="button"
							class={`p-2 border rounded-md text-center ${selectedAmount === amount ? 'bg-yellowish3 text-white' : 'bg-yellowish1 hover:bg-yellowish2'}`}
							on:click={() => handlePresetSelect(amount)}
						>
							₱{amount}
						</button>
					{/each}
					<button
						type="button"
						class={`p-2 border rounded-md text-center ${selectedAmount === '' ? 'bg-yellowish3 text-white' : 'bg-yellowish1 hover:bg-yellowish2'}`}
						on:click={() => handlePresetSelect('')}
					>
						Other
					</button>
				</div>

				{#if selectedAmount === ''}
					<div class="mt-2">
						<input
							type="number"
							min="1"
							bind:value={customAmount}
							placeholder="Enter custom amount"
							on:input={handleCustomInput}
							class="w-full p-2 border rounded-md focus:ring focus:ring-transparent focus:outline-none border-yellowish3"
						/>
						<p class="text-xs text-gray-500 mt-1">Minimum donation amount: ₱1</p>
					</div>
				{:else}
					<p class="text-sm text-gray-600 mt-2">Selected amount: <strong>₱{selectedAmount}</strong></p>
				{/if}
			</div>

			<div>
				<label for="message" class="block text-sm font-medium text-gray-700">Message (Optional)</label>
				<textarea
					id="message"
					bind:value={message}
					rows="3"
					placeholder="Leave a message for the cause"
					class="w-full mt-1 p-2 border rounded-md focus:ring focus:ring-transparent focus:outline-none border-yellowish3"
				></textarea>
			</div>

			<div class="flex justify-end space-x-3">
				<button
					type="button"
					on:click={onClose}
					class="px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400 transition"
				>
					Cancel
				</button>
				<button
					type="submit"
					class="px-4 py-2 bg-yellowish3 text-white font-medium rounded-md hover:bg-yellowish4 transition"
				>
					Donate Now
				</button>
			</div>
		</form>
	</div>
</div>
