<script lang="ts">
	import { onMount } from 'svelte';
	import '../app.css';

	onMount(() => {
		const cursor = document.createElement('div');
		cursor.classList.add('custom-cursor');
		document.body.appendChild(cursor);

		document.addEventListener('mousemove', (e) => {
			cursor.style.left = `${e.clientX}px`;
			cursor.style.top = `${e.clientY}px`;
		});

		document.addEventListener('mousedown', () => {
			cursor.style.transform = "translate(-50%, -50%) scale(1.5)";
		});

		document.addEventListener('mouseup', () => {
			cursor.style.transform = "translate(-50%, -50%) scale(1)";
		});
	});

	let { children } = $props();
</script>

<svelte:head>
	<meta name="author" content="Mohammed Al-Ameen">
	<meta name="description" content="Mohammed Al-Ameen | Software Engineer, Open Source Contributor, Passive Game Developer. Connect with me on GitHub, X, LinkedIn, Instagram, and TikTok.">
	<meta name="keywords" content="Mohammed Al-Ameen, Software Engineer, Open Source, Game Developer, GitHub, LinkedIn, X, Instagram, TikTok">
	
	<!-- Open Graph Meta Tags (For Facebook, LinkedIn, etc.) -->
	<meta property="og:title" content="Mohammed Al-Ameen">
	<meta property="og:description" content="Software Engineer | Open Source Contributor | Passive Game Developer. Follow me on social media.">
	<meta property="og:url" content="https://struckchure.com"> <!-- Replace with your actual website URL -->
	<meta property="og:type" content="website">
	
	<!-- Social Profile Links -->
	<meta property="og:see_also" content="https://github.com/struckchure">
	<meta property="og:see_also" content="https://x.com/struckchure">
	<meta property="og:see_also" content="https://linkedin.com/in/struckchure">
	<meta property="og:see_also" content="https://instagram.com/struckchure.me">
	<meta property="og:see_also" content="https://tiktok.com/@struckchure">
	
	<!-- Twitter/X Meta Tags -->
	<meta name="twitter:card" content="summary">
	<meta name="twitter:title" content="Mohammed Al-Ameen">
	<meta name="twitter:description" content="Software Engineer | Open Source Contributor | Passive Game Developer. Connect with me online.">
	<meta name="twitter:site" content="@struckchure">
	
	<title>Mohammed Al-Ameen | Software Engineer</title>
</svelte:head>

{@render children()}
