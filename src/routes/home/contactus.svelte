<script>
    let formData = {
        name: '',
        email: '',
        message: ''
    };

    function submitForm() {
        alert(`Thank you, ${formData.name}! We have received your message.`);
        formData = { name: '', email: '', message: '' }; 
    }
</script>

<section class="bg-light-yellowish1 py-16 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">        

        <div class="sm:px-8">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
            <p class="text-gray-600 text-sm md:text-base mb-6">
                Have any questions? Reach out to us, and we’ll be happy to help!
            </p>

            <div class="mb-6 text-gray-700 space-y-4">
                <div class="flex items-center space-x-3">
                    <i class="fas fa-phone-alt text-yellowish4 text-lg md:text-xl"></i>
                    <p class="text-sm md:text-lg font-medium">+6391234567890</p>
                </div>
                <div class="flex items-center space-x-3">
                    <i class="fas fa-envelope text-yellowish4 text-lg md:text-xl"></i>
                    <p class="text-sm md:text-lg font-medium">tspteam@gmail.com</p>
                </div>
                <div class="flex items-center space-x-3">
                    <i class="fas fa-map-marker-alt text-yellowish4 text-lg md:text-xl"></i>
                    <p class="text-sm md:text-lg font-medium">123 Location Location</p>
                </div>
            </div>

            <!-- Contact Form -->
            <div class="rounded-lg p-6">
                <form on:submit|preventDefault={submitForm} class="grid grid-cols-1 gap-4">
                    <input 
                        type="text" 
                        placeholder="Your Name" 
                        class="border border-yellowish4 rounded-lg p-2 md:p-3 w-full focus:ring focus:ring-transparent text-sm md:text-base"
                        bind:value={formData.name}
                        required
                    />
                    <input 
                        type="email" 
                        placeholder="Your Email" 
                        class="border border-yellowish4 rounded-lg p-2 md:p-3 w-full focus:ring focus:ring-transparent text-sm md:text-base"
                        bind:value={formData.email}
                        required
                    />
                    <textarea 
                        placeholder="Your Message" 
                        rows="4"
                        class="border border-yellowish4 rounded-lg p-2 md:p-3 w-full focus:ring focus:ring-transparent text-sm md:text-base"
                        bind:value={formData.message}
                        required
                    ></textarea>
                    <button 
                        type="submit" 
                        class="bg-yellowish4 text-white font-semibold py-2 md:py-3 rounded-lg shadow-md hover:bg-yellowish5 transition text-sm md:text-base"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>

        <!-- Google Map -->
        <div class="w-full h-[250px] md:h-[350px] rounded-lg shadow-lg overflow-hidden">
            <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d27594.955050682107!2d121.143296!3d14.2344192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1739698795714!5m2!1sen!2sph" class="w-full h-full" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</section>
