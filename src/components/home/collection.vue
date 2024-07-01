<template>
  <div class="card text-bg-dark border-0 rounded-0">
    <div class="image-wrapper">
      <img
        src="https://www.moma.org/d/p/sa/Picasso-Ringgold_503_032_final-new%20crop.jpg"
        class="card-img img-fluid border-0 rounded-0"
        alt="..."
      />
    </div>
    <div class="overlay">
      <div
        class="card-img-overlay d-flex align-items-center justify-content-start ms-5"
      >
        <div>
          <h1 class="card-title fw-medium">Modernism Explored</h1>
          <h4 class="card-text my-3 fw-light">
            Journey through the history of modernism, featuring works that
            defined the movement.
          </h4>
          <p class="card-text">
            <router-link
              :to="{ name: 'Collection' }"
              class="btn btn-outline-light px-4 py-2 rounded-0 mt-4"
            >
              Explore More
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-wrapper {
  max-height: 400px;
  width: auto;
  height: auto;
  object-fit: contain;
}
.card-img-overlay {
  right: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}
</style>
