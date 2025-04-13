<!-- ----------------------------------------------------------------- -->
<!-- SCRIPT -->
<!-- ----------------------------------------------------------------- -->
<script lang="ts">
	import type { FeaturedDonorInterface } from "$lib/types";
    export let donor: FeaturedDonorInterface;
</script>


<!-- ----------------------------------------------------------------- -->
<!-- SECTION -->
<!-- ----------------------------------------------------------------- -->
<section class="py-8 bg-white text-yellowish4 text-center">
    <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-2xl font-bold">Thank You to Our Amazing Donors!</h2>
        <p class="mt-1 text-base">Your generosity is making a real impact. Together, we’re changing lives.</p>

        <blockquote class="mt-4 italic text-sm md:text-base"> 
            "{donor.qoute}"  
            <span class="font-semibold block mt-2">– {donor.name}</span>
        </blockquote>
    </div>
</section>
