<script lang="ts">
	import type { PageProps } from "./$types";

    const {data}: PageProps = $props()
</script>

<section class="p-4 space-y-4">
    <span class="block">/ user</span>
    <div class="border p-2 space-y-4">
        <h1 class="text-6xl">Mohammed <br /> Al-Ameen</h1>
        <div class="flex items-center gap-x-2 divide-x">
            <span class="text-md block pr-3">Software Engineer</span>
            <span class="text-md block pr-3">Open Source Contributor</span>
            <span class="text-md block">Passive Game Developer</span>
        </div>
    </div>
    
    <span class="block">/ links</span>

    <div>
        <a href="http://github.com/struckchure" target="_blank" class="p-2 border hover:bg-[rgba(0,0,0,0.25)]">
            Github
        </a>

        <a href="http://x.com/struckchure" target="_blank" class="p-2 border hover:bg-[rgba(0,0,0,0.25)]">
            X
        </a>

        <a href="http://linkedin.com/in/struckchure" target="_blank" class="p-2 border hover:bg-[rgba(0,0,0,0.25)]">
            LinkedIn
        </a>

        <a href="http://instagram.com/struckchure.me" target="_blank" class="p-2 border hover:bg-[rgba(0,0,0,0.25)]">
            Instagram
        </a>

        <a href="http://tiktok.com/@struckchure" target="_blank" class="p-2 border hover:bg-[rgba(0,0,0,0.25)]">
            TikTok
        </a>
    </div>

    <span class="block">/ projects</span>

    <div class="space-y-2">
        {#each data.projects as project}
            <a href={project.link} target="_blank" class="p-2 border block hover:bg-[rgba(0,0,0,0.25)] space-y-2">
                <h4>{project.name}</h4>
                <p class="text-sm text-gray-400">{project.description}</p>

                <div class="space-x-2">
                    {#each project.tools as tool}
                        <span class="p-1 border text-xs">{tool}</span>
                    {/each}
                </div>
            </a>
        {/each}
    </div>

    <span class="block">/ contact</span>

    <form class="flex flex-col gap-2">
        <input class="border p-2" placeholder="Name" />
        <input class="border p-2" placeholder="Email" type="email" />
        <textarea class="border p-2" placeholder="Would you be free to play Call of Duty this weekend?"></textarea>
        <button class="border w-fit py-2 px-4">Ping!</button>
    </form>
</section>
