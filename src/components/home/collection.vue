<template>
  <div class="card text-bg-dark border-0 rounded-0">
    <div class="image-wrapper">
      <img
        src="https://images.unsplash.com/photo-1514905552197-0610a4d8fd73?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        class="card-img img-fluid border-0 rounded-0"
        alt="..."
      />
      <div class="dark-overlay"></div>
    </div>
    <div class="overlay">
      <div
        class="card-img-overlay d-flex flex-row align-items-center justify-content-start text-center text-md-start ms-md-5"
      >
        <div>
          <h1 class="card-title fw-bold d-none d-md-block">
            Modernism Explored
          </h1>
          <h2 class="card-title fw-bold d-md-none">Modernism Explored</h2>
          <!--des-->
          <h4 class="card-text my-3 fw-medium d-none d-md-block">
            Journey through the history of modernism, featuring works that
            defined the movement.
          </h4>
          <p
            class="card-text my-3 fw-medium d-md-none"
            style="line-height: 1.2"
          >
            Journey through the history of modernism, featuring works that
            defined the movement.
          </p>
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
  position: relative; /* Agar overlay bisa ditumpuk di atas gambar */
  height: 400px; /* Atur tinggi maksimal */
  overflow: hidden; /* Sembunyikan bagian gambar yang melebihi container */
  display: flex;
  align-items: center; /* Gambar akan di tengah secara vertikal */
  justify-content: center; /* Gambar akan di tengah secara horizontal */
}

.image-wrapper img {
  height: 100%; /* Gambar akan menyesuaikan tinggi container */
  width: 100%; /* Lebar akan menyesuaikan secara proporsional */
  object-fit: cover; /* Gambar akan dipotong agar menutupi container */
}

.dark-overlay {
  position: absolute; /* Posisi overlay absolut di dalam .image-wrapper */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3); /* Warna overlay dengan transparansi */
}

@media (max-width: 768px) {
  .image-wrapper {
    height: 300px; /* Kurangi tinggi pada layar kecil */
  }
}
</style>
