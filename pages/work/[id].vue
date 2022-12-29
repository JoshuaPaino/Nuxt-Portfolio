<template>
  <div>
    <Head>
      <Title>Joshua | {{ info }}</Title>
      <!-- <Meta name="description" :content="project.description" /> -->
    </Head>

    <section class="h-full w-full py-20 mb-2">
      <div class="container mx-auto px-4">
        <div class="items-center flex flex-wrap">
          <div class="w-full md:w-4/12 ml-auto mr-auto px-4">
            <img
              alt="..."
              class="max-w-full rounded-lg shadow-lg"
              src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"
            />
          </div>
          <div class="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div class="md:pr-12">
              <div
                class="p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-800 dark:bg-white"
              >
                <Icon name="logos:react" class="cardLogo" />
              </div>
              <h3 class="text-3xl font-semibold">Project Name</h3>
              <p class="mt-4 text-lg leading-relaxed text-gray-600">
                Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem
                Ipsum is Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is
                Lorem Ipsum Lorem Ipsum is Lorem Ipsum Lorem Ipsum is Lorem
                Ipsum
              </p>
              <ul class="list-none mt-6 mb-6">
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 dark:bg-white mr-3"
                        ><Icon name="logos:tailwindcss-icon" class="cardLogo"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600 dark:text-gray-800">
                        Styling with Tailwind
                      </h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 dark:bg-white mr-3"
                        ><Icon name="logos:tailwindcss-icon" class="cardLogo"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Deployment</h4>
                    </div>
                  </div>
                </li>
                <li class="py-2">
                  <div class="flex items-center">
                    <div>
                      <span
                        class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-gray-800 dark:bg-white mr-3"
                        ><Icon name="logos:tailwindcss-icon" class="cardLogo"
                      /></span>
                    </div>
                    <div>
                      <h4 class="text-gray-600">Dynamic components</h4>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="flex gap-2">
                <button-overlay>View Live</button-overlay>
                <button-overlay>Visit Git</button-overlay>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- 
    Projects details for {{ info }} -->
  </div>
</template>

<script setup>
const id = useRoute().params;
const info = await $fetch("/api/projects");

// if (!project.id) {
//   throw createError({ statusCode: 404, StatusMessage: "Project not found" });
// }
</script>
