<script>
    import { onMount } from "svelte";

    let showTestimonials = false;

    onMount(() => {
        setTimeout(() => {
            showTestimonials = true;
        }, 300);
    });

    export let story;
</script>

<div class="bg-yellowish2 p-6 rounded-lg shadow-md">
    <h3 class="text-xl font-semibold text-gray-800 mb-4">Testimonials</h3>
    <ul class="space-y-4">
        {#each story.testimonials as testimonial, i}
            <li 
                class="border-l-4 border-yellowish3 pl-4 bg-yellowish p-4 rounded-md shadow-sm transform transition-all duration-700 ease-in-out opacity-0"
                style="transition-delay: {i * 200}ms; transform: translateX({showTestimonials ? '0px' : '-40px'}); opacity: {showTestimonials ? '1' : '0'};"
            >
                <p class="text-gray-700 italic">“{testimonial.quote}”</p>
                <span class="text-sm font-semibold text-gray-600">— {testimonial.name}</span>
            </li>
        {/each}
    </ul>
</div>

