<template>
  <nav
    :class="[
      'navbar',
      'fixed-top',
      'ps-md-4',
      'pe-md-4',
      {
        'navbar-transparent': !isScrolled,
        'bg-white shadow-navbar': isScrolled,
      },
    ]"
    :data-bs-theme="isHomePage && !isScrolled ? 'dark' : 'light'"
  >
    <div class="container-fluid">
      <button
        class="toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <Menu class="lucide" />
      </button>
      <router-link
        to="/"
        :class="[
          'navbar-brand',
          'mx-auto',
          'nav-link',
          { 'small-brand': isScrolled },
        ]"
      >
        <span class="fw-bold">moma.</span>
      </router-link>
      <button
        class="toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasSearch"
        aria-controls="offcanvasNavbar"
        aria-label="Toggle navigation"
      >
        <Search class="lucide" />
      </button>

      <div
        class="offcanvas offcanvas-start bg-black border-0 text-bg-dark p-4"
        data-bs-theme="dark"
        tabindex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div class="offcanvas-header">
          <button class="" data-bs-dismiss="offcanvas" aria-label="Close">
            <X class="lucide-dark" />
          </button>
        </div>
        <div class="offcanvas-body ps-4">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <li class="nav-item fs-2 fw-bold">
              <router-link to="/exhibition" class="nav-link text-white">
                Exhibition
              </router-link>
            </li>
            <li class="nav-item fs-2 fw-bold">
              <router-link to="/artists" class="nav-link text-white">
                Artists
              </router-link>
            </li>
            <li class="nav-item fs-2 fw-bold">
              <router-link to="/collection" class="nav-link text-white">
                Collection
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div
      class="offcanvas offcanvas-top bg-black text-bg-dark"
      data-bs-theme="dark"
      tabindex="-1"
      id="offcanvasSearch"
      aria-labelledby="offcanvasNavbarLabel"
    >
      <div class="offcanvas-header">
        <button
          type="button"
          class="btn-close btn-close-white"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div class="offcanvas-body">
        <form class="d-flex p-4" role="search">
          <input
            class="form-control me-2 border-0 border-bottom border-2 rounded-0 bg-transparent fs-4"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="lucide-dark" type="submit">
            <ChevronRight />
          </button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { Search, Menu, X, ChevronRight } from "lucide-vue-next";
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

const isScrolled = ref(false);
const route = useRoute();

const isHomePage = computed(() => route.path === "/");

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar {
  transition: background-color 0.3s ease, box-shadow 0.3s ease;
  padding-top: 0px;
  padding-bottom: 0px;
}

.navbar-transparent {
  background-color: transparent;
}

.shadow-navbar {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

.navbar-brand {
  font-size: 27px;
  transition: font-size 0.3s ease;
}

.small-brand {
  font-size: 24px;
}

/* Tambahkan style hover khusus untuk lucide saat tema gelap */
[data-bs-theme="dark"] .lucide:hover {
  color: #d9d9d9; /* Ganti dengan warna yang Anda inginkan */
}
</style>
