<template>
  <div class="videoWrapper">
  <iframe
    src="https://www.youtube.com/embed/dQw4w9WgXcQ?start=45&autoplay=1" 
    frameborder="0" 
    allowfullscreen></iframe>
  </div>
</template>

<style>
.videoWrapper {
	position: relative;
	padding-bottom: 56.25%; /* 16:9 */
	padding-top: 25px;
	height: 0;
}
.videoWrapper iframe {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
</style>
