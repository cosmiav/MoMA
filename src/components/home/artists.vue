<template>
  <div class="container text-center my-md-5">
    <h1 class="fw-medium mx-md-5 d-none d-md-block">
      Since 1929, Moma has represented the most significant artists and estates
      of the 20th and 21st centuries.
    </h1>
    <h5 class="fw-medium mx-md-5 d-md-none">
      Since 1929, Moma has represented the most significant artists and estates
      of the 20th and 21st centuries.
    </h5>
    <router-link :to="{ name: 'Artists' }" class="d-block my-4 my-md-5">
      <p>View Artists</p>
    </router-link>
  </div>
</template>

<style scoped>
a:link {
  color: #111111;
  text-decoration: underline;
}

a:visited {
  color: #585858;
}

a:hover {
  color: #282828;
  text-decoration: underline;
}
</style>
