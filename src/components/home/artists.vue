<template>
  <div class="container text-center">
    <p class="display-6 fw-medium mx-md-5">
      Since 1929, Moma has represented the most significant artists and estates
      of the 20th and 21st centuries.
    </p>
    <router-link :to="{ name: 'Artists' }">
      <p>View Artists</p>
    </router-link>
  </div>
</template>

<style scoped></style>
