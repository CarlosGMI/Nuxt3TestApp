<template>
  <div class="loader">Loading...</div>
</template>

<style scoped>
.loader,
.loader:before,
.loader:after {
  background: theme('colors.blue');
  -webkit-animation: loading 1s infinite ease-in-out;
  animation: loading 1s infinite ease-in-out;
  width: 1em;
  height: 4em;
}

.loader {
  color: theme('colors.blue');
  text-indent: -9999em;
  margin: 88px auto;
  position: relative;
  font-size: 11px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

.loader:before,
.loader:after {
  position: absolute;
  top: 0;
  content: '';
}

.loader:before {
  left: -1.5em;
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.loader:after {
  left: 1.5em;
}

@-webkit-keyframes loading {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}

@keyframes loading {
  0%,
  80%,
  100% {
    box-shadow: 0 0;
    height: 4em;
  }

  40% {
    box-shadow: 0 -2em;
    height: 5em;
  }
}
</style>
